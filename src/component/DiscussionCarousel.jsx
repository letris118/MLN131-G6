import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Book,
  Users,
  Target,
  ArrowRight,
  ArrowLeft,
  Factory,
  Briefcase,
  Brain,
  Globe,
  Stethoscope,
  GraduationCap,
  Computer,
  Share2,
  TrendingUp,
} from "lucide-react";

const discussions = [
  {
    id: "cq8.3",
    question: "CQ8.3. Tại sao các tôn giáo khác nhau lại có những ý thức hệ khác nhau, thậm chí đối lập nhau?",
    content: (
      <>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* 1. Nguyên nhân */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                1. Nguyên nhân
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Stethoscope className="w-8 h-8 text-blue-400" />
                    <h4 className="text-xl font-semibold text-white">
                      Bối cảnh lịch sử – xã hội</h4>
                  </div>
                  <div className="text-white/80 space-y-2">
                    <p>• Do đời sống kinh tế – xã hội mỗi vùng khác nhau (du mục, nông nghiệp, thương mại…), nhu cầu tinh thần và mô hình tổ chức xã hội cũng khác.</p>
                    <p>• Ví dụ: Ấn Độ cổ đại có hệ thống đẳng cấp nên sinh ra Hindu giáo với quan niệm nghiệp và luân hồi; còn Do Thái giáo xuất hiện trong cộng đồng du mục – thương mại nên nhấn mạnh luật lệ và giao ước với Thượng Đế.</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="w-8 h-8 text-green-400" />
                    <h4 className="text-xl font-semibold text-white">
                      Văn hóa và triết học
                    </h4>
                  </div>
                  <div className="text-white/80 space-y-2">
                    <p>• Tư duy phương Đông thiên về hài hòa, chu kỳ (Phật giáo, Đạo giáo, Nho giáo), trong khi phương Tây thiên về tuyến tính, tuyệt đối (Kitô giáo, Hồi giáo).</p>
                    <p>• Vì vậy, Phật giáo nói đến giải thoát khỏi khổ đau, còn Kitô giáo/Hồi giáo nói đến cứu rỗi linh hồn thông qua đức tin vào Thượng Đế.</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Computer className="w-8 h-8 text-purple-400" />
                    <h4 className="text-xl font-semibold text-white">
                      Về con người và vũ trụ
                    </h4>
                  </div>
                  <div className="text-white/80 space-y-2">
                    <p>• Có tôn giáo nhất thần (tin một vị thần tuyệt đối như Kitô giáo, Hồi giáo, Do Thái giáo).</p>
                    <p>• Có tôn giáo đa thần (Hindu giáo).</p>
                    <p>• Có tôn giáo không nhấn mạnh thần linh mà nhấn mạnh đạo lý/pháp (Phật giáo).</p>
                    <p className="font-semibold mt-4">
                      → Chính những khác biệt này tạo ra ý thức hệ đôi khi đối lập (ví dụ: một bên tin có Thượng Đế, một bên cho rằng không cần Thượng Đế để giải thoát).
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
                      Quyền lực và chính trị
                    </h4>
                  </div>
                  <div className="text-white/80 space-y-2">
                    <p>• Khi trở thành tôn giáo “quốc giáo” hay gắn với nhà nước, nhiều tôn giáo phát triển ý thức hệ để bảo vệ quyền lực, trật tự xã hội.</p>
                    <p>• Điều này dẫn đến sự phân chia, thậm chí đối đầu (ví dụ: xung đột lịch sử giữa Kitô giáo và Hồi giáo trong thời Trung Cổ).</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 2. Kết luận */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                2. Kết luận
              </h3>
              <div className="text-white/80 space-y-4">
                <p>
                  Các tôn giáo khác nhau vì chúng phản ánh nhu cầu tinh thần – xã hội của từng cộng đồng trong từng thời kỳ, đồng thời gắn với triết lý, văn hóa và chính trị khác nhau.
                </p>
                <p>
                  Do đó ý thức hệ có thể khác biệt, thậm chí trái ngược, nhưng đều nhằm giải thích ý nghĩa cuộc sống và định hướng hành vi con người.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </>
    ),
  },
  {
    id: "cq8.4",
    question: "CQ8.4. Chủ nghĩa Mác - Lênin là chủ nghĩa duy vật biện chứng, vậy có phải sẽ xóa bỏ hoàn toàn tôn giáo?",
    content: (
      <>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                1. Quan điểm lý luận
              </h3>
              <div className="text-white/80">
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    Chủ nghĩa Mác – Lênin là duy vật biện chứng và duy vật lịch sử, nghĩa là khẳng định vật chất có trước, ý thức có sau, phủ nhận sự tồn tại của “thế giới siêu nhiên”.
                  </li>
                  <li>
                    Vì vậy, về mặt thế giới quan, chủ nghĩa Mác – Lênin coi tôn giáo là một hình thái ý thức xã hội, phản ánh hiện thực cuộc sống một cách hư ảo, thường bắt nguồn từ sự bất lực của con người trước tự nhiên và xã hội.
                  </li>
                  <li>
                    Từ đó, mục tiêu cuối cùng của CN Mác – Lênin là xóa bỏ cơ sở nảy sinh tôn giáo, tức là khi xã hội không còn áp bức, bất công, con người làm chủ được tự nhiên và số phận, thì tôn giáo sẽ tự tiêu vong chứ không cần một sự “xóa bỏ hành chính” cưỡng bức.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                2. Quan điểm chính trị – xã hội
              </h3>
              <div className="text-white/80">
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    Mác, Ăngghen, Lênin đều nhấn mạnh: không được áp đặt cưỡng bức hay cấm đoán tôn giáo.
                  </li>
                  <li>
                    Trong thời kỳ xã hội còn giai cấp, còn khó khăn, tôn giáo vẫn tồn tại như một nhu cầu tinh thần của một bộ phận nhân dân.
                  </li>
                  <li>
                    Vì vậy, nguyên tắc là:
                    <p>Tôn trọng quyền tự do tín ngưỡng và không tín ngưỡng.</p>
                    <p>Đấu tranh chống việc lợi dụng tôn giáo cho mục đích chính trị phản động.</p>
                    <p>Gắn việc khắc phục ảnh hưởng tiêu cực của tôn giáo với việc nâng cao dân trí, cải thiện đời sống, phát triển khoa học.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Kết luận */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                3. Kết luận
              </h3>
              <div className="text-white/80 space-y-4">
                <p>
                  Chủ nghĩa Mác – Lênin không chủ trương “xóa bỏ ngay lập tức tôn giáo” bằng biện pháp hành chính, mà khẳng định rằng khi xã hội phát triển, bất công bị xóa bỏ, khoa học – văn hóa phát triển, thì tôn giáo sẽ dần mất đi vai trò xã hội của nó và tự tiêu vong.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </>
    ),
  },
  {
    id: "cq8.5",
    question: "CQ8.5. Việt Nam là quốc gia đa tôn giáo, vậy đã từng có chiến tranh tôn giáo không?",
    content: (
      <>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* 1. Thực tế lịch sử */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                1. Thực tế lịch sử
              </h3>
              <div className="text-white/80">
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    Việt Nam là quốc gia đa tôn giáo, trong đó có Phật giáo, Nho giáo, Đạo giáo, Thiên Chúa giáo, Hồi giáo (Chăm), Cao Đài, Hòa Hảo…
                  </li>
                  <li>
                    Tuy nhiên, Việt Nam chưa từng xảy ra “chiến tranh tôn giáo” theo nghĩa là các cộng đồng tôn giáo tổ chức quân sự đánh nhau chỉ vì khác niềm tin (như ở châu Âu thời Trung cổ hay một số khu vực Trung Đông).
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Nguyên nhân */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                2. Nguyên nhân
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Stethoscope className="w-8 h-8 text-blue-400" />
                    <h4 className="text-xl font-semibold text-white">
                      Truyền thống văn hóa – dân tộc</h4>
                  </div>
                  <div className="text-white/80 space-y-2">
                    <p>• Người Việt có truyền thống khoan dung, hòa đồng.</p>
                    <p>• Từ xa xưa đã hình thành quan niệm: “Tam giáo đồng nguyên” (Phật – Nho – Lão cùng tồn tại, bổ sung lẫn nhau).</p>
                    <p>• Người dân có thể vừa đi chùa, vừa cúng tổ tiên, vừa tiếp nhận ảnh hưởng Nho giáo, mà không thấy mâu thuẫn.</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="w-8 h-8 text-green-400" />
                    <h4 className="text-xl font-semibold text-white">
                      Vai trò của tôn giáo ở Việt Nam
                    </h4>
                  </div>
                  <div className="text-white/80 space-y-2">
                    <p>• Tôn giáo ở Việt Nam thường gắn chặt với đời sống cộng đồng, văn hóa và đạo lý dân tộc, hơn là đối lập nhau.</p>
                    <p>• Ví dụ: Phật giáo hòa nhập với tín ngưỡng thờ cúng tổ tiên; Công giáo tại Việt Nam dần gắn bó với tinh thần yêu nước.</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Computer className="w-8 h-8 text-purple-400" />
                    <h4 className="text-xl font-semibold text-white">
                      Chính trị – xâm lược bên ngoài
                    </h4>
                  </div>
                  <div className="text-white/80 space-y-2">
                    <p>• Trong một số giai đoạn lịch sử, có xung đột liên quan đến tôn giáo, nhưng thực chất thường bắt nguồn từ yếu tố chính trị, thực dân – đế quốc lợi dụng tôn giáo để chia rẽ dân tộc.</p>
                    <p>• Ví dụ: thời Pháp thuộc, chính quyền thực dân từng lợi dụng Công giáo để củng cố quyền lực.</p>
                    <p>• Nhưng xung đột này không phát triển thành chiến tranh tôn giáo, mà là cuộc đấu tranh giải phóng dân tộc chống xâm lược.</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Computer className="w-8 h-8 text-purple-400" />
                    <h4 className="text-xl font-semibold text-white">
                      Chính sách của Nhà nước
                    </h4>
                  </div>
                  <div className="text-white/80 space-y-2">
                    <p>• Các triều đại phong kiến và sau này là Nhà nước Việt Nam hiện đại đều có chính sách dung hòa, tôn trọng tín ngưỡng, hạn chế mâu thuẫn tôn giáo phát triển thành xung đột vũ trang.</p>
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
                  Việt Nam chưa từng có chiến tranh tôn giáo do truyền thống hòa đồng, khoan dung tôn giáo; tôn giáo hòa nhập với văn hóa dân tộc; và Nhà nước qua các thời kỳ chủ trương dung hòa, đoàn kết.
                </p>
                <p>
                  Những xung đột nếu có, thường là do thế lực chính trị bên ngoài lợi dụng tôn giáo, chứ không phải do bản chất giáo lý hay mâu thuẫn tín ngưỡng.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </>
    ),
  },
];

export default function DiscussionCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % discussions.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + discussions.length) % discussions.length);

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Tiêu đề câu hỏi */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">
          {discussions[current].question}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="bg-white/10 p-2 rounded-xl hover:bg-white/20"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={next}
            className="bg-white/10 p-2 rounded-xl hover:bg-white/20"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Nội dung */}
      <div className="overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={discussions[current].id}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {discussions[current].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
