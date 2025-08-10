"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
        Abhishek Gurudwar
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
        AI Engineer • Full Stack Developer • Agentic Systems Architect
      </p>
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl">
        Building intelligent, scalable AI platforms with LLMs, RAG, FastAPI, and React.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          View Portfolio
        </Button>
        <div className="flex gap-3">
          <Button variant="outline" size="lg">
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
          <Button variant="outline" size="icon">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
