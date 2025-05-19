"use client"

import { useEffect, useState } from "react"
import { motion, useAnimationControls, AnimatePresence } from "framer-motion"

export default function ModernDeviceCharacter() {
  const controls = useAnimationControls()
  const eyesControls = useAnimationControls()
  const [blinking, setBlinking] = useState(false)
  const [currentExpression, setCurrentExpression] = useState<"neutral" | "happy" | "surprised">("neutral")

  // Create autonomous animations
  useEffect(() => {
    // Start the idle animation loop
    startIdleLoop()

    // Start the blinking loop
    startBlinkingLoop()

    // Occasionally change expressions
    const expressionInterval = setInterval(() => {
      const expressions: ("neutral" | "happy" | "surprised")[] = ["neutral", "happy", "surprised"]
      const randomExpression = expressions[Math.floor(Math.random() * expressions.length)]
      setCurrentExpression(randomExpression)
    }, 4000)

    return () => {
      clearInterval(expressionInterval)
    }
  }, [])

  // Function to handle the idle animation loop
  const startIdleLoop = async () => {
    while (true) {
      // Choose a random animation
      const randomAnimation = Math.random()

      if (randomAnimation < 0.3) {
        // Subtle float animation
        await controls.start({
          y: [0, -10, 0],
          transition: { duration: 2, ease: "easeInOut" },
        })
      } else if (randomAnimation < 0.6) {
        // Slight tilt animation
        await controls.start({
          rotate: [0, -3, 3, 0],
          transition: { duration: 2.5, ease: "easeInOut" },
        })
      } else if (randomAnimation < 0.8) {
        // Small bounce
        await controls.start({
          y: [0, -15, 0],
          transition: { duration: 0.8, ease: "easeInOut" },
        })
      } else {
        // Excited wiggle
        await controls.start({
          x: [0, -5, 5, -5, 0],
          transition: { duration: 0.7, ease: "easeInOut" },
        })
      }

      // Random pause between animations
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000 + 1000))
    }
  }

  // Function to handle the blinking animation
  const startBlinkingLoop = async () => {
    while (true) {
      // Random time until next blink
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 3000 + 2000))

      // Blink animation
      setBlinking(true)
      await eyesControls.start({
        scaleY: [1, 0.1, 1],
        transition: { duration: 0.2 },
      })
      setBlinking(false)
    }
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient background elements - integrated with the UI */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-[15%] left-[10%] w-24 h-24 rounded-full bg-blue-600/5 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-32 h-32 rounded-full bg-blue-500/5 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      {/* Main device character */}
      <motion.div
        animate={controls}
        className="relative z-10"
        style={{
          filter: "drop-shadow(0 10px 15px rgba(59, 130, 246, 0.2))",
        }}
      >
        {/* Device body - more modern, sleek design */}
        <div className="w-[180px] h-[360px] bg-gradient-to-br from-blue-600 to-blue-700 rounded-[30px] relative overflow-hidden">
          {/* Screen */}
          <div className="absolute top-0 left-0 right-0 bottom-0 m-[8px] rounded-[24px] bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
            {/* Camera notch - more subtle, modern design */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[50px] h-[14px] bg-slate-900 rounded-b-xl flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-500/50 mr-4"></div>
              <div className="w-3 h-3 rounded-full bg-slate-800 border-[1.5px] border-slate-700"></div>
            </div>

            {/* Face/Expression */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px]">
              {/* Eyes */}
              <div className="flex justify-center gap-8 mb-5">
                <motion.div animate={eyesControls} className="w-5 h-5 rounded-full bg-blue-400"></motion.div>
                <motion.div animate={eyesControls} className="w-5 h-5 rounded-full bg-blue-400"></motion.div>
              </div>

              {/* Mouth - changes based on expression */}
              <AnimatePresence mode="wait">
                {currentExpression === "neutral" && (
                  <motion.div
                    key="neutral"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-1.5 bg-blue-400 mx-auto rounded-full"
                  ></motion.div>
                )}

                {currentExpression === "happy" && (
                  <motion.div
                    key="happy"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-6 mx-auto bg-transparent border-b-3 border-blue-400 rounded-b-full"
                  ></motion.div>
                )}

                {currentExpression === "surprised" && (
                  <motion.div
                    key="surprised"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 mx-auto bg-blue-400 rounded-full"
                  ></motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Subtle UI elements */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[120px]">
              <div className="w-full h-1 bg-blue-500/20 rounded-full mb-4"></div>
              <div className="w-3/4 h-1 bg-blue-500/20 rounded-full mb-4 mx-auto"></div>
              <div className="w-1/2 h-1 bg-blue-500/20 rounded-full mx-auto"></div>
            </div>
          </div>

          {/* Modern home indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[60px] h-[3px] bg-blue-300/50 rounded-full"></div>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute -inset-3 bg-blue-500/10 rounded-[40px] blur-lg -z-10"></div>

        {/* Floating elements around the device */}
        <div className="absolute -inset-12 -z-10">
          <motion.div
            className="absolute top-10 left-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-60"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1,
            }}
          ></motion.div>

          <motion.div
            className="absolute bottom-20 right-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 opacity-60"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.5,
            }}
          ></motion.div>

          <motion.div
            className="absolute top-1/2 right-10 w-4 h-4 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 opacity-60"
            animate={{
              y: [0, -10, 0],
              x: [0, -5, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 2,
            }}
          ></motion.div>

          <motion.div
            className="absolute bottom-10 left-10 w-5 h-5 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 opacity-60"
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1.5,
            }}
          ></motion.div>
        </div>
      </motion.div>

      {/* Reflection effect - integrates with the UI */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[180px] h-[25px] bg-blue-500/5 blur-md rounded-full"></div>
    </div>
  )
}
