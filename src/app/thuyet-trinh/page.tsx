"use client";

import { useState } from "react";
import Link from "next/link";

export default function ThuyetTrinhPage() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: 1,
      title: "Giới thiệu chủ đề",
      icon: "🎯",
      content: {
        mainTitle: "Củng cố niềm tin của Nhân dân đối với Đảng cầm quyền theo tư tưởng Hồ Chí Minh",
        points: [
          "Vì sao niềm tin của nhân dân là yếu tố sống còn đối với Đảng cầm quyền",
          "Tư tưởng Hồ Chí Minh là nền tảng lý luận và thực tiễn cho vấn đề này",
          "Mục tiêu: làm rõ tính tất yếu, vai trò lãnh đạo, nguy cơ và giải pháp"
        ]
      }
    },
    {
      id: 2,
      title: "Tính tất yếu ra đời của Đảng",
      icon: "⭐",
      content: {
        subtitle: "Quy luật ra đời của Đảng Cộng sản Việt Nam",
        formulas: [
          { label: "Công thức của Lênin", formula: "Đảng Cộng sản = Chủ nghĩa Mác – Lênin + Phong trào công nhân" },
          { label: "Sự sáng tạo của Hồ Chí Minh", formula: "Đảng CSVN = CN Mác – Lênin + Phong trào công nhân + Phong trào yêu nước" }
        ],
        meaning: [
          "Đảng đại diện không chỉ cho giai cấp công nhân",
          "Mà cho toàn thể dân tộc Việt Nam"
        ],
        examples: [
          "Các phong trào yêu nước trước 1930 (Phan Bội Châu, Phan Châu Trinh…)",
          "Hạn chế: thiếu đường lối đúng đắn → thất bại",
          "Sự ra đời của Đảng chấm dứt khủng hoảng về đường lối cứu nước"
        ]
      }
    },
    {
      id: 3,
      title: "Vì sao Đảng lãnh đạo là tất yếu?",
      icon: "🏛️",
      content: {
        mainPoint: "Đảng không tự phong cho mình quyền lãnh đạo. Quyền lãnh đạo được nhân dân thừa nhận qua các thử thách lịch sử.",
        milestones: [
          { year: "1945", event: "Cách mạng Tháng Tám" },
          { year: "1954", event: "Chiến thắng Điện Biên Phủ" },
          { year: "1975", event: "Đại thắng Mùa Xuân" }
        ],
        analysis: [
          "Đảng hy sinh lợi ích riêng để đấu tranh cho độc lập dân tộc",
          "Vai trò lãnh đạo được hiến định trong Hiến pháp",
          "Nền tảng sâu xa là \"Hiến pháp trong lòng dân\""
        ]
      }
    },
    {
      id: 4,
      title: "Vai trò lãnh đạo của Đảng",
      icon: "🔥",
      content: {
        roles: [
          { title: "Xác định đường lối", desc: "Chiến lược đúng đắn – ngọn đuốc soi đường" },
          { title: "Tổ chức và động viên", desc: "Giáo dục và động viên nhân dân hành động" },
          { title: "Cầu nối quốc tế", desc: "Giữa Việt Nam với phong trào cách mạng và cộng đồng quốc tế" }
        ],
        principle: "Lãnh đạo bằng gương mẫu và thuyết phục, không phải bằng mệnh lệnh áp đặt"
      }
    },
    {
      id: 5,
      title: "Nguy cơ khi Đảng cầm quyền",
      icon: "⚠️",
      content: {
        definition: "Đảng cầm quyền là đảng lãnh đạo chính quyền và quản lý xã hội",
        twoSides: [
          { side: "Tích cực", desc: "Công cụ xây dựng đất nước" },
          { side: "Tiêu cực", desc: "Môi trường dễ phát sinh \"giặc nội xâm\"" }
        ],
        quote: "\"Một dân tộc, một đảng… không nhất định hôm nay và ngày mai vẫn được mọi người yêu mến…\"",
        author: "Hồ Chí Minh"
      }
    },
    {
      id: 6,
      title: "Ba căn bệnh làm suy giảm niềm tin",
      icon: "🦠",
      content: {
        diseases: [
          {
            name: "Tham ô",
            desc: "Ăn cắp của công làm của tư",
            example: "Vụ án Việt Á",
            color: "red"
          },
          {
            name: "Lãng phí",
            desc: "Tiêu xài hoang phí tiền thuế",
            example: "Dự án nghìn tỷ đắp chiếu",
            color: "orange"
          },
          {
            name: "Quan liêu",
            desc: "Xa rời thực tiễn",
            example: "Chỉ đạo trên giấy, báo cáo không trung thực",
            color: "yellow"
          }
        ]
      }
    },
    {
      id: 7,
      title: "Nguyên nhân sâu xa: Chủ nghĩa cá nhân",
      icon: "👤",
      content: {
        definition: "Đặt lợi ích cá nhân lên trên lợi ích tập thể. Muốn đè nén người khác, sợ người khác hơn mình.",
        harms: [
          "Làm tha hóa cán bộ",
          "Biến \"đầy tớ của dân\" thành \"ông chủ\""
        ],
        metaphor: "Chủ nghĩa cá nhân như vi khuẩn độc hại, chờ cơ thể suy yếu để tấn công"
      }
    },
    {
      id: 8,
      title: "Giải pháp: 5 nguyên tắc xây dựng Đảng",
      icon: "🛡️",
      content: {
        principles: [
          { num: 1, name: "Tập trung dân chủ", desc: "Rường cột tổ chức" },
          { num: 2, name: "Tập thể lãnh đạo, cá nhân phụ trách", desc: "Phân công trách nhiệm rõ ràng" },
          { num: 3, name: "Tự phê bình và phê bình", desc: "Quy luật phát triển" },
          { num: 4, name: "Kỷ luật nghiêm minh", desc: "Không có vùng cấm" },
          { num: 5, name: "Đoàn kết thống nhất", desc: "Sức mạnh của Đảng" }
        ]
      }
    },
    {
      id: 9,
      title: "Xây dựng đội ngũ cán bộ",
      icon: "👥",
      content: {
        duc: {
          title: "ĐỨC là gốc",
          values: ["Cần", "Kiệm", "Liêm", "Chính"]
        },
        tai: {
          title: "TÀI là năng lực",
          desc: "Năng lực thực hiện nhiệm vụ"
        },
        relationship: "Đức và Tài phải song hành. Có Đức mà không có Tài thì làm việc gì cũng khó. Có Tài mà không có Đức là người vô dụng."
      }
    },
    {
      id: 10,
      title: "Liên hệ thực tiễn: Công tác \"Đốt lò\"",
      icon: "🔥",
      content: {
        title: "Công tác chỉnh đốn Đảng hiện nay",
        points: [
          "Thực trạng suy thoái, tham nhũng vẫn còn",
          "Quyết tâm làm sạch bộ máy",
          "\"Không có vùng cấm, không có ngoại lệ\"",
          "Ý nghĩa: củng cố niềm tin của nhân dân"
        ]
      }
    },
    {
      id: 11,
      title: "Công nghệ và minh bạch hóa",
      icon: "💻",
      content: {
        title: "Ứng dụng công nghệ để kiểm soát quyền lực",
        examples: [
          "Cổng dịch vụ công trực tuyến",
          "Ứng dụng VNeID",
          "Dữ liệu dân cư số hóa"
        ],
        quote: "\"Nhốt quyền lực vào trong lồng cơ chế\"",
        meaning: "Công khai, minh bạch là công cụ hữu hiệu nhất để chống tham nhũng"
      }
    },
    {
      id: 12,
      title: "Trách nhiệm của sinh viên",
      icon: "🎓",
      content: {
        responsibilities: [
          { icon: "📚", text: "Không thờ ơ với chính trị" },
          { icon: "⚖️", text: "Rèn luyện đạo đức, liêm chính học thuật" },
          { icon: "💬", text: "Tham gia phản biện xã hội văn minh" },
          { icon: "🌱", text: "Là thế hệ kế cận xây dựng đất nước" }
        ]
      }
    },
    {
      id: 13,
      title: "Kết luận",
      icon: "🎯",
      content: {
        conclusions: [
          "Sự ra đời của Đảng là tất yếu lịch sử",
          "Vai trò lãnh đạo phụ thuộc vào sự trong sạch, vững mạnh",
          "Niềm tin của nhân dân là thước đo cuối cùng"
        ],
        image: {
          desc: "Con thuyền Việt Nam ra khơi",
          elements: [
            "Đảng là người cầm lái",
            "Nhân dân là sức đẩy con thuyền tiến lên"
          ]
        }
      }
    }
  ];

  const scrollToSection = (index: number) => {
    setActiveSection(index);
    const element = document.getElementById(`section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-red-950 via-red-900 to-red-950 font-[var(--font-vietnam)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-red-950/95 backdrop-blur-sm border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2">
              <span>←</span> Về trang chủ
            </Link>
            <h1 className="text-white font-bold text-lg hidden md:block">
              Tư tưởng Hồ Chí Minh về Đảng cầm quyền
            </h1>
            <div className="text-yellow-400 text-sm">
              {activeSection + 1} / {sections.length}
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-16 bottom-0 w-64 bg-red-950/80 backdrop-blur-sm border-r border-yellow-500/20 overflow-y-auto hidden lg:block">
        <div className="p-4 space-y-2">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(index)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                activeSection === index
                  ? "bg-yellow-500/20 text-yellow-400 border-l-4 border-yellow-500"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="text-xl">{section.icon}</span>
              <span className="text-sm">{section.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="lg:ml-64 pt-20 pb-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
          </div>
          <div className="relative text-center max-w-4xl">
            <div className="text-6xl mb-8">⭐</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Củng cố niềm tin của Nhân dân
              <span className="text-yellow-400 block mt-2">đối với Đảng cầm quyền</span>
            </h1>
            <p className="text-xl md:text-2xl text-yellow-200 mb-8">
              theo tư tưởng Hồ Chí Minh
            </p>
            <button
              onClick={() => scrollToSection(0)}
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold rounded-xl transition-all hover:scale-105"
            >
              Bắt đầu thuyết trình →
            </button>
          </div>
        </section>

        {/* Content Sections */}
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={`section-${index}`}
            className="min-h-screen px-4 py-20 flex items-center"
            onMouseEnter={() => setActiveSection(index)}
          >
            <div className="max-w-4xl mx-auto w-full">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-12">
                <span className="text-5xl">{section.icon}</span>
                <div>
                  <span className="text-yellow-500 text-sm font-medium">Phần {section.id}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{section.title}</h2>
                </div>
              </div>

              {/* Dynamic Content Rendering */}
              {section.id === 1 && (
                <div className="space-y-8">
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-6">{section.content.mainTitle}</h3>
                    <ul className="space-y-4">
                      {section.content.points?.map((point, i) => (
                        <li key={i} className="flex items-start gap-4 text-gray-200 text-lg">
                          <span className="text-yellow-500 text-2xl">✦</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {section.id === 2 && (
                <div className="space-y-8">
                  <h3 className="text-2xl text-yellow-400 mb-6">{section.content.subtitle}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.content.formulas?.map((f, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="text-yellow-500 text-sm mb-2">{f.label}</div>
                        <div className="text-white font-mono text-lg bg-black/30 rounded-lg p-4">{f.formula}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                    <h4 className="text-green-400 font-bold mb-4">Ý nghĩa:</h4>
                    <ul className="space-y-2">
                      {(section.content.meaning as string[] | undefined)?.map((m: string, i: number) => (
                        <li key={i} className="text-gray-200 flex items-center gap-2">
                          <span className="text-green-500">→</span> {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                    <h4 className="text-blue-400 font-bold mb-4">Ví dụ lịch sử:</h4>
                    <ul className="space-y-2">
                      {(section.content.examples as string[] | undefined)?.map((e: string, i: number) => (
                        <li key={i} className="text-gray-200 flex items-center gap-2">
                          <span className="text-blue-500">•</span> {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {section.id === 3 && (
                <div className="space-y-8">
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8">
                    <p className="text-xl text-gray-200 italic">{section.content.mainPoint}</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {section.content.milestones?.map((m, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-6 text-center border border-white/10 hover:border-yellow-500/50 transition-all">
                        <div className="text-4xl font-bold text-yellow-500 mb-2">{m.year}</div>
                        <div className="text-white">{m.event}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                    <h4 className="text-red-400 font-bold mb-4">Phân tích chiều sâu:</h4>
                    <ul className="space-y-3">
                      {section.content.analysis?.map((a, i) => (
                        <li key={i} className="text-gray-200 flex items-start gap-3">
                          <span className="text-red-500 text-xl">★</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {section.id === 4 && (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    {section.content.roles?.map((r, i) => (
                      <div key={i} className="bg-linear-to-b from-yellow-500/20 to-transparent rounded-xl p-6 border border-yellow-500/30">
                        <div className="text-3xl mb-4">{["🔦", "💪", "🌍"][i]}</div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-2">{r.title}</h4>
                        <p className="text-gray-300">{r.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/10 rounded-2xl p-8 text-center">
                    <div className="text-4xl mb-4">⚡</div>
                    <p className="text-xl text-white font-medium">{section.content.principle}</p>
                  </div>
                </div>
              )}

              {section.id === 5 && (
                <div className="space-y-8">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <p className="text-gray-300">{section.content.definition}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.content.twoSides?.map((s, i) => (
                      <div key={i} className={`rounded-xl p-6 ${i === 0 ? "bg-green-500/10 border-green-500/30" : "bg-red-500/10 border-red-500/30"} border`}>
                        <div className="text-2xl mb-2">{i === 0 ? "✅" : "⚠️"}</div>
                        <h4 className={`font-bold text-lg mb-2 ${i === 0 ? "text-green-400" : "text-red-400"}`}>{s.side}</h4>
                        <p className="text-gray-300">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-xl p-8">
                    <p className="text-xl text-white italic mb-4">{section.content.quote}</p>
                    <p className="text-yellow-500 font-bold">— {section.content.author}</p>
                  </div>
                </div>
              )}

              {section.id === 6 && (
                <div className="grid md:grid-cols-3 gap-6">
                  {section.content.diseases?.map((d, i) => (
                    <div key={i} className={`rounded-xl p-6 border ${
                      d.color === "red" ? "bg-red-500/10 border-red-500/30" :
                      d.color === "orange" ? "bg-orange-500/10 border-orange-500/30" :
                      "bg-yellow-500/10 border-yellow-500/30"
                    }`}>
                      <div className="text-4xl mb-4">{["💰", "🗑️", "📋"][i]}</div>
                      <h4 className={`font-bold text-xl mb-2 ${
                        d.color === "red" ? "text-red-400" :
                        d.color === "orange" ? "text-orange-400" :
                        "text-yellow-400"
                      }`}>{d.name}</h4>
                      <p className="text-gray-300 mb-4">{d.desc}</p>
                      <div className="bg-black/30 rounded-lg p-3">
                        <span className="text-gray-400 text-sm">Ví dụ: </span>
                        <span className="text-white text-sm">{d.example}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {section.id === 7 && (
                <div className="space-y-8">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-8">
                    <h4 className="text-red-400 font-bold text-xl mb-4">Định nghĩa:</h4>
                    <p className="text-gray-200 text-lg">{section.content.definition}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="text-white font-bold mb-4">Tác hại:</h4>
                    <ul className="space-y-3">
                      {section.content.harms?.map((h, i) => (
                        <li key={i} className="text-gray-200 flex items-center gap-3">
                          <span className="text-red-500">✗</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-linear-to-r from-purple-500/20 to-red-500/20 rounded-xl p-8 text-center">
                    <div className="text-4xl mb-4">🦠</div>
                    <p className="text-white italic text-lg">&quot;{section.content.metaphor}&quot;</p>
                  </div>
                </div>
              )}

              {section.id === 8 && (
                <div className="space-y-4">
                  {section.content.principles?.map((p, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold text-2xl shrink-0">
                        {p.num}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">{p.name}</h4>
                        <p className="text-gray-400">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {section.id === 9 && (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8">
                      <h4 className="text-green-400 font-bold text-2xl mb-6">{section.content.duc?.title}</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {section.content.duc?.values.map((v, i) => (
                          <div key={i} className="bg-black/30 rounded-lg p-4 text-center">
                            <span className="text-white font-bold text-xl">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-8">
                      <h4 className="text-blue-400 font-bold text-2xl mb-6">{section.content.tai?.title}</h4>
                      <p className="text-gray-300 text-lg">{section.content.tai?.desc}</p>
                    </div>
                  </div>
                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-xl p-8">
                    <p className="text-white italic text-lg">{section.content.relationship}</p>
                  </div>
                </div>
              )}

              {section.id === 10 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">🔥</div>
                    <h3 className="text-2xl text-yellow-400 font-bold">{section.content.title}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.content.points?.map((p, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10 flex items-center gap-4">
                        <span className="text-2xl">{["📊", "🧹", "⚖️", "💪"][i]}</span>
                        <span className="text-gray-200">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.id === 11 && (
                <div className="space-y-8">
                  <h3 className="text-2xl text-yellow-400 font-bold text-center">{section.content.title}</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {section.content.examples?.map((e, i) => (
                      <div key={i} className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 text-center">
                        <div className="text-4xl mb-4">{["🌐", "📱", "💾"][i]}</div>
                        <p className="text-white">{e}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 text-center">
                    <p className="text-2xl text-white italic mb-4">&quot;{section.content.quote}&quot;</p>
                    <p className="text-gray-400">{section.content.meaning}</p>
                  </div>
                </div>
              )}

              {section.id === 12 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {section.content.responsibilities?.map((r, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all flex items-center gap-4">
                      <span className="text-4xl">{r.icon}</span>
                      <span className="text-white text-lg">{r.text}</span>
                    </div>
                  ))}
                </div>
              )}

              {section.id === 13 && (
                <div className="space-y-8">
                  <div className="space-y-4">
                    {section.content.conclusions?.map((c, i) => (
                      <div key={i} className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 flex items-center gap-4">
                        <span className="text-3xl text-yellow-500">★</span>
                        <span className="text-white text-lg">{c}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-linear-to-r from-blue-500/20 via-yellow-500/20 to-red-500/20 rounded-2xl p-8 text-center">
                    <div className="text-6xl mb-4">⛵</div>
                    <h4 className="text-2xl text-white font-bold mb-6">{section.content.image?.desc}</h4>
                    <div className="flex justify-center gap-8">
                      {section.content.image?.elements.map((e, i) => (
                        <div key={i} className="bg-black/30 rounded-lg p-4">
                          <span className="text-gray-200">{e}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center pt-8">
                    <p className="text-yellow-400 text-xl font-bold mb-4">🙏 Cảm ơn đã lắng nghe!</p>
                    <Link
                      href="/"
                      className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold rounded-xl transition-all hover:scale-105"
                    >
                      Chơi thử game →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}
      </main>

      {/* Navigation Arrows */}
      <div className="fixed bottom-8 right-8 flex gap-4 z-50">
        <button
          onClick={() => scrollToSection(Math.max(0, activeSection - 1))}
          disabled={activeSection === 0}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all"
        >
          ↑
        </button>
        <button
          onClick={() => scrollToSection(Math.min(sections.length - 1, activeSection + 1))}
          disabled={activeSection === sections.length - 1}
          className="w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-red-900 font-bold transition-all"
        >
          ↓
        </button>
      </div>
    </div>
  );
}
