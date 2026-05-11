"use client"

import { CoordinationAnimation } from "@/components/mep/coordination-animation"
import { BuildingScene } from "@/components/mep/building-scene"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Mepology" 
            width={32} 
            height={32} 
            className="w-8 h-8"
          />
          <span className="text-lg font-medium tracking-tight text-white">
            Mepology
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link href="#coordination" className="text-sm text-neutral-400 hover:text-white transition-colors">
            Product
          </Link>
          <Link href="#process" className="text-sm text-neutral-400 hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#services" className="text-sm text-neutral-400 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="https://mepology.com" className="text-sm text-neutral-400 hover:text-white transition-colors">
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="https://app.mepology.com/login" 
            className="hidden sm:block text-sm text-neutral-400 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Button 
            size="sm" 
            className="bg-white hover:bg-neutral-100 text-black rounded-full px-5 h-9 text-sm font-medium"
            asChild
          >
            <Link href="https://mepology.com">
              Request Access
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen antialiased bg-black"> {/* Set background to black to prevent white flashes */}
      <Navbar />
{/* Hero Section - Added overflow-hidden and relative */}
<section className="relative min-h-screen flex flex-col justify-center pt-16 px-6 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto w-full z-10"> {/* Ensure content stays above anything else */}
          <div className="max-w-4xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-8">
              MEP/FP Coordination Platform
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.06] text-balance mb-8">
              Precision coordination
              <br />
              <span className="text-neutral-500">for complex buildings.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-12">
              We unify Fire Protection, HVAC, Electrical, and Plumbing into a single, 
              clash-free coordination package. Built for contractors who refuse to compromise.
            </p>
            <div className="flex items-center gap-4">
              <Button 
                size="lg" 
                className="h-12 px-8 bg-white hover:bg-neutral-100 text-black rounded-full font-medium" 
                asChild
              >
                <Link href="https://mepology.com">
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              {/* ... Rest of your hero buttons */}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator - absolute positioned relative to the hero only */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-border to-transparent" />
        </div>
      </section>

{/* Coordination Animation Section */}
<section id="coordination" className="relative bg-white z-0 overflow-hidden">
  <CoordinationAnimation />
</section>

      {/* Services Section - BLACK */}
      <section id="services" className="py-32 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
              What we deliver
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                number: "01",
                title: "Clash Detection",
                description: "We identify and resolve conflicts between mechanical, electrical, and plumbing systems before they become costly field issues."
              },
              {
                number: "02",
                title: "System Optimization",
                description: "Routing optimization that reduces material costs, improves maintainability, and creates cleaner ceiling spaces."
              },
              {
                number: "03",
                title: "Buildable Drawings",
                description: "Coordination drawings that contractors can actually build from. Clear, accurate, and ready for fabrication."
              }
            ].map((service) => (
              <div key={service.number} className="group">
                <div className="text-xs font-mono text-neutral-600 mb-4">
                  {service.number}
                </div>
                <h3 className="text-xl font-medium mb-4 group-hover:text-neutral-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Building Animation Section - WHITE */}
      <section className="bg-white">
        <div className="py-24 px-6 text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400 mb-4">
            Visualization
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900">
            From drawing to reality
          </h2>
        </div>
        <BuildingScene />
      </section>

      {/* Enterprise Section - BLACK */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-6">
                Enterprise Ready
              </p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
                Built for scale.
                <br />
                <span className="text-neutral-500">Trusted by leaders.</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-8">
                From mid-rise office buildings to complex healthcare facilities, 
                our coordination platform handles projects of any scale with 
                the precision your team demands.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "500+", label: "Projects Delivered" },
                  { value: "15M+", label: "SF Coordinated" },
                  { value: "98%", label: "Clash Resolution" },
                  { value: "24hr", label: "Response Time" },
                ].map((stat) => (
                  <div key={stat.label} className="border-l border-neutral-800 pl-4">
                    <div className="text-2xl font-medium mb-1">{stat.value}</div>
                    <div className="text-xs text-neutral-500 tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square bg-neutral-900 rounded-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border border-neutral-800 rounded-sm flex items-center justify-center">
                  <div className="text-center">
                    <Image 
                      src="/logo.png" 
                      alt="Mepology" 
                      width={80} 
                      height={80} 
                      className="w-20 h-20 mx-auto mb-6 opacity-20"
                    />
                    <div className="text-xs tracking-[0.3em] uppercase text-neutral-600">
                      Enterprise Platform
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - WHITE */}
      <section id="process" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400 mb-4">
              Workflow
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900">
              How we work
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Receive", desc: "We collect your design drawings and models from all trades" },
              { step: "02", title: "Integrate", desc: "All four disciplines combined into a unified coordination model" },
              { step: "03", title: "Coordinate", desc: "Systematic clash detection, resolution, and route optimization" },
              { step: "04", title: "Deliver", desc: "Publication-ready coordination drawings and shop-ready outputs" },
            ].map((item, i) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-light text-neutral-100 mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-medium mb-2 text-neutral-900">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-12 h-px bg-neutral-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section - BLACK */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed tracking-tight text-balance">
            &ldquo;Coordination is not about finding problems.
            <br />
            <span className="text-neutral-500">It&apos;s about preventing them.&rdquo;</span>
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-10 h-px bg-neutral-700" />
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-600">
              The Mepology Philosophy
            </span>
            <div className="w-10 h-px bg-neutral-700" />
          </div>
        </div>
      </section>

      {/* Integrations Section - WHITE */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400 mb-4">
              Compatibility
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
              Works with your tools
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-40">
            {["Revit", "AutoCAD", "Navisworks", "BIM 360", "Bluebeam", "Procore"].map((tool) => (
              <div key={tool} className="text-lg md:text-xl font-medium text-neutral-400">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Harvey.ai Dark Enterprise Style */}
      <section className="relative py-40 px-6 bg-black text-white overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950/50" />
        
        {/* Minimal decorative lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-neutral-800 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-neutral-800" />
            <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-neutral-600">
              Get Started
            </span>
            <div className="h-px w-12 bg-neutral-800" />
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-center mb-6 leading-[1.1]">
            Ready to coordinate?
          </h2>
          
          {/* Subheading */}
          <p className="text-neutral-500 text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
            Send us your drawings and receive a detailed scope and timeline within 24 hours. 
            No commitment required.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="h-14 px-12 bg-white hover:bg-neutral-100 text-black rounded-none font-medium text-sm tracking-wide" 
              asChild
            >
              <Link href="https://mepology.com">
                Start a Project
                <ArrowRight className="w-4 h-4 ml-3" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-12 rounded-none border-neutral-800 bg-transparent text-white hover:bg-white/5 hover:border-neutral-700 hover:text-white font-medium text-sm tracking-wide" 
              asChild
            >
              <Link href="https://mepology.com">
                View Portfolio
              </Link>
            </Button>
          </div>
          
          {/* Trust indicator */}
          <div className="mt-20 pt-12 border-t border-neutral-900">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
              <div>
                <div className="text-2xl font-medium text-white mb-1">24hr</div>
                <div className="text-xs text-neutral-600 tracking-wide uppercase">Response Time</div>
              </div>
              <div className="hidden md:block w-px h-10 bg-neutral-800" />
              <div>
                <div className="text-2xl font-medium text-white mb-1">500+</div>
                <div className="text-xs text-neutral-600 tracking-wide uppercase">Projects Delivered</div>
              </div>
              <div className="hidden md:block w-px h-10 bg-neutral-800" />
              <div>
                <div className="text-2xl font-medium text-white mb-1">15M+ SF</div>
                <div className="text-xs text-neutral-600 tracking-wide uppercase">Coordinated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - BLACK (darker) */}
      <footer className="py-16 px-6 bg-neutral-950 text-white border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Mepology" 
                width={28} 
                height={28} 
                className="w-7 h-7"
              />
              <span className="font-medium">Mepology</span>
              <span className="text-sm text-neutral-600 ml-4">MEP/FP Coordination Platform</span>
            </div>
            <div className="flex items-center gap-8">
              <Link href="https://mepology.com" className="text-sm text-neutral-500 hover:text-white transition-colors">
                mepology.com
              </Link>
              <span className="text-sm text-neutral-600">
                &copy; {new Date().getFullYear()} Mepology
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
