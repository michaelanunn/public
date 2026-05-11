import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How It Works | Mepology",
  description: "Learn how Mepology's coordination process works. From receiving drawings to delivering clash-free coordination packages.",
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar variant="dark" />
      
      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-6">
            Process
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
            A systematic approach
            <br />
            <span className="text-neutral-500">to coordination.</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Our proven workflow ensures every project moves from design drawings 
            to buildable coordination packages with precision and predictability.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-5xl mx-auto">
          {[
            {
              step: "01",
              title: "Receive",
              subtitle: "Document Collection",
              description: "We collect your design drawings and models from all trades. This includes architectural backgrounds, structural grids, and MEP/FP design drawings in their native formats.",
              details: [
                "Revit models, AutoCAD drawings, PDFs",
                "Architectural and structural backgrounds",
                "Existing conditions documentation",
                "Project specifications and standards",
              ]
            },
            {
              step: "02",
              title: "Integrate",
              subtitle: "Model Assembly",
              description: "All four disciplines are combined into a unified coordination model. We establish the spatial framework and verify system alignments against the architectural intent.",
              details: [
                "3D model integration and georeferencing",
                "System verification against design documents",
                "Spatial conflict identification",
                "Preliminary routing analysis",
              ]
            },
            {
              step: "03",
              title: "Coordinate",
              subtitle: "Clash Resolution",
              description: "Systematic clash detection identifies every conflict between systems. Our team resolves each clash with solutions that maintain system performance and code compliance.",
              details: [
                "Comprehensive clash detection reporting",
                "Trade-by-trade conflict resolution",
                "Route optimization for efficiency",
                "Regular coordination review meetings",
              ]
            },
            {
              step: "04",
              title: "Deliver",
              subtitle: "Final Package",
              description: "Publication-ready coordination drawings and shop-ready outputs are delivered to your team. Complete with clash reports, routing documentation, and quality certifications.",
              details: [
                "Coordinated 2D drawing sets",
                "3D coordination models",
                "Fabrication-ready outputs",
                "Clash resolution documentation",
              ]
            },
          ].map((item, i) => (
            <div key={item.step} className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-24 last:mb-0">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-7xl font-light text-neutral-900 mb-6">{item.step}</div>
                <h2 className="text-3xl font-medium text-white mb-2">{item.title}</h2>
                <p className="text-sm text-neutral-500 tracking-wide uppercase mb-6">{item.subtitle}</p>
                <p className="text-neutral-400 leading-relaxed mb-8">{item.description}</p>
              </div>
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""} flex items-center`}>
                <div className="w-full border border-neutral-900 p-8">
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-600 mb-6">Deliverables</p>
                  <ul className="space-y-4">
                    {item.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-neutral-600 mt-2 shrink-0" />
                        <span className="text-neutral-400 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-4">
            Timeline
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-12">
            Typical project duration
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { size: "Small", sqft: "< 50,000 SF", time: "2-3 weeks" },
              { size: "Medium", sqft: "50,000 - 200,000 SF", time: "4-6 weeks" },
              { size: "Large", sqft: "> 200,000 SF", time: "6-10 weeks" },
            ].map((tier) => (
              <div key={tier.size} className="p-8 border border-neutral-900">
                <div className="text-lg font-medium text-white mb-1">{tier.size}</div>
                <div className="text-sm text-neutral-500 mb-4">{tier.sqft}</div>
                <div className="text-2xl font-medium text-white">{tier.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white mb-6">
            Ready to start your project?
          </h2>
          <p className="text-neutral-500 mb-10">
            Send us your drawings and receive a detailed scope within 24 hours.
          </p>
          <Button 
            size="lg" 
            className="h-14 px-10 bg-white hover:bg-neutral-100 text-black rounded-none font-medium"
            asChild
          >
            <Link href="/contact">
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
