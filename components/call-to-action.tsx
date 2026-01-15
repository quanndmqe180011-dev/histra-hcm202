"use client"

import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./highlighted-text"

export function CallToAction() {
  return (
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Vận dụng tư tưởng</p>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance text-[#FFEA98]">
            Học tập, rèn luyện
            <br />
            và <HighlightedText>phát triển</HighlightedText> bản thân
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto ">
            Trong bối cảnh hội nhập quốc tế, sinh viên – thế hệ trẻ hôm nay – cần học tập, rèn luyện đạo đức, nâng cao
            năng lực chuyên môn để góp phần xây dựng đất nước theo con đường Hồ Chí Minh đã lựa chọn.
          </p>
        </div>
      </div>
    </section>
  )
}
