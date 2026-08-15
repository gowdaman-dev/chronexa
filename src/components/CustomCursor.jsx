import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    const dot = dotRef.current
    const ring = ringRef.current
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y
    let hovering = false
    let rafId

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      dot.style.transform = `translate(${x - 3}px, ${y - 3}px)`
    }
    const onOver = (e) => {
      hovering = !!e.target.closest("a, button, [data-hover]")
      ring.style.width = hovering ? "52px" : "28px"
      ring.style.height = hovering ? "52px" : "28px"
    }
    const loop = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      ring.style.transform = `translate(${rx - 14}px, ${ry - 14}px)`
      rafId = requestAnimationFrame(loop)
    }
    document.addEventListener("mousemove", onMove)
    document.addEventListener("mouseover", onOver)
    loop()

    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onOver)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block" aria-hidden="true">
      <div
        ref={dotRef}
        className="absolute h-1.5 w-1.5 bg-brand-bright transition-transform duration-75"
        style={{ transform: "translate(-100px,-100px)" }}
      />
      <div
        ref={ringRef}
        className="absolute border border-white/50 transition-[width,height] duration-200"
        style={{ transform: "translate(-100px,-100px)", width: 28, height: 28 }}
      />
    </div>
  )
}