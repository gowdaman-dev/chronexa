import { useState } from "react"
import Reveal from "./Reveal.jsx"

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative bg-ink-950 text-fore">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="label-brand mb-5">Start the Scan</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-title text-[clamp(2.2rem,5vw,4.6rem)]">
                Book a demo.
                <br />
                <span className="redact">See the rest.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
                Watch Chronexa scan attendance, visitors, meals, queues and projects live — on your
                own floor, your own people, your own data.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                <p className="flex items-center gap-3">
                  <span className="caret caret--mint" aria-hidden="true" />
                  USA · UAE · KSA · Qatar · Oman
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-px w-3 bg-brand-bright" aria-hidden="true" />
                  info@chronexa.ai
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-px w-3 bg-brand-bright" aria-hidden="true" />
                  support@chronexa.ai
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            {sent ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center border border-line bg-ink-900 p-10 text-center">
                <span className="caret caret--mint" aria-hidden="true" />
                <h3 className="display-title mt-6 text-3xl text-fore">Logged.</h3>
                <p className="mt-3 max-w-xs font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  Our team will reach out within one business day to schedule your demo.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col border border-line">
                <div className="grid grid-cols-1 border-b border-line sm:grid-cols-2">
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    aria-label="Name"
                    className="border-b border-line bg-transparent px-5 py-4 font-mono text-xs uppercase tracking-[0.14em] text-fore placeholder:text-muted focus:outline-none focus:ring-0 sm:border-b-0 sm:border-r"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    className="border-b border-line bg-transparent px-5 py-4 font-mono text-xs uppercase tracking-[0.14em] text-fore placeholder:text-muted focus:outline-none sm:border-b-0"
                  />
                </div>
                <div className="grid grid-cols-1 border-b border-line sm:grid-cols-2">
                  <input
                    type="tel"
                    placeholder="Contact number"
                    aria-label="Contact number"
                    className="border-b border-line bg-transparent px-5 py-4 font-mono text-xs uppercase tracking-[0.14em] text-fore placeholder:text-muted focus:outline-none sm:border-b-0 sm:border-r"
                  />
                  <select
                    aria-label="Which product interests you?"
                    className="border-b border-line bg-ink-950 px-5 py-4 font-mono text-xs uppercase tracking-[0.14em] text-muted focus:outline-none sm:border-b-0"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Which product?
                    </option>
                    <option>TimePro</option>
                    <option>VisitPro</option>
                    <option>MealPro</option>
                    <option>QueuePro</option>
                    <option>ProjectPro</option>
                  </select>
                </div>
                <textarea
                  rows={4}
                  placeholder="Message"
                  aria-label="Message"
                  className="resize-none border-b border-line bg-transparent px-5 py-4 font-mono text-xs uppercase tracking-[0.14em] text-fore placeholder:text-muted focus:outline-none"
                />
                <button
                  type="submit"
                  className="magnetic-btn group flex items-center justify-between bg-brand px-6 py-5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-bright"
                >
                  Send Message
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}