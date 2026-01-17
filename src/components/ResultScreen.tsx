"use client";

import { Scenario, ScenarioOption, Role } from "@/data/scenarios";
import { Resources } from "@/lib/gameEngine";

interface ResultScreenProps {
  scenario: Scenario;
  selectedOption: ScenarioOption;
  actualImpacts: Resources;
  multiplier: number;
  resources: Resources;
  role?: Role;
  onNext: () => void;
  isLastTurn?: boolean;
}

// Role-specific contextual tips based on ideology tags
function getRoleContextualTip(roleId: string, ideologyTag: string, isNegative: boolean): string | null {
  if (isNegative) {
    const negativeTips: Record<string, Record<string, string>> = {
      "R01": {
        "Trách nhiệm": "💡 Lãnh đạo cấp cao phải là tấm gương về trách nhiệm. Né tránh làm mất uy tín.",
        "Liêm chính": "💡 'Đảng là đạo đức, là văn minh' - không được có vùng cấm trong xử lý tham nhũng.",
        "Tự phê bình": "💡 Văn hóa tự phê bình là nền tảng để Đảng tự đổi mới và phát triển.",
        "Dân chủ": "💡 Quyết định áp đặt không dựa trên cơ sở khoa học sẽ gây hậu quả nặng nề.",
        "Gần dân": "💡 'Lấy dân làm gốc' - xa rời nhân dân là mất căn bản lãnh đạo."
      },
      "R03": {
        "Thanh tra": "💡 Cán bộ thanh tra là 'giặc nội xâm' đầu tiên phải trong sạch.",
        "Kỷ luật": "💡 Kỷ luật không nghiêm sẽ làm sụp đổ niềm tin vào hệ thống.",
        "Công lý": "💡 Bao che, nương nhẹ là phản bội với sứ mệnh bảo vệ công lý.",
        "Liêm chính": "💡 Thanh tra nhũng nhiễu là 'giặc ăn cướp' tệ hại hơn tham nhũng thường.",
        "Độc lập": "💡 Thanh tra chịu áp lực là đầu hàng trước thế lực lợi ích nhóm."
      },
      "R07": {
        "Dân sinh": "💡 Cán bộ địa phương phải đặt lợi ích nhân dân lên trên lợi ích cá nhân.",
        "Minh bạch": "💡 Thiếu minh bạch tạo khoảng trống cho tham nhũng và lãng phí.",
        "Gần dân": "💡 'Dân biết, dân bàn, dân làm, dân kiểm tra' - phải thực chất, không hình thức.",
        "Trách nhiệm": "💡 Đổ lỗi cho cấp trên là đánh mất vai trò người đầy tớ của dân.",
        "Liêm chính": "💡 Cán bộ tham nhũng ở cơ sở làm tổn hại trực tiếp đến đời sống nhân dân."
      }
    };
    return negativeTips[roleId]?.[ideologyTag] || null;
  } else {
    const positiveTips: Record<string, Record<string, string>> = {
      "R01": {
        "Trách nhiệm": "✓ Gương mẫu trong trách nhiệm giúp xây dựng niềm tin vững chắc.",
        "Liêm chính": "✓ Xử lý nghiêm minh người thân khẳng định không có vùng cấm.",
        "Tự phê bình": "✓ Lãnh đạo biết lắng nghe và tự phê bình tạo môi trường dân chủ.",
        "Dân chủ": "✓ Quyết sách dựa trên tham vấn khoa học là nền tảng phát triển bền vững.",
        "Gần dân": "✓ Đối thoại chân thành với nhân dân giúp giải quyết vấn đề từ gốc rễ."
      },
      "R03": {
        "Thanh tra": "✓ Thanh tra minh bạch, khách quan là 'lá chắn' bảo vệ lợi ích nhân dân.",
        "Kỷ luật": "✓ Xử lý kỷ luật nghiêm minh giúp răn đe và ngăn chặn sai phạm.",
        "Công lý": "✓ Công bằng, không thiên vị là nền tảng niềm tin vào hệ thống.",
        "Liêm chính": "✓ Cán bộ thanh tra trong sạch là ví dụ sống cho đạo đức Đảng.",
        "Độc lập": "✓ Giữ vững nguyên tắc dù chịu áp lực là phẩm chất quý giá nhất."
      },
      "R07": {
        "Dân sinh": "✓ Ưu tiên dân sinh là thực hiện đúng tôn chỉ 'lấy dân làm gốc'.",
        "Minh bạch": "✓ Công khai minh bạch giúp nhân dân giám sát và tin tưởng.",
        "Gần dân": "✓ Thực chất hóa dân chủ cơ sở tạo nền tảng vững cho chính quyền.",
        "Trách nhiệm": "✓ Nhận trách nhiệm thẳng thắn giúp tìm ra giải pháp hiệu quả.",
        "Liêm chính": "✓ Cán bộ liêm khiết là tấm gương sống cho cộng đồng."
      }
    };
    return positiveTips[roleId]?.[ideologyTag] || null;
  }
}

function getImpactIndicator(value: number): { text: string; color: string } {
  if (value > 0) return { text: "↑", color: "text-green-600" };
  if (value < 0) return { text: "↓", color: "text-red-600" };
  return { text: "→", color: "text-gray-500" };
}

export default function ResultScreen({
  scenario,
  selectedOption,
  actualImpacts,
  multiplier,
  resources,
  role,
  onNext,
  isLastTurn
}: ResultScreenProps) {
  const showMultiplier = multiplier !== 1;
  const contextualTip = role ? getRoleContextualTip(role.id, scenario.ideologyTag, selectedOption.isNegative) : null;

  const trustIndicator = getImpactIndicator(actualImpacts.trust);
  const pcIndicator = getImpactIndicator(actualImpacts.politicalCapital);
  const timeIndicator = getImpactIndicator(actualImpacts.time);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-6">
      {/* Selected Option */}
      <div className={`border-l-4 rounded p-4 ${
        selectedOption.isNegative 
          ? "bg-red-50 border-red-600" 
          : "bg-green-50 border-green-600"
      }`}>
        <h3 className="font-semibold text-gray-900 mb-2">Bạn đã chọn:</h3>
        <p className="text-gray-700 leading-relaxed">{selectedOption.text}</p>
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
        
        {showMultiplier && (
          <div className="mt-4 p-3 bg-red-50 border-2 border-red-400 rounded text-center">
            <p className="text-sm text-red-800 font-semibold">
              {multiplier >= 1.5 
                ? "🚨 Lặp lại sai lầm nhiều lần - hậu quả nghiêm trọng gấp bội!" 
                : "⚠️ Lặp lại quyết định sai lầm tương tự làm hậu quả tăng lên."}
            </p>
          </div>
        )}
      </div>

      {/* Role-Specific Contextual Tip */}
      {contextualTip && (
        <div className={`border-l-4 rounded p-4 ${
          selectedOption.isNegative 
            ? "bg-orange-50 border-orange-500" 
            : "bg-green-50 border-green-500"
        }`}>
          <p className={`text-sm font-medium ${
            selectedOption.isNegative ? "text-orange-900" : "text-green-900"
          }`}>
            {contextualTip}
          </p>
        </div>
      )}

      {/* Ideology Tag and Warnings */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-medium">
            {scenario.ideologyTag}
          </span>
          {role && (
            <span className="text-gray-600">
              {role.icon} {role.name}
            </span>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {resources.trust < 40 && (
            <span className="text-red-600 font-semibold bg-red-50 px-2 py-1 rounded">
              ⚠️ Niềm tin thấp
            </span>
          )}
          {resources.politicalCapital < 30 && (
            <span className="text-orange-600 font-semibold bg-orange-50 px-2 py-1 rounded">
              ⚠️ Vốn chính trị yếu
            </span>
          )}
          {resources.time < 30 && (
            <span className="text-yellow-600 font-semibold bg-yellow-50 px-2 py-1 rounded">
              ⚠️ Thời gian ít
            </span>
          )}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {isLastTurn ? "Xem Kết Quả Cuối Cùng" : "Tình Huống Tiếp Theo"}
      </button>
    </div>
  );
}
