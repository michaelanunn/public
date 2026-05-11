"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { 
  FireProtectionDrawing, 
  HVACDrawing, 
  ElectricalDrawing, 
  PlumbingDrawing,
  StructuralGrid,
  TitleBlock
} from "./mep-drawings"

interface DisciplineConfig {
  id: string
  startPosition: { x: number; y: number }
  convergenceDelay: number
  Drawing: React.ComponentType
}

const disciplines: DisciplineConfig[] = [
  {
    id: "fp",
    startPosition: { x: -45, y: -40 },
    convergenceDelay: 0,
    Drawing: FireProtectionDrawing,
  },
  {
    id: "hvac",
    startPosition: { x: 45, y: -40 },
    convergenceDelay: 0.08,
    Drawing: HVACDrawing,
  },
  {
    id: "elec",
    startPosition: { x: -45, y: 40 },
    convergenceDelay: 0.16,
    Drawing: ElectricalDrawing,
  },
  {
    id: "plumb",
    startPosition: { x: 45, y: 40 },
    convergenceDelay: 0.24,
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
    const adjustedProgress = Math.max(0, (progress - discipline.convergenceDelay) / (0.7 - discipline.convergenceDelay))
    const easedProgress = easeOutQuint(Math.min(1, adjustedProgress))
    
    const x = lerp(discipline.startPosition.x, 0, easedProgress)
    const y = lerp(discipline.startPosition.y, 0, easedProgress)
    const opacity = lerp(0.15, 0.85, easedProgress)
    const scale = lerp(0.85, 1, easedProgress)
    
    return {
      transform: `translate(${x}%, ${y}%) scale(${scale})`,
      opacity,
    }
  }, [])

  // Title block appears at the end
  const titleBlockOpacity = scrollProgress > 0.75 ? (scrollProgress - 0.75) / 0.25 : 0
  const titleBlockTransform = `translateY(${lerp(20, 0, titleBlockOpacity)}px)`

  // Clash detection
  const showClash = scrollProgress > 0.5 && scrollProgress < 0.85
  const clashResolved = scrollProgress > 0.75
  const clashOpacity = showClash ? (clashResolved ? lerp(1, 0, (scrollProgress - 0.75) / 0.1) : 1) : 0
  
  // Resolved checkmark
  const showResolved = scrollProgress > 0.78

  return (
    <div 
      ref={containerRef}
      className="relative bg-white py-8"
      style={{ height: "120vh" }}
    >
      {/* Sticky container - centered with minimal top offset */}
      <div className="sticky top-[5vh] flex items-start justify-center px-6 md:px-12"> 
        <div className="w-full max-w-5xl">
          {/* Main animation stage */}
          <div 
            className="relative w-full bg-white border border-neutral-200 overflow-hidden shadow-xl"
            style={{ aspectRatio: "4/3" }}
          >
            {/* Structural grid background */}
            <div className="absolute inset-0 text-foreground">
              <StructuralGrid />
            </div>

            {/* Discipline drawings - no boxes, just the drawings */}
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
                  <div className="w-[85%] h-[85%] text-foreground">
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
                <div className="absolute inset-0 w-4 h-4 bg-foreground/10 rounded-full animate-ping" />
                <div className="w-4 h-4 bg-foreground rounded-full flex items-center justify-center">
                  <span className="text-background text-[8px] font-bold">!</span>
                </div>
              </div>
              <span className="text-[10px] font-medium text-foreground tracking-wide">CONFLICT</span>
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
              <div className="w-4 h-4 border border-foreground/30 rounded-full flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M 1.5 4 L 3 5.5 L 6.5 2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[10px] font-medium text-foreground/60 tracking-wide">RESOLVED</span>
            </div>

            {/* Title block */}
            <div 
              className="absolute bottom-6 right-6 w-44 md:w-52 text-foreground"
              style={{ 
                opacity: titleBlockOpacity,
                transform: titleBlockTransform,
                transition: "opacity 0.4s ease, transform 0.4s ease"
              }}
            >
              <TitleBlock />
            </div>
          </div>

          {/* Progress bar - minimal */}
          <div >
            <div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
