import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, Copy } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Brand Resources | Mepology",
  description: "Download Mepology brand assets including logos, color schemes, and usage guidelines.",
}

const colorPalette = [
  { name: "Black", hex: "#000000", usage: "Primary background, text" },
  { name: "White", hex: "#FFFFFF", usage: "Primary text on dark, backgrounds" },
  { name: "Neutral 950", hex: "#0a0a0a", usage: "Footer, dark sections" },
  { name: "Neutral 900", hex: "#171717", usage: "Borders, dividers" },
  { name: "Neutral 800", hex: "#262626", usage: "Secondary borders" },
  { name: "Neutral 500", hex: "#737373", usage: "Muted text" },
  { name: "Neutral 400", hex: "#a3a3a3", usage: "Body text on dark" },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar variant="dark" />
      
      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-6">
            Resources
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
            Brand Assets
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Download official Mepology logos, access our color palette, and review brand guidelines 
            for consistent representation.
          </p>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-4">
              Logo
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-white mb-4">
              Primary Logo
            </h2>
            <p className="text-neutral-500 max-w-xl">
              The Mepology logo represents precision and clarity in MEP coordination. 
              Use the appropriate version based on background color.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Dark Background Version */}
            <div className="border border-neutral-900">
              <div className="bg-black p-16 flex items-center justify-center min-h-[240px]">
                <div className="flex items-center gap-4">
                  <Image 
                    src="/logo.png" 
                    alt="Mepology Logo" 
                    width={64} 
                    height={64} 
                    className="w-16 h-16"
                  />
                  <span className="text-3xl font-medium tracking-tight text-white">Mepology</span>
                </div>
              </div>
              <div className="p-6 border-t border-neutral-900">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-white">On Dark Backgrounds</div>
                    <div className="text-xs text-neutral-500">Use white text with logo</div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="rounded-none border-neutral-800 text-white hover:bg-neutral-900 hover:text-white"
                    asChild
                  >
                    <Link href="/logo.png" download>
                      <Download className="w-4 h-4 mr-2" />
                      PNG
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Light Background Version */}
            <div className="border border-neutral-900">
              <div className="bg-white p-16 flex items-center justify-center min-h-[240px]">
                <div className="flex items-center gap-4">
                  <Image 
                    src="/logo.png" 
                    alt="Mepology Logo" 
                    width={64} 
                    height={64} 
                    className="w-16 h-16"
                  />
                  <span className="text-3xl font-medium tracking-tight text-black">Mepology</span>
                </div>
              </div>
              <div className="p-6 border-t border-neutral-900">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-white">On Light Backgrounds</div>
                    <div className="text-xs text-neutral-500">Use black text with logo</div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="rounded-none border-neutral-800 text-white hover:bg-neutral-900 hover:text-white"
                    asChild
                  >
                    <Link href="/logo.png" download>
                      <Download className="w-4 h-4 mr-2" />
                      PNG
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Icon Only */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="border border-neutral-900">
              <div className="bg-black p-8 flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="Mepology Icon" 
                  width={48} 
                  height={48} 
                  className="w-12 h-12"
                />
              </div>
              <div className="p-4 border-t border-neutral-900 text-center">
                <div className="text-xs text-neutral-500">Icon Only</div>
              </div>
            </div>
            <div className="border border-neutral-900">
              <div className="bg-white p-8 flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="Mepology Icon" 
                  width={48} 
                  height={48} 
                  className="w-12 h-12"
                />
              </div>
              <div className="p-4 border-t border-neutral-900 text-center">
                <div className="text-xs text-neutral-500">Icon Only</div>
              </div>
            </div>
            <div className="border border-neutral-900">
              <div className="bg-neutral-950 p-8 flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="Mepology Icon" 
                  width={48} 
                  height={48} 
                  className="w-12 h-12"
                />
              </div>
              <div className="p-4 border-t border-neutral-900 text-center">
                <div className="text-xs text-neutral-500">On Dark Gray</div>
              </div>
            </div>
            <div className="border border-neutral-900">
              <div className="bg-neutral-100 p-8 flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="Mepology Icon" 
                  width={48} 
                  height={48} 
                  className="w-12 h-12"
                />
              </div>
              <div className="p-4 border-t border-neutral-900 text-center">
                <div className="text-xs text-neutral-500">On Light Gray</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-4">
              Colors
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-white mb-4">
              Color Palette
            </h2>
            <p className="text-neutral-500 max-w-xl">
              Our color palette is intentionally minimal, emphasizing sophistication and clarity 
              through a monochromatic scheme.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {colorPalette.map((color) => (
              <div key={color.hex} className="border border-neutral-900 overflow-hidden">
                <div 
                  className="h-24"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white">{color.name}</span>
                    <button 
                      className="text-neutral-500 hover:text-white transition-colors"
                      aria-label={`Copy ${color.hex}`}
                    >
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="text-xs font-mono text-neutral-500 mb-1">{color.hex}</div>
                  <div className="text-xs text-neutral-600">{color.usage}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-4">
              Typography
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-white mb-4">
              Font Family
            </h2>
            <p className="text-neutral-500 max-w-xl">
              We use Geist for all brand communications. It provides excellent readability 
              and a modern, professional appearance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-neutral-900">
              <div className="text-xs text-neutral-600 tracking-wide uppercase mb-4">Geist Sans</div>
              <div className="text-4xl font-medium text-white mb-4">Mepology</div>
              <div className="text-lg text-neutral-400 mb-4">The quick brown fox jumps over the lazy dog.</div>
              <div className="text-sm text-neutral-500">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                abcdefghijklmnopqrstuvwxyz<br/>
                0123456789
              </div>
            </div>
            <div className="p-8 border border-neutral-900">
              <div className="text-xs text-neutral-600 tracking-wide uppercase mb-4">Geist Mono</div>
              <div className="text-4xl font-mono font-medium text-white mb-4">M-101</div>
              <div className="text-lg font-mono text-neutral-400 mb-4">The quick brown fox jumps over the lazy dog.</div>
              <div className="text-sm font-mono text-neutral-500">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                abcdefghijklmnopqrstuvwxyz<br/>
                0123456789
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-4">
              Guidelines
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-white mb-4">
              Usage Rules
            </h2>
          </div>
          
          <div className="space-y-8">
            {[
              {
                title: "Clear Space",
                description: "Maintain minimum clear space around the logo equal to the height of the 'M' in Mepology."
              },
              {
                title: "Minimum Size",
                description: "The logo should never appear smaller than 24px in height for digital applications."
              },
              {
                title: "No Modifications",
                description: "Do not stretch, rotate, add effects, or modify the logo in any way."
              },
              {
                title: "Color Integrity",
                description: "Only use approved color combinations. Do not place the logo on busy backgrounds."
              },
            ].map((rule) => (
              <div key={rule.title} className="flex gap-6 pb-8 border-b border-neutral-900 last:border-0">
                <div className="w-2 h-2 rounded-full bg-neutral-700 mt-2 shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">{rule.title}</h3>
                  <p className="text-neutral-500">{rule.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download All */}
      <section className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white mb-6">
            Download Complete Brand Kit
          </h2>
          <p className="text-neutral-500 mb-10">
            Get all logos, icons, and brand guidelines in one package.
          </p>
          <Button 
            size="lg" 
            className="h-14 px-10 bg-white hover:bg-neutral-100 text-black rounded-none font-medium"
            asChild
          >
            <Link href="/logo.png" download>
              <Download className="w-4 h-4 mr-2" />
              Download Brand Kit
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
