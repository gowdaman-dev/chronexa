import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Ledger, Editorial, CipherWall } from "./variants.jsx"

const VARIANTS = [
  { name: "Ledger", render: () => <Ledger /> },
  { name: "Editorial", render: () => <Editorial /> },
  { name: "CipherWall", render: () => <CipherWall /> },
]

export default function BlogPrototype() {
  const [current, setCurrent] = useState(() => {
    const v = parseInt(new URLSearchParams(window.location.search).get("v"), 10)
    return Number.isFinite(v) && v >= 1 && v <= VARIANTS.length ? v - 1 : 0
  })
  const [tick, setTick] = useState(0)
  const pickerRef = useRef(null)
  const highlightRef = useRef(null)
  const itemsRef = useRef([])
  const stageRef = useRef(null)

  useLayoutEffect(() => {
    const picker = pickerRef.current
    const highlight = highlightRef.current
    const items = itemsRef.current
    const move = () => {
      const el = items[current]
      if (!el) return
      highlight.style.width = el.offsetWidth + "px"
      highlight.style.transform = `translateX(${el.offsetLeft}px)`
    }
    move()
    window.addEventListener("resize", move)
    requestAnimationFrame(() => requestAnimationFrame(() => picker.setAttribute("data-ready", "")))
    return () => window.removeEventListener("resize", move)
  }, [current])

  const setActive = (i) => {
    if (i < 0 || i >= VARIANTS.length) return
    setCurrent(i)
    setTick((t) => t + 1)
    const url = new URL(window.location)
    url.searchParams.set("v", i + 1)
    window.history.replaceState(null, "", url)
  }

  useEffect(() => {
    const onKey = (e) => {
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable) return
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const num = parseInt(e.key, 10)
      if (num >= 1 && num <= VARIANTS.length) setActive(num - 1)
      else if (e.key === "ArrowRight") setActive((current + 1) % VARIANTS.length)
      else if (e.key === "ArrowLeft") setActive((current - 1 + VARIANTS.length) % VARIANTS.length)
      else if (e.key === "r" || e.key === "R") setTick((t) => t + 1)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [current])

  return (
    <div className="bg-ink-950">
      <div ref={stageRef} key={tick}>
        {VARIANTS[current].render()}
      </div>

      <style>{`
        @keyframes proto-in {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes proto-in { from { opacity: 1; transform: none; } to { opacity: 1; transform: none; } }
        }
        .proto-picker {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2147483647;
          display: flex;
          align-items: center;
          gap: 2px;
          padding: 4px;
          border-radius: 999px;
          background: rgba(10, 10, 10, 0.82);
          -webkit-backdrop-filter: blur(12px) saturate(1.4);
          backdrop-filter: blur(12px) saturate(1.4);
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.08) inset,
            0 8px 24px rgba(0, 0, 0, 0.24),
            0 2px 6px rgba(0, 0, 0, 0.12);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          line-height: 1;
          -webkit-font-smoothing: antialiased;
          user-select: none;
          -webkit-user-select: none;
        }
        .proto-picker-highlight {
          position: absolute;
          top: 4px;
          left: 0;
          height: 28px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          will-change: transform;
        }
        .proto-picker[data-ready] .proto-picker-highlight {
          transition:
            transform 250ms cubic-bezier(0.23, 1, 0.32, 1),
            width 250ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        @media (prefers-reduced-motion: reduce) {
          .proto-picker[data-ready] .proto-picker-highlight { transition: none; }
        }
        .proto-picker-item {
          position: relative;
          display: flex;
          align-items: center;
          height: 28px;
          padding: 0 12px;
          border: 0;
          border-radius: 999px;
          background: transparent;
          color: rgba(255, 255, 255, 0.55);
          font: inherit;
          cursor: pointer;
          transition: color 150ms ease-out;
        }
        .proto-picker-item:hover { color: rgba(255, 255, 255, 0.85); }
        .proto-picker-item:active { transform: scale(0.97); }
        .proto-picker-item:focus-visible {
          outline: 2px solid rgba(255, 255, 255, 0.4);
          outline-offset: 2px;
        }
        .proto-picker-item[data-active] { color: #fff; }
        .proto-picker-divider {
          width: 1px;
          height: 16px;
          margin: 0 4px;
          background: rgba(255, 255, 255, 0.12);
        }
        .proto-picker-replay { padding: 0 10px; font-size: 14px; }
        .proto-picker[data-position="top"] { bottom: auto; top: 24px; }
      `}</style>

      <nav ref={pickerRef} className="proto-picker" aria-label="Prototype variants">
        <span ref={highlightRef} className="proto-picker-highlight" aria-hidden="true" />
        {VARIANTS.map((v, i) => (
          <button
            key={v.name}
            ref={(el) => (itemsRef.current[i] = el)}
            className="proto-picker-item"
            data-active={current === i || undefined}
            aria-current={current === i ? "true" : undefined}
            onClick={() => setActive(i)}
          >
            {v.name}
          </button>
        ))}
        <span className="proto-picker-divider" aria-hidden="true" />
        <button
          className="proto-picker-item proto-picker-replay"
          aria-label="Replay animation (R)"
          onClick={() => setTick((t) => t + 1)}
        >
          ↻
        </button>
      </nav>
    </div>
  )
}
