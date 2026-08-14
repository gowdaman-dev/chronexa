import Reveal, { SplitTitle } from "./Reveal.jsx"
import { about, products, stats } from "../data.jsx"

export default function About() {
  return (
    <>
      {/* ABOUT — dark terminal intro */}
      <section id="about" className="relative border-y border-line bg-ink-950 text-fore">
        <div className="crt-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="mx-auto w-full max-w-[1500px] px-4 py-20 sm:px-10 sm:py-28">
          <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <p className="label-brand mb-4">About Us</p>
              </Reveal>
              <Reveal delay={0.08}>
                <SplitTitle as="h1" className="text-[clamp(2.4rem,6vw,5.5rem)] text-fore">
                  {about.tagline}
                </SplitTitle>
              </Reveal>
            </div>
            <Reveal delay={0.16}>
              <div className="flex flex-col gap-8 border-l border-line pl-6 sm:pl-8">
                <p className="max-w-md text-sm leading-relaxed text-muted">{about.intro}</p>
                <a
                  href="#contact"
                  data-hover
                  className="inline-flex w-fit items-center gap-3 border border-brand bg-brand px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-bright"
                >
                  Get a Free Demo
                  <span className="text-white/70">→</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT — narrative on paper */}
      <section className="relative border-b border-paper-line bg-paper text-paper-ink">
        <div className="mx-auto w-full max-w-[1500px] px-4 py-20 sm:px-10 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="label mb-4 text-paper-meta">Who We Are</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="display-title max-w-xl text-[clamp(2rem,4.4vw,3.6rem)] text-paper-ink">
                  {about.heading}
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-brand" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
                    Dubai · Abu Dhabi · KSA
                  </span>
                </div>
              </Reveal>
            </div>

            <div>
              <Reveal delay={0.1}>
                <p className="text-[15px] leading-relaxed text-paper-muted">{about.body}</p>
              </Reveal>
              <div className="mt-10 border-t border-paper-line">
                {about.points.map((pt, i) => (
                  <Reveal key={pt} delay={0.08 + i * 0.06}>
                    <div data-hover className="group grid grid-cols-[auto_1fr] items-center gap-5 border-b border-paper-line py-5 transition-colors">
                      <span className="flex h-8 w-8 items-center justify-center border border-paper-line font-mono text-[11px] text-paper-meta transition-colors group-hover:border-brand group-hover:text-brand">
                        {"0" + (i + 1)}
                      </span>
                      <p className="max-w-md text-sm leading-relaxed text-paper-muted transition-colors group-hover:text-paper-ink">
                        {pt}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT — software ledger */}
      <section className="relative border-b border-paper-line bg-paper text-paper-ink">
        <div className="mx-auto w-full max-w-[1500px] px-4 pb-20 sm:px-10 sm:pb-28">
          <div className="mb-12 grid gap-6 border-b border-paper-line pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Reveal>
                <p className="label mb-4 text-paper-meta">Our Services</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="display-title max-w-2xl text-[clamp(2rem,4.6vw,4rem)] text-paper-ink">
                  Softwares made for efficiency.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.14}>
              <p className="max-w-sm text-sm leading-relaxed text-paper-muted">
                One verified workforce layer, five specialised tools — each product engineered to
                remove friction from a different operation.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-px border border-paper-line bg-paper-line sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05} className="h-full">
                <a
                  href={`/products/${p.id}`}
                  data-hover
                  className="group relative flex h-full flex-col justify-between gap-8 bg-paper p-7 transition-colors duration-300 hover:bg-paper-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-paper-meta">{p.index}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand">
                      {p.tag}
                    </span>
                  </div>
                  <div className="mt-6 overflow-hidden border border-paper-line">
                    <img
                      src={p.screen}
                      alt={`${p.name} dashboard`}
                      className="block w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="display-title text-2xl text-paper-ink transition-colors group-hover:text-brand sm:text-3xl">
                      {p.name}
                    </h3>
                    <div className="mt-3 h-px w-10 bg-paper-line transition-all duration-500 group-hover:w-full group-hover:bg-brand" />
                    <p className="mt-4 text-sm leading-relaxed text-paper-muted">{p.desc}</p>
                  </div>
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-paper-meta transition-colors group-hover:text-brand">
                    View Product <span className="text-brand">→</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT — stats HUD */}
      <section className="relative bg-ink-950 text-fore">
        <div className="mx-auto w-full max-w-[1500px] px-4 py-20 sm:px-10 sm:py-24">
          <div className="mb-10 flex items-center gap-4">
            <span className="caret" aria-hidden="true" />
            <p className="label-brand">The Chronexa Signal</p>
          </div>
          <div className="grid grid-cols-2 border border-line bg-line lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col justify-between gap-8 bg-ink-950 p-7 sm:p-9">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-muted">
                    M{String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="display-title text-5xl text-fore sm:text-6xl">
                      {s.value}
                      <span className="text-brand-bright">{s.suffix}</span>
                    </p>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      {s.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT — how we operate */}
      <section className="relative border-t border-line bg-ink-950 text-fore">
        <div className="crt-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="mx-auto w-full max-w-[1500px] px-4 py-20 sm:px-10 sm:py-28">
          <div className="mb-12 grid gap-6 border-b border-line pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Reveal>
                <p className="label-brand mb-4">How We Operate</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="display-title max-w-3xl text-[clamp(2rem,4.6vw,4rem)]">
                  Redefining workflow and efficiency for modern workplaces everywhere.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.14}>
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                Four operating principles drive every product — from the touchpoint to the
                management console.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {about.how.map((h, i) => (
              <Reveal key={h.n} delay={i * 0.06} className="h-full">
                <div data-hover className="group relative flex h-full flex-col justify-between gap-14 overflow-hidden bg-ink-950 p-7 transition-colors hover:bg-ink-900">
                  <span className="display-title text-4xl text-transparent [-webkit-text-stroke:1.5px_rgba(232,0,13,0.6)]">
                    {h.n}
                  </span>
                  <div>
                    <h3 className="display-title text-xl text-fore transition-colors group-hover:text-brand-bright sm:text-2xl">
                      {h.title}
                    </h3>
                    <div className="mt-3 h-px w-10 bg-brand transition-all duration-500 group-hover:w-full" />
                    <p className="mt-4 text-sm leading-relaxed text-muted">{h.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}