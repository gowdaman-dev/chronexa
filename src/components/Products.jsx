import { Suspense, lazy, useEffect, useState } from "react"
import Reveal from "./Reveal.jsx"
import { products } from "../data.jsx"

const ProductCore = lazy(() => import("./ProductCore.jsx"))

export default function Products() {
  const [active, setActive] = useState(0)
  const [viewing, setViewing] = useState(null)
  const viewProduct = viewing !== null ? products[viewing] : null

  useEffect(() => {
    if (viewing === null) return
    const onKey = (e) => {
      if (e.key === "Escape") setViewing(null)
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [viewing])

  return (
    <section id="products" className="relative border-y border-paper-line bg-paper text-paper-ink">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-20 sm:px-10 sm:py-28">
        {/* section header */}
        <div className="mb-12 grid gap-6 border-b border-paper-line pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal>
              <p className="label text-paper-meta">The Products</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-title mt-4 max-w-3xl text-[clamp(2rem,4.6vw,4rem)] text-paper-ink">
                Five products. One scanned workforce.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <p className="max-w-sm text-sm leading-relaxed text-paper-muted">
              Every Chronexa product reads the same verified workforce layer — attendance,
              visitors, meals, queues and projects, in one live feed.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          {/* desk viewport */}
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative overflow-hidden bg-paper">
              <div className="relative h-[38vh] min-h-[300px] sm:h-[46vh] lg:h-[58vh]">
                <Suspense fallback={null}>
                  <ProductCore active={active} onChange={setActive} onOpen={setViewing} />
                </Suspense>
              </div>
            </div>
          </Reveal>

          {/* product ledger */}
          <div>
            <Reveal>
              <div className="flex items-center justify-between border-b-2 border-paper-ink pb-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-meta">Index</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-meta">Status</span>
              </div>
            </Reveal>
            {products.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <div
                  onClick={() => setActive(i)}
                  data-hover
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActive(i)
                  }}
                  className={`ledger-row group grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-4 px-1 py-5 text-left transition-colors sm:gap-6 ${
                    active === i ? "bg-brand/[0.06]" : "hover:bg-paper-card"
                  }`}
                >
                  <span className="font-mono text-sm text-paper-meta">{p.index}</span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="display-title text-xl text-paper-ink transition-colors group-hover:text-brand sm:text-2xl">
                        {p.name}
                      </h3>
                      <span className="hidden border border-paper-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-paper-meta sm:block">
                        {p.tag}
                      </span>
                    </div>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-paper-muted">{p.desc}</p>
                    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-paper-meta">
                          <span className={active === i ? "text-brand" : "text-paper-line"}>▸</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`/products/${p.id}`}
                      onClick={(e) => e.stopPropagation()}
                      data-hover
                      className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-brand transition-colors hover:text-paper-ink"
                    >
                      View Product Page →
                    </a>
                  </div>
                  <span
                    className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] ${
                      active === i ? "text-brand" : "text-paper-meta"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${active === i ? "bg-brand" : "bg-paper-line"}`} />
                    {active === i ? "ON SCREEN" : "IDLE"}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {viewProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`${viewProduct.name} dashboard`}
          onClick={() => setViewing(null)}
        >
          <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" aria-hidden="true" />
          <div
            className="relative w-full max-w-5xl animate-dialog-in overflow-hidden border border-paper-line bg-paper shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-paper-line px-5 py-3">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">
                  {viewProduct.index} / {viewProduct.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper-meta">
                  {viewProduct.tag}
                </span>
              </div>
              <button
                onClick={() => setViewing(null)}
                data-hover
                className="flex h-8 w-8 items-center justify-center border border-paper-line font-mono text-sm text-paper-meta transition-colors hover:border-brand hover:text-brand"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="max-h-[72vh] overflow-auto bg-white">
              <img
                src={viewProduct.screen}
                alt={`${viewProduct.name} dashboard`}
                className="block h-auto w-full"
              />
            </div>
            <div className="flex items-center justify-between border-t border-paper-line px-5 py-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-meta">
                VIEWING · {viewProduct.name.toUpperCase()}
              </span>
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                FULL RESOLUTION
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}