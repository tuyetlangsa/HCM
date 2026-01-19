"use client";

import Link from "next/link";

export default function HuongDanPage() {
  const roles = [
    {
      id: "R01",
      name: "Lãnh đạo cấp cao",
      description: "Quyết sách chiến lược, chịu trách nhiệm toàn diện, là tấm gương đạo đức",
      icon: "🏛️",
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: "R03",
      name: "Cán bộ thanh tra – kỷ luật",
      description: "Kiểm soát sai phạm, giữ kỷ cương, chống giặc nội xâm",
      icon: "⚖️",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: "R07",
      name: "Cán bộ địa phương",
      description: "Thi hành chính sách, tiếp xúc trực tiếp với người dân",
      icon: "👥",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  const resources = [
    {
      name: "Niềm tin nhân dân",
      icon: "👥",
      initial: 70,
      description: "Mức độ tin tưởng của người dân vào bạn. Mất hết niềm tin = thất bại.",
      color: "bg-green-500"
    },
    {
      name: "Vốn chính trị",
      icon: "🏛️",
      initial: 50,
      description: "Uy tín và quan hệ trong hệ thống. Cô lập chính trị = thất bại.",
      color: "bg-blue-500"
    },
    {
      name: "Thời gian nhiệm kỳ",
      icon: "⏱️",
      initial: 100,
      description: "Quỹ thời gian còn lại. Giảm 3 điểm mỗi lượt. Hết thời gian = kết thúc.",
      color: "bg-amber-500"
    }
  ];

  const crisisEvents = [
    { icon: "🌊", name: "Thiên tai lũ lụt" },
    { icon: "📰", name: "Scandal báo chí" },
    { icon: "✊", name: "Biểu tình quy mô lớn" },
    { icon: "🔍", name: "Cấp trên bị điều tra" },
    { icon: "🦠", name: "Dịch bệnh bùng phát" },
    { icon: "💰", name: "Tham nhũng nội bộ" },
    { icon: "📝", name: "Khiếu nại tập thể" },
    { icon: "🏭", name: "Sự cố môi trường" },
    { icon: "📱", name: "Tin giả lan truyền" },
    { icon: "🏗️", name: "Xung đột đất đai" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-red-600/20 to-amber-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="text-6xl mb-6">⭐</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Cán Bộ Liêm Chính
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-3xl mx-auto">
            Game nhập vai đạo đức công vụ - Mỗi quyết định định hình con đường của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="px-8 py-4 bg-linear-to-r from-red-600 to-amber-600 text-white font-bold text-lg rounded-xl hover:from-red-500 hover:to-amber-500 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              🎮 Bắt đầu chơi ngay
            </Link>
            <Link 
              href="/cong-nghe"
              className="px-8 py-4 bg-white/10 backdrop-blur text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              ⚙️ Công Nghệ & AI
            </Link>
          </div>
        </div>
      </section>

      {/* Giới thiệu */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">📖</span> Giới thiệu
          </h2>
          <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
            <p>
              <strong className="text-amber-400">Cán Bộ Liêm Chính</strong> là game nhập vai đặt bạn vào vị trí của một cán bộ nhà nước, 
              nơi mỗi quyết định đều có hệ quả và thử thách đạo đức nghề nghiệp.
            </p>
            <p>
              Bạn sẽ đối mặt với <strong className="text-white">15 tình huống thực tế</strong> trong nhiệm kỳ của mình, 
              từ xử lý tham nhũng, đối thoại với dân, đến các khủng hoảng bất ngờ. 
              Mục tiêu là hoàn thành nhiệm kỳ với niềm tin của nhân dân còn nguyên vẹn.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Vai trò */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="text-4xl">🎭</span> Chọn vai trò của bạn
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <div 
              key={role.id}
              className={`bg-linear-to-br ${role.color} rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition-transform`}
            >
              <div className="text-5xl mb-4">{role.icon}</div>
              <h3 className="text-xl font-bold mb-2">{role.name}</h3>
              <p className="text-white/90 text-sm leading-relaxed">{role.description}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-center mt-6">
          Mỗi vai trò có 15 tình huống riêng biệt, phản ánh đặc thù công việc
        </p>
      </section>

      {/* Hệ thống tài nguyên */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="text-4xl">📊</span> Hệ thống tài nguyên
        </h2>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <p className="text-gray-300 mb-8 text-lg">
            Bạn phải cân bằng <strong className="text-white">3 nguồn lực</strong> quan trọng. 
            Nếu bất kỳ nguồn lực nào về 0, game kết thúc!
          </p>
          <div className="space-y-6">
            {resources.map((resource) => (
              <div key={resource.name} className="flex items-start gap-4">
                <div className="text-4xl shrink-0">{resource.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{resource.name}</h3>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                      Khởi đầu: {resource.initial}
                    </span>
                  </div>
                  <p className="text-gray-400">{resource.description}</p>
                  <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${resource.color} rounded-full`} 
                      style={{ width: `${resource.initial}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cách chơi */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="text-4xl">🎯</span> Cách chơi
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">1️⃣</div>
            <h3 className="text-xl font-bold text-white mb-2">Chọn vai trò</h3>
            <p className="text-gray-400">
              Bắt đầu bằng việc chọn 1 trong 3 vai trò: Lãnh đạo cấp cao, Cán bộ thanh tra, hoặc Cán bộ địa phương.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">2️⃣</div>
            <h3 className="text-xl font-bold text-white mb-2">Đối mặt tình huống</h3>
            <p className="text-gray-400">
              Mỗi lượt, bạn nhận được một tình huống thực tế với 5 lựa chọn khác nhau, từ tích cực đến tiêu cực.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">3️⃣</div>
            <h3 className="text-xl font-bold text-white mb-2">Ra quyết định</h3>
            <p className="text-gray-400">
              Mỗi lựa chọn ảnh hưởng đến cả 3 nguồn lực. Quyết định tốt tăng niềm tin nhưng có thể tốn thời gian hoặc vốn chính trị.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">4️⃣</div>
            <h3 className="text-xl font-bold text-white mb-2">Hoàn thành nhiệm kỳ</h3>
            <p className="text-gray-400">
              Vượt qua 15 lượt với các nguồn lực còn lại để nhận đánh giá cuối nhiệm kỳ.
            </p>
          </div>
        </div>
      </section>

      {/* Khủng hoảng */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="text-4xl">🚨</span> Sự kiện khủng hoảng
        </h2>
        <div className="bg-linear-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-5xl">⚠️</div>
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">Khủng hoảng bất ngờ!</h3>
              <p className="text-gray-300 text-lg">
                Mỗi lượt (sau lượt 2), có <strong className="text-white">20% cơ hội</strong> xảy ra khủng hoảng bất ngờ. 
                Đây là các sự kiện nghiêm trọng đòi hỏi xử lý tức thì.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {crisisEvents.map((event) => (
              <div 
                key={event.name}
                className="bg-black/30 rounded-lg p-3 text-center hover:bg-black/50 transition-colors"
              >
                <div className="text-2xl mb-1">{event.icon}</div>
                <div className="text-xs text-gray-400">{event.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Điều kiện kết thúc */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="text-4xl">🏁</span> Điều kiện kết thúc
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Thất bại */}
          <div className="bg-red-900/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20">
            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
              <span>❌</span> Thất bại (Game Over)
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span><strong className="text-white">Niềm tin = 0:</strong> Mất lòng tin nhân dân hoàn toàn</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span><strong className="text-white">Vốn chính trị = 0:</strong> Bị cô lập trong hệ thống</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span><strong className="text-white">Thời gian = 0:</strong> Nhiệm kỳ kết thúc dang dở</span>
              </li>
            </ul>
          </div>
          
          {/* Thành công */}
          <div className="bg-green-900/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <span>✅</span> Hoàn thành nhiệm kỳ
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">≥70 điểm:</strong> Lãnh đạo xuất sắc ⭐</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">≥50 điểm:</strong> Hoàn thành nhiệm vụ ✓</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">≥30 điểm:</strong> Nhiều thách thức phía trước</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span><strong className="text-white">&lt;30 điểm:</strong> Cần cải tổ căn bản</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mẹo chơi */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="text-4xl">💡</span> Mẹo chơi
        </h2>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <ul className="space-y-4 text-gray-300 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-amber-400 text-xl">✦</span>
              <span><strong className="text-white">Cân bằng 3 nguồn lực:</strong> Đừng chỉ tập trung vào niềm tin mà quên vốn chính trị và thời gian.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 text-xl">✦</span>
              <span><strong className="text-white">Lựa chọn xanh/đỏ:</strong> Màu xanh thường là lựa chọn tích cực, màu đỏ là tiêu cực - nhưng đôi khi cần đánh đổi.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 text-xl">✦</span>
              <span><strong className="text-white">Chuẩn bị cho khủng hoảng:</strong> Giữ nguồn lực ở mức an toàn để có đệm khi khủng hoảng xảy ra.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 text-xl">✦</span>
              <span><strong className="text-white">Thời gian là quý:</strong> Thời gian tự giảm mỗi lượt, hãy cân nhắc kỹ các hành động tốn thời gian.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA cuối */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="bg-linear-to-r from-red-600/20 to-amber-600/20 backdrop-blur-sm rounded-2xl p-12 border border-amber-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sẵn sàng thử thách?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Hãy bắt đầu hành trình trở thành cán bộ liêm chính ngay hôm nay!
          </p>
          <Link 
            href="/"
            className="inline-block px-10 py-5 bg-linear-to-r from-red-600 to-amber-600 text-white font-bold text-xl rounded-xl hover:from-red-500 hover:to-amber-500 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            🎮 Bắt đầu chơi
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        <p>Cán Bộ Liêm Chính © 2026 - Game giáo dục đạo đức công vụ</p>
      </footer>
    </div>
  );
}
