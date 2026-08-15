import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { navLinks } from "../data.jsx"
import logo from "../assets/chronexa-logo.png"

export default function Nav() {
  const [open, setOpen] = useState(false)
  const overlayRef = useRef(null)
  const linksRef = useRef([])

  useEffect(() => {
    if (open) {
      gsap.set(overlayRef.current, { pointerEvents: "auto" })
      gsap.to(overlayRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "expo.inOut" })
      linksRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.7, delay: 0.12 + i * 0.06, ease: "expo.out", overwrite: true }
        )
      })
    } else {
      gsap.to(overlayRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.6,
        ease: "expo.inOut",
        onComplete: () => gsap.set(overlayRef.current, { pointerEvents: "none" }),
      })
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[900] border-b border-line bg-ink-950/85 backdrop-blur-md">
        <div className="grid grid-cols-[auto_1fr_auto] items-center">
          <a href="#top" className="flex items-center gap-3 px-4 py-3.5 sm:px-6">
            <img src={logo} alt="Chronexa" className="h-8 w-auto sm:h-9" />
          </a>
          <div className="hidden items-center justify-center gap-0 md:flex">
            {navLinks.slice(0, 4).map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="border-l border-line px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-brand-bright"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <a
              href="#contact"
              className="hidden border-l border-line bg-brand px-6 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-bright sm:block"
            >
              Book a Demo
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-full items-center gap-3 border-l border-line px-5 py-4"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {open ? "Close" : "Menu"}
              </span>
              <span className="relative flex h-3 w-5 flex-col items-center justify-center gap-1">
                <span className={`h-px w-full bg-fore transition-transform ${open ? "translate-y-[2.5px] rotate-45" : ""}`} />
                <span className={`h-px w-full bg-fore transition-transform ${open ? "-translate-y-[2.5px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-[950] flex flex-col justify-between bg-ink-900/98 px-4 py-24 sm:px-10"
        style={{ clipPath: "inset(0% 0% 100% 0%)", pointerEvents: "none" }}
      >
        <nav className="flex flex-col">
          {navLinks.map((l, i) => (
            <div key={l.label} className="overflow-hidden border-b border-line">
              <a
                ref={(el) => (linksRef.current[i] = el)}
                href={l.href}
                onClick={() => setOpen(false)}
                className="display-title group flex items-baseline justify-between py-3 text-4xl text-fore transition-colors hover:text-brand-bright sm:text-6xl"
              >
                <span>{l.label}</span>
                <span className="font-mono text-xs tracking-[0.2em] text-muted opacity-0 transition-opacity group-hover:opacity-100">
                  {"0" + (i + 1)}
                </span>
              </a>
            </div>
          ))}
        </nav>
        <div className="flex flex-col gap-2 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:flex-row sm:justify-between">
          <span>UAE · KSA · Qatar · Oman</span>
          <span>info@chronexa.ai</span>
        </div>
      </div>
    </>
  )
}