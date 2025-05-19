import type React from "react"
import "@/app/globals.css"
import "@/styles/glitch.scss"
import SplashScreen from "@/components/SplashScreen"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JW Phone Repair - Expert Device Repair Services",
  description:
    "Professional phone, tablet, and laptop repair services in Spokane, Washington. Fast, reliable, and affordable repairs with a 90-day warranty.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <SplashScreen>{children}</SplashScreen>
      </body>
    </html>
  )
}
