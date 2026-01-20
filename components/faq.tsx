"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Vì sao Việt Nam lựa chọn con đường đi lên chủ nghĩa xã hội?",
    answer:
      "Xuất phát từ yêu cầu giải phóng dân tộc, giải phóng giai cấp và giải phóng con người. Thực tiễn lịch sử cho thấy các con đường cứu nước cũ đều thất bại, chỉ có con đường cách mạng vô sản gắn độc lập dân tộc với chủ nghĩa xã hội mới đáp ứng được yêu cầu phát triển của Việt Nam.",
  },
  {
    question: "Năm 1930 có ý nghĩa gì đối với con đường cách mạng Việt Nam?",
    answer:
      "Năm 1930, Đảng Cộng sản Việt Nam ra đời, đánh dấu việc xác lập chính thức đường lối cách mạng Việt Nam đi lên chủ nghĩa xã hội, chấm dứt tình trạng khủng hoảng về đường lối và giai cấp lãnh đạo.",
  },
  {
    question: "Cách mạng Tháng Tám năm 1945 có vai trò gì trong tiến trình đó?",
    answer:
      "Cách mạng Tháng Tám năm 1945 đã lật đổ ách thống trị của thực dân, phong kiến, giành độc lập dân tộc và thành lập Nhà nước Việt Nam Dân chủ Cộng hòa, tạo tiền đề chính trị – pháp lý quan trọng để Việt Nam tiến lên chủ nghĩa xã hội.",
  },
  {
    question: "Việt Nam bắt đầu xây dựng chủ nghĩa xã hội từ khi nào?",
    answer:
      "Từ năm 1954, sau Hiệp định Giơ-ne-vơ, miền Bắc được giải phóng và bắt đầu xây dựng chủ nghĩa xã hội trên thực tế. Sau năm 1976, khi đất nước thống nhất, Việt Nam tiến hành xây dựng chủ nghĩa xã hội trên phạm vi cả nước.",
  },
  {
    question: "Vì sao Việt Nam quá độ lên CNXH bỏ qua chế độ tư bản chủ nghĩa?",
    answer:
      "Do Việt Nam là nước thuộc địa, nửa phong kiến, kinh tế lạc hậu, không trải qua quá trình phát triển tư bản chủ nghĩa đầy đủ. Trong điều kiện lịch sử cụ thể, quá độ lên CNXH bỏ qua chế độ tư bản chủ nghĩa là con đường phù hợp với quy luật và thực tiễn Việt Nam.",
  },
  {
    question: "Đổi mới từ năm 1986 có ý nghĩa gì đối với con đường đi lên CNXH?",
    answer:
      "Đổi mới năm 1986 là sự vận dụng sáng tạo chủ nghĩa Mác – Lênin và tư tưởng Hồ Chí Minh nhằm khắc phục hạn chế của mô hình cũ, phát triển kinh tế thị trường định hướng xã hội chủ nghĩa, đưa đất nước thoát khỏi khủng hoảng và từng bước phát triển.",
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
