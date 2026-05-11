"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { 
  FireProtectionDrawing, 
  HVACDrawing, 
  ElectricalDrawing, 
  PlumbingDrawing,
  TitleBlock
} from "./mep-drawings"

interface DisciplineConfig {
  id: string
  label: string
  color: string
  startPosition: { x: number; y: number }
  convergenceDelay: number
  Drawing: React.ComponentType
}

const disciplines: DisciplineConfig[] = [
  {
    id: "fp",
    label: "Fire Protection",
    color: "#ef4444",
    startPosition: { x: -25, y: -20 },
    convergenceDelay: 0,
    Drawing: FireProtectionDrawing,
  },
  {
    id: "hvac",
    label: "HVAC",
    color: "#3b82f6",
    startPosition: { x: 25, y: -20 },
    convergenceDelay: 0.05,
    Drawing: HVACDrawing,
  },
  {
    id: "elec",
    label: "Electrical",
    color: "#eab308",
    startPosition: { x: -25, y: 20 },
    convergenceDelay: 0.1,
    Drawing: ElectricalDrawing,
  },
  {
    id: "plumb",
    label: "Plumbing",
    color: "#22c55e",
    startPosition: { x: 25, y: 20 },
    convergenceDelay: 0.15,
    Drawing: PlumbingDrawing,
  },
]

function easeOutQuint(t: number): number {
  return 1 - Math.pow(1 - t, 5)
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * Math.max(0, Math.min(1, t))
}

export function CoordinationAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementHeight = rect.height
      
      let progress = 0
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        progress = Math.abs(rect.top) / (elementHeight - windowHeight)
      } else if (rect.bottom < windowHeight) {
        progress = 1
      }
      
      setScrollProgress(Math.max(0, Math.min(1, progress)))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getDisciplineStyles = useCallback((discipline: DisciplineConfig, progress: number) => {
    const adjustedProgress = Math.max(0, (progress - discipline.convergenceDelay) / (0.6 - discipline.convergenceDelay))
    const easedProgress = easeOutQuint(Math.min(1, adjustedProgress))
    
    const x = lerp(discipline.startPosition.x, 0, easedProgress)
    const y = lerp(discipline.startPosition.y, 0, easedProgress)
    // All start visible at 0.6 opacity and converge to 0.9
    const opacity = lerp(0.6, 0.9, easedProgress)
    const scale = lerp(0.92, 1, easedProgress)
    
    return {
      transform: `translate(${x}%, ${y}%) scale(${scale})`,
      opacity,
    }
  }, [])

  // Title block appears at the end
  const titleBlockOpacity = scrollProgress > 0.7 ? (scrollProgress - 0.7) / 0.3 : 0
  const titleBlockTransform = `translateY(${lerp(20, 0, titleBlockOpacity)}px)`

  // Clash detection
  const showClash = scrollProgress > 0.4 && scrollProgress < 0.8
  const clashResolved = scrollProgress > 0.7
  const clashOpacity = showClash ? (clashResolved ? lerp(1, 0, (scrollProgress - 0.7) / 0.1) : 1) : 0
  
  // Resolved checkmark
  const showResolved = scrollProgress > 0.75

  // Labels fade out as drawings merge
  const labelOpacity = lerp(1, 0, Math.min(1, scrollProgress / 0.4))

  return (
    <div 
      ref={containerRef}
      className="relative bg-white"
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-5xl">
          {/* Section header */}
          <div className="text-center mb-8">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400 mb-3">
              Unified Coordination
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-neutral-900">
              Four disciplines. One solution.
            </h2>
          </div>

          {/* Main animation stage */}
          <div 
            className="relative w-full bg-neutral-50 border border-neutral-200 overflow-hidden shadow-lg"
            style={{ aspectRatio: "4/3" }}
          >
            {/* Clean background - no grid boxes */}
            <div className="absolute inset-0 bg-white" />

            {/* Discipline labels that fade out */}
            <div 
              className="absolute inset-0 pointer-events-none z-10"
              style={{ opacity: labelOpacity, transition: "opacity 0.3s ease" }}
            >
              {disciplines.map((discipline, index) => {
                const positions = [
                  { top: "8%", left: "15%" },
                  { top: "8%", right: "15%" },
                  { bottom: "12%", left: "15%" },
                  { bottom: "12%", right: "15%" },
                ]
                const pos = positions[index]
                return (
                  <div
                    key={discipline.id}
                    className="absolute flex items-center gap-2"
                    style={pos as React.CSSProperties}
                  >
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: discipline.color }}
                    />
                    <span className="text-[10px] md:text-xs font-medium text-neutral-600 tracking-wide uppercase">
                      {discipline.label}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Discipline drawings - all visible from start, merging together */}
            {disciplines.map((discipline) => {
              const styles = getDisciplineStyles(discipline, scrollProgress)
              return (
                <div
                  key={discipline.id}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    ...styles,
                    transition: "none",
                  }}
                >
                  <div className="w-[80%] h-[80%] text-neutral-800">
                    <discipline.Drawing />
                  </div>
                </div>
              )
            })}

            {/* Clash indicator */}
            <div 
              className="absolute flex items-center gap-2"
              style={{ 
                top: "35%", 
                left: "42%",
                opacity: clashOpacity,
                transition: "opacity 0.3s ease"
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 w-4 h-4 bg-red-500/20 rounded-full animate-ping" />
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">!</span>
                </div>
              </div>
              <span className="text-[10px] font-medium text-red-600 tracking-wide uppercase">Conflict</span>
            </div>

            {/* Resolved indicator */}
            <div 
              className="absolute flex items-center gap-2"
              style={{ 
                top: "35%", 
                left: "42%",
                opacity: showResolved ? 1 : 0,
                transition: "opacity 0.4s ease"
              }}
            >
              <div className="w-4 h-4 border border-emerald-500 bg-emerald-500/10 rounded-full flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald-600">
                  <path d="M 1.5 4 L 3 5.5 L 6.5 2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[10px] font-medium text-emerald-600 tracking-wide uppercase">Resolved</span>
            </div>

            {/* Title block */}
            <div 
              className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-40 md:w-52 text-neutral-800"
              style={{ 
                opacity: titleBlockOpacity,
                transform: titleBlockTransform,
                transition: "opacity 0.4s ease, transform 0.4s ease"
              }}
            >
              <TitleBlock />
            </div>
          </div>

          {/* Progress indicator */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2">
              {[0, 0.33, 0.66, 1].map((threshold, i) => (
                <div 
                  key={i}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: scrollProgress >= threshold ? "#171717" : "#e5e5e5",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
