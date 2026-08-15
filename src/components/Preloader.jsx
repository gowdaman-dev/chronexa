import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import logo from "../assets/chronexa-logo.png"

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const rootRef = useRef(null)
  const doneRef = useRef(false)

  useEffect(() => {
    let val = 0
    const tick = () => {
      val += Math.random() * 13 + 6
      if (val >= 100) val = 100
      setProgress(Math.round(val))
      if (val < 100) {
        setTimeout(tick, 85)
      } else if (!doneRef.current) {
        doneRef.current = true
        setTimeout(() => {
          gsap.to(rootRef.current, {
            yPercent: -100,
            duration: 0.9,
            ease: "expo.inOut",
            onComplete: onDone,
          })
        }, 400)
      }
    }
    const t = setTimeout(tick, 240)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div ref={rootRef} className="fixed inset-0 z-[10000] flex items-center justify-center bg-ink-950">
      <div className="crt-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative flex w-full max-w-[1200px] flex-col items-center px-4">
        {/* brand mark */}
        <img src={logo} alt="Chronexa" className="h-10 w-auto sm:h-12" />

        {/* giant counter */}
        <div className="mt-10 flex items-baseline font-mono">
          <span className="text-[clamp(4rem,12vw,9rem)] font-bold leading-none tracking-tight text-fore">
            {progress}
          </span>
          <span className="ml-3 text-[clamp(1rem,2.5vw,1.5rem)] text-muted">%</span>
        </div>

        {/* progress line */}
        <div className="mt-8 h-px w-full max-w-md bg-white/10">
          <div
            className="h-full bg-brand-bright transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
