"use client";

import { getEvaluation, getStatistics, GameState, Resources } from "@/lib/gameEngine";
import { Role } from "@/data/scenarios";

interface FinalResultProps {
  gameState: GameState;
  role?: Role;
  onRestart: () => void;
}

function getBarColor(value: number): string {
  if (value >= 60) return "bg-green-500";
  if (value >= 30) return "bg-yellow-500";
  return "bg-red-500";
}

function ResourceDisplay({ resources }: { resources: Resources }) {
  return (
    <div className="space-y-3">
      <div>
        <div className="flex justify-between text-sm text-gray-700 mb-1">
          <span>👥 Niềm tin nhân dân</span>
        </div>
        <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all ${getBarColor(resources.trust)}`}
            style={{ width: `${resources.trust}%` }}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between text-sm text-gray-700 mb-1">
          <span>🏛️ Vốn chính trị</span>
        </div>
        <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all ${getBarColor(resources.politicalCapital)}`}
            style={{ width: `${resources.politicalCapital}%` }}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between text-sm text-gray-700 mb-1">
          <span>⏱️ Thời gian còn lại</span>
        </div>
        <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all ${getBarColor(resources.time)}`}
            style={{ width: `${resources.time}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function FinalResult({ gameState, role, onRestart }: FinalResultProps) {
  const { resources } = gameState;
  const evaluation = getEvaluation(resources);
  const stats = getStatistics(gameState);
  
  const avgScore = (resources.trust + resources.politicalCapital + resources.time) / 3;
  
  const bgColor = 
    avgScore >= 60 
      ? "from-green-900 to-green-700"
      : avgScore >= 40
      ? "from-yellow-900 to-yellow-700"
      : "from-red-900 to-red-700";

  const titleColor =
    avgScore >= 60 ? "text-green-600" : avgScore >= 40 ? "text-yellow-600" : "text-red-600";

  return (
    <div className={`min-h-screen bg-linear-to-b ${bgColor} flex items-center justify-center px-4`}>
      <div className="max-w-3xl w-full text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Kết Quả Cuối Cùng</h1>
        
        {role && (
          <div className="text-2xl mb-6 flex items-center justify-center gap-3">
            <span>{role.icon}</span>
            <span className="text-yellow-300">{role.name}</span>
          </div>
        )}

        <div className="bg-white bg-opacity-95 backdrop-blur rounded-lg p-8 mb-8 text-left">
          {/* Resource Bars */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Nguồn lực cuối cùng</h3>
            <ResourceDisplay resources={resources} />
          </div>

          {/* Evaluation */}
          <div className="bg-gray-50 rounded p-6 mb-6 text-center">
            <h2 className={`text-2xl font-bold mb-3 ${titleColor}`}>
              {evaluation.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {evaluation.description}
            </p>
          </div>

          {/* Statistics */}
          <div className="bg-gray-50 rounded p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">📊 Thống Kê</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white rounded p-3 border border-gray-200">
                <p className="text-xs text-gray-600">Tình huống</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalDecisions}</p>
              </div>
              <div className="bg-white rounded p-3 border border-gray-200">
                <p className="text-xs text-gray-600">Lựa chọn tốt</p>
                <p className="text-2xl font-bold text-green-600">{stats.goodDecisions}</p>
              </div>
              <div className="bg-white rounded p-3 border border-gray-200">
                <p className="text-xs text-gray-600">Lựa chọn xấu</p>
                <p className="text-2xl font-bold text-red-600">{stats.badDecisions}</p>
              </div>
              <div className="bg-white rounded p-3 border border-gray-200">
                <p className="text-xs text-gray-600">Khủng hoảng</p>
                <p className="text-2xl font-bold text-orange-600">{stats.crisesHandled}</p>
              </div>
            </div>
          </div>

          {/* Detailed Feedback */}
          <div className={`rounded p-4 ${
            avgScore >= 60 ? "bg-green-100" : avgScore >= 40 ? "bg-yellow-100" : "bg-red-100"
          }`}>
            {avgScore >= 60 && (
              <div>
                <h3 className="font-bold text-green-800 mb-2">✓ Thành Tựu:</h3>
                <ul className="space-y-1 text-sm text-green-700">
                  <li>• Cân bằng tốt giữa các nguồn lực</li>
                  <li>• Giữ vững niềm tin nhân dân</li>
                  <li>• Xử lý hiệu quả các tình huống khủng hoảng</li>
                  <li>• Duy trì vốn chính trị và quan hệ tốt</li>
                </ul>
              </div>
            )}
            {avgScore >= 40 && avgScore < 60 && (
              <div>
                <h3 className="font-bold text-yellow-800 mb-2">⚠ Cần Cải Thiện:</h3>
                <ul className="space-y-1 text-sm text-yellow-700">
                  <li>• Một số quyết định đã gây mất cân bằng nguồn lực</li>
                  <li>• Cần nhất quán hơn trong việc thực hiện nguyên tắc</li>
                  <li>• Cân nhắc kỹ hơn về đánh đổi giữa các nguồn lực</li>
                  <li>• Tránh lặp lại các sai lầm đã từng mắc phải</li>
                </ul>
              </div>
            )}
            {avgScore < 40 && (
              <div>
                <h3 className="font-bold text-red-800 mb-2">✗ Bài Học:</h3>
                <ul className="space-y-1 text-sm text-red-700">
                  <li>• Nguồn lực đã cạn kiệt do quản lý yếu kém</li>
                  <li>• Quyết định xấu tạo chuỗi hậu quả dài hạn</li>
                  <li>• Cần thay đổi căn bản cách tiếp cận</li>
                  <li>• Mỗi nguồn lực đều quan trọng, không thể hy sinh một để giữ khác</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={onRestart}
          className="bg-white text-gray-900 font-bold py-4 px-12 rounded-lg text-xl hover:bg-gray-100 transition-colors shadow-lg"
        >
          Chơi Lại
        </button>
      </div>
    </div>
  );
}
