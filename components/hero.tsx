"use client"

import { ShieldCheck, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ModernDeviceCharacter from "@/components/modern-device-character"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-16 md:py-24 bg-slate-900 border-b border-slate-800 overflow-hidden">
      {/* Background with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-background.jpg"
          alt="Technology background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Expert Device Repair Services
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Get your iPhone, Samsung, tablet, or gaming console fixed quickly by our certified technicians.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Select className="w-full sm:w-[280px]">
                <SelectTrigger>
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
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white"
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
