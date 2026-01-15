"use client"

import { useEffect } from "react"
import Lenis from "lenis"

declare global {
  interface Window {
    lenis: Lenis | null
  }
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => 1 - Math.pow(1 - t, 4), // Apple-like
      smoothWheel: true,
      smoothTouch: false,
    })

    window.lenis = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      window.lenis = null
    }
  }, [])

  return <>{children}</>
}
