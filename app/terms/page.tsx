import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Mepology",
  description: "Mepology's terms of service and usage agreement.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar variant="dark" />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-6">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8">
            Terms of Service
          </h1>
          <p className="text-neutral-500">
            Last updated: May 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-neutral max-w-none">
            <div className="space-y-12 text-neutral-400 leading-relaxed">
              <div>
                <h2 className="text-xl font-medium text-white mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using Mepology&apos;s services, you agree to be bound by these 
                  Terms of Service. If you do not agree to these terms, you may not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-white mb-4">2. Services</h2>
                <p>
                  Mepology provides MEP/FP coordination services, including but not limited to 
                  clash detection, system coordination, and production of coordinated drawings. 
                  Specific services and deliverables are defined in individual project agreements.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-white mb-4">3. Client Responsibilities</h2>
                <p className="mb-4">
                  Clients are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing accurate and complete design documents</li>
                  <li>Timely review and approval of coordination deliverables</li>
                  <li>Payment according to agreed terms</li>
                  <li>Communicating changes to project scope or requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-medium text-white mb-4">4. Deliverables & Intellectual Property</h2>
                <p>
                  Upon full payment, clients receive a license to use coordination deliverables 
                  for the specific project. Mepology retains ownership of proprietary methods, 
                  processes, and tools used in providing services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-white mb-4">5. Payment Terms</h2>
                <p>
                  Payment terms are specified in individual project agreements. Unless otherwise 
                  agreed, invoices are due within 30 days of receipt. Late payments may incur 
                  interest charges.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-white mb-4">6. Limitation of Liability</h2>
                <p>
                  Mepology&apos;s liability is limited to the fees paid for the specific services 
                  giving rise to the claim. We are not liable for indirect, incidental, or 
                  consequential damages arising from the use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-white mb-4">7. Confidentiality</h2>
                <p>
                  We treat all client project information as confidential and will not disclose 
                  it to third parties without consent, except as required by law or to provide 
                  agreed services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-white mb-4">8. Termination</h2>
                <p>
                  Either party may terminate services with written notice. Upon termination, 
                  clients are responsible for payment of work completed through the termination date.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-white mb-4">9. Changes to Terms</h2>
                <p>
                  We may update these terms from time to time. Continued use of our services 
                  after changes constitutes acceptance of the updated terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-white mb-4">10. Contact</h2>
                <p>
                  For questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:legal@mepology.com" className="text-white hover:text-neutral-300 transition-colors">
                    legal@mepology.com
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
