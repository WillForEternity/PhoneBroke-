"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    deviceType: "",
    model: "",
    issue: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, deviceType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData)

    // Show success message
    toast({
      title: "Request Sent Successfully!",
      description: "We'll contact you shortly with your free quote.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      deviceType: "",
      model: "",
      issue: "",
    })
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-full bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-300">
            Contact Us
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get in Touch</h2>
          <p className="max-w-[700px] text-gray-400 md:text-lg">Request a free repair quote or ask us any questions</p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Form */}
          <div className="bg-slate-800 rounded-lg shadow-sm border border-gray-700 p-6">
            <h3 className="mb-6 text-xl font-semibold text-white">Request a Free Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-10 border-gray-700 bg-slate-900 text-base"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-10 border-gray-700 bg-slate-900 text-base"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-300">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-10 border-gray-700 bg-slate-900 text-base"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="deviceType" className="text-sm font-medium text-gray-300">
                  Device Type
                </Label>
                <Select value={formData.deviceType} onValueChange={handleSelectChange}>
                  <SelectTrigger id="deviceType" className="h-10 border-gray-700 bg-slate-900 text-base">
                    <SelectValue placeholder="Select device type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="iphone">iPhone</SelectItem>
                    <SelectItem value="samsung">Samsung</SelectItem>
                    <SelectItem value="google">Google Pixel</SelectItem>
                    <SelectItem value="ipad">iPad</SelectItem>
                    <SelectItem value="macbook">MacBook</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="model" className="text-sm font-medium text-gray-300">
                  Device Model
                </Label>
                <Input
                  id="model"
                  name="model"
                  placeholder="e.g., iPhone 13 Pro, Galaxy S22"
                  value={formData.model}
                  onChange={handleChange}
                  required
                  className="h-10 border-gray-700 bg-slate-900 text-base"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="issue" className="text-sm font-medium text-gray-300">
                  Describe Your Issue
                </Label>
                <Textarea
                  id="issue"
                  name="issue"
                  placeholder="Tell us what's wrong with your device..."
                  value={formData.issue}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] border-gray-700 bg-slate-900 text-base"
                />
              </div>

              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                <span className="mr-2">Submit for Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-lg shadow-sm border border-gray-700 p-6">
              <h3 className="mb-6 text-xl font-semibold text-white">Contact Information</h3>
              <div className="flex flex-col space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/30 text-blue-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Phone</h4>
                    <p className="text-gray-400">
                      <a href="tel:+17028904467" className="hover:text-blue-400 transition-colors">
                        (702) 890-4467
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/30 text-blue-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-gray-400">
                      <a href="mailto:jayvonwithers6@gmail.com" className="hover:text-blue-400 transition-colors">
                        jayvonwithers6@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/30 text-blue-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Service Area</h4>
                    <p className="text-gray-400">Serving Spokane, Washington</p>
                    <p className="text-sm text-gray-500">Advanced Mobile & Mail-In Repair Service</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/30 text-blue-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Business Hours</h4>
                    <p className="text-gray-400">11:00 AM - 7:00 PM Daily</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg shadow-sm border border-gray-700 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Our Guarantee</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 text-xs font-bold">
                    1
                  </div>
                  <p className="text-gray-400">90-day warranty on all repairs</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 text-xs font-bold">
                    2
                  </div>
                  <p className="text-gray-400">Transparent pricing with no hidden fees</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 text-xs font-bold">
                    3
                  </div>
                  <p className="text-gray-400">Premium quality parts for all repairs</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 text-xs font-bold">
                    4
                  </div>
                  <p className="text-gray-400">Certified technicians with years of experience</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
