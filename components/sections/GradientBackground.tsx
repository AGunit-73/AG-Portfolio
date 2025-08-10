"use client"

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Large cyan/teal blob - top left */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-300/40 via-teal-400/30 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Large pink blob - top right */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-bl from-pink-300/35 via-rose-400/25 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Large purple blob - bottom right */}
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-gradient-to-tl from-purple-400/40 via-violet-500/30 to-indigo-400/25 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Medium teal blob - center left */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-gradient-to-r from-teal-300/30 via-cyan-400/20 to-blue-300/15 rounded-full blur-2xl animate-pulse delay-3000"></div>

      {/* Medium pink blob - bottom center */}
      <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-t from-pink-400/35 via-rose-300/25 to-orange-300/20 rounded-full blur-2xl animate-pulse delay-4000"></div>

      {/* Small accent blobs */}
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-violet-300/25 to-purple-400/15 rounded-full blur-xl animate-pulse delay-5000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-tr from-cyan-400/20 to-teal-300/15 rounded-full blur-xl animate-pulse delay-6000"></div>
    </div>
  )
}
