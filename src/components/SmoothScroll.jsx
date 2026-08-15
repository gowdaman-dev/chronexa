import { useEffect } from "react"
import Lenis from "lenis"

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 })
    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const anchorHandler = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const href = a.getAttribute("href")
      if (!href || href.startsWith("/")) return
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        lenis.scrollTo(target, { offset: 0, duration: 1.4 })
      }
    }
    document.addEventListener("click", anchorHandler)
    window.__lenis = lenis
    return () => {
      document.removeEventListener("click", anchorHandler)
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.__lenis = undefined
    }
  }, [])

  return children
}