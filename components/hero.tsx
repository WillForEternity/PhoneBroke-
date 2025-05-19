"use client"

import { useState } from "react"
import { ShieldCheck, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ModernDeviceCharacter from "@/components/modern-device-character"

export default function Hero() {
  const [hovered, setHovered] = useState(false)
  const [selectOpen, setSelectOpen] = useState(false)

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-16 md:py-24 bg-black border-b border-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="relative text-4xl md:text-5xl font-bold tracking-tight text-white">
                <span className={`block transition-opacity duration-300 ${(hovered || selectOpen) ? 'opacity-0' : 'opacity-100'}`}>
                  <span className="glitch" data-text="Phone">Phone</span>{' '}
                  <span className="glitch" data-text="Broke?">Broke?</span>
                </span>
                <span className={`absolute top-0 left-0 flex items-center space-x-2 transition-all duration-300 ease-in-out ${(hovered || selectOpen) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                  <span className="text-8xl md:text-10xl font-bold tracking-tight bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">JW Got You.</span>
                  <span className="text-8xl md:text-10xl bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">✔︎</span>
                </span>
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Get your iPhone, Samsung, tablet, or gaming console fixed quickly by our certified technicians.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Select onOpenChange={setSelectOpen}>
                <SelectTrigger className="w-full sm:w-[280px]" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                  <SelectValue placeholder="Select Your Device Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="iphone">iPhone</SelectItem>
                  <SelectItem value="samsung">Samsung</SelectItem>
                  <SelectItem value="tablet">Tablet</SelectItem>
                  <SelectItem value="gaming">Gaming Console</SelectItem>
                  <SelectItem value="other">Other Device</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto bg-cyan-700 hover:bg-cyan-800 text-white"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Get a Free Estimate
            </Button>

            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-gray-400">90-Day Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-gray-400">Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-gray-400">Certified Technicians</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center h-[400px] relative">
            <ModernDeviceCharacter />
          </div>
        </div>
      </div>
    </section>
  )
}
