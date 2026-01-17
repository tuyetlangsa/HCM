"use client";

import { useState } from "react";
import { scenarios, roles } from "@/data/scenarios";
import { crisisEvents } from "@/data/crisisEvents";
import {
  GameState,
  initializeGame,
  processChoice,
  processCrisisChoice,
  nextScenario,
  selectNextScenario,
  shouldTriggerCrisis,
  selectCrisis
} from "@/lib/gameEngine";
import RoleSelection from "./RoleSelection";
import StartScreen from "./StartScreen";
import ScenarioCard from "./ScenarioCard";
import ResultScreen from "./ResultScreen";
import CrisisScreen from "./CrisisScreen";
import CrisisResultScreen from "./CrisisResultScreen";
import GameOver from "./GameOver";
import FinalResult from "./FinalResult";
import ResourceBar from "./ResourceBar";

type GamePhase = "roleSelection" | "start" | "scenario" | "result" | "crisis" | "crisisResult" | "gameover" | "final";

export default function GameContainer() {
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [phase, setPhase] = useState<GamePhase>("roleSelection");

  const handleRoleSelect = (roleId: string) => {
    setSelectedRoleId(roleId);
    setPhase("start");
  };

  const handleGameStart = () => {
    if (!selectedRoleId) return;
    
    const newGameState = initializeGame(selectedRoleId);
    
    // Select first scenario
    const firstScenario = selectNextScenario(scenarios, newGameState);
    if (firstScenario) {
      newGameState.currentScenarioId = firstScenario.id;
      newGameState.turnCount = 1;
    }
    
    setGameState(newGameState);
    setPhase("scenario");
  };

  const handleSelectOption = (optionIndex: number) => {
    if (!gameState || !gameState.currentScenarioId) return;

    const currentScenario = scenarios.find(s => s.id === gameState.currentScenarioId);
    if (!currentScenario) return;

    const newGameState = processChoice(gameState, currentScenario, optionIndex);
    setGameState(newGameState);

    // Check if game over
    if (newGameState.gameOver) {
      setPhase("gameover");
    } else {
      setPhase("result");
    }
  };

  const handleCrisisOption = (optionIndex: number) => {
    if (!gameState || !gameState.activeCrisis) return;

    const newGameState = processCrisisChoice(gameState, gameState.activeCrisis, optionIndex);
    setGameState(newGameState);

    if (newGameState.gameOver) {
      setPhase("gameover");
    } else {
      setPhase("crisisResult");
    }
  };

  const handleNext = () => {
    if (!gameState) return;
    
    // Check for crisis trigger (20% chance)
    if (shouldTriggerCrisis(gameState, crisisEvents)) {
      const crisis = selectCrisis(gameState, crisisEvents);
      if (crisis) {
        setGameState({ ...gameState, activeCrisis: crisis });
        setPhase("crisis");
        return;
      }
    }

    const newGameState = nextScenario(gameState, scenarios);
    setGameState(newGameState);

    // Check if game ended
    if (newGameState.gameOver || !newGameState.currentScenarioId) {
      if (newGameState.gameOverReason) {
        setPhase("gameover");
      } else {
        setPhase("final");
      }
    } else {
      setPhase("scenario");
    }
  };

  const handleCrisisNext = () => {
    if (!gameState) return;

    const newGameState = nextScenario(gameState, scenarios);
    setGameState(newGameState);

    if (newGameState.gameOver || !newGameState.currentScenarioId) {
      if (newGameState.gameOverReason) {
        setPhase("gameover");
      } else {
        setPhase("final");
      }
    } else {
      setPhase("scenario");
    }
  };

  const handleRestart = () => {
    setSelectedRoleId(null);
    setGameState(null);
    setPhase("roleSelection");
  };

  // Render based on phase
  if (phase === "roleSelection") {
    return <RoleSelection onSelectRole={handleRoleSelect} />;
  }

  if (phase === "start") {
    const role = roles.find(r => r.id === selectedRoleId);
    return <StartScreen onStart={handleGameStart} role={role} />;
  }

  if (!gameState) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Đang tải...</p>
      </div>
    );
  }

  if (phase === "gameover") {
    return (
      <GameOver
        gameState={gameState}
        onRestart={handleRestart}
      />
    );
  }

  if (phase === "final") {
    const role = roles.find(r => r.id === selectedRoleId);
    return <FinalResult gameState={gameState} role={role} onRestart={handleRestart} />;
  }

  const currentScenario = scenarios.find(s => s.id === gameState.currentScenarioId);
  const role = roles.find(r => r.id === selectedRoleId);

  return (
    <div className="min-h-screen bg-linear-to-b from-red-900 via-red-800 to-red-950 p-6">
      {/* Header with Resource Bar */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Giữ Niềm Tin Nhân Dân</h1>
            {role && (
              <p className="text-yellow-300 text-sm mt-1">
                {role.icon} {role.name}
              </p>
            )}
          </div>
        </div>
        <ResourceBar 
          resources={gameState.resources} 
          turnCount={gameState.turnCount} 
          maxTurns={gameState.maxTurns} 
        />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {phase === "scenario" && currentScenario && (
          <ScenarioCard
            scenario={currentScenario}
            onSelectOption={handleSelectOption}
          />
        )}

        {phase === "result" && currentScenario && gameState.selectedOption && (
          <ResultScreen
            scenario={currentScenario}
            selectedOption={gameState.selectedOption}
            actualImpacts={gameState.actualImpacts}
            multiplier={gameState.multiplier}
            resources={gameState.resources}
            role={role}
            onNext={handleNext}
            isLastTurn={gameState.turnCount >= gameState.maxTurns}
          />
        )}

        {phase === "crisis" && gameState.activeCrisis && (
          <CrisisScreen
            crisis={gameState.activeCrisis}
            onSelectOption={handleCrisisOption}
          />
        )}

        {phase === "crisisResult" && gameState.lastCrisisOption && (
          <CrisisResultScreen
            crisisOption={gameState.lastCrisisOption}
            actualImpacts={gameState.actualImpacts}
            resources={gameState.resources}
            onNext={handleCrisisNext}
          />
        )}
      </div>
    </div>
  );
}
