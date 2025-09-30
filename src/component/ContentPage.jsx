import React, { useState, useEffect } from "react";
import {
  Book,
  Users,
  Target,
  ArrowRight,
  Factory,
  Briefcase,
  Brain,
  Globe,
  Stethoscope,
  GraduationCap,
  Computer,
  Share2,
  TrendingUp,
  TreeDeciduous,
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import section3 from "../assets/thumbnail.jpg";
import TableOfContents from "./TableOfContents";
import FloatingOrbsFeatures from "./FloatingOrbsFeatures";

const TimelineNav = ({ currentSection }) => {
  const sections = [
    { id: "intro", label: "Giới thiệu" },
    { id: "section1", label: "Quan điểm cơ bản" },
    { id: "section2", label: "Thực hiện sứ mệnh" },
    { id: "section3", label: "Sứ mệnh GCCN Việt Nam" },
    { id: "section4", label: "Thảo luận" },
    { id: "thanks", label: "Kết thúc" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-center gap-4">
        {sections.map((section) => (
          <div
            key={section.id}
            className="group relative flex items-center"
            onClick={() => scrollToSection(section.id)}
          >
            <div
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${currentSection === section.id
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
                }`}
            />
            <div className="hidden group-hover:block absolute right-full mr-2">
              <span className="whitespace-nowrap bg-white/10 backdrop-blur-md text-white text-sm py-1 px-2 rounded">
                {section.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StorySection = ({ children, bgImage, title, subtitle, id }) => (
  <section
    id={id}
    className="min-h-screen relative flex items-center justify-center overflow-hidden snap-start"
  >
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
      style={{
        backgroundImage: `url(${bgImage})`,
        filter: "brightness(0.3)",
      }}
    />
    <div className="relative z-10 container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-white/80 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </motion.div>
      {children}
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }) => {
  // Split description into lines (by newline or bullet "•")
  const lines = description.split(/[\n•]+/).filter(line => line.trim() !== "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
    >
      <div className="flex items-center gap-4 mb-4">
        {/* Adjust icon size and background */}
        <div className="p-4 bg-white/20 rounded-full flex items-center justify-center w-12 h-12">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      {/* Display description as bullet list */}
      <ul className="text-white/80 leading-relaxed list-disc list-inside space-y-1">
        {lines.map((line, index) => (
          <li key={index}>{line.trim()}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const TimelineItem = ({ year, title, description, isRight, image }) => (
  <div className="relative w-full mb-16">
    <div className="md:flex items-center justify-between">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: isRight ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        className={`w-full md:w-[42%] ${isRight ? "md:order-2" : "md:order-1"}`}
      >
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </motion.div>

      {/* Center Line and Dot Container */}
      <div className="hidden md:block relative w-[8%]">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2" />
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: isRight ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        className={`w-full md:w-[42%] ${isRight ? "md:order-1" : "md:order-2"}`}
      >
        <div
          className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20`}
        >
          <div className="text-white/60 mb-2">{year}</div>
          <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-white/80 leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </div>
  </div>
);

const ContentPage = () => {
  const [currentSection, setCurrentSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "intro",
        "section1",
        "section2",
        "section3",
        "section4",
        "thanks",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black min-h-screen snap-y snap-mandatory overflow-y-auto">
      <TimelineNav currentSection={currentSection} />
      <TableOfContents scrollToSection={scrollToSection} />

      {/* Introduction Section */}
      <StorySection
        id="intro"
        bgImage="https://seagames31.vietnamtourism.gov.vn/wp-content/uploads/2022/04/One-Pillar-Pagoda-Hanoi.jpg"
        title={
          <span
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"

            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "4px 4px 12px rgba(0,0,0,0.9)"
            }}
          >
            Tôn giáo trong thời kì quá độ lên <br />
            chủ nghĩa xã hội
          </span>

        }
        subtitle=""
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center space-y-4"
        >
          <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            • Quan điểm của Mác – Lênin và Hồ Chí Minh về tôn giáo <br />
            • Tôn giáo trong thời kì quá độ lên CNXH <br />
            • Chính sách tôn giáo ở Việt Nam hiện nay
          </p>

          <button
            onClick={() => scrollToSection("members")}
            className="inline-flex items-center gap-2 text-white border border-white/30 rounded-full px-4 py-2 hover:bg-white/10 transition-colors"
          >
            Khám phá <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </StorySection>

      <StorySection
        id="members"
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c" // placeholder background, replace if you like
        title="Giới thiệu thành viên"
        subtitle="Nhóm 6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {/* Member 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center space-y-4"
          >
            <img
              src="/male-placeholder.png"
              alt="Member 1"
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <h3 className="text-lg font-semibold text-white">Lê Đặng Minh Trí</h3>
            <p className="text-white/70 text-sm">Chuẩn bị nội dung</p>
          </motion.div>

          {/* Member 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center space-y-4"
          >
            <img
              src="/female-placeholder.png"
              alt="Member 2"
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <h3 className="text-lg font-semibold text-white">Nguyễn Quỳnh Như</h3>
            <p className="text-white/70 text-sm">Chuẩn bị nội dung</p>
          </motion.div>

          {/* Member 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center space-y-4"
          >
            <img
              src="/male-placeholder.png"
              alt="Member 3"
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <h3 className="text-lg font-semibold text-white">Thái Tiểu Bảo</h3>
            <p className="text-white/70 text-sm">Chuẩn bị nội dung</p>
          </motion.div>

          {/* Member 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center space-y-4"
          >
            <img
              src="/male-placeholder.png"
              alt="Member 4"
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <h3 className="text-lg font-semibold text-white">Nguyễn Công Minh Tuấn</h3>
            <p className="text-white/70 text-sm">Thuyết trình</p>
          </motion.div>

          {/* Member 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center space-y-4"
          >
            <img
              src="/male-placeholder.png"
              alt="Member 5"
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <h3 className="text-lg font-semibold text-white">Nguyễn Đức Nguyên</h3>
            <p className="text-white/70 text-sm">Thuyết trình</p>
          </motion.div>
        </div>
      </StorySection>

      {/* Section 1: Quan điểm cơ bản */}
      <StorySection
        id="section1"
        bgImage="https://image3.luatvietnam.vn/uploaded/1200x675twebp/images/original/2024/07/08/ton-giao-la-gi-__0807114637.jpg"
        title="Quan điểm của chủ nghĩa Mác - Lênin về tôn giáo"
        subtitle="Bản chất, nguồn gốc và tính chất"
        style={{
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}
      >        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FeatureCard
            icon={Book}
            title="Bản chất của tôn giáo"
            description="•Tôn giáo là hình thái ý thức xã hội phản ánh hư ảo hiện thực khách quan. 
        •Con người sáng tạo tôn giáo để phản ánh ước mơ, nguyện vọng, nhưng lại lệ thuộc vào nó. 
        •Các tôn giáo cụ thể có niềm tin vào siêu nhiên, hệ thống giáo lý, cơ sở thờ tự, tổ chức quản lý và tín đồ đông đảo."
          />
          <FeatureCard
            icon={TreeDeciduous}
            title="Nguồn gốc của tôn giáo"
            description="•Tự nhiên, kinh tế-xã hội: Con người gán sức mạnh thần bí cho thiên nhiên và hiện tượng xã hội. 
        •Nhận thức: Khoa học chưa giải thích được, trình độ dân trí thấp, tôn giáo lấp khoảng trống nhận thức. 
        •Tâm lý: Sợ hãi, cầu an, lòng biết ơn, kính trọng dẫn đến tín ngưỡng."
          />
          <FeatureCard
            icon={Layers}
            title="Tính chất của tôn giáo"
            description="• Lịch sử: Hình thành, tồn tại và thay đổi theo giai đoạn lịch sử, kinh tế-xã hội. 
        • Quần chúng: Phổ biến rộng rãi, nơi sinh hoạt văn hóa tinh thần của nhân dân lao động. 
        • Chính trị: Xuất hiện khi xã hội có giai cấp, phản ánh lợi ích các giai cấp và có thể bị lợi dụng."
          />
        </div>
      </StorySection>

      {/* Section 2: Giai cấp công nhân hiện nay */}
      <StorySection
        id="section2"
        bgImage="https://cdn-images.vtv.vn/66349b6076cb4dee98746cf1/2024/06/13/chu-tich-nuoc-to-lam-to-chuc-ton-giao-4-61107578069028408955042.png"
        title="Quan điểm của chủ nghĩa Mác - Lênin về tôn giáo"
        subtitle="Giải quyết vấn đề tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội"
      >
        <div className="max-w-6xl mx-auto px-4">
          <TimelineItem
            title="Tôn trọng tự do tín ngưỡng"
            description="Bảo đảm quyền tự do tín ngưỡng và không tín ngưỡng của nhân dân, không ép buộc hay trấn áp. Tôn trọng tín ngưỡng cũng chính là tôn trọng quyền con người."
            isRight={false}
            image="https://i0.wp.com/nhanvanviet.com/wp-content/uploads/2018/01/new_culte-1484303583286.jpg?w=800&ssl=1"
          />
          <TimelineItem
            title="Khắc phục ảnh hưởng tiêu cực"
            description="Dần dần khắc phục những ảnh hưởng tiêu cực của tôn giáo, gắn liền với quá trình cải tạo xã hội cũ và xây dựng xã hội mới, xóa bỏ ảo tưởng nảy sinh trong tư tưởng của con người."
            isRight={true}
            image="https://img.cand.com.vn/NewFiles/Images/2022/03/03/tongiao-1646319167374.png"
          />
          <TimelineItem
            title="Phân biệt hai mặt chính trị và tư tưởng"
            description="Nhận diện rõ hai mặt: chính trị và tư tưởng của tôn giáo. Mặt chính trị phản ánh xung đột lợi ích giai cấp; mặt tư tưởng liên quan đến niềm tin và giá trị tinh thần."
            isRight={false}
            image="/politic.png"
          />
          <TimelineItem
            title="Quan điểm lịch sử cụ thể"
            description="Xem xét tôn giáo theo điều kiện lịch sử cụ thể: mỗi tôn giáo đều vận động, phát triển, và tác động khác nhau trong từng thời kỳ."
            isRight={true}
            image="/history.png"
          />
        </div>
      </StorySection>

      {/* Section 3: Sứ mệnh lịch sử của GCCN Việt Nam */}
      <StorySection
        id="section3"
        bgImage={section3}
        title="III. Sứ mệnh lịch sử của giai cấp công nhân"
      >
        <FloatingOrbsFeatures
          features={[
            {
              icon: Briefcase,
              title: "Vai trò của GCCN Việt Nam",
              description:
                "Là lực lượng tiên phong trong cuộc đấu tranh giải phóng dân tộc, lật đổ chế độ thực dân phong kiến, giành độc lập và xây dựng chủ nghĩa xã hội.",
            },
            {
              icon: Share2,
              title: "Sứ mệnh lịch sử",
              description:
                "Giai cấp công nhân Việt Nam đang đứng trước những cơ hội và thách thức trong bối cảnh hội nhập kinh tế quốc tế và cách mạng công nghiệp lần thứ tư.",
            },
            {
              icon: TrendingUp,
              title: "Giải pháp phát huy vai trò",
              description:
                "Nâng cao chất lượng đào tạo và giáo dục chính trị tư tưởng cho công nhân. Cải thiện điều kiện lao động và đời sống, đảm bảo quyền lợi của giai cấp công nhân.",
            },
          ]}
        />
      </StorySection>

      {/* Section 4: Thảo luận */}
      <StorySection
        id="section4"
        bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        title="IV. Câu hỏi thảo luận"
        subtitle="Bác sĩ, giảng viên, IT hiện nay có phải là giai cấp công nhân không?"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* 1. Góc nhìn Mác-Lênin */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                1. Dưới góc nhìn Mác – Lênin, giai cấp công nhân là ai?
              </h3>
              <div className="text-white/80">
                <p className="mb-4">Giai cấp công nhân được xác định qua:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    Vị trí trong hệ thống sản xuất:
                    <ul className="list-none pl-6 mt-2">
                      <li>- Không sở hữu tư liệu sản xuất</li>
                      <li>- Bán sức lao động để sống</li>
                    </ul>
                  </li>
                  <li>
                    Tính chất lao động:
                    <ul className="list-none pl-6 mt-2">
                      <li>- Trực tiếp sản xuất</li>
                      <li>
                        - Gián tiếp tham gia sản xuất trong nền kinh tế công
                        nghiệp
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Phân tích từng nghề */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                2. Phân tích từng nghề
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Stethoscope className="w-8 h-8 text-blue-400" />
                    <h4 className="text-xl font-semibold text-white">Bác sĩ</h4>
                  </div>
                  <div className="text-white/80 space-y-2">
                    <p>• Hoạt động trong lĩnh vực dịch vụ</p>
                    <p>• Không trực tiếp sản xuất của cải vật chất</p>
                    <p>• Làm việc trong tổ chức công lập hoặc tư nhân</p>
                    <p>• Bản chất công việc là chăm sóc sức khỏe</p>
                    <p className="font-semibold mt-4">
                      → Không thuộc giai cấp công nhân
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="w-8 h-8 text-green-400" />
                    <h4 className="text-xl font-semibold text-white">
                      Giảng viên
                    </h4>
                  </div>
                  <div className="text-white/80 space-y-2">
                    <p>• Làm việc trong lĩnh vực giáo dục</p>
                    <p>• Không tham gia trực tiếp sản xuất</p>
                    <p>• Gián tiếp đào tạo nguồn nhân lực</p>
                    <p>• Thuộc lĩnh vực phi sản xuất</p>
                    <p className="font-semibold mt-4">
                      → Không hoàn toàn đồng nhất với giai cấp công nhân
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Computer className="w-8 h-8 text-purple-400" />
                    <h4 className="text-xl font-semibold text-white">
                      Nhân viên IT
                    </h4>
                  </div>
                  <div className="text-white/80 space-y-2">
                    <p>• Thuộc lĩnh vực sản xuất tri thức và công nghệ cao</p>
                    <p>• Không sở hữu tư liệu sản xuất khi làm thuê</p>
                    <p>• Công việc mang tính sáng tạo và tri thức cao</p>
                    <p>
                      • Không thuần túy là lao động công nghiệp truyền thống
                    </p>
                    <p className="font-semibold mt-4">
                      → Có đặc điểm của giai cấp công nhân hiện đại
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 3. Kết luận */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                3. Kết luận
              </h3>
              <div className="text-white/80 space-y-4">
                <p>
                  Bác sĩ, giảng viên, và IT không hoàn toàn thuộc giai cấp công
                  nhân theo định nghĩa truyền thống của chủ nghĩa Mác – Lênin.
                </p>
                <p>
                  Tuy nhiên, trong bối cảnh kinh tế tri thức, họ là bộ phận lao
                  động trí thức gắn bó mật thiết với giai cấp công nhân, góp
                  phần thúc đẩy sự phát triển xã hội và nền kinh tế.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </StorySection>

      {/* Section 5: Lời cảm ơn */}
      <StorySection
        id="thanks"
        bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
        title="Lời cảm ơn"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Cảm ơn quý thầy cô và các bạn đã theo dõi
            </h3>
            <div className="text-white/80 space-y-4">
              <p className="text-xl">
                Chúc quý thầy cô và các bạn nhiều sức khỏe và thành công!
              </p>
              <p className="italic">"Học, học nữa, học mãi" - V.I.Lenin</p>
            </div>
          </motion.div>
        </div>
      </StorySection>
    </div>
  );
};

export default ContentPage;
