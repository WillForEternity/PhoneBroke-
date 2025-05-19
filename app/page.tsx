"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Process from "@/components/process"
import Features from "@/components/features"
import PricingTable from "@/components/pricing-table"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function HomePage() {
  const [initialTab, setInitialTab] = useState<string>("iphone")

  // Add smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <div className="min-h-screen font-sans bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero onSelectDevice={setInitialTab} />
        <Services />
        <Process />
        <Features />
        <PricingTable initialTab={initialTab} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
