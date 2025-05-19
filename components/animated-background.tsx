"use client"

import { useTheme } from "next-themes"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export function AnimatedBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse movement effect - simplified
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only update every 100ms to improve performance
      if (!containerRef.current) return

      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    // Throttled event listener
    let timeout: NodeJS.Timeout
    const throttledHandleMouseMove = (e: MouseEvent) => {
      if (timeout) return
      timeout = setTimeout(() => {
        handleMouseMove(e)
        timeout = undefined as unknown as NodeJS.Timeout
      }, 100)
    }

    window.addEventListener("mousemove", throttledHandleMouseMove)

    return () => {
      window.removeEventListener("mousemove", throttledHandleMouseMove)
      if (timeout) clearTimeout(timeout)
    }
  }, [])

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  // Calculate subtle parallax positions based on mouse
  const parallaxX = mousePosition.x * 10 - 5
  const parallaxY = mousePosition.y * 10 - 5

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary blue wave - simplified animation */}
      <motion.div
        className={`absolute h-[70vh] w-[200vw] rounded-[100%] opacity-20 blur-3xl transition-colors duration-700 ${
          isDark ? "bg-blue-600" : "bg-blue-500"
        }`}
        style={{
          top: `calc(20% + ${parallaxY}px)`,
          left: `calc(-50% + ${parallaxX}px)`,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          rotate: {
            duration: 120,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
      />

      {/* Secondary blue wave - simplified animation */}
      <motion.div
        className={`absolute h-[50vh] w-[180vw] rounded-[100%] opacity-15 blur-3xl transition-colors duration-700 ${
          isDark ? "bg-blue-700" : "bg-blue-400"
        }`}
        style={{
          top: `calc(30% - ${parallaxY}px)`,
          left: `calc(-40% - ${parallaxX}px)`,
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          rotate: {
            duration: 100,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
      />

      {/* Primary cyan wave - simplified animation */}
      <motion.div
        className={`absolute h-[70vh] w-[200vw] rounded-[100%] opacity-15 blur-3xl transition-colors duration-700 ${
          isDark ? "bg-cyan-700" : "bg-cyan-600"
        }`}
        style={{
          bottom: `calc(10%)`,
          right: `calc(-50% - ${parallaxX}px)`,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          rotate: {
            duration: 140,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
      />

      {/* Secondary cyan wave - simplified animation */}
      <motion.div
        className={`absolute h-[40vh] w-[150vw] rounded-[100%] opacity-10 blur-3xl transition-colors duration-700 ${
          isDark ? "bg-cyan-800" : "bg-cyan-500"
        }`}
        style={{
          bottom: `calc(25% + ${parallaxY}px)`,
          right: `calc(-25% + ${parallaxX}px)`,
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          rotate: {
            duration: 120,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
      />

      {/* Futuristic grid overlay - static */}
      <div
        className={`absolute inset-0 bg-grid-pattern bg-repeat opacity-0 transition-opacity duration-700 ${
          isDark ? "opacity-10" : "opacity-5"
        }`}
      />
    </div>
  )
}
