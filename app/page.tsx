'use client'

import { useState, useEffect } from 'react'
import GradientBackground from '@/components/sections/GradientBackground'
import NavBar from '@/components/sections/NavBar'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import TechStack from '@/components/sections/TechStack'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  /* projects moved to components/sections/Projects */

  /* experiences moved to components/sections/Experience */

  /* techStack moved to components/sections/TechStack */

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen transition-colors duration-300">
      <GradientBackground />
      <NavBar />
      <Hero />
      <Projects />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  )
}
