"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // TEXT trôi xuống & mờ dần
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, 400])
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  // FOREGROUND trôi rất ít (tạo chiều sâu)
  const fgY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section ref={ref} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ===== BACKGROUND ===== */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/background.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ===== TEXT (SẼ BỊ CHE) ===== */}
        <motion.div
  style={{ y: textY, opacity: textOpacity }}
  className="
    relative z-20
    h-full
    flex items-start justify-center
    pt-20 md:pt-10
    pointer-events-none
  "
>
          <div className="text-center px-6">
            <p className="text-sm tracking-[0.3em] uppercase text-gray-300 mb-4">
              NGÃ RẼ LỊCH SỬ
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1] text-white">
              Năm 1945 <br />
              <span className="text-[#FFEA98] drop-shadow-[0_0_25px_rgba(255,234,152,0.6)]">
                Lựa chọn đi lên <br /> chủ nghĩa xã hội
              </span>
            </h1>
          </div>
        </motion.div>

        {/* ===== FOREGROUND (CHE CHỮ) ===== */}
        <motion.div
          style={{ y: fgY }}
          className="absolute bottom-0 w-full z-20 pointer-events-none"
        >
          <img
            src="/images/foreground.jpg"
            className="w-full h-full object-cover scale-[0.65] translate-y-150"
          />
        </motion.div>

      </div>
    </section>
  )
}
