"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface SectionTransitionProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  once?: boolean
}

export function SectionTransition({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  threshold = 0.2,
  once = true,
}: SectionTransitionProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold, once })

  // Set initial and animate values based on direction
  const getDirectionValues = () => {
    switch (direction) {
      case "up":
        return { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 } }
      case "down":
        return { initial: { y: -50, opacity: 0 }, animate: { y: 0, opacity: 1 } }
      case "left":
        return { initial: { x: 50, opacity: 0 }, animate: { x: 0, opacity: 1 } }
      case "right":
        return { initial: { x: -50, opacity: 0 }, animate: { x: 0, opacity: 1 } }
      default:
        return { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 } }
    }
  }

  const { initial, animate } = getDirectionValues()

  useEffect(() => {
    if (inView) {
      controls.start(animate)
    } else if (!once) {
      controls.start(initial)
    }
  }, [controls, inView, animate, initial, once])

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
