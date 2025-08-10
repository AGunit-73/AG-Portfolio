"use client"

import { useState, useEffect, useCallback } from "react"

export default function GradientBackground() {
  // Define position type for type safety
  type Position = {
    top: number
    left: number
  }
  
  // Define blob state for tracking transitions
  type BlobState = {
    id: string
    color: {
      light: string
      dark: string
    }
    shape: string
    size: number
    currentPosition: Position
    targetPosition: Position
    opacity: number
    transitionProgress: number // 0 to 1
    transitionDuration: number // seconds
  }

  // Color palettes for blobs - light mode and dark mode variants
  const palettes = [
    { light: "bg-blue-300", dark: "dark:bg-blue-500" },
    { light: "bg-purple-300", dark: "dark:bg-purple-500" },
    { light: "bg-pink-300", dark: "dark:bg-pink-500" },
    { light: "bg-cyan-300", dark: "dark:bg-cyan-500" },
    { light: "bg-indigo-300", dark: "dark:bg-indigo-500" },
    { light: "bg-fuchsia-300", dark: "dark:bg-fuchsia-500" },
    { light: "bg-teal-300", dark: "dark:bg-teal-500" },
    { light: "bg-violet-300", dark: "dark:bg-violet-500" },
  ]

  // Shape classes for blobs - more variety
  const shapes = [
    "rounded-full",
    "rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",
    "rounded-[50%_50%_30%_70%/60%_40%_70%_40%]",
    "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
    "rounded-[40%_60%_60%_40%/50%_60%_40%_50%]",
    "rounded-[70%_30%_50%_50%/30%_50%_70%_60%]",
    "rounded-[35%_65%_65%_35%/55%_45%_55%_45%]",
    "rounded-[45%_55%_25%_75%/65%_35%_65%_35%]",
  ]

  // Configuration
  const BLOB_COUNT = 10
  const MIN_SIZE = 180
  const MAX_SIZE = 450
  const MIN_TRANSITION_DURATION = 5 // seconds
  const MAX_TRANSITION_DURATION = 15 // seconds
  const TRANSITION_CHECK_INTERVAL = 100 // ms
  const NEW_TRANSITION_INTERVAL = 500 // ms
  const BLOB_OPACITY = 0.35

  const [blobs, setBlobs] = useState<BlobState[]>([])
  const [mounted, setMounted] = useState(false)

  // Helper functions for random generation
  const getRandomFromArray = <T,>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)]
  }
  
  const getRandomNumber = (min: number, max: number): number => {
    return min + Math.random() * (max - min)
  }
  
  const getRandomPosition = (): Position => {
    return {
      top: getRandomNumber(-10, 110), // -10% to 110% (slight overflow)
      left: getRandomNumber(-10, 110)
    }
  }
  
  // Generate a random blob
  const generateBlob = useCallback((initialOpacity: number = BLOB_OPACITY): BlobState => {
    const id = Math.random().toString(36).substring(2, 9)
    const color = getRandomFromArray(palettes)
    const shape = getRandomFromArray(shapes)
    const size = getRandomNumber(MIN_SIZE, MAX_SIZE)
    const currentPosition = getRandomPosition()
    const targetPosition = getRandomPosition()
    const transitionDuration = getRandomNumber(MIN_TRANSITION_DURATION, MAX_TRANSITION_DURATION)
    
    return {
      id,
      color,
      shape,
      size,
      currentPosition,
      targetPosition,
      opacity: initialOpacity,
      transitionProgress: 0,
      transitionDuration
    }
  }, []);

  // Initialize blobs
  useEffect(() => {
    // Generate initial set of blobs
    const initialBlobs: BlobState[] = Array.from({ length: BLOB_COUNT }).map(() => generateBlob())
    setBlobs(initialBlobs)
    setMounted(true)
  }, [generateBlob])

  // Animation loop for smooth transitions
  useEffect(() => {
    if (!mounted) return
    
    // Animation frame handler for smooth transitions
    let animationFrameId: number
    let lastTimestamp = 0
    
    const updateBlobPositions = (timestamp: number) => {
      // Calculate time delta in seconds
      const delta = lastTimestamp ? (timestamp - lastTimestamp) / 1000 : 0
      lastTimestamp = timestamp
      
      // Update blob transition progress
      setBlobs(prevBlobs => 
        prevBlobs.map(blob => {
          // Update transition progress
          const newProgress = Math.min(1, blob.transitionProgress + delta / blob.transitionDuration)
          
          // Interpolate between current and target positions
          const interpolatedTop = blob.currentPosition.top + 
            (blob.targetPosition.top - blob.currentPosition.top) * newProgress
          const interpolatedLeft = blob.currentPosition.left + 
            (blob.targetPosition.left - blob.currentPosition.left) * newProgress
          
          // If transition is complete, generate new target position
          if (newProgress >= 1) {
            return {
              ...blob,
              currentPosition: { ...blob.targetPosition },
              targetPosition: getRandomPosition(),
              transitionProgress: 0
            }
          }
          
          // Otherwise continue transition
          return {
            ...blob,
            transitionProgress: newProgress
          }
        })
      )
      
      // Continue animation loop
      animationFrameId = requestAnimationFrame(updateBlobPositions)
    }
    
    // Start animation loop
    animationFrameId = requestAnimationFrame(updateBlobPositions)
    
    // Periodically add/remove blobs to keep the scene dynamic
    const blobRefreshInterval = setInterval(() => {
      setBlobs(prevBlobs => {
        // Randomly select 1-2 blobs to replace
        const numToReplace = 1 + Math.floor(Math.random() * 2)
        const newBlobs = [...prevBlobs]
        
        for (let i = 0; i < numToReplace; i++) {
          // Find a blob to fade out
          const indexToReplace = Math.floor(Math.random() * prevBlobs.length)
          
          // Start fading it out by reducing opacity
          newBlobs[indexToReplace] = {
            ...newBlobs[indexToReplace],
            opacity: 0 // Start fading out
          }
          
          // Add a new blob that's fading in
          const newBlob = generateBlob(0) // Start with 0 opacity
          newBlobs.push(newBlob)
        }
        
        return newBlobs
      })
    }, NEW_TRANSITION_INTERVAL)
    
    // Cleanup animation and intervals on unmount
    return () => {
      cancelAnimationFrame(animationFrameId)
      clearInterval(blobRefreshInterval)
    }
  }, [mounted, generateBlob, getRandomPosition])

  // Helper function to create CSS styles for a blob
  const createBlobStyle = (blob: BlobState): React.CSSProperties => {
    // Calculate interpolated position based on transition progress
    const top = blob.currentPosition.top + 
      (blob.targetPosition.top - blob.currentPosition.top) * blob.transitionProgress
    const left = blob.currentPosition.left + 
      (blob.targetPosition.left - blob.currentPosition.left) * blob.transitionProgress
    
    return {
      position: "absolute",
      width: `${blob.size}px`,
      height: `${blob.size}px`,
      top: `${top}%`,
      left: `${left}%`,
      transform: "translate(-50%, -50%)",
      opacity: blob.opacity,
      mixBlendMode: "screen",
      zIndex: -1,
      transition: "opacity 1.5s ease-in-out",
    }
  }
  
  // Helper function to create class name for a blob
  const createBlobClassName = (blob: BlobState): string => {
    return `${blob.color.light} ${blob.color.dark} ${blob.shape} ` +
      // Blur effects
      `blur-3xl md:blur-4xl ` +
      // Light and dark mode adjustments - brightness/saturation
      `brightness-110 saturate-125 ` +
      `dark:brightness-125 dark:saturate-150`
  }

  if (!mounted) {
    // Avoid hydration mismatch by rendering an empty container until client mounts
    return <div className="fixed inset-0 -z-10 overflow-hidden" />
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Translucent overlay to ensure consistent background appearance */}
      <div className="absolute inset-0  backdrop-blur-sm" />
      
      {/* Gradient blobs */}
      {blobs.map(blob => (
        <div
          key={blob.id}
          className={createBlobClassName(blob)}
          style={createBlobStyle(blob)}
        />
      ))}
    </div>
  )
}
