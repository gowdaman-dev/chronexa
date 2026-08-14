import Reveal from "./Reveal.jsx"
import { steps, features, stats } from "../data.jsx"

const featureStatus = {
  biometric: "FACE / FP",
  qr: "QR / SMS",
  cloud: "CLOUD",
  sync: "LIVE",
  rbac: "RBAC",
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-ink-950 text-fore">
      <div className="crt-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[1500px] px-4 py-20 sm:px-10 sm:py-28">
        <div className="mb-12 grid gap-6 border-b border-line pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal>
              <p className="label-brand">How It Works</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-title mt-4 max-w-3xl text-[clamp(2rem,4.6vw,4rem)]">
                Verify. Log. Act. In three steps.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Every record is captured at the touchpoint, verified once, and synced to the same
              workforce layer every product reads.
            </p>
          </Reveal>
        </div>

        {/* steps as ledger */}
        <div className="border-t border-line">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div data-hover className="group grid gap-4 border-b border-line py-8 transition-colors sm:grid-cols-[120px_1fr_auto] sm:items-center sm:gap-10">
                <span className="display-title text-5xl text-transparent [-webkit-text-stroke:1.5px_rgba(232,0,13,0.7)]">
                  {s.n}
                </span>
                <div>
                  <h3 className="display-title text-2xl text-fore transition-colors group-hover:text-brand-bright sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
                <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:flex">
                  <span className="caret" />
                  STEP {i + 1}/3
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* technology signals */}
        <div className="mt-20">
          <Reveal>
            <p className="label-brand mb-8">The Technology Stack</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {features.map((f, i) => (
              <Reveal key={f.id} delay={i * 0.06} className="h-full">
                <div data-hover className="group flex h-full flex-col justify-between bg-ink-950 p-6 transition-colors hover:bg-ink-900">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-muted">{`0${i + 1}`}</span>
                    <span className="font-mono text-[10px] tracking-[0.16em] text-brand-bright">
                      {featureStatus[f.icon]}
                    </span>
                  </div>
                  <div className="mt-14">
                    <h3 className="text-sm font-semibold leading-snug text-fore">{f.label}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* stats as HUD */}
        <div className="mt-20 grid grid-cols-2 border border-line bg-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="h-full">
              <div className="flex h-full flex-col justify-between gap-6 bg-ink-950 p-6 sm:p-8">
                <span className="font-mono text-[10px] tracking-[0.18em] text-muted">M{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="display-title text-4xl text-fore sm:text-5xl">
                    {s.value}
                    <span className="text-brand-bright">{s.suffix}</span>
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{s.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}