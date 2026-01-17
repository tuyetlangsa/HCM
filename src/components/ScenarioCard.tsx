"use client";

import { Scenario, ScenarioOption } from "@/data/scenarios";

interface ScenarioCardProps {
  scenario: Scenario;
  onSelectOption: (index: number) => void;
}

export default function ScenarioCard({
  scenario,
  onSelectOption
}: ScenarioCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {/* Scenario Info */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          {scenario.title}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {scenario.description}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {scenario.options.map((option: ScenarioOption, index: number) => (
          <button
            key={index}
            onClick={() => onSelectOption(index)}
            className="w-full p-4 rounded-lg text-left transition-all bg-gray-50 text-gray-900 hover:bg-gray-100 border-2 border-gray-200 hover:border-blue-400 cursor-pointer"
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

      {/* Instructions */}
      <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
        <p className="text-blue-900 text-sm">
          💡 Chọn một lựa chọn để xem hậu quả của quyết định. Lựa chọn của bạn sẽ ảnh hưởng đến niềm tin của nhân dân.
        </p>
      </div>
    </div>
  );
}
