import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { products } from "../data.jsx"

gsap.registerPlugin(ScrollTrigger)

const HUD = [
  { id: "time", label: "ATTENDANCE", value: "07:55", unit: "BIOMETRIC" },
  { id: "visit", label: "VISITORS", value: "1,284", unit: "PRE-REG" },
  { id: "meal", label: "MEALS", value: "3,412", unit: "VERIFIED" },
  { id: "queue", label: "QUEUE", value: "00:42", unit: "AVG WAIT" },
  { id: "project", label: "PROJECTS", value: "87%", unit: "ON-TRACK" },
]

export default function Hero({ ready = true }) {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)
  const tlRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-zoom, .hero-fade", { willChange: "transform, opacity" })

      tlRef.current = gsap.timeline({ defaults: { ease: "power4.out" }, paused: true })

      tlRef.current
        .fromTo(
          ".hero-zoom",
          { yPercent: 115 },
          { yPercent: 0, duration: 1.15, stagger: 0.12 },
          0.05
        )
        .fromTo(
          ".hero-fade",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.08 },
          0.55
        )
        .add(() => {
          document.querySelectorAll(".redact-hero").forEach((el, i) => {
            gsap.delayedCall(i * 0.22, () => el.classList.add("is-revealed"))
          })
        }, 1.25)
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (ready) {
      tlRef.current?.play()
    }
  }, [ready])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden"
    >
      {/* CRT texture */}
      <div className="crt-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="scanlines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 15%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.85) 100%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-[1500px] flex-1 items-center gap-10 px-4 pb-8 pt-28 sm:px-10 lg:items-end lg:pt-24">
        {/* Headline block */}
        <div className="relative z-10">
          <p className="hero-fade label-brand mb-5">
            Chronexa · Workforce Management — UAE & KSA
          </p>
          <h1 className="display-title text-[clamp(2.4rem,7vw,6.6rem)] text-fore">
            <span className="block overflow-hidden pb-1">
              <span className="hero-zoom block">You run 100%</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-zoom block">
                of your workforce on
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-zoom block">
                <span className="redact-hero redact">20% of your data.</span>
              </span>
            </span>
          </h1>
          <div className="hero-fade mt-7 flex items-center gap-4">
            <span className="caret caret--mint" aria-hidden="true" />
            <p className="font-mono text-sm tracking-[0.06em] text-fore/90">
              CHRONEXA SEES THE REST.
            </p>
          </div>

          <div className="hero-fade mt-9 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="magnetic-btn group inline-flex items-center gap-3 bg-brand px-9 py-5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-bright"
            >
              Book a Demo
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#products"
              className="font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-brand-bright"
            >
              Explore the 5 products ↓
            </a>
          </div>

          {/* mobile product strip */}
          <div className="hero-fade mt-10 flex flex-wrap gap-2 lg:hidden">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] ${
                  active === i ? "border-brand-bright bg-brand-bright text-white" : "border-line text-muted"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* live signal readout */}
      <div className="hero-fade relative z-10 mx-auto w-full max-w-[1500px] px-4 pb-6 sm:px-10">
        <div className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-5">
          {HUD.map((h) => (
            <div key={h.id} className="bg-ink-950 px-4 py-3">
              <p className="font-mono text-[9px] tracking-[0.18em] text-muted">{h.label}</p>
              <div className="mt-1 flex items-baseline justify-between gap-2">
                <span className="font-mono text-sm text-fore">{h.value}</span>
                <span className="font-mono text-[9px] tracking-[0.12em] text-brand-bright">{h.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}