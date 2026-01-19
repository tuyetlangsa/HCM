"use client";

import Link from "next/link";

export default function CongNghePage() {
  const technologies = [
    {
      category: "Framework & Runtime",
      items: [
        {
          name: "Next.js 16",
          icon: "▲",
          description: "React framework với App Router, Server Components và tối ưu hóa hiệu suất",
          color: "from-gray-700 to-gray-900"
        },
        {
          name: "React 19",
          icon: "⚛️",
          description: "Thư viện UI component-based với hooks và concurrent features",
          color: "from-cyan-500 to-blue-600"
        },
        {
          name: "TypeScript",
          icon: "🔷",
          description: "Superset của JavaScript với static typing, tăng độ tin cậy code",
          color: "from-blue-500 to-blue-700"
        }
      ]
    },
    {
      category: "Styling & UI",
      items: [
        {
          name: "Tailwind CSS",
          icon: "🎨",
          description: "Utility-first CSS framework cho thiết kế nhanh và responsive",
          color: "from-teal-400 to-cyan-500"
        },
        {
          name: "CSS Gradients",
          icon: "🌈",
          description: "Gradient màu sắc đẹp mắt cho giao diện game hấp dẫn",
          color: "from-purple-500 to-pink-500"
        }
      ]
    },
    {
      category: "Development Tools",
      items: [
        {
          name: "ESLint",
          icon: "🔍",
          description: "Công cụ linting để đảm bảo chất lượng code và best practices",
          color: "from-purple-500 to-indigo-600"
        },
        {
          name: "PostCSS",
          icon: "📦",
          description: "Công cụ xử lý CSS với autoprefixer và các plugin hiện đại",
          color: "from-orange-500 to-red-500"
        }
      ]
    }
  ];

  const aiTools = [
    {
      name: "GitHub Copilot",
      icon: "🤖",
      description: "AI pair programmer hỗ trợ viết code, debug và tạo logic game",
      features: [
        "Tự động gợi ý code thông minh",
        "Hỗ trợ viết các tình huống game",
        "Debug và tối ưu hóa code",
        "Giải thích và refactor code"
      ],
      color: "from-gray-700 to-gray-900"
    },
    {
      name: "Claude AI (Anthropic)",
      icon: "🧠",
      description: "AI assistant hỗ trợ thiết kế kịch bản và nội dung game",
      features: [
        "Tạo các tình huống đạo đức phức tạp",
        "Viết dialogue và mô tả",
        "Thiết kế logic phân nhánh",
        "Review và cải thiện UX"
      ],
      color: "from-amber-500 to-orange-600"
    }
  ];

  const gameDesign = [
    {
      title: "Thiết kế tình huống",
      icon: "📋",
      description: "Các tình huống được thiết kế dựa trên thực tế công vụ Việt Nam, đảm bảo tính giáo dục và thực tiễn"
    },
    {
      title: "Hệ thống điểm",
      icon: "📊",
      description: "Cơ chế tính điểm với multiplier, phản ánh hậu quả tích lũy của các quyết định sai lầm"
    },
    {
      title: "Sự kiện ngẫu nhiên",
      icon: "🎲",
      description: "Các sự kiện khủng hoảng xuất hiện dựa trên mức độ niềm tin, tạo độ khó linh hoạt"
    },
    {
      title: "Đa vai trò",
      icon: "👥",
      description: "3 vai trò với bộ tình huống riêng, mang lại trải nghiệm đa dạng"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="text-6xl mb-6">⚙️</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Công Nghệ & AI
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Khám phá các công nghệ hiện đại và AI đã được sử dụng để xây dựng game này
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              🎮 Chơi Game
            </Link>
            <Link 
              href="/huong-dan"
              className="px-8 py-4 bg-white/10 backdrop-blur text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              📖 Hướng Dẫn
            </Link>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="text-4xl">🤖</span> AI Đã Sử Dụng
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {aiTools.map((tool, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-linear-to-r ${tool.color} mb-4`}>
                <span className="text-2xl">{tool.icon}</span>
                <span className="text-xl font-bold text-white">{tool.name}</span>
              </div>
              
              <p className="text-gray-300 mb-4">{tool.description}</p>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                  Đóng góp trong dự án
                </h4>
                <ul className="space-y-2">
                  {tool.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-gray-300 flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-white/10">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">AI & Phát Triển Game</h3>
              <p className="text-gray-300">
                Các công cụ AI đã giúp tăng tốc đáng kể quá trình phát triển game, từ việc tạo nội dung, 
                viết code, đến debug và tối ưu hóa. Sự kết hợp giữa AI và developer tạo nên hiệu quả 
                vượt trội trong việc xây dựng game giáo dục này.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="text-4xl">🛠️</span> Công Nghệ Sử Dụng
        </h2>
        
        <div className="space-y-8">
          {technologies.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xl font-semibold text-gray-300 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {category.category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${tech.color} flex items-center justify-center text-white text-xl`}>
                        {tech.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        {tech.name}
                      </h4>
                    </div>
                    <p className="text-gray-400 text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Game Design Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="text-4xl">🎮</span> Thiết Kế Game
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {gameDesign.map((item, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-linear-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">📈 Thống Kê Dự Án</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-400">Tình huống game</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">3</div>
              <div className="text-gray-400">Vai trò chơi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-gray-400">Sự kiện khủng hoảng</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">100%</div>
              <div className="text-gray-400">TypeScript</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Game được phát triển với mục đích giáo dục về đạo đức công vụ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="px-6 py-3 bg-linear-to-r from-red-600 to-amber-600 text-white font-bold rounded-xl hover:from-red-500 hover:to-amber-500 transition-all"
            >
              🎮 Chơi Game Ngay
            </Link>
            <Link 
              href="/huong-dan"
              className="px-6 py-3 bg-white/10 backdrop-blur text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              📖 Xem Hướng Dẫn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
