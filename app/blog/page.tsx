import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Mepology",
  description: "Insights on MEP/FP coordination, construction technology, and industry best practices.",
}

// Sample blog posts - in production these would come from a CMS
const posts = [
  {
    slug: "future-of-mep-coordination",
    title: "The Future of MEP Coordination",
    excerpt: "How emerging technologies are transforming the way we coordinate complex building systems.",
    date: "Coming Soon",
    category: "Industry Insights",
    featured: true,
  },
  {
    slug: "clash-detection-best-practices",
    title: "Clash Detection Best Practices",
    excerpt: "A comprehensive guide to identifying and resolving system conflicts before they reach the field.",
    date: "Coming Soon",
    category: "Technical",
    featured: false,
  },
  {
    slug: "bim-coordination-workflows",
    title: "BIM Coordination Workflows",
    excerpt: "Streamlining your coordination process with effective BIM strategies and tools.",
    date: "Coming Soon",
    category: "Technical",
    featured: false,
  },
  {
    slug: "reducing-rework-construction",
    title: "Reducing Rework in Construction",
    excerpt: "How proper coordination can save millions in rework costs and schedule delays.",
    date: "Coming Soon",
    category: "Industry Insights",
    featured: false,
  },
  {
    slug: "healthcare-mep-coordination",
    title: "MEP Coordination for Healthcare",
    excerpt: "Unique challenges and solutions for coordinating complex healthcare facilities.",
    date: "Coming Soon",
    category: "Case Studies",
    featured: false,
  },
  {
    slug: "prefabrication-coordination",
    title: "Prefabrication & Coordination",
    excerpt: "Enabling offsite fabrication through precision coordination and shop-ready outputs.",
    date: "Coming Soon",
    category: "Technical",
    featured: false,
  },
]

const categories = ["All", "Industry Insights", "Technical", "Case Studies"]

export default function BlogPage() {
  const featuredPost = posts.find(p => p.featured)
  const otherPosts = posts.filter(p => !p.featured)

  return (
    <main className="min-h-screen bg-black">
      <Navbar variant="dark" />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-6">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
            Insights & Updates
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Thoughts on MEP coordination, construction technology, and building 
            better buildings.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                className={`text-sm transition-colors ${
                  category === "All" 
                    ? "text-white" 
                    : "text-neutral-500 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <Link 
              href={`/blog/${featuredPost.slug}`}
              className="block group"
            >
              <div className="border border-neutral-900 hover:border-neutral-800 transition-colors">
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-[4/3] lg:aspect-auto bg-neutral-950 flex items-center justify-center">
                    <div className="text-neutral-800 text-6xl font-light">01</div>
                  </div>
                  <div className="p-10 lg:p-16 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500">
                        {featuredPost.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-neutral-700" />
                      <span className="text-xs text-neutral-600">{featuredPost.date}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 group-hover:text-neutral-300 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-neutral-500 leading-relaxed mb-8">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-neutral-400 group-hover:text-white transition-colors">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, i) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="border border-neutral-900 hover:border-neutral-800 transition-colors h-full">
                  <div className="aspect-[16/9] bg-neutral-950 flex items-center justify-center">
                    <div className="text-neutral-800 text-4xl font-light">
                      {String(i + 2).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-neutral-600">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-neutral-700">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-3 group-hover:text-neutral-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-6">
            Stay Updated
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-white mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-neutral-500 mb-10">
            Get the latest insights on MEP coordination delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 bg-transparent border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-700"
            />
            <button className="h-12 px-8 bg-white text-black font-medium text-sm hover:bg-neutral-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-neutral-700 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
