"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function NavBar() {
  const { theme, setTheme } = useTheme()
  return (
    <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AG
        </div>
        <Avatar className="h-8 w-8 border border-slate-200 dark:border-slate-800">
          <AvatarImage src="/images/Profile.jpeg" alt="Abhishek avatar" />
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
        <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
        <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
        <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
        <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="ml-4"
      >
        {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    </nav>
  )
}
