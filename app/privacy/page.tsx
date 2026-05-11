import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Mepology",
  description: "Mepology's privacy policy and data handling practices.",
}

export default function PrivacyPage() {
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
            Privacy Policy
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
                <h2 className="text-xl font-medium text-white mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Company and project information</li>
                  <li>Design documents and CAD/BIM files submitted for coordination</li>
                  <li>Communications with our team</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-medium text-white mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide MEP/FP coordination services</li>
                  <li>Communicate with you about projects and services</li>
                  <li>Process payments and manage accounts</li>
                  <li>Improve our services and develop new features</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-medium text-white mb-4">3. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your 
                  information against unauthorized access, alteration, disclosure, or destruction. 
                  All project files are transmitted and stored using industry-standard encryption.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-white mb-4">4. Data Retention</h2>
                <p>
                  We retain project files and coordination documents for a period of 7 years 
                  following project completion, unless otherwise agreed. You may request deletion 
                  of your data at any time by contacting us.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-white mb-4">5. Third-Party Services</h2>
                <p>
                  We may use third-party services for file storage, communication, and analytics. 
                  These services are bound by their own privacy policies and are selected based 
                  on their data protection practices.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-white mb-4">6. Your Rights</h2>
                <p className="mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Request transfer of your information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-medium text-white mb-4">7. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our data practices, 
                  please contact us at{" "}
                  <a href="mailto:privacy@mepology.com" className="text-white hover:text-neutral-300 transition-colors">
                    privacy@mepology.com
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
