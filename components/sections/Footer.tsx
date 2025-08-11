"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 px-6 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 dark:text-gray-300">
          © 2025 Abhishek Gurudwar. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Button asChild variant="ghost" size="icon">
            <a
              href="https://github.com/AGunit-73"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a
              href="https://linkedin.com/in/abhishek-gurudwar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a
              href="mailto:Abhishekgurudwar1997@gmail.com"
              aria-label="Email Abhishek"
            >
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}
