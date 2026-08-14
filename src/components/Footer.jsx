import { navLinks } from "../data.jsx"
import logo from "../assets/chronexa-logo-dark.png"

const word = "CHRONEXA "

export default function Footer() {
  return (
    <footer className="border-t border-paper-line bg-paper text-paper-ink">
      {/* giant wordmark marquee */}
      <div className="overflow-hidden border-b border-paper-line py-8 sm:py-12" aria-hidden="true">
        <div className="flex w-max animate-marquee" style={{ "--marquee-dur": "48s" }}>
          {[...Array(4)].map((_, r) => (
            <span key={r} className="flex shrink-0">
              {[...Array(4)].map((_, i) => (
                <span
                  key={i}
                  className="display-title whitespace-nowrap px-6 text-[clamp(6rem,20vw,16rem)] leading-none text-paper-line"
                >
                  {word}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-12 px-4 py-12 sm:px-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Chronexa" className="h-9 w-auto" />
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="label mb-4 text-paper-meta">Solutions</p>
            <ul className="space-y-2.5 text-sm">
              {["TimePro", "VisitPro", "MealPro", "QueuePro", "ProjectPro"].map((p) => (
                <li key={p}>
                  <a href="#products" className="text-paper-muted transition-colors hover:text-brand">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label mb-4 text-paper-meta">Navigate</p>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-paper-muted transition-colors hover:text-brand">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label mb-4 text-paper-meta">Contact</p>
            <ul className="space-y-2.5 text-sm text-paper-muted">
              <li>info@chronexa.ai</li>
              <li>support@chronexa.ai</li>
              <li>USA · UAE · KSA</li>
              <li>Qatar · Oman</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-paper-line">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center justify-between gap-4 px-4 py-6 font-mono text-[11px] text-paper-meta sm:flex-row sm:px-10">
          <span>All rights reserved © Chronexa {new Date().getFullYear()}</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-brand">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-brand">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}