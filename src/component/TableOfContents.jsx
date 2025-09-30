import React, { useState } from "react";
import { Menu, ChevronRight } from "lucide-react";

const TableOfContents = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const contents = [
    {
      title: "Sứ Mệnh Lịch Sử của Giai Cấp Công Nhân",
      id: "intro",
      icon: "🎯",
    },
    {
      title: "I. Quan điểm cơ bản của chủ nghĩa Mác-Lênin",
      id: "section1",
      icon: "📚",
    },
    {
      title:
        "II. Giai cấp công nhân và việc thực hiện sứ mệnh lịch sử hiện nay",
      id: "section2",
      icon: "⚡",
    },
    {
      title: "III. Sứ mệnh lịch sử của giai cấp công nhân Việt Nam",
      id: "section3",
      icon: "🌟",
    },
    { title: "Nguồn gốc & Phát triển", id: "religion1", icon: "📖" },
    { title: "Giá trị Cốt lõi", id: "religion2", icon: "✨" },
    { title: "Sứ mệnh GCCN Việt Nam", id: "religion3", icon: "🚩" },
    { title: "Tầm nhìn", id: "religion4", icon: "🔭" },
    { title: "Nguyên tắc Hoạt động", id: "religion5", icon: "⚖️" },
    { title: "Ảnh hưởng & Đóng góp", id: "religion6", icon: "🌍" },
    { title: "Tóm tắt Chính sách", id: "policy-summary", icon: "📑" },
    {
      title: "IV. Câu hỏi thảo luận",
      id: "section4",
      icon: "💭",
    },
    {
      title: "Lời cảm ơn",
      id: "thanks",
      icon: "❤️",
    },
  ];

  return (
    <div className="fixed left-8 top-8 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/20 transition-all"
      >
        <Menu className="w-5 h-5" />
        <span>Mục lục</span>
      </button>

      <div
        className={`mt-4 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-black/80 backdrop-blur-md rounded-2xl p-4 border border-white/20 w-72">
          {contents.map((item, index) => (
            <div
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsOpen(false);
              }}
              className="group flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/10 transition-all"
            >
              <span className="text-xl">{item.icon}</span>
              <div className="flex-1">
                <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors line-clamp-2">
                  {item.title}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
