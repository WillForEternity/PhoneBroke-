"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useAnimationControls } from "framer-motion"

export default function ModernDeviceCharacter() {
  const bodyControls = useAnimationControls()
  const eyesControls = useAnimationControls()

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    startBodyIdleLoop()
    startEyeLoop()
    return () => {
      isMounted.current = false;
      bodyControls.stop();
      eyesControls.stop();
    }
  }, [bodyControls, eyesControls])


  const startBodyIdleLoop = async () => {
    while (isMounted.current) {
      if (!isMounted.current) break;
      const randomAnimation = Math.random()
      try {
        if (randomAnimation < 0.3) {
          await bodyControls.start({
            y: [0, -8, 0],
            transition: { duration: 3, ease: "easeInOut" },
          })
        } else if (randomAnimation < 0.6) {
          await bodyControls.start({
            rotate: [0, -2, 2, -1, 1, 0],
            transition: { duration: 3.5, ease: "easeInOut" },
          })
        } else if (randomAnimation < 0.8) {
          await bodyControls.start({
            y: [0, -12, 0],
            scaleY: [1, 0.97, 1.02, 1],
            scaleX: [1, 1.02, 0.98, 1],
            transition: { duration: 1.2, ease: "easeInOut" },
          })
        } else {
          await bodyControls.start({
            rotate: [0, Math.random() > 0.5 ? 4 : -4, 0],
            transition: { duration: 1.0, ease: "circOut" },
          })
        }
      } catch (e) {
        // Animation was interrupted
      }
      if (!isMounted.current) break;
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000 + 1500))
    }
  }

  const startEyeLoop = async () => {
    while (isMounted.current) {
      if (!isMounted.current) break;
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 2500 + 1500))
      if (!isMounted.current) break;
      const action = Math.random();
      try {
        if (action < 0.6) {
          await eyesControls.start({
            scaleY: [1, 0.1, 1],
            scaleX: [1, 1, 1],
            transition: { duration: 0.15 },
          })
        } else {
          const gazeX = (Math.random() - 0.5) * 4;
          const gazeY = (Math.random() - 0.5) * 2;
          await eyesControls.start({
            x: [0, gazeX, 0],
            y: [0, gazeY, 0],
            transition: { duration: 0.7, ease: "easeInOut" },
          })
        }
      } catch(e) {
        // Eye animation interrupted
      }
    }
  }

  // Updated eyeStyle to use cyan
  const eyeStyle = "w-5 h-5 rounded-full bg-cyan-300 origin-center";

  return (
    // Updated main background to dark slate, similar to logo's dark background
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient background elements - updated to cyan */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-[15%] left-[10%] w-24 h-24 rounded-full bg-cyan-600/10 blur-xl" // Cyan tint
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-32 h-32 rounded-full bg-cyan-500/10 blur-xl" // Cyan tint
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
      </div>

      <motion.div
        animate={bodyControls}
        className="relative z-10"
        // Updated drop shadow to cyan
        style={{ filter: "drop-shadow(0 10px 15px rgba(34, 211, 238, 0.25))" }} // cyan-400 with 25% opacity
      >
        {/* Device body - updated to cyan gradient */}
        <div className="w-[180px] h-[360px] bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-[30px] relative overflow-hidden">
          {/* Screen area - updated to black for deep contrast, like logo's inner dark area */}
          <div className="absolute top-0 left-0 right-0 bottom-0 m-[8px] rounded-[24px] bg-black overflow-hidden">
            {/* Camera notch - adjusted for new scheme */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[50px] h-[14px] bg-slate-900 rounded-b-xl flex items-center justify-center">
              {/* Small dot updated to cyan */}
              <div className="w-2 h-2 rounded-full bg-cyan-500/50 mr-4"></div>
              <div className="w-3 h-3 rounded-full bg-slate-800 border-[1.5px] border-slate-700"></div>
            </div>

            {/* Face/Expression */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px]">
              {/* Eyes (style updated via eyeStyle const) */}
              <motion.div className="flex justify-center gap-8 mb-5" animate={eyesControls}>
                <div className={eyeStyle}></div>
                <div className={eyeStyle}></div>
              </motion.div>

              {/* Mouth - updated to cyan */}
              <motion.div
                className="w-10 h-1.5 bg-cyan-300 mx-auto rounded-full"
              ></motion.div>
            </div>

            {/* Subtle UI elements - updated to cyan */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[120px]">
              <div className="w-full h-1 bg-cyan-400/20 rounded-full mb-4"></div>
              <div className="w-3/4 h-1 bg-cyan-400/20 rounded-full mb-4 mx-auto"></div>
              <div className="w-1/2 h-1 bg-cyan-400/20 rounded-full mx-auto"></div>
            </div>
          </div>
          {/* Modern home indicator - updated to cyan */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[60px] h-[3px] bg-cyan-300/50 rounded-full"></div>
        </div>

        {/* Subtle glow effect - updated to cyan */}
        <div className="absolute -inset-3 bg-cyan-500/15 rounded-[40px] blur-lg -z-10"></div>

        {/* Floating elements - updated to cyan gradients */}
        <div className="absolute -inset-12 -z-10">
          <motion.div
            className="absolute top-10 left-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-500 opacity-60"
            animate={{ y: [0, -15, 0], x: [0, 10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute bottom-20 right-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-200 to-cyan-400 opacity-60"
            animate={{ y: [0, 20, 0], x: [0, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute top-1/2 right-10 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-300 opacity-60"
            animate={{ y: [0, -10, 0], x: [0, -5, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-200 to-cyan-400 opacity-60"
            animate={{ y: [0, 15, 0], x: [0, 10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.5 }}
          />
        </div>
      </motion.div>

      {/* Reflection effect - updated to cyan */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[180px] h-[25px] bg-cyan-500/10 blur-md rounded-full"></div>
    </div>
  )
}