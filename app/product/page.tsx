import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Product | Mepology",
  description: "Discover Mepology's MEP/FP coordination platform. Four disciplines unified into one clash-free coordination package.",
}

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar variant="dark" />
      
      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-6">
            Product
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
            The coordination platform
            <br />
            <span className="text-neutral-500">for modern construction.</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Mepology unifies Fire Protection, HVAC, Electrical, and Plumbing coordination 
            into a single, intelligent workflow that eliminates clashes before they become problems.
          </p>
          <Button 
            size="lg" 
            className="h-14 px-10 bg-white hover:bg-neutral-100 text-black rounded-none font-medium"
            asChild
          >
            <Link href="/contact">
              Request a Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
              Built for precision
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Unified Model Integration",
                description: "Import and synchronize models from Revit, AutoCAD, and other BIM platforms into a single coordination environment.",
              },
              {
                title: "Automated Clash Detection",
                description: "Advanced algorithms identify conflicts between systems with sub-inch precision, prioritized by severity and trade impact.",
              },
              {
                title: "Route Optimization",
                description: "Intelligent routing suggestions that minimize material usage, reduce installation time, and maintain code compliance.",
              },
              {
                title: "Real-time Collaboration",
                description: "Share coordination models and track changes across your team with version control and audit trails.",
              },
              {
                title: "Shop-Ready Output",
                description: "Generate fabrication-ready drawings and schedules directly from your coordinated model.",
              },
              {
                title: "Quality Assurance",
                description: "Built-in validation checks ensure coordination completeness before final delivery.",
              },
            ].map((feature, i) => (
              <div key={i} className="group">
                <div className="w-10 h-10 rounded-none border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-neutral-600 transition-colors">
                  <Check className="w-4 h-4 text-neutral-500" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-4">
              Four Disciplines
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
              One coordinated solution
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { abbr: "FP", name: "Fire Protection", desc: "Sprinkler systems, standpipes, and fire suppression coordination" },
              { abbr: "H", name: "HVAC", desc: "Ductwork, piping, and equipment placement optimization" },
              { abbr: "E", name: "Electrical", desc: "Conduit routing, panel placement, and cable tray coordination" },
              { abbr: "P", name: "Plumbing", desc: "Domestic water, waste, and vent system integration" },
            ].map((discipline) => (
              <div key={discipline.abbr} className="p-8 border border-neutral-900 hover:border-neutral-800 transition-colors">
                <div className="text-3xl font-light text-neutral-600 mb-4">{discipline.abbr}</div>
                <h3 className="text-lg font-medium text-white mb-2">{discipline.name}</h3>
                <p className="text-sm text-neutral-500">{discipline.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white mb-6">
            Ready to see it in action?
          </h2>
          <p className="text-neutral-500 mb-10">
            Schedule a demo to see how Mepology can transform your coordination workflow.
          </p>
          <Button 
            size="lg" 
            className="h-14 px-10 bg-white hover:bg-neutral-100 text-black rounded-none font-medium"
            asChild
          >
            <Link href="/contact">
              Schedule Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
