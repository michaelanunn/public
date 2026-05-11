"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState, useEffect } from "react"
import * as THREE from "three"

// Building model with base frame that rises from sheet
function BuildingModel({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame(() => {
    if (groupRef.current) {
      // More pronounced rotation as you scroll - increased from 0.12 to 0.5 (roughly 4x more spin)
      groupRef.current.rotation.y = -Math.PI / 4 + progress * 0.5
    }
  })

  // Easing function for smooth animation
  const ease = (t: number) => 1 - Math.pow(1 - t, 4)
  const easedProgress = ease(Math.min(1, progress * 1.2))
  
  // Frame and building rise together
  const riseAmount = easedProgress * 1.5
  const wallHeight = 1.2
  const frameOpacity = Math.min(1, easedProgress * 2)

  return (
<group ref={groupRef} position={[0, -0.6, 0]} scale={0.7}>
        {/* Base sheet / floor plan paper - stays flat */}
      <mesh position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 4.5]} />
        <meshStandardMaterial color="#f5f5f5" side={THREE.DoubleSide} />
      </mesh>

      {/* Grid lines on base sheet */}
      {[-2, -1, 0, 1, 2].map((x, i) => (
        <mesh key={`vline-${i}`} position={[x, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.008, 4]} />
          <meshBasicMaterial color="#e0e0e0" side={THREE.DoubleSide} />
        </mesh>
      ))}
      {[-1.5, -0.5, 0.5, 1.5].map((z, i) => (
        <mesh key={`hline-${i}`} position={[0, -0.01, z]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <planeGeometry args={[0.008, 5.5]} />
          <meshBasicMaterial color="#e0e0e0" side={THREE.DoubleSide} />
        </mesh>
      ))}

      {/* Sheet label */}
      <mesh position={[2.2, -0.01, 1.8]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.8, 0.3]} />
        <meshBasicMaterial color="#e8e8e8" side={THREE.DoubleSide} />
      </mesh>

      {/* Rising 3D Frame/Base - like the reference image */}
      <group position={[0, riseAmount * 0.3, 0]}>
        {/* Frame corners - vertical edges */}
        {[
          [-2.1, -1.55],
          [2.1, -1.55],
          [-2.1, 1.55],
          [2.1, 1.55],
        ].map((pos, i) => (
          <mesh key={`frame-corner-${i}`} position={[pos[0], riseAmount * 0.4, pos[1]]}>
            <boxGeometry args={[0.06, riseAmount * 0.8, 0.06]} />
            <meshStandardMaterial 
              color="#d0d0d0" 
              transparent 
              opacity={frameOpacity * 0.9}
            />
          </mesh>
        ))}

        {/* Frame top edges - horizontal */}
        {/* Front and back */}
        {[-1.55, 1.55].map((z, i) => (
          <mesh key={`frame-top-fb-${i}`} position={[0, riseAmount * 0.8, z]}>
            <boxGeometry args={[4.26, 0.04, 0.04]} />
            <meshStandardMaterial 
              color="#c8c8c8" 
              transparent 
              opacity={frameOpacity * 0.9}
            />
          </mesh>
        ))}
        {/* Left and right */}
        {[-2.1, 2.1].map((x, i) => (
          <mesh key={`frame-top-lr-${i}`} position={[x, riseAmount * 0.8, 0]}>
            <boxGeometry args={[0.04, 0.04, 3.14]} />
            <meshStandardMaterial 
              color="#c8c8c8" 
              transparent 
              opacity={frameOpacity * 0.9}
            />
          </mesh>
        ))}

        {/* Floor slab - rises with frame */}
        <mesh position={[0, 0.04, 0]}>
          <boxGeometry args={[4.2, 0.08, 3.1]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>

        {/* Exterior walls */}
        {/* Front wall */}
        <mesh position={[0, wallHeight * easedProgress / 2 + 0.08, -1.5]}>
          <boxGeometry args={[4.2, wallHeight * easedProgress, 0.08]} />
          <meshStandardMaterial color="#e8e8e8" transparent opacity={0.9} />
        </mesh>
        {/* Back wall */}
        <mesh position={[0, wallHeight * easedProgress / 2 + 0.08, 1.5]}>
          <boxGeometry args={[4.2, wallHeight * easedProgress, 0.08]} />
          <meshStandardMaterial color="#e8e8e8" transparent opacity={0.9} />
        </mesh>
        {/* Left wall */}
        <mesh position={[-2.05, wallHeight * easedProgress / 2 + 0.08, 0]}>
          <boxGeometry args={[0.08, wallHeight * easedProgress, 3.1]} />
          <meshStandardMaterial color="#e0e0e0" transparent opacity={0.9} />
        </mesh>
        {/* Right wall */}
        <mesh position={[2.05, wallHeight * easedProgress / 2 + 0.08, 0]}>
          <boxGeometry args={[0.08, wallHeight * easedProgress, 3.1]} />
          <meshStandardMaterial color="#e0e0e0" transparent opacity={0.9} />
        </mesh>

        {/* Interior walls */}
        <mesh position={[-0.7, wallHeight * easedProgress / 2 + 0.08, -0.4]}>
          <boxGeometry args={[0.06, wallHeight * easedProgress, 2.1]} />
          <meshStandardMaterial color="#d8d8d8" transparent opacity={0.85} />
        </mesh>
        <mesh position={[0.8, wallHeight * easedProgress / 2 + 0.08, 0.6]}>
          <boxGeometry args={[0.06, wallHeight * easedProgress, 1.7]} />
          <meshStandardMaterial color="#d8d8d8" transparent opacity={0.85} />
        </mesh>
        <mesh position={[0.05, wallHeight * easedProgress / 2 + 0.08, 0]}>
          <boxGeometry args={[1.44, wallHeight * easedProgress, 0.06]} />
          <meshStandardMaterial color="#d8d8d8" transparent opacity={0.85} />
        </mesh>

        {/* Stairwell */}
        <mesh position={[-1.6, wallHeight * easedProgress / 2 + 0.08, 1.1]}>
          <boxGeometry args={[0.7, wallHeight * easedProgress, 0.06]} />
          <meshStandardMaterial color="#d0d0d0" transparent opacity={0.85} />
        </mesh>
        <mesh position={[-1.25, wallHeight * easedProgress / 2 + 0.08, 1.1]}>
          <boxGeometry args={[0.06, wallHeight * easedProgress, 0.7]} />
          <meshStandardMaterial color="#d0d0d0" transparent opacity={0.85} />
        </mesh>

        {/* MEP Elements - appear with delay - all in neutral/gray tones */}
        
        {/* Fire Protection - Sprinklers */}
        {progress > 0.35 && (
          <group>
            {[
              [-1.4, 1.2, -0.8],
              [-1.4, 1.2, 0.4],
              [0.15, 1.2, -0.8],
              [0.15, 1.2, 0.8],
              [1.4, 1.2, -0.2],
              [1.4, 1.2, 0.9],
            ].map((pos, i) => (
              <group key={`sprinkler-${i}`} position={pos as [number, number, number]} scale={Math.min(1, (progress - 0.35) * 4)}>
                <mesh>
                  <cylinderGeometry args={[0.035, 0.05, 0.08, 8]} />
                  <meshStandardMaterial color="#888888" />
                </mesh>
                <mesh position={[0, -0.06, 0]}>
                  <sphereGeometry args={[0.02, 8, 8]} />
                  <meshStandardMaterial color="#888888" />
  ��             </mesh>
              </group>
            ))}
            {/* Fire main pipe */}
            <mesh position={[0, 1.15, 0]} rotation={[0, 0, Math.PI / 2]} scale={[1, Math.min(1, (progress - 0.35) * 2.5), 1]}>
              <cylinderGeometry args={[0.022, 0.022, 4, 8]} />
              <meshStandardMaterial color="#888888" />
            </mesh>
          </group>
        )}

        {/* HVAC - Ductwork */}
        {progress > 0.45 && (
          <group>
            {/* Main duct */}
            <mesh position={[0, 1.3, -0.45]} scale={[Math.min(1, (progress - 0.45) * 3), 1, 1]}>
              <boxGeometry args={[3.6, 0.22, 0.35]} />
              <meshStandardMaterial color="#a0a0a0" transparent opacity={0.88} />
            </mesh>
            {/* Branch ducts */}
            <mesh position={[-1.2, 1.3, 0.25]} scale={[1, 1, Math.min(1, (progress - 0.5) * 4)]}>
              <boxGeometry args={[0.26, 0.18, 1.1]} />
              <meshStandardMaterial color="#a0a0a0" transparent opacity={0.88} />
            </mesh>
            <mesh position={[1.2, 1.3, 0.45]} scale={[1, 1, Math.min(1, (progress - 0.55) * 4)]}>
              <boxGeometry args={[0.26, 0.18, 1.4]} />
              <meshStandardMaterial color="#a0a0a0" transparent opacity={0.88} />
            </mesh>
            {/* Diffusers */}
            {[
              [-1.2, 1.16, 0.75],
              [-1.2, 1.16, -0.15],
              [1.2, 1.16, 1.05],
              [1.2, 1.16, -0.05],
            ].map((pos, i) => (
              <mesh key={`diffuser-${i}`} position={pos as [number, number, number]} scale={Math.min(1, (progress - 0.55) * 5)}>
                <boxGeometry args={[0.22, 0.025, 0.22]} />
                <meshStandardMaterial color="#909090" />
              </mesh>
            ))}
          </group>
        )}

        {/* Electrical - Lights */}
        {progress > 0.55 && (
          <group>
            {[
              [-1.4, 1.22, -0.4],
              [-1.4, 1.22, 0.5],
              [0.2, 1.22, -0.7],
              [0.2, 1.22, 0.7],
              [1.5, 1.22, -0.4],
              [1.5, 1.22, 0.65],
            ].map((pos, i) => (
              <mesh key={`light-${i}`} position={pos as [number, number, number]} scale={Math.min(1, (progress - 0.55) * 4)}>
                <boxGeometry args={[0.35, 0.02, 0.12]} />
                <meshStandardMaterial 
                  color="#b8b8b8" 
                  emissive="#ffffff" 
                  emissiveIntensity={0.1} 
                />
              </mesh>
            ))}
            {/* Conduit run */}
            <mesh position={[-1.95, 0.55, 0]} rotation={[0, 0, 0]} scale={[1, Math.min(1, (progress - 0.6) * 4), 1]}>
              <cylinderGeometry args={[0.018, 0.018, 1, 8]} />
              <meshStandardMaterial color="#707070" />
            </mesh>
          </group>
        )}

        {/* Plumbing - Pipes */}
        {progress > 0.65 && (
          <group>
            {/* Vertical risers */}
            {[
              [-1.6, 0.55, -1.15],
              [-1.6, 0.55, 1.15],
              [0.5, 0.55, 1.15],
            ].map((pos, i) => (
              <mesh key={`riser-${i}`} position={pos as [number, number, number]} scale={[1, Math.min(1, (progress - 0.65) * 4), 1]}>
                <cylinderGeometry args={[0.028, 0.028, 1, 8]} />
                <meshStandardMaterial color="#606060" />
              </mesh>
            ))}
            {/* Horizontal waste line */}
            <mesh position={[0, 0.1, 1.25]} rotation={[0, 0, Math.PI / 2]} scale={[1, Math.min(1, (progress - 0.7) * 4), 1]}>
              <cylinderGeometry args={[0.035, 0.035, 3.4, 8]} />
              <meshStandardMaterial color="#606060" />
            </mesh>
          </group>
        )}
      </group>
    </group>
  )
}

interface BuildingSceneProps {
  className?: string
}

export function BuildingScene({ className = "" }: BuildingSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementHeight = rect.height
      
      let scrollProgress = 0
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        scrollProgress = Math.abs(rect.top) / (elementHeight - windowHeight)
      } else if (rect.bottom < windowHeight) {
        scrollProgress = 1
      }
      
      setProgress(Math.max(0, Math.min(1, scrollProgress)))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return (
      <div className={`h-[120vh] ${className}`}>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="w-12 h-12 border border-neutral-200 border-t-neutral-400 rounded-full animate-spin" />
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className={`h-[120vh] ${className}`}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden pb-24">
        <div className="w-full max-w-5xl px-6">
          <div 
            className="relative w-full bg-gradient-to-b from-neutral-100 to-white overflow-hidden"
            style={{ aspectRatio: "16/10" }}
          >
           <Canvas
  // Increased FOV from 28 to 35 to "zoom out" 
  // Adjusted position to center the model better
  camera={{ position: [6, 5, 6], fov: 30 }} 
  style={{ background: "transparent" }}
>
           <ambientLight intensity={0.75} />
  <directionalLight position={[10, 14, 10]} intensity={1.1} castShadow />
  <BuildingModel progress={progress} />
</Canvas>

            {/* Labels that appear */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{ opacity: progress > 0.4 ? Math.min(1, (progress - 0.4) * 3) : 0 }}
            >
              {/* Sprinkler label */}
              <div className="absolute top-[18%] left-[12%] flex items-center gap-2">
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-neutral-600">
                  Sprinkler
                </span>
                <div className="w-8 h-px bg-neutral-400" />
              </div>

              {/* Ductwork label */}
              <div 
                className="absolute top-[24%] right-[14%] flex items-center gap-2"
                style={{ opacity: progress > 0.5 ? 1 : 0, transition: "opacity 0.6s" }}
              >
                <div className="w-8 h-px bg-neutral-400" />
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-neutral-600">
                  Supply Duct
                </span>
              </div>

              {/* Light fixture label */}
              <div 
                className="absolute top-[38%] left-[18%] flex items-center gap-2"
                style={{ opacity: progress > 0.6 ? 1 : 0, transition: "opacity 0.6s" }}
              >
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-neutral-600">
                  Light Fixture
��               </span>
                <div className="w-8 h-px bg-neutral-400" />
              </div>

              {/* Waste line label */}
              <div 
                className="absolute bottom-[30%] right-[16%] flex items-center gap-2"
                style={{ opacity: progress > 0.7 ? 1 : 0, transition: "opacity 0.6s" }}
              >
                <div className="w-8 h-px bg-neutral-400" />
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-neutral-600">
                  Waste Line
                </span>
              </div>

              {/* Diffuser label */}
              <div 
                className="absolute bottom-[44%] left-[24%] flex items-center gap-2"
                style={{ opacity: progress > 0.55 ? 1 : 0, transition: "opacity 0.6s" }}
              >
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-neutral-600">
                  Diffuser
                </span>
                <div className="w-8 h-px bg-neutral-400" />
              </div>
            </div>

            {/* Sheet label at bottom */}
            <div 
            >
              <div >
                3D Coordination Model
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
