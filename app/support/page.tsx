import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Mail, 
  FileQuestion, 
  Bug, 
  RefreshCw, 
  Clock, 
  Upload, 
  Download, 
  Settings, 
  AlertCircle,
  CheckCircle,
  MessageSquare
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support | Mepology",
  description: "Get help with your Mepology projects. Technical support, billing inquiries, and general assistance.",
}

const supportCategories = [
  {
    icon: FileQuestion,
    title: "Project Questions",
    description: "Questions about scope, deliverables, or project timelines.",
    email: "support@mepology.com",
    subject: "Project Question",
  },
  {
    icon: Bug,
    title: "Technical Issues",
    description: "Problems with file formats, model integration, or coordination outputs.",
    email: "support@mepology.com",
    subject: "Technical Issue",
  },
  {
    icon: RefreshCw,
    title: "Revision Requests",
    description: "Need changes to delivered coordination drawings or models.",
    email: "support@mepology.com",
    subject: "Revision Request",
  },
  {
    icon: Clock,
    title: "Timeline Updates",
    description: "Questions about project schedules or deadline adjustments.",
    email: "support@mepology.com",
    subject: "Timeline Inquiry",
  },
  {
    icon: Upload,
    title: "File Upload Issues",
    description: "Problems uploading or transferring project files.",
    email: "support@mepology.com",
    subject: "File Upload Issue",
  },
  {
    icon: Download,
    title: "Deliverable Access",
    description: "Issues accessing or downloading completed deliverables.",
    email: "support@mepology.com",
    subject: "Deliverable Access",
  },
  {
    icon: Settings,
    title: "Account & Billing",
    description: "Questions about invoices, payments, or account settings.",
    email: "billing@mepology.com",
    subject: "Billing Inquiry",
  },
  {
    icon: AlertCircle,
    title: "Urgent Issues",
    description: "Time-sensitive problems requiring immediate attention.",
    email: "urgent@mepology.com",
    subject: "URGENT",
  },
]

const faqs = [
  {
    q: "What file formats do you accept?",
    a: "We accept Revit (.rvt), AutoCAD (.dwg), Navisworks (.nwd/.nwc), IFC, and PDF formats. Contact us if you need support for other formats."
  },
  {
    q: "How quickly do you respond to support requests?",
    a: "We aim to respond to all support requests within 24 hours on business days. Urgent issues are prioritized and typically addressed within 4 hours."
  },
  {
    q: "Can I request revisions to my coordination package?",
    a: "Yes, revision cycles are included in your project scope. Additional revisions beyond the agreed scope may be billed at hourly rates."
  },
  {
    q: "How do I upload large files?",
    a: "For files over 100MB, we recommend using our secure file transfer link or services like WeTransfer. Contact support for a direct upload link."
  },
  {
    q: "What if I find an error in my deliverables?",
    a: "Report any errors immediately to support@mepology.com. We will investigate and issue corrections at no additional charge if the error is on our end."
  },
  {
    q: "Do you offer training or documentation?",
    a: "Yes, we provide project-specific documentation with all deliverables. Custom training sessions are available for Enterprise clients."
  },
]

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar variant="dark" />
      
      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-6">
            Support
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
            How can we help?
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Get assistance with your projects, technical questions, or account inquiries. 
            We&apos;re here to help.
          </p>
          
          {/* Primary Contact */}
          <div className="inline-flex items-center gap-4 px-8 py-4 border border-neutral-800 bg-neutral-950">
            <Mail className="w-5 h-5 text-neutral-500" />
            <div className="text-left">
              <div className="text-xs text-neutral-600 uppercase tracking-wide">Email Support</div>
              <Link 
                href="mailto:support@mepology.com" 
                className="text-white hover:text-neutral-300 transition-colors"
              >
                support@mepology.com
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-4">
              Get Help
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-white">
              What do you need help with?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category) => (
              <Link 
                key={category.title}
                href={`mailto:${category.email}?subject=${encodeURIComponent(category.subject)}`}
                className="group p-6 border border-neutral-900 hover:border-neutral-800 transition-colors"
              >
                <div className="w-10 h-10 rounded-none border border-neutral-800 flex items-center justify-center mb-4 group-hover:border-neutral-700 transition-colors">
                  <category.icon className="w-4 h-4 text-neutral-500" />
                </div>
                <h3 className="text-base font-medium text-white mb-2 group-hover:text-neutral-300 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-neutral-900">
              <CheckCircle className="w-6 h-6 text-neutral-600 mx-auto mb-4" />
              <div className="text-2xl font-medium text-white mb-2">24hr</div>
              <div className="text-sm text-neutral-500">Standard Response</div>
            </div>
            <div className="p-8 border border-neutral-900">
              <Clock className="w-6 h-6 text-neutral-600 mx-auto mb-4" />
              <div className="text-2xl font-medium text-white mb-2">4hr</div>
              <div className="text-sm text-neutral-500">Urgent Issues</div>
            </div>
            <div className="p-8 border border-neutral-900">
              <MessageSquare className="w-6 h-6 text-neutral-600 mx-auto mb-4" />
              <div className="text-2xl font-medium text-white mb-2">24/7</div>
              <div className="text-sm text-neutral-500">Enterprise Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-4">
              FAQ
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-white">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="pb-8 border-b border-neutral-900 last:border-0">
                <h3 className="text-lg font-medium text-white mb-3">{faq.q}</h3>
                <p className="text-neutral-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white mb-6">
            Still need help?
          </h2>
          <p className="text-neutral-500 mb-10">
            Can&apos;t find what you&apos;re looking for? Contact our support team directly.
          </p>
          <Button 
            size="lg" 
            className="h-14 px-10 bg-white hover:bg-neutral-100 text-black rounded-none font-medium"
            asChild
          >
            <Link href="mailto:support@mepology.com">
              <Mail className="w-4 h-4 mr-2" />
              Email Support
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
