"use client"

import { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion"

/* ================== HELPER ================== */
function useSegmentedScroll(
  progress: MotionValue<number>,
  start: number,
  end: number
) {
  return useTransform(progress, [start, end], [0, 1], { clamp: true })
}

/* ================== TEXT REVEAL ================== */
function RevealTextByLine({
  lines,
  progress,
  dimColor,
  activeColor,
}: {
  lines: { text: string; className?: string }[]
  progress: MotionValue<number>
  dimColor: string
  activeColor: string
}) {
  const totalLines = lines.length

  return (
    <div className="space-y-6">
      {lines.map((line, lineIndex) => {
        const chars = [...line.text]
        const lineStart = lineIndex / totalLines
        const lineEnd = (lineIndex + 1) / totalLines
        const lineRange = lineEnd - lineStart

        return (
          <p key={lineIndex} className={`${line.className} break-words`}>
            {chars.map((char, charIndex) => {
              const charStart = lineStart + (charIndex / chars.length) * lineRange
              const charEnd = lineStart + ((charIndex + 1) / chars.length) * lineRange

              return (
                <motion.span
                  key={charIndex}
                  style={{
                    color: useTransform(
                      progress,
                      [charStart, charEnd],
                      [dimColor, activeColor]
                    ),
                    opacity: useTransform(
                      progress,
                      [charStart, charEnd],
                      [0.3, 1]
                    ),
                    y: useTransform(
                      progress,
                      [charStart, charEnd],
                      [4, 0]
                    ),
                  }}
                  className="inline-block will-change-[opacity,color,transform]"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              )
            })}
          </p>
        )
      })}
    </div>
  )
}

/* ================== MAIN ================== */
export function CallToAction() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  // 🔥 APPLE-LIKE INERTIA
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  })

  const labelProgress = useSegmentedScroll(smoothProgress, 0, 0.2)
  const titleProgress = useSegmentedScroll(smoothProgress, 0.2, 0.7)
  const descProgress = useSegmentedScroll(smoothProgress, 0.7, 1)

  return (
    <section ref={ref} className="relative h-[420vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center space-y-14">

          <RevealTextByLine
            progress={labelProgress}
            dimColor="#333"
            activeColor="#fff"
            lines={[
              {
                text: "VẬN DỤNG TƯ TƯỞNG",
                className:
                  "text-xl uppercase tracking-[0.35em] text-gray-500",
              },
            ]}
          />

          <RevealTextByLine
            progress={titleProgress}
            dimColor="#2a2a2a"
            activeColor="#FFEA98"
            lines={[
              {
                text: "Học tập, rèn luyện",
                className:
                  "text-4xl md:text-7xl lg:text-7xl font-bold tracking-tight",
              },
              {
                text: "và phát triển bản thân",
                className:
                  "text-4xl md:text-7xl lg:text-7xl font-bold tracking-tight",
              },
            ]}
          />

          <RevealTextByLine
  progress={descProgress}
  dimColor="#444"
  activeColor="#d1d1d1"
  lines={[
    {
      text: "Trong bối cảnh hội nhập quốc tế, sinh viên – thế hệ trẻ hôm nay – cần học tập,",
      className: "text-lg md:text-xl leading-relaxed max-w-3xl mx-auto",
    },
    {
      text: "rèn luyện đạo đức, nâng cao năng lực chuyên môn để góp phần xây dựng",
      className: "text-lg md:text-xl leading-relaxed max-w-3xl mx-auto",
    },
    {
      text: "đất nước theo con đường Hồ Chí Minh đã lựa chọn.",
      className: "text-lg md:text-xl leading-relaxed max-w-3xl mx-auto",
    },
  ]}
/>
        </div>
      </div>
    </section>
  )
}
