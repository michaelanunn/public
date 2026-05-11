"use client"

// Intricate Fire Protection Drawing - detailed sprinkler system
export function FireProtectionDrawing() {
  return (
    <svg viewBox="0 0 500 400" className="w-full h-full" fill="none">
      {/* Main risers with pipe fittings */}
      <g stroke="currentColor" strokeWidth="2">
        <path d="M 30 20 L 30 380" />
        <path d="M 470 20 L 470 380" />
      </g>
      
      {/* Cross mains with detailed connections */}
      <g stroke="currentColor" strokeWidth="1.8">
        <path d="M 30 60 L 470 60" />
        <path d="M 30 160 L 470 160" />
        <path d="M 30 260 L 470 260" />
        <path d="M 30 360 L 470 360" />
      </g>
      
      {/* Branch lines - intricate network */}
      <g stroke="currentColor" strokeWidth="1">
        {[80, 140, 200, 260, 320, 380, 440].map((x, i) => (
          <g key={i}>
            <path d={`M ${x} 60 L ${x} 160`} />
            <path d={`M ${x} 160 L ${x} 260`} />
            <path d={`M ${x} 260 L ${x} 360`} />
          </g>
        ))}
      </g>
      
      {/* Sprinkler heads - detailed technical symbols */}
      {[
        [80, 90], [140, 90], [200, 90], [260, 90], [320, 90], [380, 90], [440, 90],
        [80, 130], [140, 130], [200, 130], [260, 130], [320, 130], [380, 130], [440, 130],
        [80, 190], [140, 190], [200, 190], [260, 190], [320, 190], [380, 190], [440, 190],
        [80, 230], [140, 230], [200, 230], [260, 230], [320, 230], [380, 230], [440, 230],
        [80, 290], [140, 290], [200, 290], [260, 290], [320, 290], [380, 290], [440, 290],
        [80, 330], [140, 330], [200, 330], [260, 330], [320, 330], [380, 330], [440, 330],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <circle r="5" fill="currentColor" opacity="0.15" />
          <circle r="3" fill="currentColor" />
          <line x1="-6" y1="0" x2="-3" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="3" y1="0" x2="6" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="-6" x2="0" y2="-3" stroke="currentColor" strokeWidth="0.5" />
        </g>
      ))}
      
      {/* Flow direction arrows */}
      {[100, 200, 300, 400].map((x, i) => (
        <g key={i} transform={`translate(${x}, 60)`}>
          <polygon points="0,-4 6,0 0,4" fill="currentColor" opacity="0.4" />
        </g>
      ))}
      
      {/* Control valves */}
      {[60, 160, 260, 360].map((y, i) => (
        <g key={i} transform={`translate(30, ${y})`}>
          <circle r="6" fill="none" stroke="currentColor" strokeWidth="1" />
          <line x1="-4" y1="-4" x2="4" y2="4" stroke="currentColor" strokeWidth="0.8" />
          <line x1="-4" y1="4" x2="4" y2="-4" stroke="currentColor" strokeWidth="0.8" />
        </g>
      ))}
      
      {/* FDC connection */}
      <g transform="translate(470, 380)">
        <rect x="-10" y="-6" width="20" height="12" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="-4" cy="0" r="2" fill="currentColor" />
        <circle cx="4" cy="0" r="2" fill="currentColor" />
      </g>
      
      {/* Pipe hangers */}
      {[120, 180, 240, 300, 360, 420].map((x, i) => (
        <g key={i} transform={`translate(${x}, 50)`}>
          <path d="M -3 -8 L -3 0 L 3 0 L 3 -8" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </g>
      ))}
      
      {/* Drain points */}
      <g transform="translate(250, 380)">
        <line x1="0" y1="0" x2="0" y2="15" stroke="currentColor" strokeWidth="1" />
        <circle cx="0" cy="18" r="3" fill="none" stroke="currentColor" strokeWidth="0.8" />
      </g>
    </svg>
  )
}

// Intricate HVAC Drawing - detailed ductwork
export function HVACDrawing() {
  return (
    <svg viewBox="0 0 500 400" className="w-full h-full" fill="none">
      {/* Main supply duct with double line */}
      <g stroke="currentColor">
        <path d="M 20 70 L 480 70" strokeWidth="4" opacity="0.15" />
        <path d="M 20 70 L 480 70" strokeWidth="2" />
        <path d="M 20 82 L 480 82" strokeWidth="0.5" opacity="0.5" />
      </g>
      
      {/* Main return duct with hatching */}
      <g stroke="currentColor">
        <path d="M 20 320 L 480 320" strokeWidth="4" opacity="0.15" />
        <path d="M 20 320 L 480 320" strokeWidth="2" strokeDasharray="12,3" />
        <path d="M 20 332 L 480 332" strokeWidth="0.5" opacity="0.5" strokeDasharray="12,3" />
      </g>
      
      {/* Branch ducts with transitions */}
      {[100, 200, 300, 400].map((x, i) => (
        <g key={i} stroke="currentColor">
          <path d={`M ${x} 70 L ${x} 90 Q ${x} 100 ${x} 110 L ${x} 280`} strokeWidth="1.5" />
          <path d={`M ${x-8} 90 L ${x+8} 90`} strokeWidth="0.5" />
          {/* Turning vanes */}
          <path d={`M ${x-4} 78 Q ${x-4} 86 ${x} 86`} strokeWidth="0.3" opacity="0.5" />
          <path d={`M ${x+4} 78 Q ${x+4} 86 ${x} 86`} strokeWidth="0.3" opacity="0.5" />
        </g>
      ))}
      
      {/* Return branches */}
      {[150, 250, 350, 450].map((x, i) => (
        <g key={i} stroke="currentColor">
          <path d={`M ${x} 320 L ${x} 290`} strokeWidth="1.2" strokeDasharray="6,2" />
        </g>
      ))}
      
      {/* Supply diffusers - detailed */}
      {[100, 200, 300, 400].map((x, i) => (
        <g key={i} transform={`translate(${x}, 280)`}>
          <rect x="-18" y="-8" width="36" height="16" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="0.8" />
          {[-12, -6, 0, 6, 12].map((lx, j) => (
            <line key={j} x1={lx} y1="-5" x2={lx} y2="5" stroke="currentColor" strokeWidth="0.4" />
          ))}
          <line x1="-14" y1="0" x2="14" y2="0" stroke="currentColor" strokeWidth="0.5" />
        </g>
      ))}
      
      {/* Return grilles - detailed */}
      {[150, 250, 350, 450].map((x, i) => (
        <g key={i} transform={`translate(${x}, 290)`}>
          <rect x="-16" y="-12" width="32" height="24" fill="none" stroke="currentColor" strokeWidth="0.8" />
          {[-8, -4, 0, 4, 8].map((ly, j) => (
            <line key={j} x1="-12" y1={ly} x2="12" y2={ly} stroke="currentColor" strokeWidth="0.3" />
          ))}
        </g>
      ))}
      
      {/* VAV boxes with detail */}
      {[100, 200, 300, 400].map((x, i) => (
        <g key={i} transform={`translate(${x}, 150)`}>
          <rect x="-14" y="-10" width="28" height="20" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="-6" cy="0" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="6" cy="0" r="2" fill="currentColor" opacity="0.4" />
          <line x1="-14" y1="-5" x2="14" y2="-5" stroke="currentColor" strokeWidth="0.3" />
        </g>
      ))}
      
      {/* AHU */}
      <g transform="translate(20, 70)">
        <rect x="-15" y="-35" width="30" height="70" fill="currentColor" opacity="0.06" stroke="currentColor" strokeWidth="1.2" />
        <line x1="-15" y1="-15" x2="15" y2="-15" stroke="currentColor" strokeWidth="0.5" />
        <line x1="-15" y1="0" x2="15" y2="0" stroke="currentColor" strokeWidth="0.5" />
        <line x1="-15" y1="15" x2="15" y2="15" stroke="currentColor" strokeWidth="0.5" />
        {/* Fan symbol */}
        <circle cx="0" cy="-25" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M 0 -30 Q 5 -25 0 -20 Q -5 -25 0 -30" fill="currentColor" opacity="0.3" />
      </g>
      
      {/* Duct accessories - fire dampers */}
      {[100, 200, 300, 400].map((x, i) => (
        <g key={i} transform={`translate(${x}, 100)`}>
          <rect x="-8" y="-3" width="16" height="6" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <line x1="-6" y1="0" x2="6" y2="0" stroke="currentColor" strokeWidth="1" />
        </g>
      ))}
      
      {/* Flexible duct connections */}
      {[100, 200, 300, 400].map((x, i) => (
        <g key={i}>
          <path d={`M ${x-6} 260 Q ${x-4} 265 ${x-6} 270 Q ${x-4} 275 ${x-6} 280`} stroke="currentColor" strokeWidth="0.4" />
          <path d={`M ${x+6} 260 Q ${x+4} 265 ${x+6} 270 Q ${x+4} 275 ${x+6} 280`} stroke="currentColor" strokeWidth="0.4" />
        </g>
      ))}
    </svg>
  )
}

// Intricate Electrical Drawing
export function ElectricalDrawing() {
  return (
    <svg viewBox="0 0 500 400" className="w-full h-full" fill="none">
      {/* Main distribution panel */}
      <g transform="translate(40, 60)">
        <rect x="-25" y="-40" width="50" height="80" fill="currentColor" opacity="0.06" stroke="currentColor" strokeWidth="1.2" />
        <line x1="-25" y1="-20" x2="25" y2="-20" stroke="currentColor" strokeWidth="0.5" />
        {/* Breakers */}
        {[-10, 0, 10, 20, 30].map((y, i) => (
          <g key={i}>
            <rect x="-18" y={y-5} width="16" height="8" fill="none" stroke="currentColor" strokeWidth="0.4" />
            <rect x="2" y={y-5} width="16" height="8" fill="none" stroke="currentColor" strokeWidth="0.4" />
            <circle cx="-10" cy={y} r="1.5" fill="currentColor" opacity="0.4" />
            <circle cx="10" cy={y} r="1.5" fill="currentColor" opacity="0.4" />
          </g>
        ))}
      </g>
      
      {/* Main conduit runs */}
      <g stroke="currentColor" strokeWidth="1">
        <path d="M 65 60 L 200 60 L 200 100" />
        <path d="M 200 100 L 200 350" />
        <path d="M 200 100 L 450 100" />
        <path d="M 200 200 L 450 200" />
        <path d="M 200 300 L 450 300" />
      </g>
      
      {/* Junction boxes */}
      {[[200, 100], [200, 200], [200, 300], [320, 100], [320, 200], [320, 300], [440, 100], [440, 200], [440, 300]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <rect x="-6" y="-6" width="12" height="12" fill="currentColor" opacity="0.06" stroke="currentColor" strokeWidth="0.6" />
        </g>
      ))}
      
      {/* Lighting circuits */}
      <g stroke="currentColor" strokeWidth="0.6">
        {[130, 200, 270, 340, 410].map((x, i) => (
          <g key={i}>
            <path d={`M 200 100 L ${x} 100 L ${x} 150`} strokeDasharray="4,2" />
            <path d={`M 200 200 L ${x} 200 L ${x} 250`} strokeDasharray="4,2" />
          </g>
        ))}
      </g>
      
      {/* 2x4 Troffer lights */}
      {[
        [130, 150], [200, 150], [270, 150], [340, 150], [410, 150],
        [130, 250], [200, 250], [270, 250], [340, 250], [410, 250]
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <rect x="-24" y="-8" width="48" height="16" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="0.6" />
          <line x1="-20" y1="0" x2="20" y2="0" stroke="currentColor" strokeWidth="0.4" />
          <line x1="-20" y1="-4" x2="20" y2="-4" stroke="currentColor" strokeWidth="0.2" opacity="0.5" />
          <line x1="-20" y1="4" x2="20" y2="4" stroke="currentColor" strokeWidth="0.2" opacity="0.5" />
        </g>
      ))}
      
      {/* Receptacles */}
      {[
        [100, 350], [170, 350], [240, 350], [310, 350], [380, 350], [450, 350]
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <circle r="7" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <line x1="-3" y1="-2" x2="-3" y2="2" stroke="currentColor" strokeWidth="1.5" />
          <line x1="3" y1="-2" x2="3" y2="2" stroke="currentColor" strokeWidth="1.5" />
        </g>
      ))}
      
      {/* Home runs to receptacles */}
      <g stroke="currentColor" strokeWidth="0.5">
        <path d="M 200 300 L 100 300 L 100 350" />
        <path d="M 200 300 L 170 300 L 170 350" />
        <path d="M 200 300 L 240 300 L 240 350" />
        <path d="M 200 300 L 310 300 L 310 350" />
        <path d="M 320 300 L 380 300 L 380 350" />
        <path d="M 440 300 L 450 300 L 450 350" />
      </g>
      
      {/* Exit signs */}
      {[[80, 180], [280, 180], [450, 180]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <rect x="-10" y="-5" width="20" height="10" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <line x1="-6" y1="0" x2="6" y2="0" stroke="currentColor" strokeWidth="0.4" />
          <polygon points="0,-3 3,0 0,3" fill="currentColor" opacity="0.4" transform="translate(4,0)" />
        </g>
      ))}
      
      {/* Emergency lights */}
      {[[150, 180], [360, 180]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <rect x="-12" y="-4" width="24" height="8" fill="currentColor" opacity="0.06" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="-6" cy="0" r="2" fill="none" stroke="currentColor" strokeWidth="0.4" />
          <circle cx="6" cy="0" r="2" fill="none" stroke="currentColor" strokeWidth="0.4" />
        </g>
      ))}
      
      {/* Wire tick marks */}
      {[250, 300, 350, 400].map((x, i) => (
        <g key={i} transform={`translate(${x}, 100)`}>
          <line x1="0" y1="-3" x2="3" y2="-6" stroke="currentColor" strokeWidth="0.4" />
          <line x1="0" y1="-3" x2="-3" y2="-6" stroke="currentColor" strokeWidth="0.4" />
        </g>
      ))}
    </svg>
  )
}

// Intricate Plumbing Drawing
export function PlumbingDrawing() {
  return (
    <svg viewBox="0 0 500 400" className="w-full h-full" fill="none">
      {/* Cold water main */}
      <g stroke="currentColor" strokeWidth="2">
        <path d="M 30 30 L 30 370" />
        <path d="M 30 80 L 220 80" />
        <path d="M 30 200 L 220 200" />
        <path d="M 30 320 L 220 320" />
      </g>
      
      {/* Hot water lines - dashed */}
      <g stroke="currentColor" strokeWidth="1.5" strokeDasharray="8,3">
        <path d="M 60 30 L 60 370" />
        <path d="M 60 100 L 200 100" />
        <path d="M 60 220 L 200 220" />
        <path d="M 60 340 L 200 340" />
      </g>
      
      {/* Waste/Drain - thick with direction */}
      <g stroke="currentColor" strokeWidth="3" opacity="0.6">
        <path d="M 420 30 L 420 370" />
        <path d="M 250 140 L 420 140" />
        <path d="M 250 260 L 420 260" />
        <path d="M 250 360 L 420 360" />
      </g>
      
      {/* Vent lines - thin dashed */}
      <g stroke="currentColor" strokeWidth="1" strokeDasharray="3,2">
        <path d="M 460 30 L 460 370" />
        <path d="M 350 140 L 460 140" />
        <path d="M 350 260 L 460 260" />
      </g>
      
      {/* Detailed water closets */}
      {[[250, 140], [250, 260]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <ellipse cx="0" cy="0" rx="22" ry="14" fill="currentColor" opacity="0.04" stroke="currentColor" strokeWidth="0.8" />
          <ellipse cx="0" cy="-5" rx="12" ry="7" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="0" cy="0" rx="6" ry="4" fill="currentColor" opacity="0.1" />
          {/* Tank */}
          <rect x="-14" y="8" width="28" height="10" fill="currentColor" opacity="0.04" stroke="currentColor" strokeWidth="0.5" />
          {/* Supply line */}
          <line x1="-30" y1="0" x2="-22" y2="0" stroke="currentColor" strokeWidth="0.6" />
        </g>
      ))}
      
      {/* Detailed lavatories */}
      {[[200, 100], [200, 220], [200, 340]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <ellipse cx="0" cy="0" rx="16" ry="12" fill="currentColor" opacity="0.04" stroke="currentColor" strokeWidth="0.8" />
          <ellipse cx="0" cy="0" rx="8" ry="6" fill="none" stroke="currentColor" strokeWidth="0.4" />
          <circle cx="0" cy="0" r="2" fill="currentColor" />
          {/* Faucet */}
          <rect x="-3" y="-15" width="6" height="5" fill="none" stroke="currentColor" strokeWidth="0.4" />
          {/* P-trap */}
          <path d="M 0 12 L 0 22 Q 0 28 6 28 L 16 28 Q 22 28 22 22 L 22 15" stroke="currentColor" strokeWidth="0.6" fill="none" />
        </g>
      ))}
      
      {/* Floor drains */}
      {[[350, 140], [350, 260], [350, 360]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <rect x="-10" y="-10" width="20" height="20" fill="currentColor" opacity="0.04" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="0" cy="0" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="3" fill="currentColor" opacity="0.2" />
          {/* Grate pattern */}
          <line x1="-4" y1="-4" x2="4" y2="4" stroke="currentColor" strokeWidth="0.3" />
          <line x1="4" y1="-4" x2="-4" y2="4" stroke="currentColor" strokeWidth="0.3" />
        </g>
      ))}
      
      {/* Cleanouts */}
      {[[420, 50], [420, 370]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <circle r="8" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <line x1="-4" y1="0" x2="4" y2="0" stroke="currentColor" strokeWidth="0.6" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="currentColor" strokeWidth="0.6" />
        </g>
      ))}
      
      {/* Shut-off valves */}
      {[[30, 80], [30, 200], [30, 320], [60, 100], [60, 220], [60, 340]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <circle r="4" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <line x1="-2" y1="-2" x2="2" y2="2" stroke="currentColor" strokeWidth="0.5" />
        </g>
      ))}
      
      {/* Water meter */}
      <g transform="translate(30, 50)">
        <rect x="-8" y="-12" width="16" height="24" fill="currentColor" opacity="0.04" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="0" cy="-4" r="4" fill="none" stroke="currentColor" strokeWidth="0.4" />
        <line x1="0" y1="-4" x2="2" y2="-6" stroke="currentColor" strokeWidth="0.4" />
      </g>
      
      {/* Backflow preventer */}
      <g transform="translate(45, 80)">
        <rect x="-10" y="-5" width="20" height="10" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <polygon points="-4,0 0,-3 0,3" fill="currentColor" opacity="0.3" />
        <polygon points="4,0 0,-3 0,3" fill="currentColor" opacity="0.3" transform="rotate(180)" />
      </g>
      
      {/* Slope indicators on drains */}
      {[300, 380].map((x, i) => (
        <g key={i} transform={`translate(${x}, 140)`}>
          <line x1="0" y1="8" x2="20" y2="12" stroke="currentColor" strokeWidth="0.4" />
          <polygon points="20,12 16,10 16,14" fill="currentColor" opacity="0.4" />
        </g>
      ))}
    </svg>
  )
}

// Structural grid - drafting paper style with visible lines
export function StructuralGrid() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" fill="none">
      {/* Fine grid pattern - more visible drafting paper style */}
      <defs>
        <pattern id="fineGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.08" />
        </pattern>
        <pattern id="majorGrid" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#fineGrid)" />
      <rect width="800" height="600" fill="url(#majorGrid)" />
      
      {/* Grid reference lines - more visible */}
      {['A', 'B', 'C', 'D', 'E'].map((label, i) => (
        <g key={`col-${label}`}>
          <line x1={100 + i * 150} y1="30" x2={100 + i * 150} y2="570" stroke="currentColor" strokeWidth="0.4" strokeDasharray="8,4" opacity="0.15" />
        </g>
      ))}
      
      {['1', '2', '3'].map((label, i) => (
        <g key={`row-${label}`}>
          <line x1="30" y1={100 + i * 200} x2="770" y2={100 + i * 200} stroke="currentColor" strokeWidth="0.4" strokeDasharray="8,4" opacity="0.15" />
        </g>
      ))}
    </svg>
  )
}

// Minimal title block
export function TitleBlock() {
  return (
    <svg viewBox="0 0 260 100" className="w-full h-full" fill="none">
      <rect x="0" y="0" width="260" height="100" fill="currentColor" opacity="0.02" stroke="currentColor" strokeWidth="0.8" />
      
      <line x1="0" y1="32" x2="260" y2="32" stroke="currentColor" strokeWidth="0.4" />
      <line x1="0" y1="64" x2="260" y2="64" stroke="currentColor" strokeWidth="0.4" />
      <line x1="170" y1="64" x2="170" y2="100" stroke="currentColor" strokeWidth="0.4" />
      
      <text x="130" y="20" textAnchor="middle" fontSize="14" fontWeight="600" fill="currentColor" fontFamily="system-ui">MEPOLOGY</text>
      
      <text x="10" y="48" fontSize="7" fill="currentColor" opacity="0.5" fontFamily="monospace">PROJECT</text>
      <text x="10" y="58" fontSize="9" fill="currentColor" fontFamily="system-ui">COORDINATION SAMPLE</text>
      
      <text x="10" y="78" fontSize="7" fill="currentColor" opacity="0.5" fontFamily="monospace">DATE</text>
      <text x="10" y="90" fontSize="8" fill="currentColor" fontFamily="monospace">05.10.2026</text>
      
      <text x="215" y="78" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.5" fontFamily="monospace">SHEET</text>
      <text x="215" y="94" textAnchor="middle" fontSize="16" fontWeight="600" fill="currentColor" fontFamily="monospace">M-101</text>
    </svg>
  )
}
