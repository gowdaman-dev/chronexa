import { blogs } from "../../data.jsx"

/* ------------------------------------------------------------------ */
/* Shared tokens imported from the product so every variant feels native */
/* ------------------------------------------------------------------ */

const CATEGORIES = [...new Set(blogs.map((b) => b.category))]

function Entrance({ children, delay = 0, className = "" }) {
  return (
    <div
      className={className}
      style={{
        animation: `proto-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s both`,
      }}
    >
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Variant 1 — LEDGER: the archive as a dense terminal table            */
/* ------------------------------------------------------------------ */

export function Ledger() {
  const [active, setActive] = useState("All")
  const filtered = active === "All" ? blogs : blogs.filter((b) => b.category === active)
  const [featured, ...rest] = filtered.length ? filtered : blogs.slice(0, 1)

  return (
    <div className="min-h-screen bg-ink-950 text-fore">
      {/* terminal window bar */}
      <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-8">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-bright" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d9a013]" />
          <span className="h-2.5 w-2.5 rounded-full bg-mint" />
          <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            chronexa ~/field-notes
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {blogs.length} records
        </span>
      </div>

      {/* masthead */}
      <div className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-8 sm:py-24">
        <Entrance>
          <p className="label-brand mb-4">Blogs // index</p>
        </Entrance>
        <Entrance delay={0.05}>
          <h1 className="display-title max-w-3xl text-[clamp(2.2rem,5.5vw,4.5rem)] text-fore">
            Field Notes,
            <br />
            <span className="text-muted">Indexed for Access.</span>
          </h1>
        </Entrance>

        {/* category filter */}
        <Entrance delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {["All", ...CATEGORIES].map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${
                  active === c
                    ? "border-brand bg-brand text-white"
                    : "border-line text-muted hover:border-brand-bright hover:text-brand-bright"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Entrance>
      </div>

      {/* the ledger */}
      <div className="mx-auto w-full max-w-[1200px] px-4 pb-24 sm:px-8">
        <Entrance delay={0.15}>
          <div className="flex items-center gap-6 border-b border-line pb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            <span className="w-10 shrink-0">Idx</span>
            <span className="hidden flex-1 sm:block">Subject</span>
            <span className="w-40 shrink-0 text-right">Date</span>
            <span className="w-20 shrink-0 text-right">Read</span>
          </div>

          {/* featured row */}
          <a
            href={`/blog/${featured.id}`}
            className="group flex flex-col gap-2 border-b border-line py-6 transition-colors hover:bg-ink-900 sm:flex-row sm:items-center sm:gap-6"
          >
            <div className="flex items-center gap-6 sm:w-10 sm:shrink-0">
              <span className="font-mono text-sm text-brand-bright">{featured.index}</span>
              <span className="border border-brand px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-brand-bright sm:hidden">
                Latest
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h3 className="display-title text-xl text-fore transition-colors group-hover:text-brand-bright sm:text-2xl">
                  {featured.title}
                </h3>
                <span className="hidden shrink-0 border border-brand px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-brand-bright sm:inline">
                  Latest
                </span>
              </div>
              <p className="mt-2 hidden max-w-xl text-sm leading-relaxed text-muted sm:block">
                {featured.excerpt}
              </p>
            </div>
            <div className="flex items-center gap-6 sm:w-40 sm:shrink-0 sm:justify-end">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted sm:text-right">
                {featured.date}
              </span>
              <span className="font-mono text-[10px] text-muted sm:w-20 sm:text-right">
                {featured.readTime}
              </span>
            </div>
            <span className="hidden font-mono text-brand-bright sm:inline">→</span>
          </a>

          {/* archive rows */}
          {rest.map((b) => (
            <a
              key={b.id}
              href={`/blog/${b.id}`}
              className="group flex flex-col gap-2 border-b border-line py-6 transition-colors hover:bg-ink-900 sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="flex items-center gap-6 sm:w-10 sm:shrink-0">
                <span className="font-mono text-sm text-muted transition-colors group-hover:text-brand-bright">
                  {b.index}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-base leading-snug text-fore transition-all group-hover:translate-x-1 group-hover:text-brand-bright sm:text-lg">
                  {b.title}
                </h3>
              </div>
              <div className="flex items-center gap-6 sm:w-40 sm:shrink-0 sm:justify-end">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted sm:text-right">
                  {b.date}
                </span>
                <span className="font-mono text-[10px] text-muted sm:w-20 sm:text-right">
                  {b.readTime}
                </span>
              </div>
              <span className="hidden font-mono text-muted transition-colors group-hover:text-brand-bright sm:inline">
                →
              </span>
            </a>
          ))}

          {/* footer of the table */}
          <div className="flex items-center justify-between py-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            <span>end of index</span>
            <span className="flex items-center gap-2">
              <span className="caret" /> awaiting input
            </span>
          </div>
        </Entrance>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Variant 2 — EDITORIAL: magazine typography, huge index, hairlines    */
/* ------------------------------------------------------------------ */

export function Editorial() {
  const [lead, ...rest] = blogs

  return (
    <div className="min-h-screen bg-paper text-paper-ink">
      {/* masthead */}
      <div className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-8 sm:py-24">
        <Entrance>
          <div className="flex items-center justify-between border-b border-paper-line pb-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
              Chronexa — Field Notes
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper-meta">
              Vol. {String(new Date().getFullYear() - 2025).padStart(2, "0")} · No. 06
            </span>
          </div>
        </Entrance>
        <Entrance delay={0.05}>
          <h1 className="mt-14 max-w-4xl text-[clamp(3rem,8vw,6.5rem)] font-black uppercase leading-[0.9] tracking-[-0.02em] text-paper-ink">
            The Index of
            <br />
            <span className="text-brand">Field Notes</span>
          </h1>
        </Entrance>
        <Entrance delay={0.1}>
          <div className="mt-10 grid gap-8 border-l border-brand pl-6 sm:grid-cols-[1fr_auto]">
            <p className="max-w-md text-base leading-relaxed text-paper-muted">
              Six dispatches from the workforce management front line — attendance, visitors,
              meals, queues and projects, reported and indexed.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper-meta">
              {blogs.length} entries · April — February 2026
            </p>
          </div>
        </Entrance>
      </div>

      {/* lead editorial */}
      <div className="border-y border-paper-line bg-paper-card">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
          <Entrance>
            <a href={`/blog/${lead.id}`} className="group block">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-brand">{lead.index}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-meta">
                  {lead.category}
                </span>
              </div>
              <h2 className="mt-6 text-[clamp(1.8rem,4vw,3.2rem)] font-black uppercase leading-[1.02] tracking-[-0.02em] text-paper-ink transition-colors group-hover:text-brand">
                {lead.title}
              </h2>
              <div className="mt-6 h-px w-12 bg-brand transition-all duration-500 group-hover:w-full" />
              <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-muted">
                {lead.excerpt}
              </p>
            </a>
          </Entrance>
          <Entrance delay={0.1} className="flex flex-col justify-between">
            <img
              src={lead.screen}
              alt={lead.title}
              className="w-full border border-paper-line object-cover"
            />
            <div className="mt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-paper-meta">
              <span>{lead.author}</span>
              <span>{lead.date} · {lead.readTime}</span>
            </div>
          </Entrance>
        </div>
      </div>

      {/* numbered index */}
      <div className="mx-auto w-full max-w-[1200px] px-4 pb-24 sm:px-8">
        {rest.map((b, i) => (
          <Entrance key={b.id} delay={i * 0.04}>
            <a
              href={`/blog/${b.id}`}
              className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-paper-line py-10 sm:grid-cols-[auto_1fr_auto] sm:gap-10"
            >
              <span className="display-title text-6xl leading-none text-paper-line transition-colors group-hover:text-brand sm:text-7xl">
                {b.index}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-paper-meta">
                  <span className="text-brand">{b.category}</span>
                  <span>{b.date}</span>
                  <span>{b.readTime}</span>
                </div>
                <h3 className="mt-4 max-w-xl text-2xl font-bold leading-tight tracking-[-0.01em] text-paper-ink transition-colors group-hover:text-brand sm:text-3xl">
                  {b.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-paper-muted">{b.excerpt}</p>
              </div>
              <span className="hidden justify-self-end font-mono text-2xl text-paper-meta transition-all group-hover:translate-x-1 group-hover:text-brand sm:block">
                →
              </span>
            </a>
          </Entrance>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Variant 3 — CIPHER WALL: dark bento image grid, redact-sweep hover   */
/* ------------------------------------------------------------------ */

export function CipherWall() {
  const [featured, ...rest] = blogs

  const tiles = [
    { b: featured, cls: "lg:col-span-2 lg:row-span-2", tall: true },
    { b: rest[0], cls: "lg:col-span-1", tall: false },
    { b: rest[1], cls: "lg:col-span-1", tall: false },
    { b: rest[2], cls: "lg:col-span-2", tall: false },
    { b: rest[3], cls: "lg:col-span-1 lg:row-span-2", tall: true },
    { b: rest[4], cls: "lg:col-span-1", tall: false },
  ]

  return (
    <div className="min-h-screen bg-ink-950 text-fore">
      {/* scan header */}
      <div className="relative overflow-hidden border-b border-line">
        <div className="crt-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-8 px-4 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
          <Entrance>
            <p className="label-brand mb-4">Blogs // surveillance feed</p>
            <h1 className="display-title max-w-3xl text-[clamp(2.2rem,5.5vw,4.5rem)] text-fore">
              The Field
              <br />
              <span className="text-brand-bright">Notes Wall</span>
            </h1>
          </Entrance>
          <Entrance delay={0.08}>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Everything captured in the field, pinned to the wall — attendance, visitors, meals,
              queues and projects, live and indexed.
            </p>
          </Entrance>
        </div>
      </div>

      {/* the wall */}
      <div className="mx-auto w-full max-w-[1500px] px-4 py-14 sm:px-8 sm:py-20">
        <div className="grid auto-rows-[260px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[300px]">
          {tiles.map(({ b, cls }, i) => (
            <Entrance key={b.id} delay={i * 0.06} className={cls}>
              <a href={`/blog/${b.id}`} className="group relative block h-full w-full overflow-hidden border border-line">
                <img
                  src={b.screen}
                  alt={b.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-40"
                />
                {/* redact sweep on hover */}
                <span className="absolute inset-0 block origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex items-start justify-between">
                    <span className="border border-line px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted backdrop-blur-sm">
                      {b.category}
                    </span>
                    <span className="font-mono text-[10px] text-muted">{b.index}</span>
                  </div>
                  <div className="relative z-10">
                    <div className="mb-3 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      <span>{b.date}</span>
                      <span className="h-1 w-1 rounded-full bg-brand-bright" />
                      <span>{b.readTime}</span>
                    </div>
                    <h3
                      className={`display-title text-fore ${
                        b === featured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
                      }`}
                    >
                      {b.title}
                    </h3>
                    {b === featured && (
                      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{b.excerpt}</p>
                    )}
                  </div>
                </div>
              </a>
            </Entrance>
          ))}
        </div>
      </div>
    </div>
  )
}
