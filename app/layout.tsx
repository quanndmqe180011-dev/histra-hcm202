import type { Metadata } from "next"
import { Be_Vietnam_Pro, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import "./globals.css"

/* ================== FONTS ================== */
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

/* ================== METADATA ================== */
export const metadata: Metadata = {
  title: "Histra — Lựa chọn con đường đi lên chủ nghĩa xã hội",
  description:
    "Khám phá bối cảnh lịch sử năm 1945 và lý do Việt Nam lựa chọn con đường đi lên chủ nghĩa xã hội dưới sự lãnh đạo của Chủ tịch Hồ Chí Minh.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

/* ================== ROOT ================== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${geistMono.variable}`}
    >
      <body
        className="
          font-sans
          antialiased
          bg-black
          text-white
        "
      >
        <LenisProvider>
          {children}
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}