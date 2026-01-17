export type ScenarioOption = {
  text: string;
  trustImpact: number;
  isNegative: boolean;
  multiplierGroup?: string;
};

export type Scenario = {
  id: string;
  roleId: string;
  title: string;
  description: string;
  ideologyTag: string;
  options: ScenarioOption[];
};

export type Role = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export const roles: Role[] = [
  {
    id: "R01",
    name: "Lãnh đạo cấp cao",
    description: "Quyết sách chiến lược, chịu trách nhiệm toàn diện, là tấm gương đạo đức",
    icon: "🏛️"
  },
  {
    id: "R03",
    name: "Cán bộ thanh tra – kỷ luật",
    description: "Kiểm soát sai phạm, giữ kỷ cương, chống giặc nội xâm",
    icon: "⚖️"
  },
  {
    id: "R07",
    name: "Cán bộ địa phương",
    description: "Thi hành chính sách, tiếp xúc trực tiếp với người dân",
    icon: "👥"
  }
];

export const scenarios: Scenario[] = [
  // ============= R01: Lãnh đạo cấp cao =============
  {
    id: "R01_S01",
    roleId: "R01",
    title: "Quyết sách gây hậu quả lớn",
    description: "Một quyết định chiến lược sai lầm gây thiệt hại kinh tế – xã hội.",
    ideologyTag: "Trách nhiệm",
    options: [
      { text: "Công khai nhận trách nhiệm, xin lỗi nhân dân", trustImpact: 10, isNegative: false },
      { text: "Thừa nhận sai sót nhưng nhấn mạnh bối cảnh khách quan", trustImpact: 5, isNegative: false },
      { text: "Xem đây là quyết định tập thể, không cá nhân hóa trách nhiệm", trustImpact: 0, isNegative: false },
      { text: "Chủ động sửa sai âm thầm trước khi phát ngôn", trustImpact: 0, isNegative: false },
      { text: "Giữ im lặng để tránh khủng hoảng lan rộng", trustImpact: -5, isNegative: true, multiplierGroup: "trach-nhiem" }
    ]
  },
  {
    id: "R01_S02",
    roleId: "R01",
    title: "Người thân dính sai phạm",
    description: "Người thân của bạn bị phát hiện có dấu hiệu tham nhũng.",
    ideologyTag: "Liêm chính",
    options: [
      { text: "Chuyển vụ việc cho cơ quan độc lập xử lý", trustImpact: 10, isNegative: false },
      { text: "Tạm đình chỉ công tác người thân trong thời gian điều tra", trustImpact: 5, isNegative: false },
      { text: "Đứng ngoài, chờ kết luận chính thức", trustImpact: 0, isNegative: false },
      { text: "Xử lý nội bộ trước khi chuyển cơ quan chức năng", trustImpact: -5, isNegative: true, multiplierGroup: "liem-chinh" },
      { text: "Trao đổi riêng để người thân tự khắc phục", trustImpact: -10, isNegative: true, multiplierGroup: "liem-chinh" }
    ]
  },
  {
    id: "R01_S03",
    roleId: "R01",
    title: "Góp ý thẳng thắn từ cấp dưới",
    description: "Một cán bộ trẻ góp ý công khai về sai sót lãnh đạo.",
    ideologyTag: "Tự phê bình",
    options: [
      { text: "Công khai phản hồi, tiếp thu có chọn lọc", trustImpact: 10, isNegative: false },
      { text: "Ghi nhận nhưng yêu cầu góp ý qua kênh nội bộ", trustImpact: 5, isNegative: false },
      { text: "Tiếp thu một phần, bác bỏ phần còn lại", trustImpact: 5, isNegative: false },
      { text: "Cảm ơn nhưng không phản hồi thêm", trustImpact: 0, isNegative: false },
      { text: "Không phản hồi để tránh tiền lệ tranh luận công khai", trustImpact: -5, isNegative: true, multiplierGroup: "tu-phe-binh" }
    ]
  },
  {
    id: "R01_S04",
    roleId: "R01",
    title: "Quyết định quan trọng gấp",
    description: "Một chính sách lớn cần quyết định nhanh.",
    ideologyTag: "Dân chủ",
    options: [
      { text: "Tham vấn nhanh nhóm chuyên gia nòng cốt", trustImpact: 10, isNegative: false },
      { text: "Tham khảo ý kiến tập thể chủ chốt rồi quyết", trustImpact: 5, isNegative: false },
      { text: "Quyết định nhanh và cam kết chịu trách nhiệm", trustImpact: 5, isNegative: false },
      { text: "Chấp nhận rủi ro để giữ thời cơ", trustImpact: 0, isNegative: false },
      { text: "Hoãn quyết định để tránh sai sót", trustImpact: -5, isNegative: true, multiplierGroup: "dan-chu" }
    ]
  },
  {
    id: "R01_S05",
    roleId: "R01",
    title: "Đối thoại với dân",
    description: "Người dân bức xúc yêu cầu gặp lãnh đạo.",
    ideologyTag: "Gần dân",
    options: [
      { text: "Đối thoại trực tiếp với đại diện người dân", trustImpact: 10, isNegative: false },
      { text: "Tiếp dân nhưng giới hạn nội dung trao đổi", trustImpact: 5, isNegative: false },
      { text: "Đối thoại trực tuyến thay vì gặp trực tiếp", trustImpact: 0, isNegative: false },
      { text: "Cử lãnh đạo chuyên môn tiếp thay", trustImpact: 0, isNegative: false },
      { text: "Chờ báo cáo tổng hợp rồi mới phản hồi", trustImpact: -5, isNegative: true, multiplierGroup: "gan-dan" }
    ]
  },
  {
    id: "R01_S06",
    roleId: "R01",
    title: "Phát ngôn gây tranh cãi",
    description: "Một phát ngôn của bạn gây phản ứng mạnh trong dư luận.",
    ideologyTag: "Truyền thông",
    options: [
      { text: "Giải thích rõ hơn ý định ban đầu", trustImpact: 10, isNegative: false },
      { text: "Xin lỗi về cách diễn đạt nhưng giữ quan điểm", trustImpact: 5, isNegative: false },
      { text: "Đính chính có chọn lọc", trustImpact: 5, isNegative: false },
      { text: "Để cấp dưới phát ngôn thay", trustImpact: -5, isNegative: true, multiplierGroup: "truyen-thong" },
      { text: "Giữ im lặng chờ dư luận lắng xuống", trustImpact: -5, isNegative: true, multiplierGroup: "truyen-thong" }
    ]
  },
  {
    id: "R01_S07",
    roleId: "R01",
    title: "Bổ nhiệm cán bộ thân cận",
    description: "Đề xuất bổ nhiệm người thân tín nhưng năng lực trung bình.",
    ideologyTag: "Nhân sự",
    options: [
      { text: "Mở tuyển chọn minh bạch, chọn người phù hợp nhất", trustImpact: 10, isNegative: false },
      { text: "Bổ nhiệm thử thách kèm cơ chế đánh giá", trustImpact: 5, isNegative: false },
      { text: "Chia nhỏ quyền hạn để giảm rủi ro", trustImpact: 5, isNegative: false },
      { text: "Bổ nhiệm ngắn hạn rồi xem xét lại", trustImpact: 0, isNegative: false },
      { text: "Ưu tiên người thân để dễ phối hợp", trustImpact: -10, isNegative: true, multiplierGroup: "nhan-su" }
    ]
  },
  {
    id: "R01_S08",
    roleId: "R01",
    title: "Vượt quy trình vì mục tiêu tốt",
    description: "Một số đề xuất vượt luật để đạt kết quả nhanh.",
    ideologyTag: "Pháp quyền",
    options: [
      { text: "Thí điểm trong phạm vi hẹp, báo cáo song song", trustImpact: 10, isNegative: false },
      { text: "Xin cơ chế đặc thù trước khi triển khai", trustImpact: 5, isNegative: false },
      { text: "Triển khai kín rồi hoàn thiện thủ tục sau", trustImpact: 0, isNegative: false },
      { text: "Xin ý kiến cấp trên dù có thể lỡ cơ hội", trustImpact: 5, isNegative: false },
      { text: "Làm trước, hợp thức hóa sau", trustImpact: -10, isNegative: true, multiplierGroup: "phap-quyen" }
    ]
  },
  {
    id: "R01_S09",
    roleId: "R01",
    title: "Chạy theo thành tích",
    description: "Áp lực phải có con số đẹp trong báo cáo.",
    ideologyTag: "Chiến lược",
    options: [
      { text: "Báo cáo trung thực, chấp nhận kết quả", trustImpact: 10, isNegative: false },
      { text: "Giữ số liệu thật nhưng trình bày tích cực", trustImpact: 5, isNegative: false },
      { text: "Chỉ công bố các chỉ số có lợi", trustImpact: -5, isNegative: true, multiplierGroup: "chien-luoc" },
      { text: "Điều chỉnh nhẹ số liệu", trustImpact: -5, isNegative: true, multiplierGroup: "chien-luoc" },
      { text: "Thành tích hóa báo cáo", trustImpact: -10, isNegative: true, multiplierGroup: "chien-luoc" }
    ]
  },
  {
    id: "R01_S10",
    roleId: "R01",
    title: "Khủng hoảng bất ngờ",
    description: "Thiên tai hoặc sự cố lớn xảy ra.",
    ideologyTag: "Trách nhiệm",
    options: [
      { text: "Trực tiếp chỉ đạo và chịu trách nhiệm", trustImpact: 10, isNegative: false },
      { text: "Phân quyền cho cấp dưới xử lý theo chuyên môn", trustImpact: 5, isNegative: false },
      { text: "Chờ thêm thông tin trước khi xuất hiện", trustImpact: 0, isNegative: false },
      { text: "Chờ báo cáo đầy đủ rồi mới quyết", trustImpact: 0, isNegative: false },
      { text: "Đùn đẩy trách nhiệm", trustImpact: -10, isNegative: true, multiplierGroup: "trach-nhiem" }
    ]
  },
  {
    id: "R01_S11",
    roleId: "R01",
    title: "Khoảng cách với cơ sở",
    description: "Bạn ít đi thực tế cơ sở trong thời gian dài.",
    ideologyTag: "Gần dân",
    options: [
      { text: "Tăng cường đi cơ sở đột xuất", trustImpact: 10, isNegative: false },
      { text: "Đi cơ sở theo lịch chọn lọc", trustImpact: 5, isNegative: false },
      { text: "Họp trực tuyến với địa phương", trustImpact: 0, isNegative: false },
      { text: "Chỉ đọc báo cáo tổng hợp", trustImpact: -5, isNegative: true, multiplierGroup: "gan-dan" },
      { text: "Phớt lờ phản ánh", trustImpact: -10, isNegative: true, multiplierGroup: "gan-dan" }
    ]
  },
  {
    id: "R01_S12",
    roleId: "R01",
    title: "Lối sống xa hoa",
    description: "Dư luận phản ánh lãnh đạo sống xa dân.",
    ideologyTag: "Đạo đức",
    options: [
      { text: "Chấn chỉnh, sống giản dị hơn", trustImpact: 10, isNegative: false },
      { text: "Công khai minh bạch nguồn gốc tài sản", trustImpact: 5, isNegative: false },
      { text: "Giảm xuất hiện công khai một thời gian", trustImpact: 0, isNegative: false },
      { text: "Giải thích do hoàn cảnh cá nhân", trustImpact: -5, isNegative: true, multiplierGroup: "dao-duc" },
      { text: "Bỏ ngoài tai dư luận", trustImpact: -10, isNegative: true, multiplierGroup: "dao-duc" }
    ]
  },
  {
    id: "R01_S13",
    roleId: "R01",
    title: "Mâu thuẫn nội bộ",
    description: "Nội bộ lãnh đạo có chia rẽ.",
    ideologyTag: "Đoàn kết",
    options: [
      { text: "Hòa giải, đặt lợi ích chung lên trên", trustImpact: 10, isNegative: false },
      { text: "Gặp riêng từng bên để lắng nghe", trustImpact: 5, isNegative: false },
      { text: "Đứng ngoài, giữ trung lập", trustImpact: 0, isNegative: false },
      { text: "Tạm gác mâu thuẫn để ổn định", trustImpact: 0, isNegative: false },
      { text: "Lợi dụng để củng cố quyền lực", trustImpact: -10, isNegative: true, multiplierGroup: "doan-ket" }
    ]
  },
  {
    id: "R01_S14",
    roleId: "R01",
    title: "Đề xuất cải cách mạnh",
    description: "Một đề xuất cải cách có rủi ro nhưng cần thiết.",
    ideologyTag: "Đổi mới",
    options: [
      { text: "Dũng cảm cải cách có lộ trình", trustImpact: 10, isNegative: false },
      { text: "Thí điểm ở quy mô nhỏ", trustImpact: 5, isNegative: false },
      { text: "Cải cách từng phần ít rủi ro", trustImpact: 0, isNegative: false },
      { text: "Trì hoãn để an toàn", trustImpact: -5, isNegative: true, multiplierGroup: "doi-moi" },
      { text: "Bác bỏ hoàn toàn", trustImpact: -10, isNegative: true, multiplierGroup: "doi-moi" }
    ]
  },
  {
    id: "R01_S15",
    roleId: "R01",
    title: "Đánh giá cuối nhiệm kỳ",
    description: "Tổng kết nhiệm kỳ lãnh đạo.",
    ideologyTag: "Tự phê bình",
    options: [
      { text: "Nhìn thẳng khuyết điểm và rút kinh nghiệm", trustImpact: 10, isNegative: false },
      { text: "Thừa nhận hạn chế nhưng nhấn mạnh bối cảnh", trustImpact: 5, isNegative: false },
      { text: "Để tập thể đánh giá thay cá nhân", trustImpact: 0, isNegative: false },
      { text: "Chỉ nêu thành tích nổi bật", trustImpact: -5, isNegative: true, multiplierGroup: "tu-phe-binh" },
      { text: "Tô hồng thành tựu", trustImpact: -10, isNegative: true, multiplierGroup: "tu-phe-binh" }
    ]
  },

  // ============= R03: Cán bộ thanh tra – kiểm tra =============
  {
    id: "R03_S01",
    roleId: "R03",
    title: "Phát hiện cán bộ cấp huyện có tài sản bất minh",
    description: "Qua kiểm tra ban đầu, bạn phát hiện một cán bộ có tài sản không phù hợp thu nhập.",
    ideologyTag: "Chống tham nhũng",
    options: [
      { text: "Mở điều tra đầy đủ, công khai kết luận", trustImpact: 10, isNegative: false },
      { text: "Mở điều tra nhưng giữ kín thông tin ban đầu", trustImpact: 5, isNegative: false },
      { text: "Yêu cầu giải trình bổ sung trước khi lập hồ sơ", trustImpact: 0, isNegative: false },
      { text: "Theo dõi thêm để thu thập chứng cứ chắc chắn", trustImpact: 0, isNegative: false },
      { text: "Nhắc nhở nội bộ, không lập biên bản", trustImpact: -5, isNegative: true, multiplierGroup: "chong-tham-nhung" }
    ]
  },
  {
    id: "R03_S02",
    roleId: "R03",
    title: "Đơn tố cáo nặc danh về chạy chức",
    description: "Một lá đơn không ghi tên tố cáo hiện tượng chạy chức, chạy quyền.",
    ideologyTag: "Công bằng",
    options: [
      { text: "Xác minh độc lập, không phân biệt nguồn đơn", trustImpact: 10, isNegative: false },
      { text: "Kiểm tra gián tiếp thông qua hồ sơ cán bộ", trustImpact: 5, isNegative: false },
      { text: "Lưu đơn để theo dõi về sau", trustImpact: 0, isNegative: false },
      { text: "Làm kiểm tra hình thức, không mở rộng", trustImpact: -5, isNegative: true, multiplierGroup: "cong-bang" },
      { text: "Bỏ qua vì không có người đứng tên", trustImpact: -10, isNegative: true, multiplierGroup: "cong-bang" }
    ]
  },
  {
    id: "R03_S03",
    roleId: "R03",
    title: "Cán bộ bị phản ánh gây khó dễ cho dân",
    description: "Người dân phản ánh một cán bộ thường xuyên nhũng nhiễu khi giải quyết thủ tục.",
    ideologyTag: "Gần dân",
    options: [
      { text: "Tiếp dân trực tiếp, kiểm tra thực địa", trustImpact: 10, isNegative: false },
      { text: "Cử tổ công tác khảo sát kín", trustImpact: 5, isNegative: false },
      { text: "Yêu cầu cán bộ giải trình bằng văn bản", trustImpact: 0, isNegative: false },
      { text: "Theo dõi thêm phản ánh", trustImpact: 0, isNegative: false },
      { text: "Cho rằng dân hiểu nhầm", trustImpact: -10, isNegative: true, multiplierGroup: "gan-dan" }
    ]
  },
  {
    id: "R03_S04",
    roleId: "R03",
    title: "Sai phạm nhỏ nhưng tái diễn nhiều lần",
    description: "Một cán bộ vi phạm quy trình nhiều lần nhưng chưa gây hậu quả lớn.",
    ideologyTag: "Kỷ luật",
    options: [
      { text: "Kỷ luật theo đúng quy định", trustImpact: 10, isNegative: false },
      { text: "Áp dụng hình thức nhắc nhở nâng mức", trustImpact: 5, isNegative: false },
      { text: "Lập hồ sơ theo dõi riêng", trustImpact: 0, isNegative: false },
      { text: "Nhắc nhở vì chưa gây hậu quả", trustImpact: -5, isNegative: true, multiplierGroup: "ky-luat" },
      { text: "Bỏ qua để giữ ổn định", trustImpact: -10, isNegative: true, multiplierGroup: "ky-luat" }
    ]
  },
  {
    id: "R03_S05",
    roleId: "R03",
    title: "Áp lực xin giảm nhẹ kỷ luật từ cấp trên",
    description: "Một vụ việc rõ ràng nhưng bạn nhận được chỉ đạo miệng xin xử nhẹ.",
    ideologyTag: "Chí công vô tư",
    options: [
      { text: "Kiên quyết xử lý đúng quy định", trustImpact: 10, isNegative: false },
      { text: "Báo cáo lại bằng văn bản để xin ý kiến chính thức", trustImpact: 5, isNegative: false },
      { text: "Giữ nguyên hồ sơ nhưng kéo dài thời gian", trustImpact: 0, isNegative: false },
      { text: "Giảm mức kỷ luật", trustImpact: -5, isNegative: true, multiplierGroup: "chi-cong-vo-tu" },
      { text: "Rút khỏi vụ việc", trustImpact: -10, isNegative: true, multiplierGroup: "chi-cong-vo-tu" }
    ]
  },
  {
    id: "R03_S06",
    roleId: "R03",
    title: "Dư luận nghi ngờ kết luận thanh tra",
    description: "Mạng xã hội lan truyền nghi ngờ kết luận thanh tra thiếu minh bạch.",
    ideologyTag: "Minh bạch",
    options: [
      { text: "Công bố hồ sơ và giải trình rõ", trustImpact: 10, isNegative: false },
      { text: "Công bố tóm tắt kết luận", trustImpact: 5, isNegative: false },
      { text: "Giải thích qua người phát ngôn", trustImpact: 0, isNegative: false },
      { text: "Im lặng chờ dư luận lắng xuống", trustImpact: -5, isNegative: true, multiplierGroup: "minh-bach" },
      { text: "Phản bác dư luận không kèm dữ liệu", trustImpact: -10, isNegative: true, multiplierGroup: "minh-bach" }
    ]
  },
  {
    id: "R03_S07",
    roleId: "R03",
    title: "Sai phạm liên quan người quen",
    description: "Một cán bộ vi phạm là người có quan hệ cá nhân với bạn.",
    ideologyTag: "Công tâm",
    options: [
      { text: "Báo cáo trung thực, không tham gia xử lý trực tiếp", trustImpact: 10, isNegative: false },
      { text: "Đề nghị phân công người khác thụ lý", trustImpact: 5, isNegative: false },
      { text: "Xử lý đúng quy trình nhưng giữ khoảng cách", trustImpact: 0, isNegative: false },
      { text: "Né tránh vụ việc", trustImpact: -5, isNegative: true, multiplierGroup: "cong-tam" },
      { text: "Che giấu sai phạm", trustImpact: -15, isNegative: true, multiplierGroup: "cong-tam" }
    ]
  },
  {
    id: "R03_S08",
    roleId: "R03",
    title: "Dân chưa thỏa mãn với mức kỷ luật",
    description: "Sau khi công bố kỷ luật, nhiều ý kiến cho rằng xử lý chưa đủ mạnh.",
    ideologyTag: "Cầu thị",
    options: [
      { text: "Rà soát lại toàn bộ quy trình xử lý", trustImpact: 10, isNegative: false },
      { text: "Giải thích rõ căn cứ pháp lý", trustImpact: 5, isNegative: false },
      { text: "Ghi nhận ý kiến để xem xét sau", trustImpact: 0, isNegative: false },
      { text: "Cho rằng dân không hiểu luật", trustImpact: -5, isNegative: true, multiplierGroup: "cau-thi" },
      { text: "Không phản hồi", trustImpact: -10, isNegative: true, multiplierGroup: "cau-thi" }
    ]
  },
  {
    id: "R03_S09",
    roleId: "R03",
    title: "Tiêu cực trong chính đoàn thanh tra",
    description: "Phát hiện thành viên đoàn thanh tra có dấu hiệu nhận lợi ích.",
    ideologyTag: "Tự chỉnh đốn",
    options: [
      { text: "Xử lý nghiêm và báo cáo cấp trên", trustImpact: 10, isNegative: false },
      { text: "Tạm đình chỉ để xác minh", trustImpact: 5, isNegative: false },
      { text: "Thay đổi nhân sự âm thầm", trustImpact: 0, isNegative: false },
      { text: "Nhắc nhở kín", trustImpact: -10, isNegative: true, multiplierGroup: "tu-chinh-don" },
      { text: "Giấu nhẹm vụ việc", trustImpact: -15, isNegative: true, multiplierGroup: "tu-chinh-don" }
    ]
  },
  {
    id: "R03_S10",
    roleId: "R03",
    title: "Sai phạm cũ, liên quan nhiều người",
    description: "Một vụ việc tồn đọng lâu năm liên quan nhiều cấp.",
    ideologyTag: "Không vùng cấm",
    options: [
      { text: "Làm đến cùng, không né tránh", trustImpact: 10, isNegative: false },
      { text: "Xử lý theo từng giai đoạn", trustImpact: 5, isNegative: false },
      { text: "Chỉ xử lý người trực tiếp", trustImpact: -5, isNegative: true, multiplierGroup: "khong-vung-cam" },
      { text: "Thu hẹp phạm vi điều tra", trustImpact: -5, isNegative: true, multiplierGroup: "khong-vung-cam" },
      { text: "Đề nghị khép lại vụ việc", trustImpact: -10, isNegative: true, multiplierGroup: "khong-vung-cam" }
    ]
  },
  {
    id: "R03_S11",
    roleId: "R03",
    title: "Báo chí yêu cầu cung cấp thông tin",
    description: "Phóng viên đề nghị tiếp cận hồ sơ thanh tra.",
    ideologyTag: "Minh bạch",
    options: [
      { text: "Cung cấp thông tin đúng thẩm quyền", trustImpact: 10, isNegative: false },
      { text: "Cung cấp thông tin có chọn lọc", trustImpact: 5, isNegative: false },
      { text: "Hẹn cung cấp sau khi hoàn tất", trustImpact: 0, isNegative: false },
      { text: "Từ chối với lý do nghiệp vụ", trustImpact: -5, isNegative: true, multiplierGroup: "minh-bach" },
      { text: "Gây khó dễ cho báo chí", trustImpact: -10, isNegative: true, multiplierGroup: "minh-bach" }
    ]
  },
  {
    id: "R03_S12",
    roleId: "R03",
    title: "Tái bổ nhiệm cán bộ từng bị kỷ luật",
    description: "Một cán bộ từng bị kỷ luật được đề xuất bổ nhiệm lại.",
    ideologyTag: "Trách nhiệm",
    options: [
      { text: "Kiến nghị dừng bổ nhiệm", trustImpact: 10, isNegative: false },
      { text: "Yêu cầu đánh giá lại toàn diện", trustImpact: 5, isNegative: false },
      { text: "Ủng hộ với điều kiện giám sát", trustImpact: 0, isNegative: false },
      { text: "Không ý kiến", trustImpact: -5, isNegative: true, multiplierGroup: "trach-nhiem" },
      { text: "Ủng hộ hoàn toàn", trustImpact: -10, isNegative: true, multiplierGroup: "trach-nhiem" }
    ]
  },
  {
    id: "R03_S13",
    roleId: "R03",
    title: "So sánh xử lý không đồng đều",
    description: "Người dân phản ánh cùng sai phạm nhưng mức xử lý khác nhau.",
    ideologyTag: "Công bằng",
    options: [
      { text: "Soát lại toàn bộ hồ sơ liên quan", trustImpact: 10, isNegative: false },
      { text: "Giải thích cụ thể từng trường hợp", trustImpact: 5, isNegative: false },
      { text: "Ghi nhận phản ánh để xem xét", trustImpact: 0, isNegative: false },
      { text: "Giải thích chung chung", trustImpact: -5, isNegative: true, multiplierGroup: "cong-bang" },
      { text: "Bỏ qua phản ánh", trustImpact: -10, isNegative: true, multiplierGroup: "cong-bang" }
    ]
  },
  {
    id: "R03_S14",
    roleId: "R03",
    title: "Sai phạm liên quan lợi ích nhóm",
    description: "Phát hiện dấu hiệu lợi ích nhóm trong một dự án lớn.",
    ideologyTag: "Chống lợi ích nhóm",
    options: [
      { text: "Báo cáo cấp cao hơn để xử lý", trustImpact: 10, isNegative: false },
      { text: "Mở rộng điều tra thận trọng", trustImpact: 5, isNegative: false },
      { text: "Xử lý ở mức kỹ thuật", trustImpact: 0, isNegative: false },
      { text: "Xử lý nhẹ để giữ ổn định", trustImpact: -10, isNegative: true, multiplierGroup: "chong-loi-ich-nhom" },
      { text: "Không xử lý", trustImpact: -15, isNegative: true, multiplierGroup: "chong-loi-ich-nhom" }
    ]
  },
  {
    id: "R03_S15",
    roleId: "R03",
    title: "Nội bộ phản ứng vì xử lý quá nghiêm",
    description: "Sau nhiều vụ kỷ luật nghiêm, nội bộ xuất hiện tâm lý bất mãn.",
    ideologyTag: "Kiên định",
    options: [
      { text: "Giữ vững nguyên tắc, giải thích rõ", trustImpact: 10, isNegative: false },
      { text: "Đối thoại nội bộ để giảm căng thẳng", trustImpact: 5, isNegative: false },
      { text: "Giảm cường độ thanh tra", trustImpact: -5, isNegative: true, multiplierGroup: "kien-dinh" },
      { text: "Chuyển sang kiểm tra hình thức", trustImpact: -5, isNegative: true, multiplierGroup: "kien-dinh" },
      { text: "Ngừng kiểm tra", trustImpact: -10, isNegative: true, multiplierGroup: "kien-dinh" }
    ]
  },

  // ============= R07: Cán bộ địa phương =============
  {
    id: "R07_S01",
    roleId: "R07",
    title: "Triển khai chính sách mới chưa rõ ràng",
    description: "Chính sách cấp trên ban hành gấp, hướng dẫn chưa đầy đủ.",
    ideologyTag: "Trách nhiệm",
    options: [
      { text: "Chủ động giải thích, xin hướng dẫn bổ sung", trustImpact: 12, isNegative: false },
      { text: "Vừa làm vừa điều chỉnh khi có phản ánh", trustImpact: 0, isNegative: false },
      { text: "Chỉ triển khai những phần an toàn nhất", trustImpact: 5, isNegative: false },
      { text: "Triển khai máy móc theo văn bản", trustImpact: -5, isNegative: true, multiplierGroup: "trach-nhiem" },
      { text: "Trì hoãn chờ chỉ đạo rõ hơn", trustImpact: -10, isNegative: true, multiplierGroup: "trach-nhiem" }
    ]
  },
  {
    id: "R07_S02",
    roleId: "R07",
    title: "Người dân bức xúc vì thủ tục rườm rà",
    description: "Dân phản ánh phải đi lại nhiều lần để làm giấy tờ.",
    ideologyTag: "Gần dân",
    options: [
      { text: "Rà soát, đơn giản hóa thủ tục", trustImpact: 15, isNegative: false },
      { text: "Ưu tiên hỗ trợ những trường hợp bức xúc nhất", trustImpact: 5, isNegative: false },
      { text: "Hướng dẫn kỹ nhưng giữ nguyên thủ tục", trustImpact: 0, isNegative: false },
      { text: "Giải thích do quy định", trustImpact: -5, isNegative: true, multiplierGroup: "gan-dan" },
      { text: "Phê bình dân thiếu hiểu biết", trustImpact: -20, isNegative: true, multiplierGroup: "gan-dan" }
    ]
  },
  {
    id: "R07_S03",
    roleId: "R07",
    title: "Áp lực ưu tiên hồ sơ người quen",
    description: "Có đề nghị giải quyết nhanh cho người có quan hệ.",
    ideologyTag: "Công bằng",
    options: [
      { text: "Xử lý đúng thứ tự", trustImpact: 14, isNegative: false },
      { text: "Hướng dẫn riêng để họ tự hoàn thiện hồ sơ trước", trustImpact: 5, isNegative: false },
      { text: "Giải quyết nhanh nhưng không bỏ qua bước nào", trustImpact: 0, isNegative: false },
      { text: "Ưu tiên kín đáo", trustImpact: -12, isNegative: true, multiplierGroup: "cong-bang" },
      { text: "Công khai nhận lợi ích", trustImpact: -25, isNegative: true, multiplierGroup: "cong-bang" }
    ]
  },
  {
    id: "R07_S04",
    roleId: "R07",
    title: "Dân không hiểu chính sách hỗ trợ",
    description: "Chính sách tốt nhưng dân hiểu sai, dẫn đến nghi ngờ.",
    ideologyTag: "Dân vận",
    options: [
      { text: "Tổ chức họp dân, giải thích rõ", trustImpact: 13, isNegative: false },
      { text: "Giải thích qua đại diện thôn/xóm", trustImpact: 5, isNegative: false },
      { text: "Chờ dân tự hiểu qua thời gian", trustImpact: 0, isNegative: false },
      { text: "Dán thông báo", trustImpact: -5, isNegative: true, multiplierGroup: "dan-van" },
      { text: "Cho rằng dân cố tình hiểu sai", trustImpact: -15, isNegative: true, multiplierGroup: "dan-van" }
    ]
  },
  {
    id: "R07_S05",
    roleId: "R07",
    title: "Chậm chi trả hỗ trợ cho dân",
    description: "Nguồn kinh phí về chậm gây bức xúc.",
    ideologyTag: "Minh bạch",
    options: [
      { text: "Công khai lý do, tiến độ chi trả", trustImpact: 10, isNegative: false },
      { text: "Ưu tiên chi trả trước cho nhóm khó khăn nhất", trustImpact: 5, isNegative: false },
      { text: "Giữ im lặng để tránh kỳ vọng", trustImpact: 0, isNegative: false },
      { text: "Hứa chung chung", trustImpact: -8, isNegative: true, multiplierGroup: "minh-bach" },
      { text: "Đổ lỗi cho dân chưa đủ hồ sơ", trustImpact: -15, isNegative: true, multiplierGroup: "minh-bach" }
    ]
  },
  {
    id: "R07_S06",
    roleId: "R07",
    title: "Thi hành cưỡng chế gây phản ứng",
    description: "Một quyết định cưỡng chế vấp phải phản đối của người dân.",
    ideologyTag: "Pháp luật – Nhân văn",
    options: [
      { text: "Đối thoại, giải thích, giảm xung đột", trustImpact: 18, isNegative: false },
      { text: "Nhờ bên trung gian hòa giải", trustImpact: 5, isNegative: false },
      { text: "Tạm hoãn ngắn hạn để ổn định tình hình", trustImpact: 0, isNegative: false },
      { text: "Thực hiện cứng nhắc", trustImpact: -10, isNegative: true, multiplierGroup: "phap-luat-nhan-van" },
      { text: "Lạm quyền, gây căng thẳng", trustImpact: -30, isNegative: true, multiplierGroup: "phap-luat-nhan-van" }
    ]
  },
  {
    id: "R07_S07",
    roleId: "R07",
    title: "Báo chí phản ánh tiêu cực ở địa phương",
    description: "Một bài báo nêu vấn đề quản lý yếu kém.",
    ideologyTag: "Cầu thị",
    options: [
      { text: "Tiếp thu, khắc phục sai sót", trustImpact: 16, isNegative: false },
      { text: "Giải trình từng phần, tránh đề cập điểm nhạy cảm", trustImpact: 5, isNegative: false },
      { text: "Im lặng chờ dư luận lắng xuống", trustImpact: 0, isNegative: false },
      { text: "Giải trình chiếu lệ", trustImpact: -8, isNegative: true, multiplierGroup: "cau-thi" },
      { text: "Cho rằng báo chí xuyên tạc", trustImpact: -18, isNegative: true, multiplierGroup: "cau-thi" }
    ]
  },
  {
    id: "R07_S08",
    roleId: "R07",
    title: "Thiếu nhân lực triển khai chính sách",
    description: "Khối lượng công việc lớn, cán bộ ít.",
    ideologyTag: "Chủ động",
    options: [
      { text: "Sắp xếp lại công việc, ưu tiên dân sinh", trustImpact: 12, isNegative: false },
      { text: "Huy động lực lượng kiêm nhiệm", trustImpact: 5, isNegative: false },
      { text: "Xin giãn tiến độ triển khai", trustImpact: 0, isNegative: false },
      { text: "Làm cầm chừng", trustImpact: -10, isNegative: true, multiplierGroup: "chu-dong" },
      { text: "Bỏ mặc việc dân", trustImpact: -20, isNegative: true, multiplierGroup: "chu-dong" }
    ]
  },
  {
    id: "R07_S09",
    roleId: "R07",
    title: "Dân đề nghị linh hoạt áp dụng chính sách",
    description: "Một số trường hợp đặc thù không khớp quy định.",
    ideologyTag: "Linh hoạt",
    options: [
      { text: "Báo cáo xin cơ chế đặc thù", trustImpact: 14, isNegative: false },
      { text: "Giải quyết từng trường hợp có kiểm soát", trustImpact: 5, isNegative: false },
      { text: "Hướng dẫn dân chờ chính sách mới", trustImpact: 0, isNegative: false },
      { text: "Áp dụng cứng nhắc", trustImpact: -8, isNegative: true, multiplierGroup: "linh-hoat" },
      { text: "Tự ý làm sai quy định", trustImpact: -18, isNegative: true, multiplierGroup: "linh-hoat" }
    ]
  },
  {
    id: "R07_S10",
    roleId: "R07",
    title: "Mạng xã hội lan tin sai về địa phương",
    description: "Thông tin chưa kiểm chứng gây hoang mang.",
    ideologyTag: "Truyền thông",
    options: [
      { text: "Thông tin kịp thời, chính xác", trustImpact: 15, isNegative: false },
      { text: "Phản hồi có chọn lọc", trustImpact: 5, isNegative: false },
      { text: "Chờ cấp trên lên tiếng trước", trustImpact: 0, isNegative: false },
      { text: "Im lặng", trustImpact: -10, isNegative: true, multiplierGroup: "truyen-thong" },
      { text: "Trấn áp thông tin", trustImpact: -20, isNegative: true, multiplierGroup: "truyen-thong" }
    ]
  },
  {
    id: "R07_S11",
    roleId: "R07",
    title: "Cán bộ cấp dưới làm sai quy trình",
    description: "Một cán bộ xã bị phản ánh làm sai nhưng chưa gây hậu quả lớn.",
    ideologyTag: "Quản lý",
    options: [
      { text: "Chấn chỉnh, đào tạo lại", trustImpact: 12, isNegative: false },
      { text: "Theo dõi sát để kiểm soát", trustImpact: 5, isNegative: false },
      { text: "Nhắc nhở trong cuộc họp chung", trustImpact: 0, isNegative: false },
      { text: "Nhắc nhở qua loa", trustImpact: -6, isNegative: true, multiplierGroup: "quan-ly" },
      { text: "Bao che", trustImpact: -18, isNegative: true, multiplierGroup: "quan-ly" }
    ]
  },
  {
    id: "R07_S12",
    roleId: "R07",
    title: "Giải ngân vốn đầu tư chậm",
    description: "Dự án chậm tiến độ gây bức xúc.",
    ideologyTag: "Hiệu quả",
    options: [
      { text: "Rà soát, tháo gỡ vướng mắc", trustImpact: 14, isNegative: false },
      { text: "Công khai tiến độ từng giai đoạn", trustImpact: 5, isNegative: false },
      { text: "Giữ nguyên kế hoạch ban đầu", trustImpact: 0, isNegative: false },
      { text: "Báo cáo cho xong", trustImpact: -8, isNegative: true, multiplierGroup: "hieu-qua" },
      { text: "Đổ lỗi cấp dưới", trustImpact: -15, isNegative: true, multiplierGroup: "hieu-qua" }
    ]
  },
  {
    id: "R07_S13",
    roleId: "R07",
    title: "Dân nghi ngờ có tiêu cực ở cơ sở",
    description: "Xuất hiện tin đồn cán bộ địa phương ăn chặn.",
    ideologyTag: "Liêm chính",
    options: [
      { text: "Công khai kiểm tra, giải trình", trustImpact: 16, isNegative: false },
      { text: "Kiểm tra kín để tránh ảnh hưởng", trustImpact: 5, isNegative: false },
      { text: "Theo dõi thêm trước khi xử lý", trustImpact: 0, isNegative: false },
      { text: "Bỏ qua tin đồn", trustImpact: -10, isNegative: true, multiplierGroup: "liem-chinh" },
      { text: "Đe dọa người phản ánh", trustImpact: -25, isNegative: true, multiplierGroup: "liem-chinh" }
    ]
  },
  {
    id: "R07_S14",
    roleId: "R07",
    title: "Thi hành chính sách gây thiệt cho một nhóm nhỏ",
    description: "Một nhóm dân chịu ảnh hưởng nặng hơn phần còn lại.",
    ideologyTag: "Công bằng xã hội",
    options: [
      { text: "Đề xuất hỗ trợ bổ sung", trustImpact: 15, isNegative: false },
      { text: "Tìm phương án cân bằng lợi ích", trustImpact: 5, isNegative: false },
      { text: "Giải thích tác động dài hạn", trustImpact: 0, isNegative: false },
      { text: "Cho rằng vì lợi ích chung", trustImpact: -8, isNegative: true, multiplierGroup: "cong-bang-xa-hoi" },
      { text: "Phớt lờ phản ánh", trustImpact: -20, isNegative: true, multiplierGroup: "cong-bang-xa-hoi" }
    ]
  },
  {
    id: "R07_S15",
    roleId: "R07",
    title: "Áp lực thành tích cuối năm",
    description: "Cấp trên yêu cầu báo cáo đẹp để đủ chỉ tiêu.",
    ideologyTag: "Trung thực",
    options: [
      { text: "Báo cáo đúng thực tế", trustImpact: 18, isNegative: false },
      { text: "Báo cáo trung thực kèm giải pháp cải thiện", trustImpact: 5, isNegative: false },
      { text: "Báo cáo có chú thích điểm yếu", trustImpact: 0, isNegative: false },
      { text: "Làm đẹp một phần", trustImpact: -12, isNegative: true, multiplierGroup: "trung-thuc" },
      { text: "Làm sai hoàn toàn", trustImpact: -25, isNegative: true, multiplierGroup: "trung-thuc" }
    ]
  }
];
