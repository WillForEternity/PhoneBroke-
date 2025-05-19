"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-gray-800">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/images/Logo.png" alt="Logo" className="h-16 md:h-20 w-auto mix-blend-lighten" />
              <span className="text-xl font-bold text-white">JW Phone Repair</span>
            </div>
            <p className="text-gray-400">
              Expert device repair services with a focus on quality, speed, and customer satisfaction.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#services"
                className="text-gray-400 transition-colors hover:text-blue-400"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Services
              </Link>
              <Link
                href="#process"
                className="text-gray-400 transition-colors hover:text-blue-400"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Our Process
              </Link>
              <Link
                href="#features"
                className="text-gray-400 transition-colors hover:text-blue-400"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Why Choose Us
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-400 transition-colors hover:text-blue-400"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-gray-400 transition-colors hover:text-blue-400"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                iPhone Repair
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                Samsung Repair
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                iPad & Tablet Repair
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                Game System Repair
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                Battery Replacement
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="text-gray-400">
              <a href="tel:+17028904467" className="hover:text-blue-400 transition-colors">
                (702) 890-4467
              </a>
            </p>
            <p className="text-gray-400">
              <a href="mailto:jayvonwithers6@gmail.com" className="hover:text-blue-400 transition-colors">
                jayvonwithers6@gmail.com
              </a>
            </p>
            <p className="text-gray-400">Serving Spokane, Washington</p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-700 text-gray-400 transition-colors hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-700 text-gray-400 transition-colors hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-700 text-gray-400 transition-colors hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t border-gray-800 pt-8 md:flex-row md:space-y-0">
          <p className="text-center text-sm text-gray-400 md:text-left">© 2025 JW Phone Repair. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-blue-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
