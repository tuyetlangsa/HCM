"use client";

import { GameState, getGameOverMessage, Resources } from "@/lib/gameEngine";

interface GameOverProps {
  gameState: GameState;
  onRestart: () => void;
}

function getBarColor(value: number): string {
  if (value >= 60) return "bg-green-500";
  if (value >= 30) return "bg-yellow-500";
  return "bg-red-500";
}

function ResourceDisplay({ resources, failedResource }: { resources: Resources; failedResource: string | null }) {
  const getHighlight = (type: string) => {
    return failedResource === type ? "ring-2 ring-red-500" : "";
  };

  return (
    <div className="space-y-3">
      <div className={`p-2 rounded ${getHighlight("trust")}`}>
        <div className="flex justify-between text-sm text-gray-700 mb-1">
          <span>👥 Niềm tin nhân dân</span>
          {failedResource === "trust" && <span className="text-red-600 font-bold">CẠN KIỆT!</span>}
        </div>
        <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all ${getBarColor(resources.trust)}`}
            style={{ width: `${Math.max(resources.trust, 0)}%` }}
          />
        </div>
      </div>
      <div className={`p-2 rounded ${getHighlight("politicalCapital")}`}>
        <div className="flex justify-between text-sm text-gray-700 mb-1">
          <span>🏛️ Vốn chính trị</span>
          {failedResource === "politicalCapital" && <span className="text-red-600 font-bold">CẠN KIỆT!</span>}
        </div>
        <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all ${getBarColor(resources.politicalCapital)}`}
            style={{ width: `${Math.max(resources.politicalCapital, 0)}%` }}
          />
        </div>
      </div>
      <div className={`p-2 rounded ${getHighlight("time")}`}>
        <div className="flex justify-between text-sm text-gray-700 mb-1">
          <span>⏱️ Thời gian còn lại</span>
          {failedResource === "time" && <span className="text-red-600 font-bold">HẾT GIỜ!</span>}
        </div>
        <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all ${getBarColor(resources.time)}`}
            style={{ width: `${Math.max(resources.time, 0)}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function GameOver({ gameState, onRestart }: GameOverProps) {
  const { resources, gameOverReason, turnCount } = gameState;
  const message = getGameOverMessage(gameOverReason);

  const getIcon = () => {
    switch (gameOverReason) {
      case "trust": return "😔";
      case "politicalCapital": return "🏚️";
      case "time": return "⏰";
      default: return "❌";
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-red-900 to-red-700 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center text-white">
        <div className="text-8xl mb-4">{getIcon()}</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Game Over</h1>
        
        <div className="bg-white bg-opacity-95 backdrop-blur rounded-lg p-8 mb-8 text-left">
          <h2 className="text-2xl font-semibold mb-4 text-red-800 text-center">{message.title}</h2>
          
          {/* Resource Display */}
          <div className="mb-6">
            <ResourceDisplay resources={resources} failedResource={gameOverReason} />
          </div>

          <div className="bg-red-50 rounded p-6 mb-6">
            <p className="text-base leading-relaxed text-gray-700">
              Sau <strong>{turnCount}</strong> tình huống, {message.description}
            </p>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 rounded p-4 mb-6">
            <p className="text-lg font-semibold text-red-900">
              &ldquo;Lãnh đạo là nghệ thuật cân bằng - mất một nguồn lực có thể kéo sụp tất cả.&rdquo;
            </p>
          </div>

          <div className="bg-gray-100 rounded p-4 text-sm">
            <h3 className="font-bold mb-2 text-gray-900">Bài học rút ra:</h3>
            <ul className="space-y-1 text-gray-700">
              {gameOverReason === "trust" && (
                <>
                  <li>• Niềm tin nhân dân là nền tảng - mất nó là mất tất cả</li>
                  <li>• Quyết định ngắn hạn có thể gây hậu quả dài hạn</li>
                  <li>• Không thể đánh đổi niềm tin để lấy lợi ích khác</li>
                </>
              )}
              {gameOverReason === "politicalCapital" && (
                <>
                  <li>• Vốn chính trị giúp bạn thực thi quyết định</li>
                  <li>• Cô lập trong hệ thống là con đường ngắn nhất đến thất bại</li>
                  <li>• Cần xây dựng và duy trì quan hệ tốt với đồng nghiệp</li>
                </>
              )}
              {gameOverReason === "time" && (
                <>
                  <li>• Thời gian là nguồn lực quý giá nhất</li>
                  <li>• Làm đúng cũng cần làm kịp thời</li>
                  <li>• Quản lý thời gian hiệu quả là kỹ năng lãnh đạo quan trọng</li>
                </>
              )}
              <li>• Mỗi nguồn lực đều quan trọng - cần cân bằng</li>
              <li>• Khủng hoảng là phép thử cho năng lực lãnh đạo</li>
            </ul>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="bg-white text-red-900 font-bold py-4 px-12 rounded-lg text-xl hover:bg-red-50 transition-colors shadow-lg"
        >
          Chơi Lại
        </button>
      </div>
    </div>
  );
}
