"use client";

interface TrustBarProps {
  trust: number;
  turnCount?: number;
  maxTurns?: number;
  maxTrust?: number;
}

function getTrustBarColor(trust: number): string {
  if (trust >= 70) return "bg-green-500";
  if (trust >= 40) return "bg-yellow-500";
  return "bg-red-500";
}

export default function TrustBar({ trust, turnCount, maxTurns, maxTrust = 100 }: TrustBarProps) {
  const percentage = Math.max(0, Math.min(100, (trust / maxTrust) * 100));
  const barColor = getTrustBarColor(trust);

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-700">
          Niềm tin của nhân dân
        </span>
        {turnCount !== undefined && maxTurns !== undefined && (
          <span className="text-sm text-gray-600">
            Tình huống: {turnCount}/{maxTurns}
          </span>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
        <div
          className={`h-full ${barColor} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
