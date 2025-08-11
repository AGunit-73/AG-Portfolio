"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-purple-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
        Abhishek Gurudwar
      </h1>
      <h4 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 to-yellow-300 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
        I ship software that moves the metric.
      </h4>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
        AI Engineer • Full Stack Software Engineer • Agentic Systems Architect
      </p>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium max-w-3xl">
        Product-minded engineer who learns fast and delivers end-to-end Python/React, cloud, and applied AI (agentic, RAG, fine-tuning) when it matters.
      </p>
      <div className="mt-2 mb-8 flex flex-wrap items-center justify-center gap-3">
        {[
          '7× throughput on document ops',
          '90% latency cut at the edge',
          'MVP → production in 6 weeks',
          '~$1M annual operational efficiency',
          '~$150K audit overhead reduction',
          'Okta SSO/MFA across 5 apps'
        ].map((chip) => (
          <span
            key={chip}
            className="px-3 py-1 rounded-full text-sm border border-gray-300/60 dark:border-gray-700/60 bg-white/50 dark:bg-gray-900/40 backdrop-blur text-gray-700 dark:text-gray-300"
          >
            {chip}
          </span>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex gap-3">
          <Button variant="outline" size="lg" asChild>
            <a href="/resume/Abhishek_Gurudwar_Resume.pdf" download target="_blank" rel="noopener noreferrer" aria-label="Download Resume PDF">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/AGunit-73" target="_blank" rel="noopener noreferrer" aria-label="GitHub: AGunit-73">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://linkedin.com/in/abhishek-gurudwar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn: abhishek-gurudwar">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:abhishekgurudwar1997@gmail.com" aria-label="Email: abhishekgurudwar1997@gmail.com">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
