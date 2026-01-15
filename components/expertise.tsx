"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Shield, Zap, Users } from "lucide-react"
import { HighlightedText } from "./highlighted-text"

const expertiseAreas = [
  {
    title: "Bảo đảm độc lập dân tộc vững chắc",
    description:
      "Chủ nghĩa xã hội tạo ra nền tảng chính trị – xã hội vững chắc, giúp Việt Nam giữ vững chủ quyền quốc gia, không bị lệ thuộc vào các thế lực bên ngoài.",
    icon: Shield,
  },
  {
    title: "Nhân dân là chủ thể của cách mạng",
    description:
      "Theo Hồ Chí Minh, chủ nghĩa xã hội là chế độ do nhân dân làm chủ, vì nhân dân và phục vụ lợi ích của nhân dân, phù hợp với khát vọng giải phóng con người.",
    icon: Heart,
  },
  {
    title: "Phù hợp với điều kiện lịch sử Việt Nam",
    description:
      "Xuất phát từ một nước thuộc địa, nửa phong kiến, việc đi lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là con đường phù hợp.",
    icon: Zap,
  },
  {
    title: "Phát huy sức mạnh toàn dân tộc",
    description:
      "Con đường xã hội chủ nghĩa cho phép phát huy sức mạnh toàn dân tộc, bảo đảm quyền làm chủ của nhân dân, giữ vững độc lập.",
    icon: Users,
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 md:py-29 bg-[#282319] text-gray-300"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-gray-400 text-sm tracking-[0.3em] uppercase mb-6">
            Tại sao lựa chọn
          </p>

          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl text-white">
            Chủ nghĩa xã hội
            <br />
            là lựa chọn duy nhất <HighlightedText>đúng</HighlightedText>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Lựa chọn con đường xã hội chủ nghĩa là hoàn toàn đúng đắn, được chứng
            minh bởi thực tiễn cách mạng Việt Nam trong suốt hơn 75 năm qua.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-[#3a322a] transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index)
                      ? "animate-draw-stroke"
                      : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon
                    className="w-10 h-10 mb-4 text-[#c8b79a]"
                    strokeWidth={1.25}
                  />
                </div>

                <h3 className="text-xl font-medium mb-4 text-white">
                  {area.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
