"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"
import { DISCIPLINE_COLORS } from "./accurate-drawings"

interface Building3DProps {
  progress: number // 0-1 scroll progress
}

function Floor({ position, scale }: { position: [number, number, number]; scale: number }) {
  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[4 * scale, 3 * scale]} />
      <meshStandardMaterial color="#f5f5f5" side={THREE.DoubleSide} />
    </mesh>
  )
}

function Wall({ 
  start, 
  end, 
  height, 
  progress 
}: { 
  start: [number, number]; 
  end: [number, number]; 
  height: number; 
  progress: number 
}) {
  const length = Math.sqrt(
    Math.pow(end[0] - start[0], 2) + Math.pow(end[1] - start[1], 2)
  )
  const angle = Math.atan2(end[1] - start[1], end[0] - start[0])
  const midX = (start[0] + end[0]) / 2
  const midZ = (start[1] + end[1]) / 2
  
  const currentHeight = height * Math.min(1, progress * 2)
  
  return (
    <mesh 
      position={[midX, currentHeight / 2, midZ]} 
      rotation={[0, -angle, 0]}
    >
      <boxGeometry args={[length, currentHeight, 0.08]} />
      <meshStandardMaterial color="#e8e8e8" transparent opacity={0.9} />
    </mesh>
  )
}

function MEPElement({ 
  position, 
  type, 
  progress,
  delay = 0 
}: { 
  position: [number, number, number]
  type: "sprinkler" | "diffuser" | "light" | "pipe"
  progress: number
  delay?: number
}) {
  const ref = useRef<THREE.Group>(null)
  const adjustedProgress = Math.max(0, (progress - delay) / (1 - delay))
  const visible = adjustedProgress > 0
  
  const color = useMemo(() => {
    switch (type) {
      case "sprinkler": return DISCIPLINE_COLORS.fire
      case "diffuser": return DISCIPLINE_COLORS.hvac
      case "light": return DISCIPLINE_COLORS.electrical
      case "pipe": return DISCIPLINE_COLORS.plumbing
    }
  }, [type])
  
  useFrame(() => {
    if (ref.current) {
      ref.current.scale.setScalar(visible ? Math.min(1, adjustedProgress * 3) : 0)
    }
  })
  
  if (type === "sprinkler") {
    return (
      <group ref={ref} position={position}>
        <mesh>
          <cylinderGeometry args={[0.03, 0.05, 0.08, 8]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh position={[0, -0.06, 0]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
    )
  }
  
  if (type === "diffuser") {
    return (
      <group ref={ref} position={position}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <boxGeometry args={[0.2, 0.2, 0.03]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
    )
  }
  
  if (type === "light") {
    return (
      <group ref={ref} position={position}>
        <mesh>
          <boxGeometry args={[0.3, 0.02, 0.15]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
        </mesh>
      </group>
    )
  }
  
  if (type === "pipe") {
    return (
      <group ref={ref} position={position}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
    )
  }
  
  return null
}

function Pipe({ 
  start, 
  end, 
  color, 
  progress, 
  delay = 0 
}: { 
  start: [number, number, number]
  end: [number, number, number]
  color: string
  progress: number
  delay?: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  const adjustedProgress = Math.max(0, (progress - delay) / (1 - delay))
  
  const { length, midpoint, rotation } = useMemo(() => {
    const dx = end[0] - start[0]
    const dy = end[1] - start[1]
    const dz = end[2] - start[2]
    const len = Math.sqrt(dx * dx + dy * dy + dz * dz)
    
    return {
      length: len,
      midpoint: [
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2,
        (start[2] + end[2]) / 2
      ] as [number, number, number],
      rotation: new THREE.Euler(
        Math.atan2(Math.sqrt(dx * dx + dz * dz), dy),
        Math.atan2(dx, dz),
        0
      )
    }
  }, [start, end])
  
  useFrame(() => {
    if (ref.current) {
      const scale = Math.min(1, adjustedProgress * 2)
      ref.current.scale.set(scale, scale, scale)
    }
  })
  
  return (
    <mesh ref={ref} position={midpoint} rotation={rotation}>
      <cylinderGeometry args={[0.015, 0.015, length, 8]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function BuildingModel({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null)
  
  // Smooth rotation based on progress
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = -Math.PI / 6 + progress * 0.3
      groupRef.current.position.y = -0.5 + progress * 0.3
    }
  })
  
  // Wall definitions
  const walls: { start: [number, number]; end: [number, number] }[] = [
    // Outer walls
    { start: [-2, -1.5], end: [2, -1.5] },
    { start: [2, -1.5], end: [2, 1.5] },
    { start: [2, 1.5], end: [-2, 1.5] },
    { start: [-2, 1.5], end: [-2, -1.5] },
    // Interior walls
    { start: [-0.5, -1.5], end: [-0.5, 0] },
    { start: [0.8, 0], end: [0.8, 1.5] },
    { start: [-2, 0], end: [0, 0] },
  ]
  
  return (
    <group ref={groupRef}>
      {/* Base floor / sheet */}
      <Floor position={[0, 0, 0]} scale={1} />
      
      {/* Grid lines on floor */}
      {[-1.5, -0.5, 0.5, 1.5].map((x, i) => (
        <mesh key={`gridx-${i}`} position={[x, 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.01, 3]} />
          <meshBasicMaterial color="#ddd" />
        </mesh>
      ))}
      {[-1, 0, 1].map((z, i) => (
        <mesh key={`gridz-${i}`} position={[0, 0.001, z]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <planeGeometry args={[0.01, 4]} />
          <meshBasicMaterial color="#ddd" />
        </mesh>
      ))}
      
      {/* Walls */}
      {walls.map((wall, i) => (
        <Wall 
          key={i} 
          start={wall.start} 
          end={wall.end} 
          height={1.2} 
          progress={progress} 
        />
      ))}
      
      {/* Fire Protection - Sprinklers */}
      {[
        [-1.2, 1.15, -0.8],
        [-1.2, 1.15, 0.8],
        [0.3, 1.15, -0.8],
        [0.3, 1.15, 0.8],
        [1.4, 1.15, 0],
      ].map((pos, i) => (
        <MEPElement 
          key={`sp-${i}`} 
          position={pos as [number, number, number]} 
          type="sprinkler" 
          progress={progress}
          delay={0.3}
        />
      ))}
      
      {/* Fire Protection Piping */}
      <Pipe 
        start={[-2, 1.1, 0]} 
        end={[2, 1.1, 0]} 
        color={DISCIPLINE_COLORS.fire} 
        progress={progress}
        delay={0.25}
      />
      
      {/* HVAC - Diffusers */}
      {[
        [-1.2, 1.18, -0.5],
        [-1.2, 1.18, 0.5],
        [0.3, 1.18, 0.8],
        [1.4, 1.18, -0.5],
      ].map((pos, i) => (
        <MEPElement 
          key={`diff-${i}`} 
          position={pos as [number, number, number]} 
          type="diffuser" 
          progress={progress}
          delay={0.4}
        />
      ))}
      
      {/* HVAC Ductwork */}
      <mesh position={[0, 1.3, -0.5]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.15 * Math.min(1, progress * 2), 3.5 * Math.min(1, progress * 2), 0.25 * Math.min(1, progress * 2)]} />
        <meshStandardMaterial color={DISCIPLINE_COLORS.hvac} transparent opacity={0.7} />
      </mesh>
      
      {/* Electrical - Lights */}
      {[
        [-1.2, 1.19, 0],
        [0.2, 1.19, -0.7],
        [0.2, 1.19, 0.7],
        [1.4, 1.19, 0.5],
      ].map((pos, i) => (
        <MEPElement 
          key={`lt-${i}`} 
          position={pos as [number, number, number]} 
          type="light" 
          progress={progress}
          delay={0.5}
        />
      ))}
      
      {/* Plumbing - Pipes */}
      <Pipe 
        start={[-1.8, 0.1, -1.3]} 
        end={[-1.8, 0.1, 0]} 
        color={DISCIPLINE_COLORS.plumbing} 
        progress={progress}
        delay={0.55}
      />
      <Pipe 
        start={[-1.8, 0.1, 0]} 
        end={[-1.8, 1, 0]} 
        color={DISCIPLINE_COLORS.plumbing} 
        progress={progress}
        delay={0.6}
      />
    </group>
  )
}

function Label3D({ 
  position, 
  text, 
  color, 
  progress, 
  delay = 0 
}: { 
  position: [number, number, number]
  text: string
  color: string
  progress: number
  delay?: number
}) {
  const ref = useRef<THREE.Group>(null)
  const adjustedProgress = Math.max(0, (progress - delay) / (1 - delay))
  
  useFrame(() => {
    if (ref.current) {
      ref.current.scale.setScalar(adjustedProgress > 0.5 ? 1 : 0)
    }
  })
  
  // We'll use HTML labels instead via drei
  return null
}

export function Building3D({ progress }: Building3DProps) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return (
      <div className="w-full h-full bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-slate-200 border-t-slate-400 rounded-full animate-spin" />
      </div>
    )
  }
  
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [4, 3, 4], fov: 35 }}
        style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-5, 5, -5]} intensity={0.3} />
        
        <BuildingModel progress={progress} />
      </Canvas>
      
      {/* HTML Labels overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: progress > 0.6 ? (progress - 0.6) * 2.5 : 0 }}
      >
        <div className="absolute top-[25%] left-[20%] flex items-center gap-2">
          <div className="w-8 h-px bg-[#9B2335]" />
          <span className="text-xs font-medium tracking-wider uppercase" style={{ color: DISCIPLINE_COLORS.fire }}>
            Sprinkler
          </span>
        </div>
        <div className="absolute top-[30%] right-[25%] flex items-center gap-2">
          <span className="text-xs font-medium tracking-wider uppercase" style={{ color: DISCIPLINE_COLORS.hvac }}>
            Supply Diffuser
          </span>
          <div className="w-8 h-px bg-[#1E3A5F]" />
        </div>
        <div className="absolute top-[45%] left-[15%] flex items-center gap-2">
          <div className="w-8 h-px bg-[#C4A052]" />
          <span className="text-xs font-medium tracking-wider uppercase" style={{ color: DISCIPLINE_COLORS.electrical }}>
            Light Fixture
          </span>
        </div>
        <div className="absolute bottom-[35%] right-[20%] flex items-center gap-2">
          <span className="text-xs font-medium tracking-wider uppercase" style={{ color: DISCIPLINE_COLORS.plumbing }}>
            Waste Line
          </span>
          <div className="w-8 h-px bg-[#2D5A27]" />
        </div>
      </div>
    </div>
  )
}
