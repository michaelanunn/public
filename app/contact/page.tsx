import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Mail, MessageSquare, FileText, HelpCircle, Briefcase, Building } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Mepology",
  description: "Get in touch with Mepology for project inquiries, support, or partnership opportunities.",
}

const contactReasons = [
  {
    icon: FileText,
    title: "Start a New Project",
    description: "Ready to begin? Send us your drawings and receive a detailed scope within 24 hours.",
    email: "projects@mepology.com",
    cta: "Submit Project",
  },
  {
    icon: MessageSquare,
    title: "Request a Demo",
    description: "See our coordination platform in action with a personalized demonstration.",
    email: "demo@mepology.com",
    cta: "Schedule Demo",
  },
  {
    icon: HelpCircle,
    title: "Technical Support",
    description: "Need help with an existing project or have technical questions?",
    email: "support@mepology.com",
    cta: "Get Support",
  },
  {
    icon: Briefcase,
    title: "Partnerships",
    description: "Interested in partnering with Mepology? Let's explore opportunities.",
    email: "partners@mepology.com",
    cta: "Partner With Us",
  },
  {
    icon: Building,
    title: "Enterprise Inquiries",
    description: "For organizations with large-scale or ongoing coordination needs.",
    email: "enterprise@mepology.com",
    cta: "Contact Enterprise",
  },
  {
    icon: Mail,
    title: "General Inquiries",
    description: "For all other questions or information requests.",
    email: "contact@mepology.com",
    cta: "Send Message",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar variant="dark" />
      
      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-6">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
            Let&apos;s talk.
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re starting a new project or have questions about our services, 
            we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactReasons.map((reason) => (
              <div 
                key={reason.title} 
                className="p-8 border border-neutral-900 hover:border-neutral-800 transition-colors group"
              >
                <div className="w-12 h-12 rounded-none border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-neutral-700 transition-colors">
                  <reason.icon className="w-5 h-5 text-neutral-500" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-neutral-500 mb-6 leading-relaxed">{reason.description}</p>
                <div className="space-y-3">
                  <Link 
                    href={`mailto:${reason.email}`}
                    className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {reason.email}
                  </Link>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full rounded-none border-neutral-800 text-white hover:bg-neutral-900 hover:text-white"
                    asChild
                  >
                    <Link href={`mailto:${reason.email}`}>
                      {reason.cta}
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-6">
                Primary Contact
              </p>
              <h2 className="text-3xl font-medium tracking-tight text-white mb-6">
                Reach out directly
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-8">
                For the fastest response, email us directly. We typically respond 
                within 24 hours on business days.
              </p>
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-neutral-600 tracking-wide uppercase mb-2">Email</div>
                  <Link 
                    href="mailto:contact@mepology.com" 
                    className="text-lg text-white hover:text-neutral-300 transition-colors"
                  >
                    contact@mepology.com
                  </Link>
                </div>
                <div>
                  <div className="text-xs text-neutral-600 tracking-wide uppercase mb-2">Website</div>
                  <Link 
                    href="https://mepology.com" 
                    className="text-lg text-white hover:text-neutral-300 transition-colors"
                  >
                    mepology.com
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm p-10 border border-neutral-900 text-center">
                <div className="text-6xl font-light text-neutral-800 mb-4">24hr</div>
                <div className="text-sm text-neutral-500">Average Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white mb-6">
            Ready to start a project?
          </h2>
          <p className="text-neutral-500 mb-10">
            Send us your drawings and receive a detailed proposal within 24 hours.
          </p>
          <Button 
            size="lg" 
            className="h-14 px-10 bg-white hover:bg-neutral-100 text-black rounded-none font-medium"
            asChild
          >
            <Link href="mailto:projects@mepology.com">
              Submit Project Documents
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
