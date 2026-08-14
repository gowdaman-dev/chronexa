import { Suspense, useLayoutEffect, useMemo, useRef } from "react"
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { products } from "../data.jsx"

const BRAND = "#e8000d"
const MINT = "#34d988"

const SCREENS = products.map((p) => p.screen)
const COUNT = products.length
const SPACING = (Math.PI * 2) / COUNT
const RADIUS = 2.6
const SCREEN_W = 2.7
const PITCH = 0.6

function useScreenTextures() {
  const textures = useLoader(THREE.TextureLoader, SCREENS)
  useLayoutEffect(() => {
    textures.forEach((t) => {
      t.colorSpace = THREE.SRGBColorSpace
      t.anisotropy = 16
      t.generateMipmaps = false
      t.minFilter = THREE.LinearFilter
      t.magFilter = THREE.LinearFilter
    })
  }, [textures])
  return textures
}

function ScreenMesh({ texture, angle, index, rotRef }) {
  const geo = useMemo(() => {
    const aspect = texture?.image ? texture.image.width / texture.image.height : 16 / 9
    return new THREE.PlaneGeometry(SCREEN_W, SCREEN_W / aspect, 48, 1)
  }, [texture])
  const bend = useRef({ v: 0, vel: 0 })
  const pos = useMemo(() => ({
    x: Math.sin(angle) * RADIUS,
    z: Math.cos(angle) * RADIUS,
  }), [angle])
  const half = SCREEN_W / 2
  const curve = useMemo(
    () => (RADIUS - Math.sqrt(RADIUS * RADIUS - half * half)) * 1.7,
    [half],
  )

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05)
    const phi = ((angle + rotRef.current + Math.PI) % (Math.PI * 2)) - Math.PI
    const t = Math.min(1, Math.abs(phi) / Math.PI)
    const target = Math.pow(t, 1.35)
    const b = bend.current
    b.vel += (target - b.v) * 18 * dt
    b.vel *= Math.pow(0.85, dt * 60)
    b.v += b.vel * dt

    const attr = geo.attributes.position
    for (let i = 0; i < attr.count; i++) {
      const u = attr.getX(i) / half
      attr.setZ(i, -b.v * curve * u * u)
    }
    attr.needsUpdate = true
  })

  return (
    <group position={[pos.x, -index * PITCH, pos.z]} rotation={[0, angle, 0]}>
      <mesh geometry={geo} renderOrder={1}>
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} toneMapped={false} />
      </mesh>
    </group>
  )
}

function Helix({ textures, active, rotRef, dragRef }) {
  const group = useRef(null)
  const spring = useRef({ rot: 0, rotVel: 0, y: 0, yVel: 0 })
  const targetY = active * PITCH

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05)
    const s = spring.current
    const targetRot = -active * SPACING + (dragRef.current || 0)
    let diff = targetRot - s.rot
    diff = ((diff + Math.PI) % (Math.PI * 2)) - Math.PI
    s.rotVel += diff * 24 * dt
    s.rotVel *= Math.pow(0.9, dt * 60)
    s.rot += s.rotVel * dt

    s.yVel += (targetY - s.y) * 26 * dt
    s.yVel *= Math.pow(0.88, dt * 60)
    s.y += s.yVel * dt

    rotRef.current = s.rot
    if (group.current) {
      group.current.rotation.y = s.rot
      group.current.position.y = s.y
    }
  })

  return (
    <group ref={group}>
      {products.map((p, i) => (
        <ScreenMesh key={p.id} texture={textures[i]} angle={i * SPACING} index={i} rotRef={rotRef} />
      ))}
    </group>
  )
}

function AmbientField() {
  const ref = useRef(null)
  const positions = useMemo(() => {
    const n = 240
    const arr = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2
      const r = 3.2 + Math.random() * 1.6
      arr[i * 3] = Math.cos(a) * r
      arr[i * 3 + 1] = (Math.random() - 0.5) * 3
      arr[i * 3 + 2] = Math.sin(a) * r - 0.8
    }
    return arr
  }, [])
  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.elapsedTime * 0.015
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.012} color="#e0e0e0" transparent opacity={0.5} toneMapped={false} />
    </points>
  )
}

function FloorRing() {
  const ref = useRef(null)
  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.z = clock.elapsedTime * 0.04
  })
  return (
    <mesh ref={ref} position={[0, -1.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[2.9, 3.0, 96]} />
      <meshBasicMaterial color={BRAND} transparent opacity={0.14} side={THREE.DoubleSide} toneMapped={false} />
    </mesh>
  )
}

function CameraRig() {
  const camera = useThree((s) => s.camera)
  useLayoutEffect(() => {
    camera.position.set(0, 0.35, 6.4)
    camera.lookAt(0, 0, RADIUS)
    camera.fov = 40
    camera.updateProjectionMatrix()
  }, [camera])
  return null
}

function CoreScene({ textures, active, dragRef }) {
  const rotRef = useRef(0)
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 5, 4]} intensity={0.8} />
      <pointLight position={[0, 0.4, 2.4]} intensity={16} color={BRAND} distance={9} />
      <pointLight position={[0, 1.4, -2]} intensity={10} color={MINT} distance={8} />
      <Helix textures={textures} active={active} rotRef={rotRef} dragRef={dragRef} />
      <AmbientField />
      <FloorRing />
      <fog attach="fog" args={["#f6f6f6", 4.2, 8.6]} />
    </>
  )
}

export default function ProductCore({ active, onChange, onOpen }) {
  const textures = useScreenTextures()
  const dragRef = useRef(0)
  const dragState = useRef({ dragging: false, lastX: 0, moved: 0 })

  const handlePointerDown = (e) => {
    dragState.current.dragging = true
    dragState.current.lastX = e.clientX
    dragState.current.moved = 0
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }

  const handlePointerMove = (e) => {
    if (!dragState.current.dragging) return
    const dx = e.clientX - dragState.current.lastX
    dragState.current.lastX = e.clientX
    dragState.current.moved += Math.abs(dx)
    dragRef.current += dx * 0.008
  }

  const handlePointerUp = () => {
    if (!dragState.current.dragging) return
    const wasDrag = dragState.current.moved > 6
    dragState.current.dragging = false
    if (!wasDrag && onOpen) {
      onOpen(active)
      return
    }
    if (onChange) {
      const total = active * SPACING - dragRef.current
      const idx = Math.round(total / SPACING)
      const clamped = Math.max(0, Math.min(COUNT - 1, ((idx % COUNT) + COUNT) % COUNT))
      if (clamped !== active) onChange(clamped)
    }
    dragRef.current = 0
  }

  return (
    <div
      className="h-full w-full touch-none select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ cursor: "grab" }}
    >
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0.35, 6.4], fov: 40 }}
        gl={{ antialias: true }}
        style={{ background: "#f6f6f6" }}
      >
        <Suspense fallback={null}>
          <CoreScene textures={textures} active={active} dragRef={dragRef} />
        </Suspense>
        <CameraRig />
      </Canvas>
    </div>
  )
}