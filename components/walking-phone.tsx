"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

type AnimationState = "walking" | "jumping" | "waving" | "excited"

export default function WalkingPhone() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [animationState, setAnimationState] = useState<AnimationState>("walking")

  // Cycle through animations automatically
  useEffect(() => {
    const animations: AnimationState[] = ["walking", "jumping", "waving", "excited"]
    let currentIndex = 0

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % animations.length
      setAnimationState(animations[currentIndex])
    }, 5000) // Change animation every 5 seconds

    return () => clearInterval(intervalId)
  }, [])

  // Animation variants for the phone body
  const phoneVariants = {
    walking: {
      y: [0, -10, 0],
      rotate: 0,
      transition: {
        y: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    },
    jumping: {
      y: [0, -40, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 0.8,
        times: [0, 0.4, 1],
        ease: ["easeOut", "easeIn"],
        repeat: 1,
        repeatDelay: 0.2,
      },
    },
    waving: {
      rotate: [-2, 2, -2],
      transition: {
        rotate: {
          repeat: 2,
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    },
    excited: {
      y: [0, -5, 0, -5, 0],
      x: [-5, 5, -5, 5, 0],
      transition: {
        duration: 0.5,
        repeat: 1,
      },
    },
  }

  // Animation variants for the left leg
  const leftLegVariants = {
    walking: {
      rotate: [0, 15, 0, -15, 0],
      transition: {
        rotate: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.2,
          ease: "easeInOut",
        },
      },
    },
    jumping: {
      rotate: [0, 30, 0],
      transition: {
        duration: 0.8,
        times: [0, 0.4, 1],
        ease: ["easeOut", "easeIn"],
      },
    },
    waving: {
      rotate: 0,
    },
    excited: {
      rotate: [0, 20, -20, 20, 0],
      transition: {
        duration: 0.5,
        repeat: 1,
      },
    },
  }

  // Animation variants for the right leg
  const rightLegVariants = {
    walking: {
      rotate: [0, -15, 0, 15, 0],
      transition: {
        rotate: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.2,
          ease: "easeInOut",
        },
      },
    },
    jumping: {
      rotate: [0, -30, 0],
      transition: {
        duration: 0.8,
        times: [0, 0.4, 1],
        ease: ["easeOut", "easeIn"],
      },
    },
    waving: {
      rotate: 0,
    },
    excited: {
      rotate: [0, -20, 20, -20, 0],
      transition: {
        duration: 0.5,
        repeat: 1,
      },
    },
  }

  // Animation variants for the left arm
  const leftArmVariants = {
    walking: {
      rotate: [0, -15, 0, 15, 0],
      transition: {
        rotate: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.2,
          ease: "easeInOut",
        },
      },
    },
    jumping: {
      rotate: [0, 45, 0],
      transition: {
        duration: 0.8,
        times: [0, 0.4, 1],
        ease: ["easeOut", "easeIn"],
      },
    },
    waving: {
      rotate: [0, 0, 0],
      transition: {
        rotate: {
          duration: 0.5,
        },
      },
    },
    excited: {
      rotate: [0, 30, -30, 30, 0],
      transition: {
        duration: 0.5,
        repeat: 1,
      },
    },
  }

  // Animation variants for the right arm
  const rightArmVariants = {
    walking: {
      rotate: [0, 15, 0, -15, 0],
      transition: {
        rotate: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.2,
          ease: "easeInOut",
        },
      },
    },
    jumping: {
      rotate: [0, -45, 0],
      transition: {
        duration: 0.8,
        times: [0, 0.4, 1],
        ease: ["easeOut", "easeIn"],
      },
    },
    waving: {
      rotate: [0, -45, 0, -45, 0, -45, 0],
      transition: {
        rotate: {
          duration: 1.5,
          times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
          ease: "easeInOut",
        },
      },
    },
    excited: {
      rotate: [0, -30, 30, -30, 0],
      transition: {
        duration: 0.5,
        repeat: 1,
      },
    },
  }

  // Animation variants for the screen content
  const screenContentVariants = {
    walking: {
      opacity: 1,
    },
    jumping: {
      opacity: 1,
    },
    waving: {
      opacity: 1,
    },
    excited: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.5,
        repeat: 1,
      },
    },
  }

  // Animation label to display current state
  const animationLabels = {
    walking: "Walking",
    jumping: "Jumping",
    waving: "Waving",
    excited: "Excited",
  }

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col items-center justify-center">
      <motion.div
        className="relative"
        animate={animationState}
        variants={phoneVariants}
        onClick={() => {
          // Cycle through animations on click
          const states: AnimationState[] = ["walking", "jumping", "waving", "excited"]
          const currentIndex = states.indexOf(animationState)
          const nextIndex = (currentIndex + 1) % states.length
          setAnimationState(states[nextIndex])
        }}
      >
        {/* Phone Body */}
        <div className="w-40 h-72 bg-blue-600 rounded-3xl relative overflow-hidden border-4 border-blue-700 shadow-lg cursor-pointer">
          {/* Phone Screen */}
          <div className="w-[90%] h-[85%] bg-slate-800 absolute top-2 left-1/2 transform -translate-x-1/2 rounded-2xl">
            {/* Phone Camera Notch */}
            <div className="w-12 h-6 bg-blue-600 absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-xl"></div>

            {/* Screen Content - Changes based on animation state */}
            <motion.div
              className="flex flex-col items-center justify-center h-full text-white"
              variants={screenContentVariants}
            >
              {animationState === "walking" && (
                <>
                  <div className="w-16 h-16 border-4 border-white rounded-full mb-2 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-white rounded-full"></div>
                  </div>
                  <div className="w-16 h-1 bg-white mb-1"></div>
                  <div className="w-12 h-1 bg-white mb-1"></div>
                  <div className="w-8 h-1 bg-white"></div>
                </>
              )}

              {animationState === "jumping" && (
                <>
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="w-16 h-1 bg-white mb-1"></div>
                  <div className="w-12 h-1 bg-white mb-1"></div>
                  <div className="w-8 h-1 bg-white"></div>
                </>
              )}

              {animationState === "waving" && (
                <>
                  <div className="text-2xl mb-2">👋</div>
                  <div className="w-16 h-1 bg-white mb-1"></div>
                  <div className="w-12 h-1 bg-white mb-1"></div>
                  <div className="w-8 h-1 bg-white"></div>
                </>
              )}

              {animationState === "excited" && (
                <>
                  <div className="text-2xl mb-2">✨</div>
                  <div className="w-16 h-1 bg-white mb-1"></div>
                  <div className="w-12 h-1 bg-white mb-1"></div>
                  <div className="w-8 h-1 bg-white"></div>
                </>
              )}
            </motion.div>
          </div>

          {/* Home Button */}
          <div className="w-12 h-1 bg-slate-300 absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-full"></div>
        </div>

        {/* Phone Legs */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between px-4 translate-y-[95%]">
          {/* Left Leg */}
          <motion.div className="w-4 bg-blue-700 h-16 rounded-b-xl origin-top" variants={leftLegVariants}></motion.div>

          {/* Right Leg */}
          <motion.div className="w-4 bg-blue-700 h-16 rounded-b-xl origin-top" variants={rightLegVariants}></motion.div>
        </div>

        {/* Phone Arms */}
        <div className="absolute top-1/4 w-full flex justify-between">
          {/* Left Arm */}
          <motion.div
            className="w-3 bg-blue-700 h-12 rounded-full -translate-x-full origin-top"
            variants={leftArmVariants}
          ></motion.div>

          {/* Right Arm */}
          <motion.div
            className="w-3 bg-blue-700 h-12 rounded-full translate-x-full origin-top"
            variants={rightArmVariants}
          ></motion.div>
        </div>
      </motion.div>

      {/* Animation state label */}
      <div className="mt-8 bg-blue-900/30 px-4 py-2 rounded-full text-blue-300 text-sm font-medium">
        {animationLabels[animationState]} (Click to change)
      </div>
    </div>
  )
}
