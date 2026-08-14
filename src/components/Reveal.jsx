import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Reveal({ children, className = "", delay = 0, y = 40 }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const el = ref.current
    const tween = gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      }
    )
    return () => tween.scrollTrigger?.kill()
  }, [delay, y])
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export function SplitTitle({ children, className = "", as: Tag = "h2" }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const el = ref.current
    const words = el.querySelectorAll(".sw")
    const tween = gsap.fromTo(
      words,
      { yPercent: 120, rotateX: -40 },
      {
        yPercent: 0,
        rotateX: 0,
        duration: 1,
        stagger: 0.05,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      }
    )
    return () => tween.scrollTrigger?.kill()
  }, [])
  return (
    <Tag
      ref={ref}
      className={`display-title ${className}`}
      style={{ perspective: 800 }}
    >
      {children.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-top">
          <span className="sw inline-block">
            {w}
            {i < children.split(" ").length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  )
}