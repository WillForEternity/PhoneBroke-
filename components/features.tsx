"use client"

import { BadgeCheck, Zap, ShieldCheck, DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <BadgeCheck className="h-8 w-8 text-blue-600" />,
    title: "Certified Technicians",
    description:
      "Our repair specialists are fully certified and have years of experience fixing all types of mobile devices.",
    image: "/images/broken-screen-repair.jpg",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Fast & Reliable Service",
    description:
      "Most repairs are completed within hours, not days. We respect your time and prioritize rapid turnaround.",
    image: "/images/cracked-phone.jpg",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: "90-Day Warranty",
    description:
      "Every repair is backed by our 90-day warranty. If anything goes wrong, we'll fix it at no additional cost.",
    image: "/images/water-damaged-phone.jpg",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-blue-600" />,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise charges. We provide clear, upfront pricing before any work begins.",
    image: "/images/broken-tablet-screen.jpg",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-full bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-300">
            Why Choose Us
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">The JW Phone Repair Difference</h2>
          <p className="max-w-[700px] text-gray-400 md:text-lg">
            Experience the difference with our commitment to excellence, speed, and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-gray-800 bg-slate-800 transition-all duration-200 hover:shadow-md"
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl mt-4 text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-400">{feature.description}</CardDescription>
                <div className="mt-4 h-32 rounded-md overflow-hidden">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
