"use client"

// Accurate MEP/FP symbols based on standard construction documentation
// Black and white for clean enterprise aesthetic

// Fire Protection Drawing - accurate symbols
export function FireProtectionDrawing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main supply line */}
      <path d="M50 200 H350" stroke="currentColor" strokeWidth="3" />
      
      {/* Branch lines */}
      <path d="M100 200 V80" stroke="currentColor" strokeWidth="2" />
      <path d="M180 200 V80" stroke="currentColor" strokeWidth="2" />
      <path d="M260 200 V80" stroke="currentColor" strokeWidth="2" />
      <path d="M340 200 V120" stroke="currentColor" strokeWidth="2" />
      
      <path d="M100 200 V320" stroke="currentColor" strokeWidth="2" />
      <path d="M180 200 V320" stroke="currentColor" strokeWidth="2" />
      <path d="M260 200 V320" stroke="currentColor" strokeWidth="2" />
      
      {/* Sprinkler heads - standard circle with cross */}
      {[
        [100, 80], [180, 80], [260, 80],
        [100, 320], [180, 320], [260, 320],
        [140, 140], [220, 140], [300, 140],
        [140, 260], [220, 260], [300, 260]
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d={`M${x-5} ${y} H${x+5} M${x} ${y-5} V${y+5}`} stroke="currentColor" strokeWidth="1" />
        </g>
      ))}
      
      {/* FDC (Fire Department Connection) */}
      <g transform="translate(50, 180)">
        <rect x="-15" y="-15" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="none" />
        <text x="0" y="5" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="600">FDC</text>
      </g>
      
      {/* Control valve */}
      <g transform="translate(340, 120)">
        <circle cx="0" cy="0" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M-7 0 L7 0 M0 -7 L0 7" stroke="currentColor" strokeWidth="1.5" />
      </g>
      
      {/* PIV (Post Indicator Valve) symbol */}
      <g transform="translate(70, 200)">
        <path d="M-8 -8 L8 8 M-8 8 L8 -8" stroke="currentColor" strokeWidth="2" />
        <circle cx="0" cy="0" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </g>
      
      {/* Flow switch */}
      <g transform="translate(300, 200)">
        <rect x="-10" y="-6" width="20" height="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M-6 0 L6 0" stroke="currentColor" strokeWidth="1" />
        <circle cx="8" cy="-10" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
      </g>
      
      {/* Standpipe */}
      <g transform="translate(340, 300)">
        <rect x="-12" y="-20" width="24" height="40" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="0" cy="0" r="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
      </g>
    </svg>
  )
}

// HVAC Drawing - accurate ductwork symbols
export function HVACDrawing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main supply duct */}
      <rect x="40" y="180" width="320" height="40" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M40 200 H360" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" />
      
      {/* Branch ducts */}
      <rect x="90" y="80" width="30" height="100" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="170" y="80" width="30" height="100" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="250" y="80" width="30" height="100" stroke="currentColor" strokeWidth="1.5" fill="none" />
      
      <rect x="90" y="220" width="30" height="100" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="170" y="220" width="30" height="100" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="250" y="220" width="30" height="100" stroke="currentColor" strokeWidth="1.5" fill="none" />
      
      {/* Supply diffusers - standard square with X */}
      {[
        [105, 80], [185, 80], [265, 80],
        [105, 320], [185, 320], [265, 320]
      ].map(([x, y], i) => (
        <g key={i}>
          <rect x={x-12} y={y-12} width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d={`M${x-8} ${y-8} L${x+8} ${y+8} M${x-8} ${y+8} L${x+8} ${y-8}`} stroke="currentColor" strokeWidth="1" />
        </g>
      ))}
      
      {/* Return grilles - rectangle with parallel lines */}
      {[
        [330, 120], [330, 280]
      ].map(([x, y], i) => (
        <g key={i}>
          <rect x={x-15} y={y-20} width="30" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d={`M${x-10} ${y-12} H${x+10} M${x-10} ${y-4} H${x+10} M${x-10} ${y+4} H${x+10} M${x-10} ${y+12} H${x+10}`} stroke="currentColor" strokeWidth="0.75" />
        </g>
      ))}
      
      {/* VAV Box */}
      <g transform="translate(200, 200)">
        <rect x="-25" y="-15" width="50" height="30" stroke="currentColor" strokeWidth="2" fill="none" />
        <text x="0" y="5" textAnchor="middle" fontSize="9" fill="currentColor" fontWeight="600">VAV</text>
      </g>
      
      {/* AHU symbol */}
      <g transform="translate(40, 200)">
        <rect x="-30" y="-25" width="30" height="50" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="-15" cy="0" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M-20 -8 L-10 8 M-20 8 L-10 -8" stroke="currentColor" strokeWidth="1" />
      </g>
      
      {/* Flex duct connections */}
      {[105, 185, 265].map((x, i) => (
        <path key={i} d={`M${x} 180 Q${x-10} 160 ${x} 140`} stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" fill="none" />
      ))}
      
      {/* Damper symbols */}
      <g transform="translate(140, 200)">
        <path d="M-8 -15 L8 15" stroke="currentColor" strokeWidth="2" />
      </g>
      <g transform="translate(280, 200)">
        <path d="M-8 -15 L8 15" stroke="currentColor" strokeWidth="2" />
      </g>
    </svg>
  )
}

// Electrical Drawing - accurate panel and circuit symbols
export function ElectricalDrawing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main conduit runs */}
      <path d="M60 200 H340" stroke="currentColor" strokeWidth="2" />
      <path d="M60 200 V60" stroke="currentColor" strokeWidth="2" />
      <path d="M60 200 V340" stroke="currentColor" strokeWidth="2" />
      
      {/* Branch circuits */}
      <path d="M120 200 V100" stroke="currentColor" strokeWidth="1.5" />
      <path d="M200 200 V100" stroke="currentColor" strokeWidth="1.5" />
      <path d="M280 200 V100" stroke="currentColor" strokeWidth="1.5" />
      <path d="M120 200 V300" stroke="currentColor" strokeWidth="1.5" />
      <path d="M200 200 V300" stroke="currentColor" strokeWidth="1.5" />
      <path d="M280 200 V300" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Panel board */}
      <g transform="translate(60, 60)">
        <rect x="-25" y="-30" width="50" height="60" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M-20 -20 H20 M-20 -10 H20 M-20 0 H20 M-20 10 H20 M-20 20 H20" stroke="currentColor" strokeWidth="1" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="600">PNL-1A</text>
      </g>
      
      {/* Receptacles - standard symbol */}
      {[
        [120, 100], [200, 100], [280, 100],
        [120, 300], [200, 300], [280, 300]
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d={`M${x-4} ${y-3} V${y+3} M${x+4} ${y-3} V${y+3}`} stroke="currentColor" strokeWidth="1.5" />
        </g>
      ))}
      
      {/* Light fixtures - standard circle */}
      {[
        [160, 150], [240, 150], [320, 150],
        [160, 250], [240, 250], [320, 250]
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d={`M${x-7} ${y} H${x+7}`} stroke="currentColor" strokeWidth="1" />
        </g>
      ))}
      
      {/* Switches */}
      {[
        [90, 150], [90, 250]
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
          <path d={`M${x} ${y} L${x+15} ${y-10}`} stroke="currentColor" strokeWidth="1.5" />
        </g>
      ))}
      
      {/* Junction boxes */}
      {[
        [340, 200], [200, 200]
      ].map(([x, y], i) => (
        <g key={i}>
          <rect x={x-8} y={y-8} width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx={x} cy={y} r="3" fill="currentColor" />
        </g>
      ))}
      
      {/* Transformer */}
      <g transform="translate(60, 340)">
        <circle cx="-10" cy="0" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="0" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </g>
      
      {/* Home runs notation */}
      <g transform="translate(150, 200)">
        <path d="M0 0 L-20 -15" stroke="currentColor" strokeWidth="1" />
        <path d="M-20 -15 L-25 -15 L-22 -18 L-25 -15 L-22 -12" stroke="currentColor" strokeWidth="1" fill="none" />
      </g>
    </svg>
  )
}

// Plumbing Drawing - accurate fixture symbols
export function PlumbingDrawing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main sanitary line */}
      <path d="M50 320 H350" stroke="currentColor" strokeWidth="3" />
      
      {/* Main water supply */}
      <path d="M50 80 H350" stroke="currentColor" strokeWidth="2" strokeDasharray="15 5" />
      
      {/* Vertical risers */}
      <path d="M100 80 V320" stroke="currentColor" strokeWidth="2" />
      <path d="M200 80 V320" stroke="currentColor" strokeWidth="2" />
      <path d="M300 80 V320" stroke="currentColor" strokeWidth="2" />
      
      {/* Water closet (toilet) - standard symbol */}
      <g transform="translate(100, 180)">
        <ellipse cx="0" cy="0" rx="15" ry="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <ellipse cx="0" cy="-8" rx="8" ry="6" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M-10 20 H10" stroke="currentColor" strokeWidth="1.5" />
      </g>
      
      {/* Lavatory (sink) - standard symbol */}
      <g transform="translate(200, 150)">
        <ellipse cx="0" cy="0" rx="18" ry="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="0" cy="0" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M-12 12 V20 M12 12 V20" stroke="currentColor" strokeWidth="1" />
      </g>
      
      {/* Floor drain */}
      <g transform="translate(300, 250)">
        <rect x="-12" y="-12" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="0" cy="0" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M-8 -8 L8 8 M-8 8 L8 -8" stroke="currentColor" strokeWidth="0.75" />
      </g>
      
      {/* Clean out */}
      <g transform="translate(150, 320)">
        <circle cx="0" cy="0" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <text x="0" y="4" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="600">CO</text>
      </g>
      
      {/* Water heater */}
      <g transform="translate(350, 180)">
        <rect x="-15" y="-25" width="30" height="50" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="0" cy="0" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
        <text x="0" y="4" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="600">WH</text>
      </g>
      
      {/* Valves */}
      {[
        [100, 120], [200, 120], [300, 120]
      ].map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x-6} ${y-6} L${x+6} ${y+6} M${x-6} ${y+6} L${x+6} ${y-6}`} stroke="currentColor" strokeWidth="2" />
        </g>
      ))}
      
      {/* P-trap indication */}
      <g transform="translate(200, 200)">
        <path d="M0 0 Q-15 20 0 30 Q15 40 0 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </g>
      
      {/* Vent stack */}
      <g transform="translate(250, 80)">
        <circle cx="0" cy="0" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <text x="0" y="4" textAnchor="middle" fontSize="7" fill="currentColor" fontWeight="600">V</text>
      </g>
      
      {/* Hose bibb */}
      <g transform="translate(50, 250)">
        <circle cx="0" cy="0" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 0 H20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 -5 V5" stroke="currentColor" strokeWidth="2" />
      </g>
    </svg>
  )
}
