import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing | Mepology",
  description: "Transparent pricing for MEP/FP coordination services. Project-based pricing that scales with your needs.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar variant="dark" />
      
      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-6">
            Pricing
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
            Transparent pricing.
            <br />
            <span className="text-neutral-500">No surprises.</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Project-based pricing that scales with complexity. Every quote includes 
            full scope definition and fixed deliverables.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                tier: "Standard",
                description: "For straightforward coordination needs",
                price: "Custom",
                unit: "per project",
                features: [
                  "Full MEP/FP coordination",
                  "Clash detection & resolution",
                  "2D coordinated drawings",
                  "Weekly progress updates",
                  "Email support",
                ],
                cta: "Get Quote",
                featured: false,
              },
              {
                tier: "Professional",
                description: "For complex, multi-phase projects",
                price: "Custom",
                unit: "per project",
                features: [
                  "Everything in Standard",
                  "3D coordination models",
                  "Route optimization",
                  "Shop drawing support",
                  "Dedicated project manager",
                  "Priority support",
                ],
                cta: "Get Quote",
                featured: true,
              },
              {
                tier: "Enterprise",
                description: "For organizations with ongoing needs",
                price: "Custom",
                unit: "annual agreement",
                features: [
                  "Everything in Professional",
                  "Volume pricing",
                  "Dedicated team",
                  "Custom workflows",
                  "Training & onboarding",
                  "24/7 support",
                ],
                cta: "Contact Sales",
                featured: false,
              },
            ].map((plan) => (
              <div 
                key={plan.tier} 
                className={`p-10 border ${plan.featured ? "border-white" : "border-neutral-900"} relative`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-10 px-3 py-1 bg-white text-black text-xs font-medium tracking-wide">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-medium text-white mb-2">{plan.tier}</h3>
                  <p className="text-sm text-neutral-500">{plan.description}</p>
                </div>
                <div className="mb-8">
                  <div className="text-3xl font-medium text-white">{plan.price}</div>
                  <div className="text-sm text-neutral-600">{plan.unit}</div>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-neutral-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-neutral-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full h-12 rounded-none font-medium ${
                    plan.featured 
                      ? "bg-white hover:bg-neutral-100 text-black" 
                      : "bg-transparent border border-neutral-800 text-white hover:bg-neutral-900"
                  }`}
                  asChild
                >
                  <Link href="/contact">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-4">
              FAQ
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-white">
              Common questions
            </h2>
          </div>
          
          <div className="space-y-8">
            {[
              {
                q: "How is pricing determined?",
                a: "Pricing is based on project complexity, square footage, number of systems, and timeline requirements. We provide detailed quotes after reviewing your project documents."
              },
              {
                q: "What's included in the coordination package?",
                a: "Every project includes clash detection, resolution, and coordinated drawing production. Specific deliverables are defined in your project scope document."
              },
              {
                q: "How long does a typical project take?",
                a: "Timeline varies by project size: 2-3 weeks for small projects (<50,000 SF), 4-6 weeks for medium (50,000-200,000 SF), and 6-10 weeks for large projects (>200,000 SF)."
              },
              {
                q: "Do you offer revisions?",
                a: "Yes. All projects include revision cycles as defined in the project scope. Additional revisions beyond the scope are billed at hourly rates."
              },
              {
                q: "What file formats do you accept?",
                a: "We work with Revit (.rvt), AutoCAD (.dwg), Navisworks (.nwd/.nwc), IFC, and PDF formats. We can accommodate most BIM and CAD platforms."
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-neutral-900 pb-8">
                <h3 className="text-lg font-medium text-white mb-3">{item.q}</h3>
                <p className="text-neutral-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white mb-6">
            Ready to get a quote?
          </h2>
          <p className="text-neutral-500 mb-10">
            Send us your project documents and receive a detailed proposal within 24 hours.
          </p>
          <Button 
            size="lg" 
            className="h-14 px-10 bg-white hover:bg-neutral-100 text-black rounded-none font-medium"
            asChild
          >
            <Link href="/contact">
              Request Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
