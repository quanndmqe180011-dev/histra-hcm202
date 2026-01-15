"use client"

import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./highlighted-text"

const philosophyItems = [
  {
    title: "Độc lập gắn liền với chủ nghĩa xã hội",
    description:
      "Theo tư tưởng Hồ Chí Minh, độc lập dân tộc phải gắn liền với chủ nghĩa xã hội. Nếu đất nước giành được độc lập nhưng nhân dân không có cuộc sống ấm no, tự do thì nền độc lập đó chưa trọn vẹn.",
  },
  {
    title: "Nước giành độc lập nhưng dân tộc giải phóng",
    description:
      "Việc lựa chọn con đường xã hội chủ nghĩa không phải cảm tính mà là kết quả phân tích sâu sắc điều kiện lịch sử, kinh tế, xã hội của Việt Nam.",
  },
  {
    title: "Phù hợp với điều kiện Việt Nam",
    description:
      "Xuất phát từ một nước thuộc địa, nửa phong kiến, việc đi lên chủ nghĩa xã hội là con đường phù hợp với hoàn cảnh cụ thể.",
  },
  {
    title: "Nhân dân là chủ thể lịch sử",
    description:
      "Chủ nghĩa xã hội là chế độ do nhân dân làm chủ, vì nhân dân và phục vụ lợi ích của nhân dân, phù hợp với khát vọng giải phóng con người.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
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
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Title and image */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Cơ sở lý luận</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Lựa chọn
              <br />
              <HighlightedText>đúng đắn</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <img
                src="/images/exterior.png"
                alt="Architectural sketch of home office workspace"
                className="opacity-90 relative z-10 w-auto"
              />
            </div>
          </div>

          {/* Right column - Description and Philosophy items */}
          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Trong những năm 1940, dân tộc Việt Nam đứng trước nhiều khả năng phát triển khác nhau. Giữa những lựa chọn
              này, Việt Nam đã lựa chọn con đường đi lên chủ nghĩa xã hội.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
