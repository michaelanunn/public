import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Mepology",
  description: "Comprehensive MEP/FP coordination services including clash detection, system optimization, and buildable drawing production.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar variant="dark" />
      
      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-6">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
            Coordination services
            <br />
            <span className="text-neutral-500">built for precision.</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            From clash detection to fabrication-ready outputs, we provide the coordination 
            services that contractors need to build with confidence.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {[
              {
                number: "01",
                title: "MEP/FP Coordination",
                description: "Full coordination of Mechanical, Electrical, Plumbing, and Fire Protection systems. We identify and resolve every clash before it reaches the field.",
                features: [
                  "4-trade system integration",
                  "3D clash detection and resolution",
                  "Coordinated drawing production",
                  "Regular progress reporting",
                ]
              },
              {
                number: "02",
                title: "Clash Detection & Resolution",
                description: "Comprehensive clash analysis with prioritized resolution strategies. Every conflict is documented and resolved with trade-appropriate solutions.",
                features: [
                  "Hard and soft clash detection",
                  "Clearance and access verification",
                  "Resolution documentation",
                  "RFI preparation support",
                ]
              },
              {
                number: "03",
                title: "System Optimization",
                description: "Route optimization that reduces material costs, improves installation efficiency, and creates better-coordinated ceiling spaces.",
                features: [
                  "Routing efficiency analysis",
                  "Material quantity optimization",
                  "Installation sequence planning",
                  "Maintenance access verification",
                ]
              },
              {
                number: "04",
                title: "Shop Drawing Support",
                description: "Fabrication-ready outputs that bridge the gap between coordination and installation. Ready for your shop teams.",
                features: [
                  "Spool sheet generation",
                  "Hanger location plans",
                  "Sleeve and penetration schedules",
                  "Fabrication coordination",
                ]
              },
            ].map((service) => (
              <div key={service.number} className="p-10 border border-neutral-900 hover:border-neutral-800 transition-colors">
                <div className="text-xs font-mono text-neutral-600 mb-4">{service.number}</div>
                <h3 className="text-2xl font-medium text-white mb-4">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed mb-8">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-neutral-500">
                      <div className="w-1 h-1 rounded-full bg-neutral-700" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-4">
              Additional
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-white">
              Specialized services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "BIM Consultation", desc: "Expert guidance on BIM standards, workflows, and implementation strategies." },
              { title: "Model Auditing", desc: "Quality assurance reviews of coordination models before delivery." },
              { title: "Training", desc: "Team training on coordination best practices and software workflows." },
              { title: "As-Built Documentation", desc: "Post-construction documentation of installed conditions." },
              { title: "4D Scheduling", desc: "Time-based coordination sequences for complex installations." },
              { title: "Laser Scanning Integration", desc: "Existing conditions verification through point cloud data." },
            ].map((service) => (
              <div key={service.title} className="p-6 border border-neutral-900 hover:border-neutral-800 transition-colors">
                <h3 className="text-lg font-medium text-white mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white mb-6">
            Need a custom solution?
          </h2>
          <p className="text-neutral-500 mb-10">
            Contact us to discuss your specific coordination requirements.
          </p>
          <Button 
            size="lg" 
            className="h-14 px-10 bg-white hover:bg-neutral-100 text-black rounded-none font-medium"
            asChild
          >
            <Link href="/contact">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
