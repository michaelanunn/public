"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  variant?: "dark" | "light"
}

export function Navbar({ variant = "dark" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isDark = variant === "dark"

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? isDark 
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10" 
            : "bg-white/80 backdrop-blur-xl border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Mepology" 
            width={32} 
            height={32} 
            className="w-8 h-8"
          />
          <span className={`text-lg font-medium tracking-tight ${isDark ? "text-white" : "text-neutral-900"}`}>
            Mepology
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link href="/product" className={`text-sm transition-colors ${isDark ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-neutral-900"}`}>
            Product
          </Link>
          <Link href="/how-it-works" className={`text-sm transition-colors ${isDark ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-neutral-900"}`}>
            How It Works
          </Link>
          <Link href="/services" className={`text-sm transition-colors ${isDark ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-neutral-900"}`}>
            Services
          </Link>
          <Link href="/pricing" className={`text-sm transition-colors ${isDark ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-neutral-900"}`}>
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="https://app.mepology.com/login" 
            className={`hidden sm:block text-sm transition-colors ${isDark ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-neutral-900"}`}
          >
            Log in
          </Link>
          <Button 
            size="sm" 
            className={`rounded-full px-5 h-9 text-sm font-medium ${
              isDark 
                ? "bg-white hover:bg-neutral-100 text-black" 
                : "bg-black hover:bg-neutral-800 text-white"
            }`}
            asChild
          >
            <Link href="/contact">
              Request Access
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
