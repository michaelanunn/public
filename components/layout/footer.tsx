import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
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
              <li><Link href="/product" className="text-sm text-neutral-400 hover:text-white transition-colors">Product</Link></li>
              <li><Link href="/how-it-works" className="text-sm text-neutral-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/services" className="text-sm text-neutral-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="text-sm text-neutral-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-neutral-400 hover:text-white transition-colors">About</Link></li>
              <li><span className="text-sm text-neutral-600">Careers <span className="text-neutral-700">(Coming Soon)</span></span></li>
              <li><span className="text-sm text-neutral-600">Portfolio <span className="text-neutral-700">(Coming Soon)</span></span></li>
              <li><Link href="/contact" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/resources" className="text-sm text-neutral-400 hover:text-white transition-colors">Brand Assets</Link></li>
              <li><span className="text-sm text-neutral-600">Documentation <span className="text-neutral-700">(Coming Soon)</span></span></li>
              <li><span className="text-sm text-neutral-600">Case Studies <span className="text-neutral-700">(Coming Soon)</span></span></li>
              <li><Link href="/blog" className="text-sm text-neutral-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><Link href="https://app.mepology.com/login" className="text-sm text-neutral-400 hover:text-white transition-colors">Log In</Link></li>
              <li><Link href="/contact" className="text-sm text-neutral-400 hover:text-white transition-colors">Request Access</Link></li>
              <li><Link href="/support" className="text-sm text-neutral-400 hover:text-white transition-colors">Support</Link></li>
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
              <Link href="/privacy" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
