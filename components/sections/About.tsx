"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

type ImageEntry = string

function GalleryImage({ src, priority = false }: { src: string; priority?: boolean }) {
  return (
    <Image
      src={src}
      alt={`About photo`}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
      className="object-cover object-center"
      priority={priority}
    />
  )
}

function GalleryImageLarge({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt={`About photo enlarged`}
      fill
      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 960px"
      className="object-cover object-center"
    />
  )
}

export default function About() {
  const [activeSrc, setActiveSrc] = useState<string | null>(null)
  const [images, setImages] = useState<ImageEntry[]>([])

  useEffect(() => {
    let mounted = true
    fetch('/api/images')
      .then((r) => r.json())
      .then((data) => {
        if (mounted && Array.isArray(data.images)) setImages(data.images)
      })
      .catch(() => {})
    return () => {
      mounted = false
    }
  }, [])
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 text-center">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">About</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7 max-w-3xl mx-auto">
        I think in products, not tickets. I scope for impact, communicate trade-offs early,
        and instrument what I ship. My toolkit spans Python backends, React/Next.js frontends,
        cloud-native delivery, and applied AI from agentic flows and RAG to fine tuning used
        only when it beats simpler options. I work in Agile/XP rhythms and keep a crisp line to stakeholders
      </p>

      {/* Gallery with in-card zoom */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <Card
            key={src}
            className="p-0 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-shadow duration-200 hover:shadow-lg cursor-pointer"
            onMouseEnter={() => setActiveSrc(src)}
            onMouseLeave={() => setActiveSrc((curr) => (curr === src ? null : curr))}
          >
            <div className="relative w-full aspect-[4/3] bg-slate-100 dark:bg-slate-900">
              <GalleryImage src={src} priority={idx === 0} />
            </div>
          </Card>
        ))}
      </div>

      {/* Centered pop-out overlay */}
      {activeSrc !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 pointer-events-none">
          <div className="relative w-[92vw] sm:w-[80vw] md:w-[720px] lg:w-[880px] xl:w-[960px] max-w-screen aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
            <GalleryImageLarge src={activeSrc} />
          </div>
        </div>
      )}
    </section>
  );
}
