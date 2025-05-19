"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navLinks = [
    { name: "Services", id: "services" },
    { name: "Process", id: "process" },
    { name: "Why Us", id: "features" },
    { name: "Pricing", id: "pricing" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-sm"
          : "bg-white dark:bg-slate-900"
      }`}
    >
      <div className="container flex h-20 md:h-24 items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Logo" className="h-16 md:h-20 w-auto mix-blend-lighten" />
          <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">JW Phone Repair</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              {link.name}
            </button>
          ))}
          <Button onClick={() => scrollToSection("contact")} className="bg-cyan-700 hover:bg-cyan-800 text-white">
            Get Free Quote
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="rounded-md">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-xs sm:max-w-sm border-l border-gray-200 dark:border-slate-800"
          >
            <div className="flex flex-col gap-8 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="/images/logo.png" alt="Logo" className="h-16 md:h-20 w-auto mix-blend-lighten" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">JW Phone Repair</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-md">
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="flex items-center text-base font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {link.name}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="mt-2 w-full bg-cyan-700 hover:bg-cyan-800 text-white"
                >
                  Get Free Quote
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
