const records = [
  "/ATTENDANCE/TIMEPRO/BIOMETRIC/IN/BANGALORE_CAMPUS/07:55",
  "/VISITOR/VISITPRO/PREREG/APPROVED/DIAMOND_TOWER/09:12",
  "/MEAL/MEALPRO/ENTITLEMENT/VERIFIED/CANTEEN_2/12:45",
  "/QUEUE/QUEUEPRO/TOKEN/A-0412/KIOSK_3/14:30",
  "/PROJECT/PROJECTPRO/PHASE_2/ON_TRACK/SHIP-17/16:05",
  "/ATTENDANCE/TIMEPRO/BIOMETRIC/OUT/DXB_OFFICE/18:02",
  "/VISITOR/VISITPRO/CHECKOUT/BADGE_RETURNED/19:40",
]

export default function DataTicker() {
  return (
    <section className="border-b border-line bg-ink-950 py-6" aria-hidden="true">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 pr-12" style={{ "--marquee-dur": "34s" }}>
          {[...records, ...records].map((r, i) => (
            <span key={i} className="font-mono text-[11px] tracking-[0.16em] text-muted">
              {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}