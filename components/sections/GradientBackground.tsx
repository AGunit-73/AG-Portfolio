"use client"

import { useState, useEffect, useCallback } from "react"

export default function GradientBackground() {
  // Define position type for type safety
  type Position = {
    top: number
    left: number
  }
  
  // Define blob state type
  interface BlobState {
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
    isFadingOut: boolean
    readyToReappear: boolean // Flag to indicate when blob should reappear at new position
    stableState: boolean // Flag to indicate if blob is in a stable state (fully visible or invisible)
    lastStateChangeTime: number // Timestamp of last state change for delay calculation
  }

  const palettes = [
    { light: "bg-blue-300", dark: "dark:bg-blue-500" },
    { light: "bg-purple-300", dark: "dark:bg-purple-500" },
    { light: "bg-pink-300", dark: "dark:bg-pink-500" },
    { light: "bg-cyan-300", dark: "dark:bg-cyan-500" },
    { light: "bg-indigo-300", dark: "dark:bg-indigo-500" },
    { light: "bg-fuchsia-300", dark: "dark:bg-fuchsia-500" },
    { light: "bg-teal-300", dark: "dark:bg-teal-500" },
    { light: "bg-violet-300", dark: "dark:bg-violet-500" },
  
    // Added green shades
    { light: "bg-green-300", dark: "dark:bg-green-500" },
    { light: "bg-emerald-300", dark: "dark:bg-emerald-500" },
    { light: "bg-lime-300", dark: "dark:bg-lime-500" },
  
    // Added yellow shades
    { light: "bg-yellow-300", dark: "dark:bg-yellow-500" },
    { light: "bg-amber-300", dark: "dark:bg-amber-500" },
  ];
  

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
  const BLOB_COUNT = 12 // More blobs for better coverage
  const MIN_SIZE = 220 // Slightly larger minimum size
  const MAX_SIZE = 550 // Larger maximum size
  const MIN_TRANSITION_DURATION = 2 // seconds - even faster transitions
  const MAX_TRANSITION_DURATION = 6 // seconds - faster transitions
  const TRANSITION_CHECK_INTERVAL = 50 // ms - more frequent updates
  const NEW_TRANSITION_INTERVAL = 800 // ms - more frequent blob changes
  const BLOB_OPACITY = 0.5 // higher opacity for better visibility
  const DELAY_BEFORE_REAPPEAR = 1000 // ms - delay before reappearing in new position
  const DELAY_BEFORE_FADE_OUT = 2000 // ms - delay before starting to fade out

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
      top: getRandomNumber(-20, 120), // -20% to 120% (more overflow for more visible movement)
      left: getRandomNumber(-20, 120)
    }
  }
  
  // Generate a random blob
  const generateBlob = useCallback((initialOpacity: number = 0): BlobState => {
    const id = Math.random().toString(36).substring(2, 9)
    const color = getRandomFromArray(palettes)
    const shape = getRandomFromArray(shapes)
    const size = getRandomNumber(MIN_SIZE, MAX_SIZE)
    const currentPosition = getRandomPosition()
    const targetPosition = getRandomPosition()
    const transitionDuration = getRandomNumber(MIN_TRANSITION_DURATION, MAX_TRANSITION_DURATION)
    const now = Date.now()
    
    return {
      id,
      color,
      shape,
      size,
      currentPosition,
      targetPosition,
      opacity: initialOpacity, // Start completely invisible
      transitionProgress: 0,
      isFadingOut: false, // Start fading in
      readyToReappear: false, // Not ready to reappear yet
      stableState: initialOpacity === 0, // If starting invisible, it's in a stable state
      lastStateChangeTime: now, // Track when this blob was created
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

  // Animation loop for blinking effect
  useEffect(() => {
    if (!mounted) return
    
    // We don't need the animation frame for continuous movement anymore
    // Instead, we'll use setInterval to handle the fading in/out effect
    
    // Function to update a single blob's state (fade in or out)
    const updateBlobState = (blob: BlobState): BlobState => {
      const now = Date.now()
      const timeSinceLastChange = now - blob.lastStateChangeTime
      
      // Check if blob is in a stable state (fully visible or invisible) and needs to wait
      if (blob.stableState) {
        // If fully visible and waiting to start fading out
        if (!blob.isFadingOut && blob.opacity >= BLOB_OPACITY) {
          // Wait for delay before starting to fade out
          if (timeSinceLastChange < DELAY_BEFORE_FADE_OUT) {
            return blob // Keep waiting
          }
          
          // Time to start fading out
          return {
            ...blob,
            isFadingOut: true,
            stableState: false,
            lastStateChangeTime: now
          }
        }
        
        // If fully invisible and waiting to reappear
        if (blob.isFadingOut && blob.opacity <= 0 && blob.readyToReappear) {
          // Wait for delay before reappearing
          if (timeSinceLastChange < DELAY_BEFORE_REAPPEAR) {
            return blob // Keep waiting
          }
          
          // Time to reappear at a new position
          const newPosition = getRandomPosition()
          
          // Ensure the new position is VERY far from the current one
          const minDistance = 100 // Extreme distance to ensure positions are far apart
          
          // Calculate distance between current and new position
          const topDiff = Math.abs(newPosition.top - blob.currentPosition.top)
          const leftDiff = Math.abs(newPosition.left - blob.currentPosition.left)
          
          // If either dimension is too close, force a much larger distance
          if (topDiff < minDistance) {
            // Move in the opposite direction of current position to maximize distance
            const direction = blob.currentPosition.top > 50 ? -1 : 1 // Away from current half of screen
            newPosition.top = Math.max(0, Math.min(100, blob.currentPosition.top + (direction * minDistance)))
          }
          
          if (leftDiff < minDistance) {
            // Move in the opposite direction of current position to maximize distance
            const direction = blob.currentPosition.left > 50 ? -1 : 1 // Away from current half of screen
            newPosition.left = Math.max(0, Math.min(100, blob.currentPosition.left + (direction * minDistance)))
          }
          
          // Add some randomness to the final position
          newPosition.top += (Math.random() - 0.5) * 20
          newPosition.left += (Math.random() - 0.5) * 20
          
          // Start fading in at the new position
          return {
            ...blob,
            currentPosition: newPosition,
            targetPosition: newPosition, // Same position (no interpolation)
            opacity: 0, // Start completely invisible
            isFadingOut: false, // Now fading in
            readyToReappear: false, // Reset flag
            stableState: false,
            lastStateChangeTime: now,
            transitionProgress: 0,
            transitionDuration: 2 // Fixed 2 second fade-in time
          }
        }
      }
      
      // If blob is fading out and has reached zero opacity
      if (blob.isFadingOut && blob.opacity <= 0) {
        // Mark as ready to reappear but keep invisible
        return {
          ...blob,
          opacity: 0, // Completely invisible
          readyToReappear: true,
          stableState: true, // Now in a stable state (fully invisible)
          lastStateChangeTime: now
        }
      }
      
      // If blob is fading in and has reached full opacity
      if (!blob.isFadingOut && blob.opacity >= BLOB_OPACITY) {
        // Reached full visibility
        return {
          ...blob,
          opacity: BLOB_OPACITY,
          stableState: true, // Now in a stable state (fully visible)
          lastStateChangeTime: now
        }
      }
      
      // Otherwise continue fading in or out
      // Use a smaller fade step for smoother transitions over ~2 seconds
      const fadeStep = 0.025 // Smaller step for smoother 2-second transitions
      const newOpacity = blob.isFadingOut 
        ? Math.max(0, blob.opacity - fadeStep) // Fading out completely
        : Math.min(BLOB_OPACITY, blob.opacity + fadeStep) // Fading in from completely invisible
      
      return {
        ...blob,
        opacity: newOpacity
      }
    }
    
    // Update all blobs periodically
    const blinkInterval = setInterval(() => {
      setBlobs(prevBlobs => prevBlobs.map(updateBlobState))
    }, 100) // Update every 100ms for smooth fading
    
    // We don't need the blob refresh interval anymore since our blinking effect handles this
    // Just make sure we have enough blobs initially
    const ensureEnoughBlobs = setInterval(() => {
      setBlobs(prevBlobs => {
        // If we don't have enough blobs, add more
        if (prevBlobs.length < BLOB_COUNT) {
          const numToAdd = BLOB_COUNT - prevBlobs.length
          const newBlobs = [...prevBlobs]
          
          for (let i = 0; i < numToAdd; i++) {
            // Add a new blob that's fading in
            const newBlob = generateBlob(0) // Start with 0 opacity
            newBlob.isFadingOut = false // Make sure it's fading in
            newBlobs.push(newBlob)
          }
          
          return newBlobs
        }
        return prevBlobs
      })
    }, 1000) // Check once per second
    
    // Cleanup intervals on unmount
    return () => {
      clearInterval(blinkInterval)
      clearInterval(ensureEnoughBlobs)
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
      mixBlendMode: "screen" as React.CSSProperties["mixBlendMode"],
      zIndex: -1,
      transition: "opacity 0.8s ease-in-out", // Only transition opacity, not position
      willChange: "top, left, opacity", // Optimize for animations
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
