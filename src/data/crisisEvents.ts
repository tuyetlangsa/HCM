export type CrisisOption = {
  text: string;
  impacts: {
    trust: number;
    politicalCapital: number;
    time: number;
  };
  isNegative: boolean;
};

export type CrisisEvent = {
  id: string;
  title: string;
  description: string;
  icon: string;
  options: CrisisOption[];
};

export const crisisEvents: CrisisEvent[] = [
  {
    id: "CR01",
    title: "Thiên tai lũ lụt",
    description: "Lũ lụt bất ngờ tàn phá nhiều xã, hàng trăm hộ dân mất nhà cửa. Áp lực từ mọi phía đòi hỏi phản ứng nhanh chóng và quyết đoán.",
    icon: "🌊",
    options: [
      {
        text: "Trực tiếp xuống hiện trường chỉ đạo cứu trợ",
        impacts: { trust: 15, politicalCapital: 10, time: -20 },
        isNegative: false
      },
      {
        text: "Huy động tối đa nguồn lực, điều phối từ trung tâm",
        impacts: { trust: 10, politicalCapital: -10, time: -10 },
        isNegative: false
      },
      {
        text: "Giao cho cấp dưới xử lý theo quy trình",
        impacts: { trust: 0, politicalCapital: 5, time: 0 },
        isNegative: false
      },
      {
        text: "Chờ báo cáo đầy đủ rồi mới quyết định",
        impacts: { trust: -10, politicalCapital: 5, time: 5 },
        isNegative: true
      },
      {
        text: "Đổ lỗi cho địa phương, tập trung công việc khác",
        impacts: { trust: -25, politicalCapital: -5, time: 10 },
        isNegative: true
      }
    ]
  },
  {
    id: "CR02",
    title: "Scandal báo chí",
    description: "Báo chí phanh phui một vụ việc tiêu cực từ quá khứ liên quan đến đơn vị. Dư luận đang sục sôi và chờ đợi phản hồi chính thức.",
    icon: "📰",
    options: [
      {
        text: "Họp báo công khai, thừa nhận và cam kết khắc phục",
        impacts: { trust: 12, politicalCapital: -15, time: -15 },
        isNegative: false
      },
      {
        text: "Phát ngôn chính thức với thông tin có chọn lọc",
        impacts: { trust: 5, politicalCapital: -5, time: -5 },
        isNegative: false
      },
      {
        text: "Im lặng, chờ dư luận lắng xuống",
        impacts: { trust: -8, politicalCapital: 5, time: 5 },
        isNegative: true
      },
      {
        text: "Phản bác báo chí, khẳng định thông tin sai sự thật",
        impacts: { trust: -15, politicalCapital: 0, time: 0 },
        isNegative: true
      },
      {
        text: "Tìm cách gây áp lực để rút bài",
        impacts: { trust: -20, politicalCapital: -20, time: 10 },
        isNegative: true
      }
    ]
  },
  {
    id: "CR03",
    title: "Biểu tình đông người",
    description: "Hàng trăm người dân tập trung phản đối một chính sách mới. Tình hình căng thẳng và có nguy cơ leo thang.",
    icon: "✊",
    options: [
      {
        text: "Trực tiếp đối thoại với đại diện người dân",
        impacts: { trust: 18, politicalCapital: -10, time: -15 },
        isNegative: false
      },
      {
        text: "Cử người có uy tín đối thoại, cam kết xem xét",
        impacts: { trust: 10, politicalCapital: 0, time: -10 },
        isNegative: false
      },
      {
        text: "Mời lực lượng giữ trật tự, chờ giải tán tự nhiên",
        impacts: { trust: -5, politicalCapital: 5, time: 5 },
        isNegative: true
      },
      {
        text: "Phớt lờ, tiếp tục công việc bình thường",
        impacts: { trust: -15, politicalCapital: 0, time: 10 },
        isNegative: true
      },
      {
        text: "Cưỡng chế giải tán để ổn định trật tự",
        impacts: { trust: -30, politicalCapital: -15, time: 5 },
        isNegative: true
      }
    ]
  },
  {
    id: "CR04",
    title: "Cấp trên bị điều tra",
    description: "Lãnh đạo cấp trên của bạn bị đưa vào diện điều tra tham nhũng. Bạn từng có quan hệ công việc chặt chẽ với người này.",
    icon: "🔍",
    options: [
      {
        text: "Chủ động báo cáo những gì biết, phối hợp điều tra",
        impacts: { trust: 15, politicalCapital: -20, time: -10 },
        isNegative: false
      },
      {
        text: "Trả lời đúng khi được hỏi, không chủ động",
        impacts: { trust: 5, politicalCapital: 0, time: 0 },
        isNegative: false
      },
      {
        text: "Giữ khoảng cách, tập trung công việc hiện tại",
        impacts: { trust: 0, politicalCapital: 5, time: 5 },
        isNegative: false
      },
      {
        text: "Tìm cách bảo vệ hình ảnh cá nhân trước",
        impacts: { trust: -10, politicalCapital: 10, time: 5 },
        isNegative: true
      },
      {
        text: "Tiêu hủy tài liệu có thể bất lợi cho mình",
        impacts: { trust: -25, politicalCapital: -10, time: -5 },
        isNegative: true
      }
    ]
  },
  {
    id: "CR05",
    title: "Dịch bệnh bùng phát",
    description: "Một dịch bệnh nguy hiểm bùng phát trong địa bàn quản lý. Người dân hoang mang, y tế quá tải, cần quyết định khẩn cấp.",
    icon: "🦠",
    options: [
      {
        text: "Công bố tình trạng khẩn cấp, huy động toàn bộ nguồn lực",
        impacts: { trust: 20, politicalCapital: -15, time: -20 },
        isNegative: false
      },
      {
        text: "Triển khai biện pháp phòng chống theo quy trình",
        impacts: { trust: 10, politicalCapital: -5, time: -10 },
        isNegative: false
      },
      {
        text: "Tham khảo ý kiến chuyên gia trước khi quyết định",
        impacts: { trust: 5, politicalCapital: 0, time: -15 },
        isNegative: false
      },
      {
        text: "Giấu thông tin để tránh hoang mang",
        impacts: { trust: -20, politicalCapital: 5, time: 10 },
        isNegative: true
      },
      {
        text: "Đổ lỗi cho y tế cơ sở thiếu năng lực",
        impacts: { trust: -15, politicalCapital: -10, time: 5 },
        isNegative: true
      }
    ]
  },
  {
    id: "CR06",
    title: "Tham nhũng nội bộ",
    description: "Phát hiện cấp dưới trực tiếp có hành vi tham nhũng nghiêm trọng. Người này có quan hệ rộng và được nhiều người bảo vệ.",
    icon: "💰",
    options: [
      {
        text: "Lập tức báo cáo cơ quan chức năng, đình chỉ công tác",
        impacts: { trust: 18, politicalCapital: -25, time: -15 },
        isNegative: false
      },
      {
        text: "Thu thập thêm bằng chứng trước khi hành động",
        impacts: { trust: 8, politicalCapital: -5, time: -10 },
        isNegative: false
      },
      {
        text: "Nhắc nhở riêng, yêu cầu tự khắc phục",
        impacts: { trust: -5, politicalCapital: 10, time: 5 },
        isNegative: true
      },
      {
        text: "Điều chuyển công tác để tránh scandal",
        impacts: { trust: -12, politicalCapital: 5, time: 5 },
        isNegative: true
      },
      {
        text: "Che giấu, chia sẻ lợi ích",
        impacts: { trust: -30, politicalCapital: 15, time: 10 },
        isNegative: true
      }
    ]
  },
  {
    id: "CR07",
    title: "Khiếu nại đông người",
    description: "Đoàn khiếu nại gồm hàng chục hộ dân kéo đến trụ sở, mang theo đơn thư và băng rôn. Họ đã chờ đợi nhiều tháng không được giải quyết.",
    icon: "📋",
    options: [
      {
        text: "Tiếp đoàn ngay, lắng nghe và cam kết lộ trình",
        impacts: { trust: 15, politicalCapital: -5, time: -15 },
        isNegative: false
      },
      {
        text: "Cử cán bộ có thẩm quyền tiếp, hẹn trả lời sau",
        impacts: { trust: 8, politicalCapital: 0, time: -5 },
        isNegative: false
      },
      {
        text: "Yêu cầu đăng ký lịch tiếp dân theo quy định",
        impacts: { trust: 0, politicalCapital: 5, time: 5 },
        isNegative: false
      },
      {
        text: "Gọi lực lượng bảo vệ giải tán đám đông",
        impacts: { trust: -15, politicalCapital: 0, time: 10 },
        isNegative: true
      },
      {
        text: "Đổ lỗi cho cấp dưới, từ chối trách nhiệm",
        impacts: { trust: -20, politicalCapital: -5, time: 5 },
        isNegative: true
      }
    ]
  },
  {
    id: "CR08",
    title: "Sự cố môi trường",
    description: "Nhà máy trong khu công nghiệp xả thải trái phép, gây ô nhiễm nguồn nước. Người dân phẫn nộ, truyền thông đổ dồn.",
    icon: "🏭",
    options: [
      {
        text: "Đình chỉ ngay nhà máy, điều tra và xử lý nghiêm",
        impacts: { trust: 20, politicalCapital: -20, time: -15 },
        isNegative: false
      },
      {
        text: "Yêu cầu khắc phục, giám sát chặt chẽ",
        impacts: { trust: 10, politicalCapital: -10, time: -10 },
        isNegative: false
      },
      {
        text: "Thành lập đoàn kiểm tra, chờ kết luận",
        impacts: { trust: 5, politicalCapital: 0, time: -5 },
        isNegative: false
      },
      {
        text: "Yêu cầu nhà máy tự cam kết, không công khai",
        impacts: { trust: -10, politicalCapital: 10, time: 5 },
        isNegative: true
      },
      {
        text: "Bao che vì nhà máy có quan hệ đặc biệt",
        impacts: { trust: -25, politicalCapital: 15, time: 10 },
        isNegative: true
      }
    ]
  },
  {
    id: "CR09",
    title: "Tin giả lan truyền",
    description: "Thông tin sai sự thật về lãnh đạo lan truyền chóng mặt trên mạng xã hội, gây hoang mang và ảnh hưởng uy tín.",
    icon: "📱",
    options: [
      {
        text: "Họp báo đính chính, công khai minh bạch thông tin",
        impacts: { trust: 12, politicalCapital: -10, time: -15 },
        isNegative: false
      },
      {
        text: "Phát thông cáo chính thức trên các kênh uy tín",
        impacts: { trust: 8, politicalCapital: -5, time: -5 },
        isNegative: false
      },
      {
        text: "Chờ dư luận tự điều chỉnh",
        impacts: { trust: -5, politicalCapital: 5, time: 10 },
        isNegative: true
      },
      {
        text: "Truy tìm và xử lý người tung tin",
        impacts: { trust: -8, politicalCapital: 0, time: -10 },
        isNegative: true
      },
      {
        text: "Tung tin phản bác, đánh lạc hướng dư luận",
        impacts: { trust: -20, politicalCapital: -10, time: -5 },
        isNegative: true
      }
    ]
  },
  {
    id: "CR10",
    title: "Xung đột đất đai",
    description: "Tranh chấp đất đai giữa người dân và doanh nghiệp leo thang thành xung đột. Có nguy cơ bạo lực nếu không can thiệp kịp thời.",
    icon: "🏗️",
    options: [
      {
        text: "Trực tiếp hòa giải, tạm dừng dự án để đối thoại",
        impacts: { trust: 18, politicalCapital: -15, time: -20 },
        isNegative: false
      },
      {
        text: "Thành lập tổ công tác liên ngành giải quyết",
        impacts: { trust: 10, politicalCapital: -5, time: -10 },
        isNegative: false
      },
      {
        text: "Yêu cầu các bên tuân thủ quy trình pháp luật",
        impacts: { trust: 5, politicalCapital: 5, time: 0 },
        isNegative: false
      },
      {
        text: "Bảo vệ quyền lợi doanh nghiệp để giữ đầu tư",
        impacts: { trust: -15, politicalCapital: 10, time: 5 },
        isNegative: true
      },
      {
        text: "Cưỡng chế để hoàn thành dự án đúng tiến độ",
        impacts: { trust: -30, politicalCapital: -10, time: 10 },
        isNegative: true
      }
    ]
  }
];
