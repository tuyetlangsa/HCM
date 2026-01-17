"use client";

import Link from "next/link";
import { roles } from "@/data/scenarios";

interface RoleSelectionProps {
  onSelectRole: (roleId: string) => void;
}

export default function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  return (
    <div className="min-h-screen bg-linear-to-b from-red-900 via-red-800 to-red-950 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Giữ Niềm Tin Nhân Dân
          </h1>
          <p className="text-2xl text-yellow-300 mb-6">
            Chọn vai trò của bạn
          </p>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Mỗi vai trò sẽ đối mặt với những thử thách và quyết định khác nhau. 
            Hãy chọn con đường mà bạn muốn trải nghiệm.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div
              key={role.id}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border-2 border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col"
              onClick={() => onSelectRole(role.id)}
            >
              {/* Icon */}
              <div className="text-6xl mb-6 text-center">
                {role.icon}
              </div>

              {/* Role Name */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {role.name}
              </h2>

              {/* Description */}
              <p className="text-gray-800 text-center mb-6 leading-relaxed flex-grow">
                {role.description}
              </p>

              {/* Select Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectRole(role.id);
                }}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200 mt-auto"
              >
                Chọn vai trò này
              </button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-gray-300 text-sm">
            💡 Mỗi vai trò có 15 tình huống độc đáo với những thách thức riêng biệt
          </p>
          <Link 
            href="/huong-dan"
            className="inline-block text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors"
          >
            📖 Xem hướng dẫn chơi chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
}
