"use client";

import { Role } from "@/data/scenarios";

interface StartScreenProps {
  onStart: () => void;
  role?: Role;
}

export default function StartScreen({ onStart, role }: StartScreenProps) {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-900 to-blue-700 flex items-center justify-center px-4">
      <div className="max-w-3xl text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Giữ Niềm Tin Nhân Dân
        </h1>
        
        {role && (
          <div className="text-3xl mb-4 flex items-center justify-center gap-3">
            <span>{role.icon}</span>
            <span className="text-yellow-300">{role.name}</span>
          </div>
        )}
        
        <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-8 mb-8 text-gray-900">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Về Game</h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-800">
            {role ? (
              <>
                Bạn sẽ trải nghiệm 15 tình huống thực tế trong vai trò <strong>{role.name}</strong>. 
                Mỗi quyết định của bạn sẽ ảnh hưởng trực tiếp đến niềm tin của nhân dân.
              </>
            ) : (
              <>
                Game mô phỏng các tình huống thực tế trong lãnh đạo Đảng và Nhà nước. 
                Mỗi quyết định của bạn sẽ ảnh hưởng trực tiếp đến niềm tin của nhân dân.
              </>
            )}
          </p>
          
          <div className="bg-white bg-opacity-90 rounded p-4 mb-6 text-left">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Nền Tảng Tư Tưởng:</h3>
            <ul className="space-y-2 text-gray-800">
              <li>✓ Đảng là đạo đức, là văn minh</li>
              <li>✓ Lấy dân làm gốc - Dân biết, dân bàn, dân làm, dân kiểm tra</li>
              <li>✓ Chống tham nhũng, quan liêu, đặc quyền</li>
              <li>✓ Quyền lực phải được kiểm soát</li>
              <li>✓ Cán bộ là người đầy tớ của nhân dân</li>
              <li>✓ Minh bạch, trung thực, tự phê bình</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded p-4 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">⚠️ Cơ Chế Game:</h3>
            <ul className="text-sm space-y-2 text-left text-gray-800">
              <li>• <strong>Multiplier:</strong> Lặp lại sai lầm → hậu quả tăng x1.25, x1.5, x2.0...</li>
              <li>• <strong>Sự kiện khủng hoảng:</strong> Khi niềm tin thấp, các vụ việc nghiêm trọng (tham nhũng lớn, khủng hoảng môi trường) xuất hiện nhiều hơn</li>
              <li>• <strong>20 tình huống ngẫu nhiên:</strong> Mỗi lần chơi khác nhau</li>
            </ul>
          </div>

          <p className="text-sm italic text-gray-800">
            Hãy làm những quyết định sáng suốt, minh bạch và công bằng!
          </p>
        </div>

        <button
          onClick={onStart}
          className="bg-white text-blue-900 font-bold py-4 px-12 rounded-lg text-xl hover:bg-blue-50 transition-colors shadow-lg"
        >
          Bắt Đầu Game
        </button>
      </div>
    </div>
  );
}
