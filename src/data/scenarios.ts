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
    title: "Quyết sách chiến lược gây hậu quả nghiêm trọng",
    description: "Một chính sách phát triển kinh tế mà bạn chủ trì đã dẫn đến thiệt hại lớn: hàng nghìn hộ dân mất sinh kế, doanh nghiệp phá sản. Dư luận đang sôi sục, báo chí đưa tin liên tục về 'quyết định sai lầm từ cấp cao'. Bạn đứng trước áp lực phải giải trình.",
    ideologyTag: "Trách nhiệm",
    options: [
      { text: "Tổ chức họp báo công khai nhận trách nhiệm cá nhân, xin lỗi nhân dân và cam kết khắc phục hậu quả bằng lộ trình cụ thể", trustImpact: 10, isNegative: false },
      { text: "Thừa nhận có sai sót trong đánh giá tình hình, đồng thời giải thích những yếu tố khách quan ngoài dự kiến đã góp phần gây ra hậu quả", trustImpact: 5, isNegative: false },
      { text: "Nhấn mạnh đây là quyết định tập thể được thông qua theo đúng quy trình, trách nhiệm thuộc về tập thể lãnh đạo chứ không riêng cá nhân nào", trustImpact: 0, isNegative: false },
      { text: "Âm thầm chỉ đạo các cơ quan liên quan khắc phục sự cố, không phát ngôn công khai để tránh làm lớn chuyện", trustImpact: 0, isNegative: false },
      { text: "Giữ im lặng hoàn toàn, chờ dư luận tự lắng xuống vì lo ngại phát ngôn sẽ làm khủng hoảng lan rộng hơn", trustImpact: -5, isNegative: true, multiplierGroup: "trach-nhiem" }
    ]
  },
  {
    id: "R01_S02",
    roleId: "R01",
    title: "Người thân trong gia đình dính líu sai phạm",
    description: "Cơ quan thanh tra phát hiện người thân ruột của bạn đang giữ chức vụ quan trọng có dấu hiệu nhận hối lộ hàng tỷ đồng. Thông tin chưa được công bố rộng rãi nhưng nội bộ đã có người biết. Bạn biết rằng nếu vụ việc vỡ lở, uy tín cá nhân và gia đình sẽ bị ảnh hưởng nghiêm trọng.",
    ideologyTag: "Liêm chính",
    options: [
      { text: "Chủ động báo cáo cấp trên và đề nghị chuyển toàn bộ hồ sơ cho cơ quan điều tra độc lập xử lý theo pháp luật", trustImpact: 10, isNegative: false },
      { text: "Yêu cầu tạm đình chỉ công tác người thân ngay lập tức trong thời gian chờ kết luận điều tra chính thức", trustImpact: 5, isNegative: false },
      { text: "Tự tách mình khỏi vụ việc hoàn toàn, không can thiệp và chờ các cơ quan chức năng đưa ra kết luận", trustImpact: 0, isNegative: false },
      { text: "Tiến hành xử lý nội bộ trước - yêu cầu người thân hoàn trả tài sản rồi mới báo cáo cơ quan chức năng", trustImpact: -5, isNegative: true, multiplierGroup: "liem-chinh" },
      { text: "Gặp riêng người thân để trao đổi, khuyên họ tự giác khắc phục hậu quả và 'dàn xếp' êm xuôi", trustImpact: -10, isNegative: true, multiplierGroup: "liem-chinh" }
    ]
  },
  {
    id: "R01_S03",
    roleId: "R01",
    title: "Cán bộ trẻ công khai góp ý thẳng thắn",
    description: "Trong một cuộc họp mở rộng với hàng trăm đảng viên, một cán bộ trẻ bất ngờ đứng lên chỉ ra những thiếu sót trong chỉ đạo của bạn về công tác cán bộ. Ý kiến góp ý có nhiều điểm xác đáng nhưng cách nêu khá thẳng thừng, khiến không khí hội trường căng thẳng. Mọi ánh mắt đổ dồn về phía bạn.",
    ideologyTag: "Tự phê bình",
    options: [
      { text: "Cảm ơn góp ý thẳng thắn, phản hồi công khai từng điểm một cách cầu thị và tiếp thu những ý kiến hợp lý ngay tại chỗ", trustImpact: 10, isNegative: false },
      { text: "Ghi nhận tinh thần góp ý tích cực nhưng yêu cầu các ý kiến tương tự nên được phản ánh qua kênh nội bộ đúng quy trình", trustImpact: 5, isNegative: false },
      { text: "Tiếp thu những điểm đúng trong góp ý, đồng thời giải thích lý do bác bỏ những điểm chưa phù hợp thực tế", trustImpact: 5, isNegative: false },
      { text: "Cảm ơn xã giao rồi chuyển sang nội dung khác, không phản hồi cụ thể để tránh tranh luận kéo dài", trustImpact: 0, isNegative: false },
      { text: "Không phản hồi và chuyển đề tài ngay lập tức để tránh tạo tiền lệ cấp dưới công khai chất vấn lãnh đạo", trustImpact: -5, isNegative: true, multiplierGroup: "tu-phe-binh" }
    ]
  },
  {
    id: "R01_S04",
    roleId: "R01",
    title: "Quyết định khẩn cấp trong thời hạn gấp rút",
    description: "Một dự án đầu tư nước ngoài trị giá hàng tỷ đô-la yêu cầu phải có quyết định phê duyệt trong vòng 48 giờ, nếu không nhà đầu tư sẽ chuyển sang nước khác. Tuy nhiên, việc tham vấn đầy đủ các bên liên quan theo quy trình thông thường cần ít nhất 2 tuần. Áp lực từ cả hai phía rất lớn.",
    ideologyTag: "Dân chủ",
    options: [
      { text: "Triệu tập khẩn cấp nhóm chuyên gia nòng cốt làm việc xuyên đêm để có đánh giá nhanh trước khi quyết định", trustImpact: 10, isNegative: false },
      { text: "Họp gấp với tập thể lãnh đạo chủ chốt để lấy ý kiến và biểu quyết tập thể trước khi ký phê duyệt", trustImpact: 5, isNegative: false },
      { text: "Ra quyết định ngay lập tức dựa trên thông tin hiện có và cam kết cá nhân chịu hoàn toàn trách nhiệm nếu sai", trustImpact: 5, isNegative: false },
      { text: "Chấp nhận rủi ro ký phê duyệt để không bỏ lỡ cơ hội thu hút đầu tư quan trọng cho địa phương", trustImpact: 0, isNegative: false },
      { text: "Hoãn quyết định và yêu cầu nhà đầu tư gia hạn thời gian vì cần tuân thủ quy trình, dù biết họ có thể rút lui", trustImpact: -5, isNegative: true, multiplierGroup: "dan-chu" }
    ]
  },
  {
    id: "R01_S05",
    roleId: "R01",
    title: "Người dân bức xúc yêu cầu đối thoại trực tiếp",
    description: "Hàng trăm người dân vùng dự án khu công nghiệp kéo đến trụ sở tỉnh ủy với băng rôn khẩu hiệu, yêu cầu được gặp trực tiếp Bí thư. Họ phản đối việc thu hồi đất với mức đền bù không thỏa đáng và tái định cư xa nơi ở cũ. Tình hình có dấu hiệu leo thang căng thẳng.",
    ideologyTag: "Gần dân",
    options: [
      { text: "Trực tiếp xuống gặp người dân, lắng nghe từng ý kiến phản ánh và đối thoại thẳng thắn về hướng giải quyết", trustImpact: 10, isNegative: false },
      { text: "Tiếp đại diện người dân tại phòng họp, nhưng giới hạn nội dung trao đổi trong phạm vi thẩm quyền có thể giải quyết ngay", trustImpact: 5, isNegative: false },
      { text: "Tổ chức buổi đối thoại trực tuyến để đảm bảo an toàn và có thể tiếp cận nhiều người dân hơn cùng lúc", trustImpact: 0, isNegative: false },
      { text: "Cử Phó Chủ tịch phụ trách đền bù giải phóng mặt bằng tiếp thay vì thân chinh, đây là công việc chuyên môn", trustImpact: 0, isNegative: false },
      { text: "Yêu cầu cấp dưới tổng hợp báo cáo đầy đủ trước khi tiếp xúc, tránh bị đặt vào thế bị động trước đám đông", trustImpact: -5, isNegative: true, multiplierGroup: "gan-dan" }
    ]
  },
  {
    id: "R01_S06",
    roleId: "R01",
    title: "Phát ngôn trước công chúng gây tranh cãi dữ dội",
    description: "Trong một buổi tiếp xúc cử tri, bạn có một phát ngôn bị cắt ghép lan truyền trên mạng xã hội với ý nghĩa hoàn toàn khác. Nhiều người hiểu sai rằng bạn coi thường người nghèo. Hashtag 'lãnh đạo xa rời thực tế' trending trên mạng xã hội. Truyền thông đang chờ phản ứng chính thức.",
    ideologyTag: "Truyền thông",
    options: [
      { text: "Tổ chức họp báo, công bố bản ghi đầy đủ và giải thích rõ ràng ngữ cảnh cũng như ý định thực sự của phát ngôn", trustImpact: 10, isNegative: false },
      { text: "Đăng thông cáo xin lỗi về cách diễn đạt chưa rõ ràng, đồng thời giữ nguyên nội dung quan điểm muốn truyền tải", trustImpact: 5, isNegative: false },
      { text: "Phát hành thông cáo đính chính những điểm bị hiểu sai nghiêm trọng nhất, bỏ qua các chi tiết nhỏ", trustImpact: 5, isNegative: false },
      { text: "Giao cho người phát ngôn chính thức xử lý khủng hoảng truyền thông thay vì trực tiếp lên tiếng", trustImpact: -5, isNegative: true, multiplierGroup: "truyen-thong" },
      { text: "Không phản hồi và chờ đợi làn sóng dư luận tự lắng xuống theo quy luật tin tức '3 ngày rồi quên'", trustImpact: -5, isNegative: true, multiplierGroup: "truyen-thong" }
    ]
  },
  {
    id: "R01_S07",
    roleId: "R01",
    title: "Đề xuất bổ nhiệm cán bộ thân cận vào vị trí quan trọng",
    description: "Một vị trí Giám đốc Sở trống cần được bổ nhiệm gấp. Người được bạn tin tưởng nhất có lý lịch sạch, trung thành tuyệt đối, nhưng năng lực chuyên môn chỉ ở mức trung bình. Trong khi đó có một ứng viên khác năng lực xuất sắc nhưng từng có ý kiến phản biện gay gắt với bạn.",
    ideologyTag: "Nhân sự",
    options: [
      { text: "Tổ chức thi tuyển công khai minh bạch với hội đồng độc lập, lựa chọn người có năng lực phù hợp nhất cho vị trí", trustImpact: 10, isNegative: false },
      { text: "Bổ nhiệm người thân tín ở vị trí thử thách với lộ trình đánh giá 6 tháng, nếu không đạt sẽ thay thế", trustImpact: 5, isNegative: false },
      { text: "Phân chia quyền hạn của vị trí này cho nhiều phó giám đốc để giảm thiểu rủi ro tập trung quyền lực", trustImpact: 5, isNegative: false },
      { text: "Bổ nhiệm tạm quyền trong 3 tháng để xem xét thực tế công việc trước khi quyết định chính thức", trustImpact: 0, isNegative: false },
      { text: "Ưu tiên người thân tín vì sự phối hợp ăn ý quan trọng hơn năng lực chuyên môn trong giai đoạn này", trustImpact: -10, isNegative: true, multiplierGroup: "nhan-su" }
    ]
  },
  {
    id: "R01_S08",
    roleId: "R01",
    title: "Đề xuất vượt quy trình để đạt mục tiêu tốt đẹp",
    description: "Để kịp hoàn thành 1.000 căn nhà cho người nghèo trước Tết, cấp dưới đề xuất bỏ qua một số thủ tục đấu thầu 'rườm rà' và chỉ định thầu trực tiếp. Nếu làm đúng quy trình, dự án sẽ chậm ít nhất 4 tháng và bà con sẽ không có nhà đón Tết. Áp lực nhân văn rất lớn.",
    ideologyTag: "Pháp quyền",
    options: [
      { text: "Cho phép thí điểm quy trình rút gọn trong phạm vi hẹp, đồng thời báo cáo song song lên cấp trên để xin cơ chế đặc biệt", trustImpact: 10, isNegative: false },
      { text: "Lập văn bản xin phép cấp có thẩm quyền cao hơn phê duyệt cơ chế đặc thù trước khi triển khai bất kỳ ngoại lệ nào", trustImpact: 5, isNegative: false },
      { text: "Xin ý kiến chỉ đạo từ Trung ương dù biết có thể bỏ lỡ thời điểm hoàn thành trước Tết", trustImpact: 5, isNegative: false },
      { text: "Âm thầm triển khai theo đề xuất rồi hoàn thiện thủ tục pháp lý sau khi công trình hoàn thành", trustImpact: 0, isNegative: false },
      { text: "Phê duyệt ngay đề xuất vượt quy trình và cam kết sẽ hợp thức hóa bằng các văn bản bổ sung sau", trustImpact: -10, isNegative: true, multiplierGroup: "phap-quyen" }
    ]
  },
  {
    id: "R01_S09",
    roleId: "R01",
    title: "Áp lực báo cáo thành tích cuối nhiệm kỳ",
    description: "Cuối nhiệm kỳ, tổng hợp số liệu cho thấy nhiều chỉ tiêu không đạt mục tiêu đề ra ban đầu. Cấp trên đang chờ đợi một bản báo cáo 'sáng' để tổng kết. Cấp dưới gợi ý có thể 'điều chỉnh cách tính' một số chỉ số để kết quả nhìn khả quan hơn mà vẫn 'đúng về mặt kỹ thuật'.",
    ideologyTag: "Chiến lược",
    options: [
      { text: "Báo cáo hoàn toàn trung thực với số liệu thực tế, kèm theo phân tích nguyên nhân và bài học kinh nghiệm rút ra", trustImpact: 10, isNegative: false },
      { text: "Giữ nguyên số liệu thật nhưng trình bày theo hướng nhấn mạnh tiến bộ và những điểm tích cực đạt được", trustImpact: 5, isNegative: false },
      { text: "Chỉ công bố những chỉ số đạt và vượt mục tiêu, lược bỏ các chỉ số chưa hoàn thành trong báo cáo tóm tắt", trustImpact: -5, isNegative: true, multiplierGroup: "chien-luoc" },
      { text: "Điều chỉnh nhẹ một số con số trong phạm vi 'sai số cho phép' để kết quả tổng thể khả quan hơn", trustImpact: -5, isNegative: true, multiplierGroup: "chien-luoc" },
      { text: "Xây dựng báo cáo thành tích hoàn toàn theo hướng 'tô hồng', đẩy mọi hạn chế thành yếu tố khách quan", trustImpact: -10, isNegative: true, multiplierGroup: "chien-luoc" }
    ]
  },
  {
    id: "R01_S10",
    roleId: "R01",
    title: "Khủng hoảng thiên tai đột ngột trong đêm",
    description: "Lũ quét bất ngờ trong đêm cuốn trôi nhiều ngôi làng ven sông. Thông tin ban đầu cho thấy có hàng chục người mất tích, hàng trăm hộ dân bị cô lập. Đường giao thông bị cắt đứt, mạng liên lạc gián đoạn. Bạn nhận được tin vào lúc 2 giờ sáng khi đang nghỉ ngơi tại nhà.",
    ideologyTag: "Trách nhiệm",
    options: [
      { text: "Lập tức lên đường đến hiện trường, trực tiếp chỉ đạo công tác cứu hộ cứu nạn và chịu trách nhiệm điều phối tại chỗ", trustImpact: 10, isNegative: false },
      { text: "Thành lập ngay ban chỉ huy khẩn cấp, phân công cấp dưới có chuyên môn trực tiếp xuống hiện trường xử lý", trustImpact: 5, isNegative: false },
      { text: "Thu thập thêm thông tin đánh giá tình hình trong vài giờ trước khi quyết định xuống hiện trường hay chỉ đạo từ xa", trustImpact: 0, isNegative: false },
      { text: "Chờ đến sáng khi có báo cáo đầy đủ từ các đầu mối rồi mới họp bàn phương án xử lý tổng thể", trustImpact: 0, isNegative: false },
      { text: "Giao toàn bộ việc xử lý cho Phó Chủ tịch phụ trách và các sở ngành liên quan, tránh 'dẫm chân' chuyên môn", trustImpact: -10, isNegative: true, multiplierGroup: "trach-nhiem" }
    ]
  },
  {
    id: "R01_S11",
    roleId: "R01",
    title: "Xa rời thực tế cơ sở quá lâu",
    description: "Một bài báo phân tích chỉ ra rằng trong 18 tháng qua, bạn chỉ đi thực tế cơ sở 2 lần và đều là những chuyến công tác 'cưỡi ngựa xem hoa' với lịch trình được sắp đặt kỹ lưỡng. Nhiều cán bộ địa phương than phiền rằng lãnh đạo cấp cao không nắm được thực trạng khó khăn ở cơ sở.",
    ideologyTag: "Gần dân",
    options: [
      { text: "Lên kế hoạch đi cơ sở đột xuất không báo trước, đến những vùng khó khăn nhất để trực tiếp lắng nghe tiếng nói người dân", trustImpact: 10, isNegative: false },
      { text: "Xây dựng lịch đi cơ sở định kỳ hàng tháng, lựa chọn những địa bàn trọng điểm cần quan tâm theo từng giai đoạn", trustImpact: 5, isNegative: false },
      { text: "Tổ chức họp trực tuyến thường xuyên với lãnh đạo các địa phương để nắm tình hình mà không mất thời gian di chuyển", trustImpact: 0, isNegative: false },
      { text: "Yêu cầu cấp dưới nâng cao chất lượng báo cáo tổng hợp để có thể nắm tình hình qua văn bản", trustImpact: -5, isNegative: true, multiplierGroup: "gan-dan" },
      { text: "Bỏ ngoài tai những phản ánh vì cho rằng đó là cách nhìn phiến diện của những người không hiểu tầm nhìn vĩ mô", trustImpact: -10, isNegative: true, multiplierGroup: "gan-dan" }
    ]
  },
  {
    id: "R01_S12",
    roleId: "R01",
    title: "Dư luận phản ánh lối sống xa hoa của lãnh đạo",
    description: "Trên mạng xã hội lan truyền hình ảnh biệt thự lớn, xe sang và những chuyến du lịch nước ngoài của gia đình bạn. Dù tất cả đều có nguồn gốc hợp pháp từ tài sản tích lũy trước khi làm lãnh đạo, nhưng dư luận đang so sánh với mức sống của đa số người dân và đặt câu hỏi về tính gương mẫu.",
    ideologyTag: "Đạo đức",
    options: [
      { text: "Chấn chỉnh lối sống, điều chỉnh theo hướng giản dị hơn và gần gũi với người dân, dù biết điều này ảnh hưởng đến gia đình", trustImpact: 10, isNegative: false },
      { text: "Chủ động công khai minh bạch toàn bộ nguồn gốc tài sản, giải thích rõ ràng từng khoản thu nhập hợp pháp", trustImpact: 5, isNegative: false },
      { text: "Giảm xuất hiện công khai trong một thời gian, hạn chế những hoạt động dễ bị soi xét trên mạng xã hội", trustImpact: 0, isNegative: false },
      { text: "Giải thích rằng đây là tài sản cá nhân từ trước, hoàn cảnh gia đình khác biệt là chuyện riêng tư", trustImpact: -5, isNegative: true, multiplierGroup: "dao-duc" },
      { text: "Phớt lờ hoàn toàn dư luận vì cho rằng đó là sự ghen tị và can thiệp vào đời tư không đáng để bận tâm", trustImpact: -10, isNegative: true, multiplierGroup: "dao-duc" }
    ]
  },
  {
    id: "R01_S13",
    roleId: "R01",
    title: "Mâu thuẫn gay gắt trong nội bộ lãnh đạo",
    description: "Hai phó chủ tịch tỉnh đang trong tình trạng 'chiến tranh lạnh' vì bất đồng quan điểm về một dự án lớn. Cả hai phe đều vận động hậu trường, chia rẽ cán bộ trong cơ quan. Nhiều cuộc họp trở nên căng thẳng với những màn tranh cãi công khai. Hiệu quả công việc chung đang bị ảnh hưởng nghiêm trọng.",
    ideologyTag: "Đoàn kết",
    options: [
      { text: "Đứng ra hòa giải trực tiếp, yêu cầu cả hai bên đặt lợi ích tập thể lên trên và tìm điểm chung để thống nhất", trustImpact: 10, isNegative: false },
      { text: "Gặp riêng từng người để lắng nghe quan điểm, tìm hiểu gốc rễ mâu thuẫn trước khi đưa ra phương án xử lý", trustImpact: 5, isNegative: false },
      { text: "Giữ thái độ trung lập không đứng về bên nào, để mâu thuẫn tự giải quyết theo thời gian", trustImpact: 0, isNegative: false },
      { text: "Tạm gác vấn đề sang một bên, tập trung vào công việc chung để giữ ổn định bề mặt trong ngắn hạn", trustImpact: 0, isNegative: false },
      { text: "Lợi dụng mâu thuẫn để làm yếu cả hai bên, củng cố quyền lực cá nhân bằng chiến thuật 'chia để trị'", trustImpact: -10, isNegative: true, multiplierGroup: "doan-ket" }
    ]
  },
  {
    id: "R01_S14",
    roleId: "R01",
    title: "Đề xuất cải cách táo bạo nhưng đầy rủi ro",
    description: "Một nhóm chuyên gia trình bày đề án cải cách hành chính mạnh mẽ: giảm 40% biên chế, sáp nhập nhiều sở ngành, số hóa toàn bộ dịch vụ công. Nếu thành công, đây sẽ là bước đột phá lịch sử. Nhưng nếu thất bại, hàng ngàn cán bộ mất việc và hệ thống có thể tê liệt. Không ai dám đề xuất điều này trước đây.",
    ideologyTag: "Đổi mới",
    options: [
      { text: "Dũng cảm ủng hộ cải cách với lộ trình cụ thể từng bước, cam kết đồng hành và chịu trách nhiệm đến cùng", trustImpact: 10, isNegative: false },
      { text: "Đề nghị thí điểm ở phạm vi nhỏ trước (một huyện hoặc một sở) để đánh giá kết quả trước khi nhân rộng", trustImpact: 5, isNegative: false },
      { text: "Lựa chọn những phần ít rủi ro nhất để triển khai trước, từ bỏ những nội dung gây tranh cãi nhiều", trustImpact: 0, isNegative: false },
      { text: "Trì hoãn quyết định với lý do 'cần nghiên cứu thêm' để giữ an toàn cho bản thân trong giai đoạn cuối nhiệm kỳ", trustImpact: -5, isNegative: true, multiplierGroup: "doi-moi" },
      { text: "Bác bỏ hoàn toàn đề xuất với lý do 'chưa phù hợp thực tế', tránh mọi rủi ro có thể ảnh hưởng đến vị trí", trustImpact: -10, isNegative: true, multiplierGroup: "doi-moi" }
    ]
  },
  {
    id: "R01_S15",
    roleId: "R01",
    title: "Đánh giá tổng kết cuối nhiệm kỳ lãnh đạo",
    description: "Nhiệm kỳ 5 năm sắp kết thúc. Nhìn lại, có những thành tựu đáng tự hào nhưng cũng có không ít thất bại cay đắng mà bạn phải chịu trách nhiệm. Bản báo cáo tổng kết sẽ được công bố rộng rãi và là cơ sở để đánh giá xem xét nhiệm kỳ tiếp theo. Bạn phải tự đánh giá như thế nào?",
    ideologyTag: "Tự phê bình",
    options: [
      { text: "Nhìn thẳng vào sự thật, thừa nhận cả thành tích lẫn khuyết điểm, phân tích sâu bài học kinh nghiệm để lại cho người kế nhiệm", trustImpact: 10, isNegative: false },
      { text: "Trình bày khách quan các hạn chế nhưng đặt trong bối cảnh những khó khăn khách quan của giai đoạn vừa qua", trustImpact: 5, isNegative: false },
      { text: "Để tập thể ban thường vụ đánh giá thay vì tự đánh giá cá nhân, tránh chủ quan một chiều", trustImpact: 0, isNegative: false },
      { text: "Tập trung nêu bật những thành tích nổi bật nhất, lược bỏ hoặc giảm nhẹ những hạn chế trong báo cáo", trustImpact: -5, isNegative: true, multiplierGroup: "tu-phe-binh" },
      { text: "Xây dựng báo cáo theo hướng 'tô hồng' toàn diện, quy tất cả hạn chế về nguyên nhân khách quan bên ngoài", trustImpact: -10, isNegative: true, multiplierGroup: "tu-phe-binh" }
    ]
  },

  // ============= R03: Cán bộ thanh tra – kiểm tra =============
  {
    id: "R03_S01",
    roleId: "R03",
    title: "Phát hiện cán bộ có tài sản bất minh qua kiểm tra",
    description: "Trong quá trình thanh tra định kỳ tại một huyện, bạn phát hiện Phó Chủ tịch huyện sở hữu 3 căn biệt thự, 2 xe sang và nhiều mảnh đất giá trị lớn - tổng tài sản ước tính hàng chục tỷ đồng, trong khi lương công chức của người này chỉ khoảng 15 triệu/tháng suốt 20 năm công tác. Người này có quan hệ rộng với nhiều lãnh đạo cấp tỉnh.",
    ideologyTag: "Chống tham nhũng",
    options: [
      { text: "Lập tức báo cáo lên cấp trên và đề nghị chuyển hồ sơ sang cơ quan điều tra, công khai kết luận sau khi có kết quả", trustImpact: 10, isNegative: false },
      { text: "Mở cuộc điều tra toàn diện nhưng giữ kín thông tin trong giai đoạn đầu để tránh đương sự tẩu tán tài sản", trustImpact: 5, isNegative: false },
      { text: "Yêu cầu đương sự giải trình chi tiết nguồn gốc từng tài sản bằng văn bản trước khi quyết định bước tiếp theo", trustImpact: 0, isNegative: false },
      { text: "Tiếp tục theo dõi và thu thập thêm chứng cứ trong một thời gian nữa để có hồ sơ chắc chắn hơn", trustImpact: 0, isNegative: false },
      { text: "Nhắc nhở nội bộ và yêu cầu 'tự khắc phục', không lập biên bản chính thức vì lo ngại phức tạp quan hệ", trustImpact: -5, isNegative: true, multiplierGroup: "chong-tham-nhung" }
    ]
  },
  {
    id: "R03_S02",
    roleId: "R03",
    title: "Tiếp nhận đơn tố cáo nặc danh về chạy chức",
    description: "Bạn nhận được một bức thư nặc danh kèm theo nhiều tài liệu photo tố cáo việc một ứng viên đã chi hàng trăm triệu đồng để 'chạy' vào vị trí Trưởng phòng Tổ chức huyện. Tài liệu có vẻ đáng tin cậy với nhiều chi tiết cụ thể, nhưng không có chữ ký người tố cáo. Theo quy định, đơn nặc danh có thể không phải xử lý.",
    ideologyTag: "Công bằng",
    options: [
      { text: "Tiến hành xác minh độc lập nội dung tố cáo bất kể nguồn đơn, vì nghĩa vụ chống tham nhũng không phụ thuộc vào hình thức đơn thư", trustImpact: 10, isNegative: false },
      { text: "Kiểm tra gián tiếp thông qua rà soát hồ sơ bổ nhiệm, quy trình thi tuyển và đối chiếu với thông tin trong đơn", trustImpact: 5, isNegative: false },
      { text: "Lưu đơn vào hồ sơ theo dõi, chờ xem có phản ánh tương tự từ nguồn khác không để quyết định sau", trustImpact: 0, isNegative: false },
      { text: "Làm động tác kiểm tra hình thức cho đủ thủ tục nhưng không mở rộng điều tra vì đơn không có giá trị pháp lý", trustImpact: -5, isNegative: true, multiplierGroup: "cong-bang" },
      { text: "Bỏ qua hoàn toàn với lý do đơn nặc danh không có người chịu trách nhiệm, không cần xử lý theo quy định", trustImpact: -10, isNegative: true, multiplierGroup: "cong-bang" }
    ]
  },
  {
    id: "R03_S03",
    roleId: "R03",
    title: "Cán bộ bị phản ánh nhũng nhiễu người dân",
    description: "Hàng chục người dân ký đơn phản ánh rằng cán bộ địa chính xã thường xuyên 'gây khó dễ' khi làm thủ tục đất đai: hồ sơ đúng quy định vẫn bị trả đi trả lại nhiều lần, phải 'bồi dưỡng' mới được giải quyết nhanh. Cán bộ này là con của một cựu lãnh đạo huyện vẫn còn uy tín trong vùng.",
    ideologyTag: "Gần dân",
    options: [
      { text: "Trực tiếp xuống cơ sở tiếp xúc với người dân phản ánh, đồng thời kiểm tra thực địa các hồ sơ đang xử lý tại xã", trustImpact: 10, isNegative: false },
      { text: "Cử tổ công tác đi khảo sát kín dưới hình thức 'người dân đi làm thủ tục' để kiểm chứng thông tin phản ánh", trustImpact: 5, isNegative: false },
      { text: "Yêu cầu cán bộ bị phản ánh viết bản giải trình chi tiết về từng trường hợp người dân nêu trong đơn", trustImpact: 0, isNegative: false },
      { text: "Chờ thêm nhiều phản ánh tương tự từ các nguồn khác để có căn cứ chắc chắn hơn trước khi hành động", trustImpact: 0, isNegative: false },
      { text: "Cho rằng người dân hiểu nhầm quy trình thủ tục phức tạp, cán bộ chỉ làm đúng chức năng nhiệm vụ", trustImpact: -10, isNegative: true, multiplierGroup: "gan-dan" }
    ]
  },
  {
    id: "R03_S04",
    roleId: "R03",
    title: "Sai phạm nhỏ nhưng tái diễn nhiều lần",
    description: "Một trưởng phòng đã 5 lần trong 2 năm vi phạm quy trình: đi công tác không báo cáo đúng quy định, sử dụng xe công vào việc riêng, nộp chứng từ thanh toán chậm... Mỗi lần đều là vi phạm nhỏ, chưa gây thiệt hại cụ thể. Người này có năng lực công tác tốt và được cấp trên quý mến.",
    ideologyTag: "Kỷ luật",
    options: [
      { text: "Tổng hợp toàn bộ vi phạm và đề xuất kỷ luật theo đúng quy định về việc tái phạm nhiều lần, bất kể mức độ từng vụ việc", trustImpact: 10, isNegative: false },
      { text: "Áp dụng hình thức nhắc nhở nghiêm khắc nâng mức, cảnh cáo về việc vi phạm tiếp theo sẽ bị kỷ luật nặng", trustImpact: 5, isNegative: false },
      { text: "Lập hồ sơ theo dõi riêng với cam kết bằng văn bản, nếu tái phạm sẽ xử lý gộp tất cả các lần", trustImpact: 0, isNegative: false },
      { text: "Chỉ nhắc nhở miệng vì các vi phạm đều chưa gây hậu quả nghiêm trọng, xử lý nặng sẽ mất cán bộ có năng lực", trustImpact: -5, isNegative: true, multiplierGroup: "ky-luat" },
      { text: "Bỏ qua để giữ ổn định nội bộ, những vi phạm nhỏ như vậy ai cũng có, xử lý sẽ gây mất đoàn kết", trustImpact: -10, isNegative: true, multiplierGroup: "ky-luat" }
    ]
  },
  {
    id: "R03_S05",
    roleId: "R03",
    title: "Áp lực 'xử nhẹ' từ lãnh đạo cấp cao",
    description: "Bạn đang thụ lý một vụ sai phạm rõ ràng của một giám đốc sở với đầy đủ chứng cứ. Theo quy định, mức kỷ luật tối thiểu phải là cách chức. Tuy nhiên, bạn nhận được cuộc gọi riêng từ một lãnh đạo rất cao gợi ý 'xem xét đến hoàn cảnh gia đình' và 'những đóng góp trong quá khứ' để giảm nhẹ.",
    ideologyTag: "Chí công vô tư",
    options: [
      { text: "Kiên quyết xử lý theo đúng quy định pháp luật, không để bất kỳ sức ép nào ảnh hưởng đến kết luận chính thức", trustImpact: 10, isNegative: false },
      { text: "Gửi báo cáo bằng văn bản lên cấp có thẩm quyền xin ý kiến chỉ đạo chính thức, tránh chỉ đạo miệng không có căn cứ", trustImpact: 5, isNegative: false },
      { text: "Giữ nguyên nội dung hồ sơ và kết luận nhưng kéo dài thời gian xử lý để chờ tình hình 'hạ nhiệt'", trustImpact: 0, isNegative: false },
      { text: "Giảm mức kỷ luật xuống khiển trách như gợi ý, vì không muốn đối đầu với lãnh đạo cấp cao", trustImpact: -5, isNegative: true, multiplierGroup: "chi-cong-vo-tu" },
      { text: "Xin được rút khỏi vụ việc với lý do 'có mâu thuẫn lợi ích', chuyển cho người khác xử lý", trustImpact: -10, isNegative: true, multiplierGroup: "chi-cong-vo-tu" }
    ]
  },
  {
    id: "R03_S06",
    roleId: "R03",
    title: "Dư luận nghi ngờ kết luận thanh tra thiếu khách quan",
    description: "Sau khi công bố kết luận thanh tra một dự án BT (đổi đất lấy hạ tầng), mạng xã hội bùng nổ với những phân tích cho rằng kết luận 'nhẹ tay' bất thường. Nhiều chuyên gia độc lập chỉ ra các điểm mâu thuẫn trong báo cáo. Hashtag 'thanh tra bao che' lan nhanh chóng mặt, ảnh hưởng đến uy tín cơ quan.",
    ideologyTag: "Minh bạch",
    options: [
      { text: "Tổ chức họp báo công khai toàn bộ hồ sơ thanh tra, giải trình chi tiết phương pháp và căn cứ của từng kết luận", trustImpact: 10, isNegative: false },
      { text: "Phát hành bản tóm tắt kết luận thanh tra với những điểm quan trọng nhất, giải đáp thắc mắc của báo chí", trustImpact: 5, isNegative: false },
      { text: "Cử người phát ngôn chính thức của cơ quan trả lời những câu hỏi cụ thể từ phía truyền thông", trustImpact: 0, isNegative: false },
      { text: "Giữ im lặng và chờ đợi làn sóng dư luận tự lắng xuống theo thời gian, tránh 'đổ thêm dầu vào lửa'", trustImpact: -5, isNegative: true, multiplierGroup: "minh-bach" },
      { text: "Phản bác gay gắt dư luận là 'thiếu hiểu biết chuyên môn' nhưng không đưa ra dữ liệu cụ thể để chứng minh", trustImpact: -10, isNegative: true, multiplierGroup: "minh-bach" }
    ]
  },
  {
    id: "R03_S07",
    roleId: "R03",
    title: "Sai phạm liên quan đến người quen thân thiết",
    description: "Trong quá trình thanh tra, bạn bất ngờ phát hiện một trong những đối tượng vi phạm nghiêm trọng nhất lại là người bạn thân từ thuở nhỏ - người đã từng giúp đỡ gia đình bạn rất nhiều trong những lúc khó khăn. Nếu tiếp tục điều tra, người này chắc chắn sẽ bị truy tố hình sự.",
    ideologyTag: "Công tâm",
    options: [
      { text: "Báo cáo trung thực với cấp trên về mối quan hệ cá nhân và đề nghị chuyển hồ sơ cho người khác thụ lý để đảm bảo khách quan", trustImpact: 10, isNegative: false },
      { text: "Chính thức đề nghị được phân công người khác xử lý vụ việc này vì có mâu thuẫn lợi ích tiềm ẩn", trustImpact: 5, isNegative: false },
      { text: "Tiếp tục xử lý đúng quy trình nhưng chủ động giữ khoảng cách, mọi trao đổi đều thông qua kênh chính thức có ghi nhận", trustImpact: 0, isNegative: false },
      { text: "Tìm cách né tránh vụ việc bằng cách đẩy sang các thành viên khác trong đoàn thanh tra xử lý", trustImpact: -5, isNegative: true, multiplierGroup: "cong-tam" },
      { text: "Lờ đi bằng chứng quan trọng hoặc giảm nhẹ mức độ vi phạm trong kết luận để bảo vệ người bạn", trustImpact: -15, isNegative: true, multiplierGroup: "cong-tam" }
    ]
  },
  {
    id: "R03_S08",
    roleId: "R03",
    title: "Người dân phản đối vì xử lý kỷ luật quá nhẹ",
    description: "Sau khi công bố quyết định kỷ luật khiển trách đối với một chủ tịch xã có hành vi tham nhũng, hàng trăm người dân địa phương ký đơn phản đối cho rằng 'xử lý không thỏa đáng'. Họ đòi phải cách chức hoặc truy tố. Sự việc lan rộng trên mạng xã hội và báo chí bắt đầu vào cuộc điều tra.",
    ideologyTag: "Cầu thị",
    options: [
      { text: "Chủ động rà soát lại toàn bộ quy trình và căn cứ xử lý, sẵn sàng điều chỉnh nếu phát hiện có sai sót", trustImpact: 10, isNegative: false },
      { text: "Tổ chức buổi giải trình công khai với người dân, giải thích chi tiết căn cứ pháp lý của mức kỷ luật đã áp dụng", trustImpact: 5, isNegative: false },
      { text: "Ghi nhận nghiêm túc ý kiến phản ánh và cam kết sẽ xem xét kỹ lưỡng trong thời gian tới", trustImpact: 0, isNegative: false },
      { text: "Cho rằng người dân không hiểu rõ quy định pháp luật về xử lý kỷ luật, việc giải thích là không cần thiết", trustImpact: -5, isNegative: true, multiplierGroup: "cau-thi" },
      { text: "Hoàn toàn im lặng, không phản hồi bất kỳ ý kiến nào vì cho rằng đây là quyết định đúng đắn và cuối cùng", trustImpact: -10, isNegative: true, multiplierGroup: "cau-thi" }
    ]
  },
  {
    id: "R03_S09",
    roleId: "R03",
    title: "Phát hiện tiêu cực ngay trong đoàn thanh tra",
    description: "Bạn tình cờ phát hiện một thành viên cốt cán trong đoàn thanh tra do bạn phụ trách đã nhận 'phong bì' từ đối tượng đang bị thanh tra. Người này là thanh tra viên kỳ cựu, có kinh nghiệm và được cấp trên tin tưởng. Nếu vụ việc vỡ lở, cả cuộc thanh tra có thể bị đặt dấu hỏi về tính khách quan.",
    ideologyTag: "Tự chỉnh đốn",
    options: [
      { text: "Lập tức báo cáo cấp trên, đề nghị tạm đình chỉ thanh tra viên và xem xét lại toàn bộ các kết luận liên quan", trustImpact: 10, isNegative: false },
      { text: "Tạm đình chỉ công tác thanh tra viên để xác minh làm rõ trước khi báo cáo lên cấp trên", trustImpact: 5, isNegative: false },
      { text: "Âm thầm thay đổi phân công nhân sự, loại người này khỏi các phần việc quan trọng còn lại", trustImpact: 0, isNegative: false },
      { text: "Gọi riêng nhắc nhở, yêu cầu trả lại tiền và cam kết không tái phạm, giữ kín để bảo vệ uy tín chung", trustImpact: -10, isNegative: true, multiplierGroup: "tu-chinh-don" },
      { text: "Giấu nhẹm vụ việc hoàn toàn vì lo ngại ảnh hưởng đến uy tín của đoàn thanh tra và bản thân", trustImpact: -15, isNegative: true, multiplierGroup: "tu-chinh-don" }
    ]
  },
  {
    id: "R03_S10",
    roleId: "R03",
    title: "Vụ sai phạm tồn đọng liên quan nhiều cấp lãnh đạo",
    description: "Bạn được giao xử lý một vụ việc tồn đọng từ 10 năm trước liên quan đến dự án đất đai gây thất thoát hàng trăm tỷ đồng. Hồ sơ cho thấy có dấu hiệu vi phạm của nhiều cán bộ từ cấp xã đến cấp tỉnh, trong đó có những người hiện đang giữ vị trí lãnh đạo cao. Có người muốn 'khép lại' vụ việc vì 'đã cũ'.",
    ideologyTag: "Không vùng cấm",
    options: [
      { text: "Kiên quyết làm đến cùng theo tinh thần 'không có vùng cấm', báo cáo đầy đủ lên cấp cao nhất nếu cần thiết", trustImpact: 10, isNegative: false },
      { text: "Xây dựng lộ trình xử lý theo từng giai đoạn, từ những vi phạm rõ ràng nhất đến những vấn đề phức tạp hơn", trustImpact: 5, isNegative: false },
      { text: "Chỉ tập trung xử lý những người trực tiếp vi phạm, không mở rộng lên các cấp lãnh đạo để tránh phức tạp", trustImpact: -5, isNegative: true, multiplierGroup: "khong-vung-cam" },
      { text: "Thu hẹp phạm vi điều tra với lý do 'hết thời hiệu' hoặc 'thiếu chứng cứ' đối với một số đối tượng nhạy cảm", trustImpact: -5, isNegative: true, multiplierGroup: "khong-vung-cam" },
      { text: "Đề xuất khép lại vụ việc với lý do đã quá lâu, không còn ý nghĩa thực tiễn và gây mất ổn định nội bộ", trustImpact: -10, isNegative: true, multiplierGroup: "khong-vung-cam" }
    ]
  },
  {
    id: "R03_S11",
    roleId: "R03",
    title: "Báo chí yêu cầu tiếp cận hồ sơ thanh tra",
    description: "Một nhóm phóng viên điều tra từ các tờ báo lớn gửi công văn chính thức yêu cầu được tiếp cận hồ sơ một vụ thanh tra đất đai đang gây xôn xao dư luận. Họ cho biết sẽ thực hiện phóng sự điều tra độc lập. Hồ sơ có nhiều thông tin nhạy cảm liên quan đến một số doanh nghiệp lớn và cán bộ địa phương.",
    ideologyTag: "Minh bạch",
    options: [
      { text: "Cung cấp đầy đủ thông tin trong phạm vi thẩm quyền theo quy định pháp luật về tiếp cận thông tin", trustImpact: 10, isNegative: false },
      { text: "Cung cấp có chọn lọc những thông tin đã được phép công bố, giữ lại phần còn đang trong quá trình điều tra", trustImpact: 5, isNegative: false },
      { text: "Hẹn cung cấp thông tin sau khi cuộc thanh tra hoàn tất và có kết luận chính thức được phê duyệt", trustImpact: 0, isNegative: false },
      { text: "Từ chối với lý do 'bí mật nghiệp vụ' mà không giải thích cụ thể căn cứ pháp lý của việc từ chối", trustImpact: -5, isNegative: true, multiplierGroup: "minh-bach" },
      { text: "Gây khó dễ bằng cách yêu cầu nhiều thủ tục rườm rà, hẹn đi hẹn lại để làm nản lòng phóng viên", trustImpact: -10, isNegative: true, multiplierGroup: "minh-bach" }
    ]
  },
  {
    id: "R03_S12",
    roleId: "R03",
    title: "Cán bộ từng bị kỷ luật được đề xuất tái bổ nhiệm",
    description: "Một cán bộ bị kỷ luật cách chức cách đây 3 năm vì sai phạm trong quản lý tài chính nay được đề xuất bổ nhiệm vào vị trí Phó Giám đốc Sở Tài chính. Lý do: 'đã nghiêm túc sửa chữa khuyết điểm và có năng lực chuyên môn tốt'. Hồ sơ bổ nhiệm gửi đến cơ quan bạn để lấy ý kiến thẩm định.",
    ideologyTag: "Trách nhiệm",
    options: [
      { text: "Kiến nghị dừng quy trình bổ nhiệm, nêu rõ quan điểm không nên bổ nhiệm người từng sai phạm vào vị trí nhạy cảm hơn", trustImpact: 10, isNegative: false },
      { text: "Yêu cầu rà soát và đánh giá lại toàn diện quá trình công tác sau kỷ luật trước khi đưa ra ý kiến chính thức", trustImpact: 5, isNegative: false },
      { text: "Ủng hộ với điều kiện phải có cơ chế giám sát chặt chẽ và đánh giá định kỳ trong thời gian đầu", trustImpact: 0, isNegative: false },
      { text: "Không có ý kiến gì, để đơn vị đề xuất tự quyết định vì không thuộc thẩm quyền trực tiếp của mình", trustImpact: -5, isNegative: true, multiplierGroup: "trach-nhiem" },
      { text: "Ủng hộ hoàn toàn đề xuất bổ nhiệm mà không cần xem xét thêm, vì 'ai cũng có quyền được sửa sai'", trustImpact: -10, isNegative: true, multiplierGroup: "trach-nhiem" }
    ]
  },
  {
    id: "R03_S13",
    roleId: "R03",
    title: "Người dân phản ánh xử lý kỷ luật không đồng đều",
    description: "Báo chí và mạng xã hội đang so sánh hai vụ việc tương tự: một cán bộ huyện nghèo bị cách chức vì sai phạm 500 triệu đồng, trong khi một giám đốc sở ở tỉnh giàu chỉ bị khiển trách dù sai phạm lên đến 2 tỷ đồng. Dư luận cho rằng 'cá lớn được ưu ái, cá bé bị xử nặng'.",
    ideologyTag: "Công bằng",
    options: [
      { text: "Rà soát lại cả hai hồ sơ một cách khách quan, sẵn sàng điều chỉnh nếu có sự không nhất quán trong áp dụng quy định", trustImpact: 10, isNegative: false },
      { text: "Giải thích cụ thể từng trường hợp với các căn cứ pháp lý và tình tiết khác nhau dẫn đến mức xử lý khác nhau", trustImpact: 5, isNegative: false },
      { text: "Ghi nhận phản ánh và cam kết sẽ xem xét kỹ lưỡng trong quá trình hoàn thiện quy định về xử lý kỷ luật", trustImpact: 0, isNegative: false },
      { text: "Giải thích một cách chung chung rằng 'mỗi vụ việc có tình tiết riêng' mà không đi vào chi tiết cụ thể", trustImpact: -5, isNegative: true, multiplierGroup: "cong-bang" },
      { text: "Bỏ qua hoàn toàn phản ánh, cho rằng dân không đủ thông tin để so sánh và đánh giá chuyên môn", trustImpact: -10, isNegative: true, multiplierGroup: "cong-bang" }
    ]
  },
  {
    id: "R03_S14",
    roleId: "R03",
    title: "Phát hiện dấu hiệu lợi ích nhóm trong dự án lớn",
    description: "Qua thanh tra một dự án cảng biển trị giá hàng nghìn tỷ đồng, bạn phát hiện mạng lưới 'lợi ích nhóm' tinh vi: một số công ty trúng thầu có quan hệ họ hàng với quan chức tỉnh, giá thầu cao bất thường, phụ lục hợp đồng bổ sung liên tục. Có dấu hiệu cả một hệ thống được thiết lập để 'ăn chia' lợi ích.",
    ideologyTag: "Chống lợi ích nhóm",
    options: [
      { text: "Báo cáo đầy đủ lên cấp cao nhất và cơ quan điều tra, đề nghị mở rộng điều tra toàn diện 'nhóm lợi ích' này", trustImpact: 10, isNegative: false },
      { text: "Tiếp tục thu thập thêm chứng cứ một cách thận trọng để có hồ sơ vững chắc trước khi hành động lớn", trustImpact: 5, isNegative: false },
      { text: "Xử lý ở mức kỹ thuật: kiến nghị điều chỉnh dự án, không đi sâu vào điều tra các cá nhân liên quan", trustImpact: 0, isNegative: false },
      { text: "Xử lý nhẹ nhàng với lý do 'giữ ổn định' và 'không ảnh hưởng đến tiến độ dự án quan trọng của tỉnh'", trustImpact: -10, isNegative: true, multiplierGroup: "chong-loi-ich-nhom" },
      { text: "Lờ đi các dấu hiệu nghiêm trọng, chỉ kết luận những sai phạm nhỏ không liên quan đến 'nhóm lợi ích'", trustImpact: -15, isNegative: true, multiplierGroup: "chong-loi-ich-nhom" }
    ]
  },
  {
    id: "R03_S15",
    roleId: "R03",
    title: "Nội bộ bất mãn vì 'xử lý quá nghiêm'",
    description: "Sau nhiều vụ kỷ luật liên tiếp trong 6 tháng qua, nội bộ cơ quan và các đơn vị bị thanh tra xuất hiện tâm lý bất mãn. Có người cho rằng đoàn thanh tra 'quá khắt khe', 'bới lông tìm vết', 'ai làm cũng sai'. Một số lãnh đạo địa phương than phiền rằng cán bộ không còn dám làm, công việc đình trệ.",
    ideologyTag: "Kiên định",
    options: [
      { text: "Giữ vững nguyên tắc và tiêu chuẩn đã đề ra, đồng thời tổ chức các buổi giải thích để mọi người hiểu rõ ý nghĩa của công tác thanh tra", trustImpact: 10, isNegative: false },
      { text: "Mở các cuộc đối thoại nội bộ để lắng nghe phản ánh, giảm căng thẳng nhưng không thay đổi nguyên tắc xử lý", trustImpact: 5, isNegative: false },
      { text: "Giảm cường độ thanh tra trong một thời gian để 'hạ nhiệt' không khí, tập trung vào những vụ việc nghiêm trọng nhất", trustImpact: -5, isNegative: true, multiplierGroup: "kien-dinh" },
      { text: "Chuyển sang kiểm tra hình thức, nới lỏng tiêu chuẩn đánh giá để 'giữ gìn đoàn kết nội bộ'", trustImpact: -5, isNegative: true, multiplierGroup: "kien-dinh" },
      { text: "Tạm ngừng hoạt động thanh tra với lý do 'ổn định tư tưởng', chờ đến khi không khí dịu xuống mới hoạt động lại", trustImpact: -10, isNegative: true, multiplierGroup: "kien-dinh" }
    ]
  },

  // ============= R07: Cán bộ địa phương =============
  {
    id: "R07_S01",
    roleId: "R07",
    title: "Triển khai chính sách mới khi hướng dẫn chưa rõ ràng",
    description: "Trung ương vừa ban hành chính sách hỗ trợ người dân bị ảnh hưởng bởi dịch bệnh với yêu cầu triển khai ngay trong tuần. Tuy nhiên, thông tư hướng dẫn chi tiết chưa được ban hành, nhiều tiêu chí xác định đối tượng còn mơ hồ. Người dân đã biết tin và đến UBND xã hỏi thăm, mong được nhận hỗ trợ sớm.",
    ideologyTag: "Trách nhiệm",
    options: [
      { text: "Chủ động liên hệ cấp trên xin hướng dẫn bổ sung, đồng thời giải thích rõ ràng cho dân biết tiến độ thực hiện", trustImpact: 12, isNegative: false },
      { text: "Bắt đầu triển khai những phần đã rõ ràng, vừa làm vừa điều chỉnh khi có hướng dẫn mới từ cấp trên", trustImpact: 0, isNegative: false },
      { text: "Chỉ triển khai những trường hợp đủ điều kiện rõ ràng nhất, hoãn những trường hợp còn vướng mắc chờ hướng dẫn", trustImpact: 5, isNegative: false },
      { text: "Áp dụng máy móc theo văn bản gốc dù biết sẽ có sai sót, 'cứ làm theo quy định, sai thì sửa sau'", trustImpact: -5, isNegative: true, multiplierGroup: "trach-nhiem" },
      { text: "Trì hoãn hoàn toàn việc triển khai chờ đến khi có hướng dẫn đầy đủ, dù dân đang cần gấp", trustImpact: -10, isNegative: true, multiplierGroup: "trach-nhiem" }
    ]
  },
  {
    id: "R07_S02",
    roleId: "R07",
    title: "Người dân bức xúc vì thủ tục hành chính rườm rà",
    description: "Nhiều người dân phản ánh rằng để làm một giấy chứng nhận quyền sử dụng đất phải qua 12 bước, đi lại 5-6 lần trong vòng 3 tháng. Có bà cụ 75 tuổi đã khóc tại bộ phận một cửa vì phải về xã cũ xin giấy xác nhận trong khi chân đau không đi lại được. Mạng xã hội bắt đầu chia sẻ câu chuyện này.",
    ideologyTag: "Gần dân",
    options: [
      { text: "Lập tức rà soát và cắt giảm những thủ tục không cần thiết, áp dụng cơ chế 'một lần hẹn, một lần trả' cho dân", trustImpact: 15, isNegative: false },
      { text: "Ưu tiên hỗ trợ ngay những trường hợp bức xúc nhất như bà cụ, đồng thời lên kế hoạch cải cách lâu dài", trustImpact: 5, isNegative: false },
      { text: "Cử cán bộ hướng dẫn kỹ hơn từ đầu để dân không phải đi lại nhiều lần, nhưng giữ nguyên quy trình", trustImpact: 0, isNegative: false },
      { text: "Giải thích rằng đây là quy định của cấp trên, xã không có thẩm quyền thay đổi quy trình", trustImpact: -5, isNegative: true, multiplierGroup: "gan-dan" },
      { text: "Phản bác rằng dân thiếu hiểu biết, không chuẩn bị hồ sơ đúng nên mới phải đi lại nhiều lần", trustImpact: -20, isNegative: true, multiplierGroup: "gan-dan" }
    ]
  },
  {
    id: "R07_S03",
    roleId: "R07",
    title: "Áp lực ưu tiên giải quyết hồ sơ cho người quen",
    description: "Vợ của Phó Chủ tịch huyện đến gặp riêng bạn nhờ 'xem nhanh giúp' hồ sơ chuyển đổi mục đích sử dụng đất. Hồ sơ này về cơ bản đủ điều kiện, nhưng đang có 47 hồ sơ khác nộp trước đang chờ. Nếu xử lý ưu tiên sẽ mất ít nhất 2 tuần so với những người đang xếp hàng.",
    ideologyTag: "Công bằng",
    options: [
      { text: "Lịch sự từ chối và giải thích rằng phải xử lý theo đúng thứ tự tiếp nhận để đảm bảo công bằng cho tất cả", trustImpact: 14, isNegative: false },
      { text: "Hướng dẫn chi tiết để họ tự hoàn thiện hồ sơ thật tốt, đảm bảo khi đến lượt sẽ được giải quyết nhanh nhất", trustImpact: 5, isNegative: false },
      { text: "Giải quyết theo đúng quy trình bình thường, không bỏ qua bất kỳ bước nào dù có thể nhanh hơn một chút", trustImpact: 0, isNegative: false },
      { text: "Kín đáo đẩy hồ sơ lên trước những hồ sơ khác mà không để ai biết, 'cho xong việc'", trustImpact: -12, isNegative: true, multiplierGroup: "cong-bang" },
      { text: "Yêu cầu 'bồi dưỡng' để xử lý nhanh, coi đây là dịch vụ đặc biệt có thu phí 'ngoài sổ sách'", trustImpact: -25, isNegative: true, multiplierGroup: "cong-bang" }
    ]
  },
  {
    id: "R07_S04",
    roleId: "R07",
    title: "Người dân hiểu sai chính sách hỗ trợ dẫn đến nghi ngờ",
    description: "Chính sách hỗ trợ học phí chỉ áp dụng cho hộ nghèo, nhưng tin đồn lan ra rằng 'tất cả đều được miễn học phí'. Nhiều gia đình không thuộc diện hỗ trợ đến đòi quyền lợi, khi bị từ chối liền cho rằng cán bộ xã 'ăn chặn tiền của dân'. Không khí trong thôn đang rất căng thẳng.",
    ideologyTag: "Dân vận",
    options: [
      { text: "Tổ chức họp dân toàn thôn, đọc nguyên văn quy định và giải đáp mọi thắc mắc một cách công khai, minh bạch", trustImpact: 13, isNegative: false },
      { text: "Nhờ trưởng thôn và các hội đoàn thể giải thích rõ ràng đến từng hộ gia đình trong phạm vi phụ trách", trustImpact: 5, isNegative: false },
      { text: "Chờ đợi một thời gian để dân tự hiểu dần thông qua những hộ thực sự được nhận hỗ trợ", trustImpact: 0, isNegative: false },
      { text: "Chỉ dán thông báo trên bảng tin xã, ai muốn biết thì tự đến đọc", trustImpact: -5, isNegative: true, multiplierGroup: "dan-van" },
      { text: "Cho rằng dân cố tình hiểu sai để đòi hỗ trợ, không cần giải thích thêm vì 'đã công bố rồi'", trustImpact: -15, isNegative: true, multiplierGroup: "dan-van" }
    ]
  },
  {
    id: "R07_S05",
    roleId: "R07",
    title: "Chậm chi trả tiền hỗ trợ cho người dân",
    description: "Tiền hỗ trợ bão lũ cho 200 hộ dân đáng lẽ phải chi trả từ 2 tháng trước, nhưng đến nay vẫn chưa được giải ngân vì ngân sách tỉnh chuyển về chậm. Nhiều hộ đã vay nóng để sửa nhà và đang bị đòi nợ gấp. Họ đến UBND xã hỏi mỗi ngày, một số người bắt đầu la lối, đe dọa.",
    ideologyTag: "Minh bạch",
    options: [
      { text: "Công khai toàn bộ lý do chậm trễ, tiến độ giải ngân từ tỉnh và thời gian dự kiến chi trả cụ thể cho dân biết", trustImpact: 10, isNegative: false },
      { text: "Ưu tiên chi trả trước cho những hộ khó khăn nhất từ nguồn dự phòng, còn lại chờ ngân sách về", trustImpact: 5, isNegative: false },
      { text: "Không công bố thông tin gì thêm để tránh tạo kỳ vọng không đúng nếu tình hình tiếp tục chậm trễ", trustImpact: 0, isNegative: false },
      { text: "Hứa chung chung 'sẽ sớm có' mà không có mốc thời gian cụ thể, để dân tự kiên nhẫn chờ đợi", trustImpact: -8, isNegative: true, multiplierGroup: "minh-bach" },
      { text: "Đổ lỗi cho dân rằng hồ sơ chưa đủ điều kiện nên phải chờ bổ sung, trong khi thực tế là do ngân sách chậm", trustImpact: -15, isNegative: true, multiplierGroup: "minh-bach" }
    ]
  },
  {
    id: "R07_S06",
    roleId: "R07",
    title: "Thi hành quyết định cưỡng chế gây phản ứng mạnh",
    description: "Theo quyết định của huyện, bạn phải tổ chức cưỡng chế thu hồi đất của 5 hộ dân để làm đường. Mức đền bù đã được phê duyệt đúng quy định, nhưng các hộ cho rằng không đủ mua đất nơi khác. Sáng nay, gần 100 người già trẻ đã tập trung phản đối, có cả phóng viên đến quay phim.",
    ideologyTag: "Pháp luật – Nhân văn",
    options: [
      { text: "Dừng lại để đối thoại trực tiếp với người dân, tìm hiểu thêm nguyện vọng và tìm kiếm giải pháp hài hòa hơn", trustImpact: 18, isNegative: false },
      { text: "Mời Mặt trận Tổ quốc và các đoàn thể làm trung gian hòa giải, tìm tiếng nói chung giữa các bên", trustImpact: 5, isNegative: false },
      { text: "Tạm hoãn cưỡng chế trong một tuần để tình hình bớt căng thẳng, đồng thời báo cáo huyện xin ý kiến", trustImpact: 0, isNegative: false },
      { text: "Tiếp tục thực hiện cưỡng chế theo đúng quyết định vì 'đã làm đúng quy trình, không thể thay đổi'", trustImpact: -10, isNegative: true, multiplierGroup: "phap-luat-nhan-van" },
      { text: "Huy động lực lượng đông đảo để 'dẹp loạn', ép buộc người dân chấp hành bằng mọi giá", trustImpact: -30, isNegative: true, multiplierGroup: "phap-luat-nhan-van" }
    ]
  },
  {
    id: "R07_S07",
    roleId: "R07",
    title: "Báo chí phản ánh tiêu cực trong quản lý địa phương",
    description: "Một bài báo với tiêu đề 'Hàng loạt sai phạm tại xã X' liệt kê nhiều vấn đề: đường liên thôn xuống cấp không được sửa, đất công bị lấn chiếm, giấy tờ cấp chậm... Mặc dù có một số điểm đúng nhưng cũng có những thông tin chưa chính xác. Bài báo được chia sẻ rộng rãi trên mạng xã hội.",
    ideologyTag: "Cầu thị",
    options: [
      { text: "Tiếp thu nghiêm túc những điểm đúng, lập tức khắc phục sai sót và gửi phản hồi chi tiết cho tòa soạn", trustImpact: 16, isNegative: false },
      { text: "Giải trình từng điểm với những thông tin chính xác, đồng thời không đề cập đến những nội dung nhạy cảm", trustImpact: 5, isNegative: false },
      { text: "Giữ im lặng chờ dư luận tự lắng xuống, tránh 'đổ thêm dầu vào lửa' bằng tranh luận công khai", trustImpact: 0, isNegative: false },
      { text: "Gửi văn bản giải trình chiếu lệ đến tòa soạn nhưng không thực sự xem xét và khắc phục vấn đề", trustImpact: -8, isNegative: true, multiplierGroup: "cau-thi" },
      { text: "Công khai tố cáo báo chí xuyên tạc sự thật, đe dọa kiện phóng viên vì 'bôi nhọ chính quyền'", trustImpact: -18, isNegative: true, multiplierGroup: "cau-thi" }
    ]
  },
  {
    id: "R07_S08",
    roleId: "R07",
    title: "Thiếu nhân lực nghiêm trọng khi triển khai chính sách mới",
    description: "Xã có 12 cán bộ nhưng phải đảm nhận 35 đầu việc thường xuyên. Nay lại thêm 3 chương trình mục tiêu quốc gia phải triển khai đồng thời với nhiều sổ sách, báo cáo. Cán bộ làm việc 12-14 tiếng/ngày vẫn không xuể. Có người đã xin nghỉ việc vì kiệt sức. Chất lượng phục vụ dân bắt đầu giảm sút.",
    ideologyTag: "Chủ động",
    options: [
      { text: "Rà soát và sắp xếp lại ưu tiên công việc, tập trung nguồn lực vào những việc dân sinh quan trọng nhất", trustImpact: 12, isNegative: false },
      { text: "Huy động thêm lực lượng từ các thôn, kiêm nhiệm chéo và phân công lại để chia sẻ gánh nặng", trustImpact: 5, isNegative: false },
      { text: "Báo cáo xin giãn tiến độ triển khai một số chương trình với lý do thiếu nguồn lực thực tế", trustImpact: 0, isNegative: false },
      { text: "Làm qua loa cho xong các báo cáo, ưu tiên 'có số liệu' hơn là chất lượng thực sự", trustImpact: -10, isNegative: true, multiplierGroup: "chu-dong" },
      { text: "Bỏ mặc những việc liên quan đến dân để ưu tiên hoàn thành báo cáo cho cấp trên", trustImpact: -20, isNegative: true, multiplierGroup: "chu-dong" }
    ]
  },
  {
    id: "R07_S09",
    roleId: "R07",
    title: "Người dân đề nghị linh hoạt áp dụng chính sách",
    description: "Ông Bảy 70 tuổi, sống một mình, bị liệt hai chân nên không thể đến xã làm thủ tục nhận trợ cấp người cao tuổi. Theo quy định, phải có mặt trực tiếp để ký nhận. Con cháu ở xa không thể về giúp. Nếu không giải quyết, ông sẽ mất khoản trợ cấp trong 6 tháng tới.",
    ideologyTag: "Linh hoạt",
    options: [
      { text: "Báo cáo xin cơ chế đặc thù cho trường hợp này, đồng thời tạm ứng trước để ông không bị thiệt thòi", trustImpact: 14, isNegative: false },
      { text: "Cử cán bộ đến tận nhà ông Bảy để hoàn thiện thủ tục, chấp nhận đi ngoài quy trình thông thường", trustImpact: 5, isNegative: false },
      { text: "Hướng dẫn con cháu ông Bảy làm giấy ủy quyền và chờ đến đợt chi trả tiếp theo theo đúng quy định", trustImpact: 0, isNegative: false },
      { text: "Từ chối với lý do 'phải có mặt theo quy định', không thể ngoại lệ vì sẽ tạo tiền lệ xấu", trustImpact: -8, isNegative: true, multiplierGroup: "linh-hoat" },
      { text: "Tự ý ký thay và nhận tiền thay ông Bảy, hứa sẽ mang đến tận nhà (tiềm ẩn rủi ro sai quy định)", trustImpact: -18, isNegative: true, multiplierGroup: "linh-hoat" }
    ]
  },
  {
    id: "R07_S10",
    roleId: "R07",
    title: "Tin sai sự thật về địa phương lan truyền trên mạng xã hội",
    description: "Một video TikTok với hàng triệu lượt xem tố cáo 'xã X lấy tiền cứu trợ bão lũ chia nhau'. Video sử dụng hình ảnh cắt ghép và thông tin sai lệch hoàn toàn. Thực tế, việc chi trả có công khai, minh bạch với đầy đủ chữ ký của người nhận. Nhưng nhiều người dân đã tin và bắt đầu nghi ngờ chính quyền.",
    ideologyTag: "Truyền thông",
    options: [
      { text: "Lập tức đăng video phản hồi với đầy đủ bằng chứng: danh sách chi trả, chữ ký người nhận, biên bản kiểm tra", trustImpact: 15, isNegative: false },
      { text: "Liên hệ với tài khoản đăng video yêu cầu gỡ bỏ, đồng thời giải thích riêng cho những người dân thắc mắc", trustImpact: 5, isNegative: false },
      { text: "Báo cáo lên huyện và chờ chỉ đạo xử lý, tránh tự ý phản hồi có thể gây phức tạp thêm", trustImpact: 0, isNegative: false },
      { text: "Im lặng hoàn toàn với hy vọng video sẽ tự chìm xuống theo thời gian như bao tin giả khác", trustImpact: -10, isNegative: true, multiplierGroup: "truyen-thong" },
      { text: "Tìm cách 'trấn áp' bằng việc gọi điện đe dọa người đăng video, yêu cầu gỡ ngay lập tức", trustImpact: -20, isNegative: true, multiplierGroup: "truyen-thong" }
    ]
  },
  {
    id: "R07_S11",
    roleId: "R07",
    title: "Cán bộ cấp dưới làm sai quy trình gây phản ánh",
    description: "Cán bộ tư pháp xã bị phản ánh thu phí ngoài quy định khi công chứng giấy tờ. Sau khi xác minh, đúng là có việc thu thêm 20.000-50.000 đồng/lần với lý do 'tiền giấy, tiền mực'. Đây là cán bộ lâu năm, có kinh nghiệm nhưng số tiền sai phạm mỗi lần không lớn và chưa có đơn khiếu nại chính thức.",
    ideologyTag: "Quản lý",
    options: [
      { text: "Yêu cầu hoàn trả toàn bộ số tiền thu sai, tổ chức đào tạo lại về quy định và công bố công khai niêm yết phí", trustImpact: 12, isNegative: false },
      { text: "Theo dõi sát sao và bí mật kiểm tra đột xuất trong thời gian tới để đánh giá mức độ sửa chữa", trustImpact: 5, isNegative: false },
      { text: "Nhắc nhở trong cuộc họp giao ban chung không nêu tên, để toàn thể cán bộ tự rút kinh nghiệm", trustImpact: 0, isNegative: false },
      { text: "Nhắc nhở riêng qua loa vì 'số tiền nhỏ, không đáng để làm lớn chuyện, ảnh hưởng đến tinh thần anh em'", trustImpact: -6, isNegative: true, multiplierGroup: "quan-ly" },
      { text: "Bao che với lý do đây là cán bộ kỳ cựu, nếu xử lý sẽ gây mất đoàn kết nội bộ", trustImpact: -18, isNegative: true, multiplierGroup: "quan-ly" }
    ]
  },
  {
    id: "R07_S12",
    roleId: "R07",
    title: "Dự án giải ngân chậm tiến độ gây bức xúc",
    description: "Dự án làm đường liên thôn được phê duyệt từ đầu năm nhưng đến tháng 10 mới giải ngân được 30% vốn. Đường đào dở dang, mùa mưa đến, bùn lầy khiến xe máy không đi được, trẻ em phải nghỉ học vì không thể đến trường. Dân đổ lỗi cho xã 'làm ăn chậm chạp, ăn bớt xén'.",
    ideologyTag: "Hiệu quả",
    options: [
      { text: "Trực tiếp rà soát toàn bộ vướng mắc, phối hợp với nhà thầu và huyện tháo gỡ từng điểm nghẽn cụ thể", trustImpact: 14, isNegative: false },
      { text: "Công khai minh bạch tiến độ và lý do chậm trễ với dân, cam kết mốc hoàn thành cụ thể từng đoạn đường", trustImpact: 5, isNegative: false },
      { text: "Giữ nguyên theo kế hoạch ban đầu, chờ đến khi điều kiện thuận lợi hơn để tiếp tục thi công", trustImpact: 0, isNegative: false },
      { text: "Gửi báo cáo cho huyện với những lý do khách quan để giải trình, coi như đã làm đúng trách nhiệm", trustImpact: -8, isNegative: true, multiplierGroup: "hieu-qua" },
      { text: "Đổ lỗi hoàn toàn cho nhà thầu và các sở ngành, khẳng định xã không có lỗi trong việc chậm trễ", trustImpact: -15, isNegative: true, multiplierGroup: "hieu-qua" }
    ]
  },
  {
    id: "R07_S13",
    roleId: "R07",
    title: "Tin đồn cán bộ địa phương 'ăn chặn' tiền hỗ trợ",
    description: "Trong thôn lan truyền tin đồn rằng cán bộ xã đã 'ăn chặn' 30% tiền hỗ trợ COVID-19 của dân. Thực tế việc chi trả được thực hiện đúng quy định, có danh sách ký nhận đầy đủ. Tuy nhiên, một số hộ không nhận được vì không thuộc diện, họ cho rằng bị 'cắt xén' và là nguồn gốc của tin đồn.",
    ideologyTag: "Liêm chính",
    options: [
      { text: "Tổ chức buổi công khai minh bạch với đầy đủ danh sách, số tiền, chữ ký và cho dân kiểm tra trực tiếp", trustImpact: 16, isNegative: false },
      { text: "Đề nghị cơ quan chức năng hoặc MTTQ giám sát độc lập để chứng minh tính minh bạch của việc chi trả", trustImpact: 5, isNegative: false },
      { text: "Theo dõi thêm một thời gian để xem tin đồn có lan rộng không trước khi quyết định hành động", trustImpact: 0, isNegative: false },
      { text: "Phớt lờ tin đồn vì cho rằng 'đã làm đúng, không cần giải thích với những người thiếu hiểu biết'", trustImpact: -10, isNegative: true, multiplierGroup: "liem-chinh" },
      { text: "Tìm ra người tung tin đồn và đe dọa xử lý về tội vu khống để dập tắt nguồn gốc thông tin", trustImpact: -25, isNegative: true, multiplierGroup: "liem-chinh" }
    ]
  },
  {
    id: "R07_S14",
    roleId: "R07",
    title: "Chính sách gây thiệt thòi cho một nhóm dân cư nhỏ",
    description: "Dự án mở rộng đường tỉnh lộ đi qua địa phương đem lại lợi ích lớn cho đa số dân. Tuy nhiên, 15 hộ ở ven đường phải di dời với mức đền bù theo khung giá Nhà nước - thấp hơn nhiều so với giá thị trường. Họ không đủ tiền mua đất nơi khác, cảm thấy bị 'hy sinh' cho lợi ích chung.",
    ideologyTag: "Công bằng xã hội",
    options: [
      { text: "Đề xuất lên huyện, tỉnh xem xét cơ chế hỗ trợ bổ sung ngoài đền bù theo khung cho những hộ khó khăn đặc biệt", trustImpact: 15, isNegative: false },
      { text: "Tìm phương án bố trí tái định cư tại chỗ hoặc gần nhà cũ để giảm thiểu xáo trộn cuộc sống của người dân", trustImpact: 5, isNegative: false },
      { text: "Giải thích rõ ràng cho các hộ về lợi ích dài hạn của dự án và cam kết sẽ theo dõi hỗ trợ sau này", trustImpact: 0, isNegative: false },
      { text: "Cho rằng đây là 'hy sinh vì lợi ích chung', dân phải chấp nhận vì đa số đã được hưởng lợi", trustImpact: -8, isNegative: true, multiplierGroup: "cong-bang-xa-hoi" },
      { text: "Phớt lờ hoàn toàn phản ánh của 15 hộ, tiếp tục triển khai dự án theo đúng tiến độ đã định", trustImpact: -20, isNegative: true, multiplierGroup: "cong-bang-xa-hoi" }
    ]
  },
  {
    id: "R07_S15",
    roleId: "R07",
    title: "Áp lực 'làm đẹp' báo cáo thành tích cuối năm",
    description: "Cuối năm, huyện yêu cầu xã nộp báo cáo tổng kết với các chỉ số phải đạt để xã được công nhận 'hoàn thành xuất sắc nhiệm vụ'. Thực tế, xã chỉ đạt 75% chỉ tiêu về xây dựng nông thôn mới và 80% chỉ tiêu về giảm nghèo. Nếu báo cáo thật, xã sẽ bị xếp loại thấp và ảnh hưởng đến thi đua.",
    ideologyTag: "Trung thực",
    options: [
      { text: "Báo cáo hoàn toàn trung thực với số liệu thực tế, kèm theo phân tích nguyên nhân và kế hoạch cải thiện năm sau", trustImpact: 18, isNegative: false },
      { text: "Báo cáo đúng số liệu thực tế nhưng đề xuất các giải pháp cụ thể để cải thiện trong thời gian tới", trustImpact: 5, isNegative: false },
      { text: "Trình bày số liệu thật với chú thích rõ những điểm yếu và cam kết nỗ lực hoàn thành trong quý đầu năm sau", trustImpact: 0, isNegative: false },
      { text: "'Điều chỉnh' một số chỉ số cho đẹp hơn trong phạm vi 'có thể giải thích được' nếu bị kiểm tra", trustImpact: -12, isNegative: true, multiplierGroup: "trung-thuc" },
      { text: "Làm báo cáo hoàn toàn theo yêu cầu của huyện với số liệu đạt 100%, bất chấp thực tế", trustImpact: -25, isNegative: true, multiplierGroup: "trung-thuc" }
    ]
  }
];
