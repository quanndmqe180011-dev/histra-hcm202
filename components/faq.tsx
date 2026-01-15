"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Tại sao Việt Nam không lựa chọn con đường tư bản chủ nghĩa?",
    answer:
      "Con đường tư bản chủ nghĩa đòi hỏi nền tảng kinh tế – kỹ thuật cao và quá trình tích lũy tư bản lâu dài. Với xuất phát điểm thấp sau nhiều năm bị đô hộ, Việt Nam khó tránh khỏi nguy cơ phụ thuộc vào các thế lực bên ngoài, mất đi chủ quyền.",
  },
  {
    question: "Con đường trung lập có khả thi không?",
    answer:
      "Một quốc gia mới giành độc lập nhưng không có định hướng phát triển rõ ràng sẽ dễ rơi vào tình trạng bị chi phối, can thiệp từ các cường quốc, khó bảo đảm nền độc lập bền vững trong bối cảnh Chiến tranh Lạnh.",
  },
  {
    question: "Cách mạng Tháng Tám năm 1945 có ý nghĩa gì?",
    answer:
      "Cách mạng Tháng Tám năm 1945 là sự kiện lịch sử vĩ đại, đánh dấu sự thành công của con đường xã hội chủ nghĩa. Từ đó, Việt Nam đã bước vào giai đoạn xây dựng một nước Việt Nam độc lập, thống nhất.",
  },
  {
    question: "Đổi mới từ năm 1986 có mâu thuẫn với chủ nghĩa xã hội không?",
    answer:
      "Công cuộc Đổi mới từ 1986 đến nay không phải bỏ lại chủ nghĩa xã hội mà là cách hiện thực hóa nó một cách phù hợp hơn, giúp đất nước phát triển kinh tế, nâng cao đời sống nhân dân trong khuôn khổ xã hội chủ nghĩa.",
  },
  {
    question: "Tư tưởng Hồ Chí Minh vẫn còn ý nghĩa ngày nay không?",
    answer:
      "Tư tưởng Hồ Chí Minh vẫn có giá trị sống mãnh liệt. Trong bối cảnh hội nhập quốc tế, Việt Nam tiếp tục kiên định mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội, xây dựng một đất nước giàu mạnh, dân chủ, công bằng, văn minh.",
  },
  {
    question: "Thế hệ trẻ cần làm gì để góp phần xây dựng đất nước?",
    answer:
      "Sinh viên – thế hệ trẻ hôm nay – cần học tập, rèn luyện đạo đức, nâng cao năng lực chuyên môn và tinh thần trách nhiệm xã hội. Đây là cách thiết thực nhất để góp phần xây dựng đất nước theo con đường mà Hồ Chí Minh đã lựa chọn.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="py-20 md:py-29 bg-[#282319] text-gray-300"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-gray-400 text-sm tracking-[0.3em] uppercase mb-6">
            FAQ
          </p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl text-white">
            Câu hỏi & Trả lời
          </h2>
        </div>

        {/* FAQ list */}
        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#3a322a]"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-white transition-colors group-hover:text-gray-300">
                  {faq.question}
                </span>

                <Plus
                  className={`w-6 h-6 text-[#c8b79a] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-400 leading-relaxed pb-6 pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
