import Reveal, { SplitTitle } from "./Reveal.jsx"
import { products } from "../data.jsx"

export default function ProductDetail({ id }) {
  const index = products.findIndex((p) => p.id === id)
  const product = index >= 0 ? products[index] : null

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-ink-950 text-fore">
        <p className="display-title text-4xl">Product not found</p>
        <a href="/about" className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-bright hover:text-brand">
          ← Back to About
        </a>
      </div>
    )
  }

  const prev = products[(index - 1 + products.length) % products.length]
  const next = products[(index + 1) % products.length]

  return (
    <>
      {/* DETAIL — dark terminal hero */}
      <section className="relative border-b border-line bg-ink-950 text-fore">
        <div className="crt-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="mx-auto w-full max-w-[1500px] px-4 py-20 sm:px-10 sm:py-28">
          <div className="mb-10 flex items-center justify-between gap-6">
            <a
              href="/about"
              data-hover
              className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-brand-bright"
            >
              <span>←</span> Back to About
            </a>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {product.index} / 05
            </span>
          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <p className="label-brand mb-4">{product.tag}</p>
              </Reveal>
              <Reveal delay={0.08}>
                <SplitTitle as="h1" className="text-[clamp(2.4rem,6vw,5.5rem)] text-fore">
                  {product.name}
                </SplitTitle>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">{product.desc}</p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="flex flex-col gap-8 border-l border-line pl-6 sm:pl-8">
                <p className="display-title max-w-md text-[clamp(1.3rem,2.6vw,1.9rem)] leading-snug text-fore">
                  {product.tagline}
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

      {/* DETAIL — dashboard screen */}
      <section className="relative bg-paper text-paper-ink">
        <div className="mx-auto w-full max-w-[1500px] px-4 pb-20 sm:px-10 sm:pb-28">
          <Reveal>
            <div className="border border-paper-line bg-white p-3 sm:p-6">
              <div className="mb-4 flex items-center justify-between border-b border-paper-line px-1 pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                  {product.index} / {product.name}
                </span>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-paper-meta">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  LIVE DASHBOARD
                </span>
              </div>
              <div className="overflow-hidden border border-paper-line">
                <img
                  src={product.screen}
                  alt={`${product.name} dashboard`}
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DETAIL — overview narrative */}
      <section className="relative border-t border-paper-line bg-paper text-paper-ink">
        <div className="mx-auto w-full max-w-[1500px] px-4 py-20 sm:px-10 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="label mb-4 text-paper-meta">Overview</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="display-title max-w-xl text-[clamp(2rem,4.4vw,3.6rem)] text-paper-ink">
                  Built to remove friction from {product.tag.toLowerCase()}.
                </h2>
              </Reveal>
            </div>
            <div>
              <Reveal delay={0.1}>
                <p className="text-[15px] leading-relaxed text-paper-muted">{product.longDesc}</p>
              </Reveal>
              <div className="mt-10 border-t border-paper-line">
                {product.points.map((pt, i) => (
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

      {/* DETAIL — feature ledger */}
      <section className="relative border-t border-line bg-ink-950 text-fore">
        <div className="mx-auto w-full max-w-[1500px] px-4 py-20 sm:px-10 sm:py-28">
          <div className="mb-12 grid gap-6 border-b border-line pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Reveal>
                <p className="label-brand mb-4">Capabilities</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="display-title max-w-2xl text-[clamp(2rem,4.6vw,4rem)]">
                  What {product.name} handles.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.14}>
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                Each capability is engineered into the same verified workforce layer the platform
                already runs on.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f, i) => (
              <Reveal key={f} delay={i * 0.05} className="h-full">
                <div data-hover className="group flex h-full items-center gap-5 bg-ink-950 p-6 transition-colors hover:bg-ink-900 sm:p-8">
                  <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <p className="display-title text-lg text-fore transition-colors group-hover:text-brand-bright sm:text-xl">
                    {f}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL — product navigator */}
      <section className="relative border-t border-line bg-ink-950 text-fore">
        <div className="mx-auto w-full max-w-[1500px] px-4 py-16 sm:px-10 sm:py-20">
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            <Reveal className="h-full">
              <a
                href={`/products/${prev.id}`}
                data-hover
                className="group flex h-full flex-col justify-between gap-6 bg-ink-950 p-7 transition-colors hover:bg-ink-900 sm:p-9"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Previous</span>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="display-title text-2xl text-fore transition-colors group-hover:text-brand-bright sm:text-3xl">
                    ← {prev.name}
                  </span>
                  <span className="font-mono text-xs text-muted">{prev.index}</span>
                </div>
              </a>
            </Reveal>
            <Reveal className="h-full">
              <a
                href={`/products/${next.id}`}
                data-hover
                className="group flex h-full flex-col justify-between gap-6 bg-ink-950 p-7 transition-colors hover:bg-ink-900 sm:p-9"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Next</span>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="display-title text-2xl text-fore transition-colors group-hover:text-brand-bright sm:text-3xl">
                    {next.name} →
                  </span>
                  <span className="font-mono text-xs text-muted">{next.index}</span>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}