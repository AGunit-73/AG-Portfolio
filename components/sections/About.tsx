"use client"

import Image from "next/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"

const imageIds = [1, 2, 3]

function GalleryImage({ id, priority = false }: { id: number; priority?: boolean }) {
  const exts = [
    "jpg", "jpeg", "png", "webp",
    "JPG", "JPEG", "PNG", "WEBP"
  ] as const
  const [idx, setIdx] = useState(0)
  const src = `/images/${id}.${exts[idx]}`

  // When all extensions fail, show a full-bleed placeholder
  if (idx >= exts.length) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-500 text-sm">
        Image not found
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={`About photo ${id}`}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
      className="object-cover object-center"
      priority={priority}
      onError={() => {
        // advance to next extension; if none left, idx will exceed and placeholder will render
        setIdx(idx + 1)
      }}
    />
  )
}

function GalleryImageLarge({ id }: { id: number }) {
  const exts = [
    "jpg", "jpeg", "png", "webp",
    "JPG", "JPEG", "PNG", "WEBP"
  ] as const
  const [idx, setIdx] = useState(0)
  const src = `/images/${id}.${exts[idx]}`

  return (
    <Image
      src={src}
      alt={`About photo ${id} enlarged`}
      fill
      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 960px"
      className="object-cover object-center"
      onError={() => {
        if (idx < exts.length - 1) setIdx(idx + 1)
      }}
    />
  )
}

export default function About() {
  const [activeId, setActiveId] = useState<number | null>(null)
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 text-center">
      <h1 className="text-2xl font-semibold">About</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7 max-w-3xl mx-auto">
        I think in products, not tickets. I scope for impact, communicate trade-offs early,
        and instrument what I ship. My toolkit spans Python backends, React/Next.js frontends,
        cloud-native delivery, and applied AI from agentic flows and RAG to fine tuning used
        only when it beats simpler options. I work in Agile/XP rhythms and keep a crisp line to stakeholders.
      </p>

      {/* Gallery with in-card zoom */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imageIds.map((id) => (
          <Card
            key={id}
            className="p-0 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-shadow duration-200 hover:shadow-lg cursor-pointer"
            onMouseEnter={() => setActiveId(id)}
            onMouseLeave={() => setActiveId((curr) => (curr === id ? null : curr))}
          >
            <div className="relative w-full aspect-[4/3] bg-slate-100 dark:bg-slate-900">
              <GalleryImage id={id} priority={id === 1} />
            </div>
          </Card>
        ))}
      </div>

      {/* Centered pop-out overlay */}
      {activeId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 pointer-events-none">
          <div className="relative w-[92vw] sm:w-[80vw] md:w-[720px] lg:w-[880px] xl:w-[960px] max-w-screen aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
            <GalleryImageLarge id={activeId} />
          </div>
        </div>
      )}
    </section>
  );
}
