import { Scenario, ScenarioOption } from "@/data/scenarios";
import { CrisisEvent, CrisisOption } from "@/data/crisisEvents";

export type Resources = {
  trust: number;
  politicalCapital: number;
  time: number;
};

export type GameState = {
  roleId: string;
  currentScenarioId: string | null;
  resources: Resources;
  negativeHistory: Record<string, number>;
  completedScenarios: string[];
  completedCrises: string[];
  selectedOptionIndex: number | null;
  selectedOption: ScenarioOption | null;
  actualImpacts: Resources;
  multiplier: number;
  gameOver: boolean;
  gameOverReason: "trust" | "politicalCapital" | "time" | null;
  turnCount: number;
  maxTurns: number;
  // Crisis system
  activeCrisis: CrisisEvent | null;
  lastCrisisOption: CrisisOption | null;
};

// Initial values
export const INITIAL_RESOURCES: Resources = {
  trust: 70,
  politicalCapital: 50,
  time: 100
};

export const MIN_RESOURCE = 0;
export const MAX_RESOURCE = 100;
export const DEFAULT_MAX_TURNS = 15;
export const TIME_DECAY_PER_TURN = 3; // Time decreases each turn
export const CRISIS_CHANCE = 0.20; // 20% chance per turn

/**
 * Initialize game state
 */
export function initializeGame(roleId: string, maxTurns: number = DEFAULT_MAX_TURNS): GameState {
  return {
    roleId,
    currentScenarioId: null,
    resources: { ...INITIAL_RESOURCES },
    negativeHistory: {},
    completedScenarios: [],
    completedCrises: [],
    selectedOptionIndex: null,
    selectedOption: null,
    actualImpacts: { trust: 0, politicalCapital: 0, time: 0 },
    multiplier: 1,
    gameOver: false,
    gameOverReason: null,
    turnCount: 0,
    maxTurns,
    activeCrisis: null,
    lastCrisisOption: null
  };
}

/**
 * Select next scenario using simple random selection
 */
export function selectNextScenario(
  scenarios: Scenario[],
  gameState: GameState
): Scenario | null {
  const availableScenarios = scenarios.filter(
    (s) => s.roleId === gameState.roleId && !gameState.completedScenarios.includes(s.id)
  );

  if (availableScenarios.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * availableScenarios.length);
  return availableScenarios[randomIndex];
}

/**
 * Calculate multiplier based on repeated bad choices
 */
export function calculateMultiplier(scenarioId: string, negativeHistory: Record<string, number>): number {
  const badChoiceCount = negativeHistory[scenarioId] || 0;

  if (badChoiceCount === 0) {
    return 1.0;
  }

  return Math.pow(1.25, badChoiceCount - 1);
}

/**
 * Generate resource impacts based on trustImpact
 * Logic: 
 * - Time can only decrease or stay the same (never increases)
 * - Good choices: gain trust, cost more time
 * - Bad choices: lose trust, cost less time but still costs
 */
export function generateImpacts(trustImpact: number, isNegative: boolean): Resources {
  if (isNegative) {
    // Bad choices: lose trust, minimal time cost, might gain political favors
    const timeCost = -Math.floor(Math.random() * 3); // 0 to -2 (minimal cost for bad choices)
    const pcChange = Math.floor(Math.random() * 10) - 2; // -2 to +7
    return {
      trust: trustImpact,
      politicalCapital: pcChange,
      time: timeCost
    };
  } else if (trustImpact > 0) {
    // Good choices: gain trust, but costs time and maybe political capital
    const timeCost = -Math.floor(trustImpact * 0.8 + Math.random() * 5); // Always negative
    const pcCost = trustImpact > 5 ? -Math.floor(Math.random() * 8) - 2 : Math.floor(Math.random() * 5) - 2;
    return {
      trust: trustImpact,
      politicalCapital: pcCost,
      time: timeCost
    };
  } else {
    // Neutral choices: small time cost
    const timeCost = -Math.floor(Math.random() * 3); // 0 to -2
    return {
      trust: 0,
      politicalCapital: Math.floor(Math.random() * 6) - 2,
      time: timeCost
    };
  }
}

/**
 * Apply multiplier to impacts
 */
function applyMultiplier(impacts: Resources, multiplier: number, isNegative: boolean): Resources {
  if (!isNegative || multiplier === 1) {
    return impacts;
  }

  return {
    trust: Math.round(impacts.trust * multiplier),
    politicalCapital: impacts.politicalCapital, // No multiplier on PC
    time: impacts.time // No multiplier on time
  };
}

/**
 * Clamp resource value between min and max
 */
function clampResource(value: number): number {
  return Math.max(MIN_RESOURCE, Math.min(MAX_RESOURCE, value));
}

/**
 * Check if any resource is depleted
 */
function checkGameOver(resources: Resources): { isOver: boolean; reason: "trust" | "politicalCapital" | "time" | null } {
  if (resources.trust <= MIN_RESOURCE) {
    return { isOver: true, reason: "trust" };
  }
  if (resources.politicalCapital <= MIN_RESOURCE) {
    return { isOver: true, reason: "politicalCapital" };
  }
  if (resources.time <= MIN_RESOURCE) {
    return { isOver: true, reason: "time" };
  }
  return { isOver: false, reason: null };
}

/**
 * Process a player choice and update game state
 */
export function processChoice(
  gameState: GameState,
  scenario: Scenario,
  optionIndex: number
): GameState {
  const option = scenario.options[optionIndex];

  // Calculate multiplier
  const multiplier = option.isNegative 
    ? calculateMultiplier(scenario.id, gameState.negativeHistory) 
    : 1;

  // Generate impacts based on trustImpact
  const baseImpacts = generateImpacts(option.trustImpact, option.isNegative);
  const finalImpacts = applyMultiplier(baseImpacts, multiplier, option.isNegative);

  // Update negative history
  const newNegativeHistory = { ...gameState.negativeHistory };
  if (option.isNegative) {
    newNegativeHistory[scenario.id] = (newNegativeHistory[scenario.id] || 0) + 1;
  }

  // Calculate new resources
  const newResources: Resources = {
    trust: clampResource(gameState.resources.trust + finalImpacts.trust),
    politicalCapital: clampResource(gameState.resources.politicalCapital + finalImpacts.politicalCapital),
    time: clampResource(gameState.resources.time + finalImpacts.time)
  };

  // Check game over
  const { isOver, reason } = checkGameOver(newResources);

  return {
    ...gameState,
    selectedOptionIndex: optionIndex,
    selectedOption: option,
    actualImpacts: finalImpacts,
    multiplier,
    resources: newResources,
    negativeHistory: newNegativeHistory,
    gameOver: isOver,
    gameOverReason: reason
  };
}

/**
 * Process a crisis choice
 */
export function processCrisisChoice(
  gameState: GameState,
  crisis: CrisisEvent,
  optionIndex: number
): GameState {
  const option = crisis.options[optionIndex];
  const impacts = option.impacts;

  // Calculate new resources
  const newResources: Resources = {
    trust: clampResource(gameState.resources.trust + impacts.trust),
    politicalCapital: clampResource(gameState.resources.politicalCapital + impacts.politicalCapital),
    time: clampResource(gameState.resources.time + impacts.time)
  };

  // Update completed crises
  const completedCrises = [...gameState.completedCrises, crisis.id];

  // Check game over
  const { isOver, reason } = checkGameOver(newResources);

  return {
    ...gameState,
    resources: newResources,
    completedCrises,
    activeCrisis: null,
    lastCrisisOption: option,
    actualImpacts: impacts,
    gameOver: isOver,
    gameOverReason: reason
  };
}

/**
 * Check if a crisis should trigger (20% chance)
 */
export function shouldTriggerCrisis(gameState: GameState, crisisEvents: CrisisEvent[]): boolean {
  // Only after turn 2 to give player some time
  if (gameState.turnCount < 2) return false;
  
  // Check if we have available crises
  const availableCrises = crisisEvents.filter(c => !gameState.completedCrises.includes(c.id));
  if (availableCrises.length === 0) return false;

  return Math.random() < CRISIS_CHANCE;
}

/**
 * Select a random crisis event
 */
export function selectCrisis(gameState: GameState, crisisEvents: CrisisEvent[]): CrisisEvent | null {
  const availableCrises = crisisEvents.filter(c => !gameState.completedCrises.includes(c.id));
  
  if (availableCrises.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * availableCrises.length);
  return availableCrises[randomIndex];
}

/**
 * Move to next scenario with time decay
 */
export function nextScenario(
  gameState: GameState,
  scenarios: Scenario[]
): GameState {
  // Mark current scenario as completed
  const completedScenarios = gameState.currentScenarioId
    ? [...gameState.completedScenarios, gameState.currentScenarioId]
    : gameState.completedScenarios;

  // Increment turn count
  const newTurnCount = gameState.turnCount + 1;

  // Apply time decay
  const newTime = clampResource(gameState.resources.time - TIME_DECAY_PER_TURN);
  const newResources = { ...gameState.resources, time: newTime };

  // Check if time ran out
  const { isOver: timeOver, reason: timeReason } = checkGameOver(newResources);
  if (timeOver) {
    return {
      ...gameState,
      completedScenarios,
      turnCount: newTurnCount,
      resources: newResources,
      gameOver: true,
      gameOverReason: timeReason
    };
  }

  // Select next scenario
  const nextScenarioObj = selectNextScenario(scenarios, {
    ...gameState,
    completedScenarios
  });

  // Check if game should end
  const shouldEnd = !nextScenarioObj || newTurnCount >= gameState.maxTurns;

  return {
    ...gameState,
    currentScenarioId: nextScenarioObj?.id || null,
    completedScenarios,
    turnCount: newTurnCount,
    resources: newResources,
    selectedOptionIndex: null,
    selectedOption: null,
    actualImpacts: { trust: 0, politicalCapital: 0, time: 0 },
    multiplier: 1,
    gameOver: shouldEnd,
    activeCrisis: null,
    lastCrisisOption: null
  };
}

/**
 * Get evaluation text based on final resources
 */
export function getEvaluation(resources: Resources): {
  title: string;
  description: string;
} {
  const { trust, politicalCapital, time } = resources;
  const avgScore = (trust + politicalCapital + time) / 3;

  if (avgScore >= 70) {
    return {
      title: "Lãnh đạo xuất sắc",
      description: "Bạn đã cân bằng tuyệt vời giữa niềm tin nhân dân, vốn chính trị và quản lý thời gian. Đây là tấm gương cho cán bộ noi theo."
    };
  } else if (avgScore >= 50) {
    return {
      title: "Hoàn thành nhiệm vụ",
      description: "Bạn đã duy trì được cân bằng các nguồn lực. Còn nhiều việc cần cải thiện nhưng tổng thể vẫn ổn định."
    };
  } else if (avgScore >= 30) {
    return {
      title: "Nhiều thách thức phía trước",
      description: "Một số quyết định chưa hợp lý đã gây khó khăn. Cần rút kinh nghiệm và điều chỉnh phong cách lãnh đạo."
    };
  } else {
    return {
      title: "Cần cải tổ căn bản",
      description: "Nguồn lực đã cạn kiệt nghiêm trọng. Cần thay đổi toàn diện cách tiếp cận và ra quyết định."
    };
  }
}

/**
 * Get game over message based on reason
 */
export function getGameOverMessage(reason: "trust" | "politicalCapital" | "time" | null): {
  title: string;
  description: string;
} {
  switch (reason) {
    case "trust":
      return {
        title: "Mất lòng tin nhân dân",
        description: "Những quyết định sai lầm liên tiếp đã phá vỡ mối liên kết với nhân dân. Khi niềm tin hoàn toàn mất đi, chính quyền không còn có thể lãnh đạo hiệu quả."
      };
    case "politicalCapital":
      return {
        title: "Cô lập chính trị",
        description: "Bạn đã mất hết vốn chính trị và bị cô lập trong hệ thống. Không còn ai ủng hộ hay phối hợp với bạn."
      };
    case "time":
      return {
        title: "Hết thời gian nhiệm kỳ",
        description: "Thời gian đã hết mà nhiều việc quan trọng chưa được hoàn thành. Nhiệm kỳ kết thúc trong dang dở."
      };
    default:
      return {
        title: "Game Over",
        description: "Trò chơi kết thúc."
      };
  }
}

/**
 * Get statistics for final result screen
 */
export function getStatistics(gameState: GameState): {
  totalDecisions: number;
  badDecisions: number;
  goodDecisions: number;
  crisesHandled: number;
  multiplierUsed: boolean;
} {
  const totalBadChoices = Object.values(gameState.negativeHistory).reduce(
    (sum, count) => sum + count,
    0
  );

  return {
    totalDecisions: gameState.turnCount,
    badDecisions: totalBadChoices,
    goodDecisions: gameState.turnCount - totalBadChoices,
    crisesHandled: gameState.completedCrises.length,
    multiplierUsed: totalBadChoices > 0
  };
}

// Legacy compatibility
export const INITIAL_TRUST = INITIAL_RESOURCES.trust;
export const MIN_TRUST = MIN_RESOURCE;
export const MAX_TRUST = MAX_RESOURCE;
