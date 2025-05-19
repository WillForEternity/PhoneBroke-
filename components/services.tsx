"use client"

import { useState } from "react"
import {
  Smartphone,
  Tablet,
  Battery,
  Usb,
  Settings,
  HardDrive,
  ChevronRight,
  ChevronDown,
  Clock,
  DollarSign,
  CheckCircle,
  Gamepad2,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    icon: <Smartphone className="h-6 w-6 text-blue-600" />,
    title: "Smartphone Repair",
    description: "Expert screen replacement, battery service, and component repair for all major brands.",
    image: "/images/broken-smartphone.jpg",
    detailedDescription:
      "Our comprehensive smartphone repair service addresses all common issues with devices from Apple, Samsung, Google, and other major manufacturers.",
    commonIssues: [
      "Cracked or shattered screens",
      "Battery not holding charge",
      "Charging port issues",
      "Camera malfunctions",
      "Speaker or microphone problems",
      "Software issues and data recovery",
    ],
    process: [
      "Free diagnostic assessment",
      "Detailed explanation of the issue",
      "Transparent quote with no hidden fees",
      "Professional repair using premium parts",
      "Quality testing before return",
    ],
    timeframe: "Most screen repairs completed in 1-2 hours",
    priceRange: "$49 - $299 depending on device model and repair type",
    warranty: "90-day warranty on parts and labor",
    popularDevices: ["iPhone 13/14/15 Series", "Samsung Galaxy S22/S23/S24", "Google Pixel 6/7/8"],
  },
  {
    icon: <Tablet className="h-6 w-6 text-blue-600" />,
    title: "Tablet Service",
    description: "Comprehensive repair solutions for iPads, Samsung tablets, and other leading devices.",
    image: "/images/broken-tablet.jpg",
    detailedDescription:
      "We specialize in repairing all types of tablets, from iPads to Android devices, addressing both hardware and software issues.",
    commonIssues: [
      "Cracked screens and display issues",
      "Battery replacement",
      "Charging problems",
      "Button malfunctions",
      "Wi-Fi and connectivity issues",
      "Software glitches and updates",
    ],
    process: [
      "Complete tablet assessment",
      "Identification of all issues",
      "Upfront pricing quote",
      "Expert repair with quality parts",
      "Full functionality testing",
    ],
    timeframe: "Most tablet repairs completed within 24 hours",
    priceRange: "$59 - $329 depending on tablet model and repair complexity",
    warranty: "90-day warranty on all tablet repairs",
    popularDevices: ["iPad Pro/Air/Mini", "Samsung Galaxy Tab Series", "Microsoft Surface"],
  },
  {
    icon: <Battery className="h-6 w-6 text-blue-600" />,
    title: "Battery Replacement",
    description: "Restore your device's power with our premium battery replacement service.",
    image: "/images/swollen-battery.jpg",
    detailedDescription:
      "Our battery replacement service uses high-quality batteries that meet or exceed manufacturer specifications for optimal performance and longevity.",
    commonIssues: [
      "Battery draining quickly",
      "Device shutting down unexpectedly",
      "Battery swelling",
      "Device not holding charge",
      "Overheating issues",
    ],
    process: [
      "Battery health assessment",
      "Safe removal of old battery",
      "Installation of premium replacement",
      "System calibration",
      "Recycling of old battery",
    ],
    timeframe: "Most battery replacements completed in 30-60 minutes",
    priceRange: "$49 - $129 depending on device model",
    warranty: "90-day warranty on all battery replacements",
    benefits: [
      "Restored battery life",
      "Improved device performance",
      "Prevents potential damage from failing batteries",
      "Environmentally responsible disposal of old batteries",
    ],
  },
  {
    icon: <Usb className="h-6 w-6 text-blue-600" />,
    title: "Charging Solutions",
    description: "Fix charging ports, wireless charging issues, and power management problems.",
    image: "/images/broken-charging-port.jpg",
    detailedDescription:
      "We diagnose and repair all types of charging issues, from physical port damage to system-level power management problems.",
    commonIssues: [
      "Loose or damaged charging ports",
      "Device not recognizing charger",
      "Slow charging",
      "Wireless charging failures",
      "Intermittent charging connection",
    ],
    process: [
      "Diagnostic testing of charging system",
      "Cleaning of charging port (if applicable)",
      "Repair or replacement of damaged components",
      "Power management system check",
      "Verification of proper charging function",
    ],
    timeframe: "Most charging repairs completed in 1-2 hours",
    priceRange: "$49 - $149 depending on device and issue",
    warranty: "90-day warranty on all charging repairs",
    tips: "We can also advise on proper charging habits to extend battery life and prevent future issues",
  },
  {
    icon: <Gamepad2 className="h-6 w-6 text-blue-600" />,
    title: "Game System Repair",
    description: "Expert repairs for PlayStation, Xbox, Nintendo Switch, and other gaming consoles.",
    image: "/images/broken-console.jpg",
    detailedDescription:
      "Our game system repair services cover everything from disc drive issues to controller repairs and overheating problems.",
    commonIssues: [
      "Disc reading failures",
      "Power supply issues",
      "HDMI port damage",
      "Controller drift and button problems",
      "Overheating and fan noise",
      "System freezing or crashing",
      "Hard drive/SSD upgrades",
    ],
    process: [
      "Comprehensive diagnostic assessment",
      "Detailed repair quote",
      "Professional repair with quality parts",
      "System testing with actual gameplay",
      "Firmware updates if needed",
    ],
    timeframe: "Most repairs completed within 1-3 days",
    priceRange: "$49 - $149 depending on console and repair type",
    warranty: "90-day warranty on all game system repairs",
    supportedSystems: [
      "PlayStation 4/5",
      "Xbox One/Series X|S",
      "Nintendo Switch/Switch Lite",
      "Steam Deck",
      "Retro Consoles",
    ],
  },
  {
    icon: <Settings className="h-6 w-6 text-blue-600" />,
    title: "Software Optimization",
    description: "Resolve system crashes, performance issues, and software conflicts.",
    image: "/images/software-error.jpg",
    detailedDescription:
      "Our software optimization service addresses performance issues, removes malware, updates systems, and ensures your device runs at peak efficiency.",
    commonIssues: [
      "Slow device performance",
      "Frequent crashes or freezes",
      "Malware or virus infections",
      "Operating system errors",
      "App compatibility issues",
      "Storage management problems",
    ],
    process: [
      "System diagnostic and performance analysis",
      "Malware and virus scan and removal",
      "System updates and optimization",
      "Unnecessary file cleanup",
      "App optimization and conflict resolution",
      "Performance testing",
    ],
    timeframe: "Most software optimizations completed in 1-3 hours",
    priceRange: "$49 - $149 depending on device and issues",
    warranty: "30-day satisfaction guarantee",
    benefits: [
      "Faster device performance",
      "Extended device lifespan",
      "Improved battery efficiency",
      "Enhanced security",
      "Better app compatibility",
    ],
  },
  {
    icon: <HardDrive className="h-6 w-6 text-blue-600" />,
    title: "Data Recovery",
    description: "Professional retrieval of important data from damaged or malfunctioning devices.",
    image: "/images/damaged-drive.jpg",
    detailedDescription:
      "Our data recovery specialists can retrieve your valuable photos, documents, and files from damaged devices, corrupted storage, or after accidental deletion.",
    commonIssues: [
      "Accidental file deletion",
      "Formatted drives",
      "Corrupted storage",
      "Physical drive damage",
      "Unresponsive devices with important data",
    ],
    process: [
      "Initial data recovery assessment",
      "Creation of disk image to protect original data",
      "Multiple recovery method attempts",
      "Secure transfer of recovered data",
      "Confidential handling of all information",
    ],
    timeframe: "24-72 hours for most recoveries; complex cases may take longer",
    priceRange: "$99 - $499 depending on complexity and storage size",
    warranty: "No recovery, no fee guarantee",
    successRate: "Over 90% success rate for logical data recovery",
  },
]

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-full bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-300">
            Our Services
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What We Fix</h2>
          <p className="max-w-[700px] text-gray-400 md:text-lg">
            Professional repair services for all your devices, delivered with precision and care
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border border-gray-800 bg-slate-800 transition-all duration-200 hover:shadow-md ${
                expandedService === index ? "col-span-full row-start-1" : ""
              }`}
            >
              <CardHeader className="pb-2">
                <div className="mb-2 w-10 h-10 rounded-md bg-blue-900/20 flex items-center justify-center">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-400">{service.description}</CardDescription>

                {expandedService === index ? (
                  <div className="mt-6 animate-fadeIn">
                    <p className="text-gray-300 mb-4">{service.detailedDescription}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="text-white font-medium mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                          Common Issues We Fix
                        </h4>
                        <ul className="space-y-1 text-gray-400">
                          {service.commonIssues.map((issue, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-blue-400 mr-2">•</span>
                              <span>{issue}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-medium mb-2 flex items-center">
                          <Settings className="h-4 w-4 text-blue-400 mr-2" />
                          Our Repair Process
                        </h4>
                        <ol className="space-y-1 text-gray-400">
                          {service.process.map((step, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-blue-400 mr-2">{i + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                        <div>
                          <h4 className="text-white font-medium">Timeframe</h4>
                          <p className="text-gray-400">{service.timeframe}</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                        <div>
                          <h4 className="text-white font-medium">Price Range</h4>
                          <p className="text-gray-400">{service.priceRange}</p>
                        </div>
                      </div>
                    </div>

                    {service.popularDevices && (
                      <div className="mt-6">
                        <h4 className="text-white font-medium mb-2">Popular Devices</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.popularDevices.map((device, i) => (
                            <Badge key={i} variant="outline" className="bg-blue-900/20 text-blue-300 border-blue-800">
                              {device}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.supportedSystems && (
                      <div className="mt-6">
                        <h4 className="text-white font-medium mb-2">Supported Systems</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.supportedSystems.map((system, i) => (
                            <Badge key={i} variant="outline" className="bg-blue-900/20 text-blue-300 border-blue-800">
                              {system}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.benefits && (
                      <div className="mt-6">
                        <h4 className="text-white font-medium mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                          Benefits
                        </h4>
                        <ul className="space-y-1 text-gray-400">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-blue-400 mr-2">•</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.successRate && (
                      <div className="mt-6 p-3 bg-blue-900/20 rounded-md border border-blue-800">
                        <p className="text-blue-300">
                          <strong>Success Rate:</strong> {service.successRate}
                        </p>
                      </div>
                    )}

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <Button onClick={scrollToContact} className="bg-cyan-700 hover:bg-cyan-800 text-white">
                        <span className="mr-2">Get a Quote</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => toggleService(index)}
                        className="border-gray-700 text-gray-300 hover:bg-slate-700"
                      >
                        <span className="mr-2">Show Less</span>
                        <ChevronDown className="h-4 w-4 rotate-180" />
                      </Button>
                    </div>
                  </div>
                ) : null}
              </CardContent>
              {expandedService !== index && (
                <CardFooter className="flex justify-between space-x-4">
                  <Button
                    variant="ghost"
                    onClick={() => toggleService(index)}
                    className="p-0 text-blue-400 hover:bg-transparent hover:text-blue-300 group"
                  >
                    <span className="mr-1">View Details</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </Button>
                  <Button
                    variant="ghost"
                    className="p-0 text-blue-400 hover:bg-transparent hover:text-blue-300 group"
                    onClick={scrollToContact}
                  >
                    <span className="mr-1">Get a quote</span>
                    <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
