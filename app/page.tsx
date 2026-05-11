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

      {/* CTA Section - BLACK */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
            Ready to coordinate?
          </h2>
          <p className="text-neutral-500 mb-12 max-w-xl mx-auto text-lg">
            Send us your drawings and we&apos;ll provide a scope and timeline within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="h-14 px-10 bg-white hover:bg-neutral-100 text-black rounded-full font-medium text-base" 
              asChild
            >
              <Link href="https://mepology.com">
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-10 rounded-full border-neutral-700 bg-transparent text-white hover:bg-white/10 hover:text-white font-medium text-base" 
              asChild
            >
              <Link href="https://mepology.com">
                View Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Sophisticated */}
      <footer className="bg-neutral-950 text-white border-t border-neutral-900">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <Image 
                  src="/logo.png" 
                  alt="Mepology" 
                  width={36} 
                  height={36} 
                  className="w-9 h-9"
                />
                <span className="text-xl font-medium tracking-tight">Mepology</span>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mb-8">
                Precision MEP/FP coordination for complex buildings. 
                Unifying Fire Protection, HVAC, Electrical, and Plumbing 
                into clash-free coordination packages.
              </p>
              <div className="flex items-center gap-4">
                <Link 
                  href="https://linkedin.com" 
                  className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-600 hover:bg-neutral-900 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link 
                  href="mailto:info@mepology.com" 
                  className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-600 hover:bg-neutral-900 transition-all"
                  aria-label="Email"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">Platform</h4>
              <ul className="space-y-4">
                <li><Link href="#coordination" className="text-sm text-neutral-400 hover:text-white transition-colors">Product</Link></li>
                <li><Link href="#process" className="text-sm text-neutral-400 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link href="#services" className="text-sm text-neutral-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="https://mepology.com" className="text-sm text-neutral-400 hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">Company</h4>
              <ul className="space-y-4">
                <li><Link href="https://mepology.com" className="text-sm text-neutral-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="https://mepology.com" className="text-sm text-neutral-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="https://mepology.com" className="text-sm text-neutral-400 hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="https://mepology.com" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">Resources</h4>
              <ul className="space-y-4">
                <li><Link href="https://mepology.com" className="text-sm text-neutral-400 hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="https://mepology.com" className="text-sm text-neutral-400 hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="https://mepology.com" className="text-sm text-neutral-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="https://mepology.com" className="text-sm text-neutral-400 hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">Connect</h4>
              <ul className="space-y-4">
                <li><Link href="https://app.mepology.com/login" className="text-sm text-neutral-400 hover:text-white transition-colors">Log In</Link></li>
                <li><Link href="https://mepology.com" className="text-sm text-neutral-400 hover:text-white transition-colors">Request Access</Link></li>
                <li><Link href="https://mepology.com" className="text-sm text-neutral-400 hover:text-white transition-colors">Schedule Demo</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-600">
                <span>&copy; {new Date().getFullYear()} Mepology Inc. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-6">
                <Link href="https://mepology.com/privacy" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="https://mepology.com/terms" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="https://mepology.com/cookies" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
