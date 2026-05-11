import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Mepology",
  description: "Learn about Mepology's mission to transform MEP/FP coordination for the construction industry.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar variant="dark" />
      
      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-6">
            About
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
            Coordination is not about
            <br />
            <span className="text-neutral-500">finding problems.</span>
          </h1>
          <p className="text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            It&apos;s about preventing them.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-6">
                Our Mission
              </p>
              <h2 className="text-3xl font-medium tracking-tight text-white mb-8">
                Building better buildings through precision coordination.
              </h2>
            </div>
            <div>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Mepology was founded on a simple observation: the construction industry 
                loses billions of dollars each year to coordination failures that should 
                have been caught before ground was broken.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                We bring together Fire Protection, HVAC, Electrical, and Plumbing into 
                unified coordination packages that contractors can actually build from. 
                No surprises, no field conflicts, no costly rework.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Our team combines deep construction industry experience with modern 
                technology to deliver coordination that meets the highest standards 
                of precision and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-4">
              Values
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-white">
              What we believe
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Precision Over Speed",
                description: "We never sacrifice accuracy for timeline. Every clash resolved, every route optimized, every detail verified.",
              },
              {
                title: "Transparency Always",
                description: "Clear communication, honest timelines, and complete visibility into our coordination process.",
              },
              {
                title: "Buildable Results",
                description: "Our deliverables aren't just drawings—they're instructions that contractors can execute with confidence.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="text-xl font-medium text-white mb-4">{value.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "15M+", label: "Square Feet Coordinated" },
              { value: "98%", label: "Clash Resolution Rate" },
              { value: "24hr", label: "Average Response Time" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-medium text-white mb-2">{stat.value}</div>
                <div className="text-sm text-neutral-500 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <Image 
            src="/logo.png" 
            alt="Mepology" 
            width={120} 
            height={120} 
            className="w-24 h-24 mx-auto mb-8 opacity-30"
          />
          <p className="text-sm text-neutral-600 tracking-wide uppercase">
            MEP/FP Coordination Platform
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white mb-6">
            Ready to work with us?
          </h2>
          <p className="text-neutral-500 mb-10">
            Get in touch to discuss your coordination needs.
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
