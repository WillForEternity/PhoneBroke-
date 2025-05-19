"use client"

import { MessageSquareText, Wrench, PackageCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    icon: <MessageSquareText className="h-8 w-8 text-blue-600" />,
    title: "Get a Free Quote",
    description: "Tell us about your device and issue for a transparent, no-obligation quote.",
    number: "1",
    image: "/images/broken-phone-quote.jpg",
  },
  {
    icon: <Wrench className="h-8 w-8 text-blue-600" />,
    title: "Expert Repair",
    description: "Our certified technicians perform the repair using high-quality parts.",
    number: "2",
    image: "/images/phone-repair-process.jpg",
  },
  {
    icon: <PackageCheck className="h-8 w-8 text-blue-600" />,
    title: "Device Pick-up",
    description: "Get your device back, good as new, often the same day.",
    number: "3",
    image: "/images/fixed-device.jpg",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-full bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-300">
            Our Process
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple Steps to Get Your Device Repaired
          </h2>
          <p className="max-w-[700px] text-gray-400 md:text-lg">
            A straightforward process designed for your convenience
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border border-gray-800 bg-slate-800 transition-all duration-200 hover:shadow-md"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-bold text-gray-700">{step.number}</span>
                </div>
                <CardTitle className="text-xl mt-4 text-white">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-400">{step.description}</CardDescription>
                <div className="mt-4 h-40 rounded-md overflow-hidden">
                  <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
