"use client"

import { useState, useEffect } from "react"

export default function GradientBackground() {
  type BlobDef = {
    className: string
    style: React.CSSProperties
  }

  // Color palettes for blobs - light mode and dark mode variants
  const palettes = [
    { light: "bg-blue-300", dark: "dark:bg-blue-500" },
    { light: "bg-purple-300", dark: "dark:bg-purple-500" },
    { light: "bg-pink-300", dark: "dark:bg-pink-500" },
    { light: "bg-cyan-300", dark: "dark:bg-cyan-500" },
    { light: "bg-indigo-300", dark: "dark:bg-indigo-500" },
    { light: "bg-fuchsia-300", dark: "dark:bg-fuchsia-500" },
  ]

  // Shape classes for blobs
  const shapes = [
    "rounded-full",
    "rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",
    "rounded-[50%_50%_30%_70%/60%_40%_70%_40%]",
    "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
    "rounded-[40%_60%_60%_40%/50%_60%_40%_50%]",
  ]

  // Animation delay classes
  const delays = [
    "animate-delay-0",
    "animate-delay-300",
    "animate-delay-600",
    "animate-delay-900",
    "animate-delay-1200",
  ]

  const [blobs, setBlobs] = useState<BlobDef[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Generate blobs with random positions/sizes/colors
    const count = 8 // Number of blobs to generate
    const next: BlobDef[] = Array.from({ length: count }).map(() => {
      const palette = palettes[Math.floor(Math.random() * palettes.length)]
      const shape = shapes[Math.floor(Math.random() * shapes.length)]
      const delay = delays[Math.floor(Math.random() * delays.length)]

      // Size between 180px and 450px
      const size = Math.floor(180 + Math.random() * 270)
      // Position anywhere within viewport with some overflow for edges
      const top = Math.floor(-10 + Math.random() * 110) // -10%..100%
      const left = Math.floor(-10 + Math.random() * 110)

      return {
        className:
          `${palette.light} ${palette.dark} ${shape} ${delay} ` +
          // Blur and animation effects
          `blur-3xl md:blur-4xl animate-pulse ` +
          // Light and dark mode adjustments - lower opacity
          `opacity-25 brightness-110 saturate-125 ` +
          `dark:opacity-30 dark:brightness-125 dark:saturate-150`,
        style: {
          position: "absolute",
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "screen", // Helps with color blending
          zIndex: "-1", // Ensure blobs are behind content
        },
      }
    })
    setBlobs(next)
    setMounted(true)
  }, [])

  if (!mounted) {
    // Avoid hydration mismatch by rendering an empty container until client mounts
    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]" />
  }

  return (
    <>
      {/* Background container with fixed position */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        {/* Blobs */}
        {blobs.map((b, i) => (
          <div key={i} className={b.className} style={b.style} />
        ))}
        
        {/* Unified overlay to ensure consistent appearance across sections */}
        <div className="absolute inset-0 bg-background/5 backdrop-blur-[1px]" />
      </div>
    </>
  )
}
