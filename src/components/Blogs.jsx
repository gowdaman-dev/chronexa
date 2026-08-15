import Reveal, { SplitTitle } from "./Reveal.jsx"
import { blogs } from "../data.jsx"

export default function Blogs() {
  const featured = blogs[0]
  const rest = blogs.slice(1)

  return (
    <>
      {/* BLOGS — dark terminal intro */}
      <section className="relative border-y border-line bg-ink-950 text-fore">
        <div className="crt-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="mx-auto w-full max-w-[1500px] px-4 py-20 sm:px-10 sm:py-28">
          <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <p className="label-brand mb-4">Blogs</p>
              </Reveal>
              <Reveal delay={0.08}>
                <SplitTitle as="h1" className="text-[clamp(2.4rem,6vw,5.5rem)] text-fore">
                  Start the Conversation Here
                </SplitTitle>
              </Reveal>
            </div>
            <Reveal delay={0.16}>
              <div className="flex flex-col gap-8 border-l border-line pl-6 sm:pl-8">
                <p className="max-w-md text-sm leading-relaxed text-muted">
                  Field notes from the workforce management front line — how smart software turns
                  attendance, visitors, meals, queues and projects into a single, controlled
                  operation.
                </p>
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

      {/* BLOGS — featured post */}
      <section className="relative bg-paper text-paper-ink">
        <div className="mx-auto w-full max-w-[1500px] px-4 py-20 sm:px-10 sm:py-28">
          <div className="mb-12 grid gap-6 border-b border-paper-line pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Reveal>
                <p className="label mb-4 text-paper-meta">Latest Dispatch</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="display-title max-w-2xl text-[clamp(2rem,4.6vw,4rem)] text-paper-ink">
                  Featured Reading
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.14}>
              <p className="max-w-sm text-sm leading-relaxed text-paper-muted">
                The most recent field notes from the Chronexa team, indexed for quick scanning.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <a
              href={`/blog/${featured.id}`}
              data-hover
              className="group grid overflow-hidden border border-paper-line bg-paper transition-colors duration-300 hover:bg-paper-card lg:grid-cols-[1.15fr_1fr]"
            >
              <div className="overflow-hidden border-b border-paper-line lg:border-b-0 lg:border-r">
                <img
                  src={featured.screen}
                  alt={`${featured.title} cover`}
                  className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-between gap-8 p-7 sm:p-10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand">
                      {featured.category}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-meta">
                      {featured.date}
                    </span>
                  </div>
                  <h3 className="display-title mt-6 text-2xl leading-tight text-paper-ink transition-colors group-hover:text-brand sm:text-3xl">
                    {featured.title}
                  </h3>
                  <div className="mt-3 h-px w-10 bg-paper-line transition-all duration-500 group-hover:w-full group-hover:bg-brand" />
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-paper-muted">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-meta">
                    By {featured.author} · {featured.readTime}
                  </span>
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-brand">
                    Read Post <span>→</span>
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* BLOGS — archive ledger */}
      <section className="relative border-t border-paper-line bg-paper text-paper-ink">
        <div className="mx-auto w-full max-w-[1500px] px-4 pb-20 sm:px-10 sm:pb-28">
          <div className="mb-12 grid gap-6 border-b border-paper-line pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Reveal>
                <p className="label mb-4 text-paper-meta">The Archive</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="display-title max-w-2xl text-[clamp(2rem,4.6vw,4rem)] text-paper-ink">
                  All Field Notes
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.14}>
              <p className="max-w-sm text-sm leading-relaxed text-paper-muted">
                Every dispatch indexed — attendance, visitors, meals, queues and projects.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-px border border-paper-line bg-paper-line sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((b, i) => (
              <Reveal key={b.id} delay={i * 0.05} className="h-full">
                <a
                  href={`/blog/${b.id}`}
                  data-hover
                  className="group relative flex h-full flex-col justify-between gap-8 bg-paper p-7 transition-colors duration-300 hover:bg-paper-card"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-paper-meta">{b.index}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand">
                        {b.category}
                      </span>
                    </div>
                    <div className="mt-6 overflow-hidden border border-paper-line">
                      <img
                        src={b.screen}
                        alt={`${b.title} cover`}
                        className="block w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="display-title mt-6 text-xl leading-tight text-paper-ink transition-colors group-hover:text-brand sm:text-2xl">
                      {b.title}
                    </h3>
                    <div className="mt-3 h-px w-10 bg-paper-line transition-all duration-500 group-hover:w-full group-hover:bg-brand" />
                    <p className="mt-4 text-sm leading-relaxed text-paper-muted">{b.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-meta">
                      {b.date}
                    </span>
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-paper-meta transition-colors group-hover:text-brand">
                      Read <span className="text-brand">→</span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BLOGS — stats HUD */}
      <section className="relative border-t border-line bg-ink-950 text-fore">
        <div className="mx-auto w-full max-w-[1500px] px-4 py-16 sm:px-10 sm:py-20">
          <div className="grid grid-cols-2 border border-line bg-line lg:grid-cols-4">
            {[
              { value: blogs.length, suffix: "", label: "Field Notes" },
              { value: 5, suffix: "", label: "Products Covered" },
              { value: 3, suffix: "", label: "Markets Served" },
              { value: 24, suffix: "/7", label: "Security Assurance" },
            ].map((s, i) => (
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
    </>
  )
}