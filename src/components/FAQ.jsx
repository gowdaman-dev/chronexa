import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Reveal from "./Reveal.jsx"
import { faqs } from "../data.jsx"

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative bg-paper text-paper-ink">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-20 sm:px-10 sm:py-28">
        <div className="mb-12 grid gap-6 border-b border-paper-line pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal>
              <p className="label text-paper-meta">FAQ</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-title mt-4 max-w-2xl text-[clamp(2rem,4.6vw,4rem)]">
                Answers, on record.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <p className="max-w-sm text-sm leading-relaxed text-paper-muted">
              Still curious? Our team will walk you through everything on a live demo.
            </p>
          </Reveal>
        </div>

        <div>
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className={`border-b border-paper-line ${isOpen ? "bg-paper-card" : ""}`}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 px-4 py-6 text-left sm:gap-6 sm:px-6"
                  >
                    <span className="pt-0.5 font-mono text-xs text-paper-meta">{`0${i + 1}`}</span>
                    <span className="text-base font-semibold leading-snug text-paper-ink sm:text-lg">{f.q}</span>
                    <span
                      className={`mt-0.5 flex h-7 w-7 items-center justify-center border font-mono text-sm transition-transform duration-300 ${
                        isOpen ? "rotate-45 border-brand text-brand" : "border-paper-line text-paper-meta"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="max-w-3xl px-4 pb-7 pl-12 text-sm leading-relaxed text-paper-muted sm:px-6 sm:pl-[74px]">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}