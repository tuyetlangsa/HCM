"use client";

import { CrisisEvent, CrisisOption } from "@/data/crisisEvents";

interface CrisisScreenProps {
  crisis: CrisisEvent;
  onSelectOption: (index: number) => void;
}

export default function CrisisScreen({ crisis, onSelectOption }: CrisisScreenProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-4 border-red-500">
      {/* Crisis Header */}
      <div className="bg-red-600 -mx-6 -mt-6 md:-mx-8 md:-mt-8 px-6 py-4 md:px-8 md:py-6 rounded-t-lg mb-6">
        <div className="flex items-center gap-4">
          <span className="text-5xl">{crisis.icon}</span>
          <div>
            <p className="text-red-200 text-sm font-semibold uppercase tracking-wide">⚠️ Khủng hoảng bất ngờ</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {crisis.title}
            </h2>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          {crisis.description}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {crisis.options.map((option: CrisisOption, index: number) => (
          <button
            key={index}
            onClick={() => onSelectOption(index)}
            className={`w-full p-4 rounded-lg text-left transition-all border-2 cursor-pointer ${
              option.isNegative 
                ? "bg-red-50 text-gray-900 hover:bg-red-100 border-red-200 hover:border-red-400" 
                : "bg-green-50 text-gray-900 hover:bg-green-100 border-green-200 hover:border-green-400"
            }`}
          >
            <div className="font-semibold flex items-start gap-2">
              <span className="text-sm opacity-70 min-w-5">
                {String.fromCharCode(65 + index)}.
              </span>
              <span>{option.text}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Warning */}
      <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-600 rounded">
        <p className="text-red-900 text-sm font-medium">
          🚨 Đây là tình huống khẩn cấp! Quyết định của bạn sẽ ảnh hưởng lớn đến tất cả nguồn lực.
        </p>
      </div>
    </div>
  );
}
