import Reveal from "./Reveal.jsx"
import { industries } from "../data.jsx"

const statusMap = {
  finance: { s: "RED", dot: "bg-brand" },
  it: { s: "GREEN", dot: "bg-mint" },
  government: { s: "RED", dot: "bg-brand" },
  retail: { s: "GREEN", dot: "bg-mint" },
  healthcare: { s: "RED", dot: "bg-brand" },
  education: { s: "GREEN", dot: "bg-mint" },
}

export default function Industries() {
  return (
    <section id="industries" className="relative bg-paper text-paper-ink">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-20 sm:px-10 sm:py-28">
        <div className="mb-12 grid gap-6 border-b border-paper-line pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal>
              <p className="label text-paper-meta">Sectors in the Feed</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-title mt-4 max-w-2xl text-[clamp(2rem,4.6vw,4rem)]">
                Every floor you operate on.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <p className="max-w-sm text-sm leading-relaxed text-paper-muted">
              From bank branches to hospital wards, Chronexa keeps every entry, meal and queue
              verified and on-record across the region.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px border border-paper-line bg-paper-line sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const st = statusMap[ind.id]
            return (
              <Reveal key={ind.id} delay={i * 0.05} className="h-full">
                <div data-hover className="group relative flex h-full flex-col justify-between bg-paper p-8 transition-colors duration-300 hover:bg-paper-card">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-paper-meta">{`0${i + 1}`}</span>
                    <span className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] ${st.s === "RED" ? "text-brand" : "text-mint-deep"}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${st.dot}`} />
                      {st.s}
                    </span>
                  </div>
                  <div className="mt-16">
                    <h3 className="display-title text-2xl text-paper-ink transition-colors group-hover:text-brand sm:text-3xl">
                      {ind.name}
                    </h3>
                    <div className="mt-4 h-px w-10 bg-paper-line transition-all duration-500 group-hover:w-full group-hover:bg-brand" />
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper-muted">{ind.desc}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}