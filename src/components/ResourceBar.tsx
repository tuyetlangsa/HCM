"use client";

import { Resources } from "@/lib/gameEngine";

interface ResourceBarProps {
  resources: Resources;
  turnCount?: number;
  maxTurns?: number;
}

function getBarColor(value: number): string {
  if (value >= 60) return "bg-green-500";
  if (value >= 30) return "bg-yellow-500";
  return "bg-red-500";
}

function getResourceIcon(type: "trust" | "politicalCapital" | "time"): string {
  switch (type) {
    case "trust": return "👥";
    case "politicalCapital": return "🏛️";
    case "time": return "⏱️";
  }
}

function getResourceLabel(type: "trust" | "politicalCapital" | "time"): string {
  switch (type) {
    case "trust": return "Niềm tin nhân dân";
    case "politicalCapital": return "Vốn chính trị";
    case "time": return "Thời gian";
  }
}

interface SingleBarProps {
  type: "trust" | "politicalCapital" | "time";
  value: number;
  maxValue?: number;
}

function SingleBar({ type, value, maxValue = 100 }: SingleBarProps) {
  const percentage = Math.max(0, Math.min(100, (value / maxValue) * 100));
  const barColor = getBarColor(value);
  const icon = getResourceIcon(type);
  const label = getResourceLabel(type);

  return (
    <div className="flex items-center gap-3">
      <span className="text-xl" title={label}>{icon}</span>
      <div className="flex-1">
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className={`h-full ${barColor} transition-all duration-500`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function ResourceBar({ resources, turnCount, maxTurns }: ResourceBarProps) {
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-semibold text-gray-700">
          Nguồn lực
        </span>
        {turnCount !== undefined && maxTurns !== undefined && (
          <span className="text-sm text-gray-600">
            Tình huống: {turnCount}/{maxTurns}
          </span>
        )}
      </div>
      
      <div className="space-y-2">
        <SingleBar type="trust" value={resources.trust} />
        <SingleBar type="politicalCapital" value={resources.politicalCapital} />
        <SingleBar type="time" value={resources.time} />
      </div>

      {/* Legend */}
      <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-500">
        <span>👥 Niềm tin</span>
        <span>🏛️ Vốn chính trị</span>
        <span>⏱️ Thời gian</span>
      </div>
    </div>
  );
}
