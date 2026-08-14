import Reveal from "./Reveal.jsx"
import { blogs } from "../data.jsx"

export default function BlogPost({ id }) {
  const index = blogs.findIndex((b) => b.id === id)
  const post = index >= 0 ? blogs[index] : null

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-ink-950 text-fore">
        <p className="display-title text-4xl">Post not found</p>
        <a href="/blog" className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-bright hover:text-brand">
          ← Back to Blogs
        </a>
      </div>
    )
  }

  const next = blogs[(index + 1) % blogs.length]

  return (
    <>
      {/* POST — dark terminal header */}
      <section className="relative border-b border-line bg-ink-950 text-fore">
        <div className="crt-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-10 sm:py-28">
          <div className="mb-10 flex items-center justify-between gap-6">
            <a
              href="/blog"
              data-hover
              className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-brand-bright"
            >
              <span>←</span> All Posts
            </a>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {post.index} / {String(blogs.length).padStart(2, "0")}
            </span>
          </div>

          <div className="mb-10 flex flex-wrap items-center gap-4">
            <span className="border border-brand px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-bright">
              {post.category}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {post.date}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              By {post.author}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {post.readTime}
            </span>
          </div>

          <Reveal>
            <h1 className="display-title max-w-4xl text-[clamp(2rem,5vw,4.2rem)] leading-[1.05] text-fore">
              {post.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* POST — cover image */}
      <section className="relative bg-ink-950 text-fore">
        <div className="mx-auto w-full max-w-[1500px] px-4 pb-20 sm:px-10 sm:pb-24">
          <Reveal>
            <div className="border border-line bg-white p-3 sm:p-6">
              <div className="mb-4 flex items-center justify-between border-b border-line px-1 pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-bright">
                  {post.category}
                </span>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  FROM THE FIELD
                </span>
              </div>
              <div className="overflow-hidden border border-line">
                <img
                  src={post.screen}
                  alt={`${post.title} cover`}
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* POST — body */}
      <section className="relative border-t border-paper-line bg-paper text-paper-ink">
        <div className="mx-auto w-full max-w-[860px] px-4 py-20 sm:px-10 sm:py-28">
          <Reveal>
            <p className="text-lg leading-relaxed text-paper-ink sm:text-xl">{post.intro}</p>
          </Reveal>

          <div className="mt-12 border-t border-paper-line">
            {post.sections.map((s, i) => (
              <Reveal key={s.heading} delay={0.05}>
                <div className="border-b border-paper-line py-10">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center border border-paper-line font-mono text-[11px] text-paper-meta">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="display-title text-xl text-paper-ink sm:text-2xl">{s.heading}</h2>
                  </div>
                  <p className="text-[15px] leading-relaxed text-paper-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <blockquote className="mt-12 border-l-2 border-brand pl-6">
              <p className="display-title text-2xl leading-snug text-paper-ink sm:text-3xl">
                {post.quote}
              </p>
            </blockquote>
          </Reveal>

          <Reveal>
            <div className="mt-12">
              <h2 className="display-title text-2xl text-paper-ink">Conclusion</h2>
              <div className="mt-3 h-px w-10 bg-brand" />
              <p className="mt-5 text-[15px] leading-relaxed text-paper-muted">{post.conclusion}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-14 flex flex-col gap-4 border border-paper-line bg-paper-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <p className="display-title text-lg text-paper-ink">Ready to put this into practice?</p>
              <a
                href="#contact"
                data-hover
                className="inline-flex w-fit items-center gap-3 border border-brand bg-brand px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-bright"
              >
                Get a Free Demo <span className="text-white/70">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* POST — next post */}
      <section className="relative border-t border-line bg-ink-950 text-fore">
        <div className="mx-auto w-full max-w-[1500px] px-4 py-16 sm:px-10 sm:py-20">
          <div className="flex items-center justify-between gap-4 pb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Continue Reading</span>
            <a href="/blog" data-hover className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-brand-bright">
              All Posts →
            </a>
          </div>
          <Reveal>
            <a
              href={`/blog/${next.id}`}
              data-hover
              className="group grid overflow-hidden border border-line bg-ink-950 transition-colors hover:bg-ink-900 lg:grid-cols-[1fr_1.15fr]"
            >
              <div className="overflow-hidden border-b border-line lg:border-b-0 lg:border-r">
                <img
                  src={next.screen}
                  alt={`${next.title} cover`}
                  className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-between gap-8 p-7 sm:p-10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-bright">
                      {next.category}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      {next.date}
                    </span>
                  </div>
                  <h2 className="display-title mt-6 text-2xl leading-tight text-fore transition-colors group-hover:text-brand-bright sm:text-3xl">
                    Next: {next.title}
                  </h2>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {next.readTime}
                  </span>
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-bright">
                    Read Post <span>→</span>
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}