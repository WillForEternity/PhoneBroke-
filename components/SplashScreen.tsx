"use client"

import { useState, useEffect, ReactNode } from "react"

interface SplashProps { children: ReactNode }

export default function SplashScreen({ children }: SplashProps) {
  const [showSplash, setShowSplash] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setShowSplash(false), 1000)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {children}
      {showSplash && (
        <div className={`fixed inset-0 bg-slate-900 flex items-center justify-center z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <img src="/images/Logo.png" alt="Logo" className="h-[80vh] md:h-[90vh] w-auto mix-blend-lighten" />
        </div>
      )}
    </>
  )
}
