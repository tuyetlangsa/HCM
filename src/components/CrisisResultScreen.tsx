"use client";

import { CrisisOption } from "@/data/crisisEvents";
import { Resources } from "@/lib/gameEngine";

interface CrisisResultScreenProps {
  crisisOption: CrisisOption;
  actualImpacts: Resources;
  resources: Resources;
  onNext: () => void;
}

function getImpactIndicator(value: number): { text: string; color: string } {
  if (value > 0) return { text: "↑", color: "text-green-600" };
  if (value < 0) return { text: "↓", color: "text-red-600" };
  return { text: "→", color: "text-gray-500" };
}

export default function CrisisResultScreen({
  crisisOption,
  actualImpacts,
  resources,
  onNext
}: CrisisResultScreenProps) {
  const trustIndicator = getImpactIndicator(actualImpacts.trust);
  const pcIndicator = getImpactIndicator(actualImpacts.politicalCapital);
  const timeIndicator = getImpactIndicator(actualImpacts.time);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-6">
      {/* Crisis Badge */}
      <div className="flex items-center gap-2 text-red-600">
        <span className="text-2xl">🚨</span>
        <span className="font-semibold">Kết quả xử lý khủng hoảng</span>
      </div>

      {/* Selected Option */}
      <div className={`border-l-4 rounded p-4 ${
        crisisOption.isNegative 
          ? "bg-red-50 border-red-600" 
          : "bg-green-50 border-green-600"
      }`}>
        <h3 className="font-semibold text-gray-900 mb-2">Bạn đã quyết định:</h3>
        <p className="text-gray-700 leading-relaxed">{crisisOption.text}</p>
      </div>

      {/* Impact Summary */}
      <div className="bg-gray-50 rounded p-4">
        <h3 className="font-semibold text-gray-900 mb-4 text-center">Ảnh hưởng đến nguồn lực</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded p-3 border border-gray-200">
            <span className="text-2xl">👥</span>
            <p className="text-xs text-gray-600 mt-1">Niềm tin</p>
            <p className={`text-xl font-bold ${trustIndicator.color}`}>
              {trustIndicator.text}
            </p>
          </div>
          <div className="bg-white rounded p-3 border border-gray-200">
            <span className="text-2xl">🏛️</span>
            <p className="text-xs text-gray-600 mt-1">Vốn chính trị</p>
            <p className={`text-xl font-bold ${pcIndicator.color}`}>
              {pcIndicator.text}
            </p>
          </div>
          <div className="bg-white rounded p-3 border border-gray-200">
            <span className="text-2xl">⏱️</span>
            <p className="text-xs text-gray-600 mt-1">Thời gian</p>
            <p className={`text-xl font-bold ${timeIndicator.color}`}>
              {timeIndicator.text}
            </p>
          </div>
        </div>
      </div>

      {/* Feedback Message */}
      <div className={`border-l-4 rounded p-4 ${
        crisisOption.isNegative 
          ? "bg-orange-50 border-orange-500" 
          : "bg-green-50 border-green-500"
      }`}>
        <p className={`text-sm font-medium ${
          crisisOption.isNegative ? "text-orange-900" : "text-green-900"
        }`}>
          {crisisOption.isNegative 
            ? "💡 Khủng hoảng là cơ hội thể hiện bản lĩnh lãnh đạo. Lựa chọn an toàn có thể gây hậu quả lâu dài."
            : "✓ Xử lý khủng hoảng quyết đoán giúp củng cố niềm tin và uy tín lãnh đạo."}
        </p>
      </div>

      {/* Warning if resources are low */}
      <div className="flex flex-wrap gap-2">
        {resources.trust < 40 && (
          <span className="text-red-600 text-sm font-semibold bg-red-50 px-3 py-1 rounded-full">
            ⚠️ Niềm tin đang thấp
          </span>
        )}
        {resources.politicalCapital < 30 && (
          <span className="text-orange-600 text-sm font-semibold bg-orange-50 px-3 py-1 rounded-full">
            ⚠️ Vốn chính trị yếu
          </span>
        )}
        {resources.time < 30 && (
          <span className="text-yellow-600 text-sm font-semibold bg-yellow-50 px-3 py-1 rounded-full">
            ⚠️ Thời gian còn ít
          </span>
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
      >
        Tiếp tục →
      </button>
    </div>
  );
}
