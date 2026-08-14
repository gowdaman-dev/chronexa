import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import logo from "../assets/chronexa-logo.png"

const BOOT = [
  "> CHRONEXA OS v2.0 — workforce scanner",
  "> mounting 5 modules .......... ok",
  "> TIMEPRO / VISITPRO / MEALPRO / QUEUEPRO / PROJECTPRO",
  "> biometric layer ............. verified",
  "> real-time sync .............. live",
]

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const rootRef = useRef(null)
  const doneRef = useRef(false)

  useEffect(() => {
    let val = 0
    const tick = () => {
      val += Math.random() * 14 + 5
      if (val >= 100) val = 100
      setProgress(Math.round(val))
      if (val < 100) {
        setTimeout(tick, 75)
      } else if (!doneRef.current) {
        doneRef.current = true
        setTimeout(() => {
          gsap.to(rootRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "expo.inOut",
            onComplete: onDone,
          })
        }, 350)
      }
    }
    const t = setTimeout(tick, 220)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[10000] flex flex-col justify-between bg-ink-950 px-4 py-6 sm:px-10"
    >
      <div className="flex items-center justify-between border-b border-line pb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        <img src={logo} alt="Chronexa" className="h-8 w-auto" />
        <span className="flex items-center gap-3">
          <span className="caret" aria-hidden="true" />
          INITIALIZING
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-2">
        {BOOT.map((l) => (
          <p key={l} className="font-mono text-[11px] tracking-[0.08em] text-muted">
            {l}
          </p>
        ))}
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between font-mono text-xs tracking-[0.18em]">
          <span className="text-brand-bright">SCANNING WORKFORCE DATA</span>
          <span className="text-fore">{progress}%</span>
        </div>
        <div className="h-[2px] w-full bg-white/10">
          <div className="h-full bg-brand-bright transition-all duration-100" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}