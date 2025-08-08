'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Moon, Sun, Github, Linkedin, Mail, Download, ExternalLink, MapPin, Calendar } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      title: "Agentic RAG Platform",
      tech: ["LLMs", "RAG", "Python", "FastAPI"],
      description: "Advanced legal document summarization system using Large Language Models and Retrieval-Augmented Generation for intelligent document processing.",
      github: "#"
    },
    {
      title: "RFQ Matching Platform",
      tech: ["FastAPI", "Pinecone", "Python", "ML"],
      description: "Intelligent document matching platform using vector databases and semantic search for automated RFQ processing and vendor matching.",
      github: "#"
    },
    {
      title: "IoT Mixer Control System",
      tech: ["React", "Flask", "Raspberry Pi", "IoT"],
      description: "Real-time industrial mixer control system with web interface, sensor monitoring, and automated control algorithms for manufacturing processes.",
      github: "#"
    },
    {
      title: "E-commerce MVP",
      tech: ["Next.js", "Stripe", "GitHub Actions", "CI/CD"],
      description: "Full-stack e-commerce platform with payment integration, automated deployment pipeline, and modern responsive design for seamless shopping experience.",
      github: "#"
    },
    {
      title: "AI Food Generator",
      tech: ["ResNet", "Gemini API", "Streamlit", "Computer Vision"],
      description: "AI-powered food recognition and recipe generation system using deep learning models and generative AI for culinary creativity.",
      github: "#"
    },
    {
      title: "Inflation Predictor",
      tech: ["KNN", "LogReg", "Python", "Data Viz"],
      description: "Machine learning model for economic forecasting with interactive visualizations of macroeconomic data and predictive analytics dashboard.",
      github: "#"
    }
  ]

  const experiences = [
    {
      title: "AI Engineer",
      company: "Metis Analytics",
      period: "2023 - Present",
      description: "Developing advanced AI solutions and machine learning models for data analytics and business intelligence platforms."
    },
    {
      title: "Software Engineering Lead",
      company: "Isolora",
      period: "2022 - 2023",
      description: "Led development teams in building scalable web applications and implementing best practices for software architecture."
    },
    {
      title: "Software Development Engineer",
      company: "Accenture",
      period: "2021 - 2022",
      description: "Developed enterprise-level applications and contributed to digital transformation projects for Fortune 500 clients."
    },
    {
      title: "Software Engineering Intern",
      company: "ProfEdge",
      period: "2020 - 2021",
      description: "Built web applications and gained hands-on experience in full-stack development and agile methodologies."
    }
  ]

  const techStack = [
    "FastAPI", "React", "LangChain", "GPT-4", "Claude", "Pinecone", 
    "Supabase", "PostgreSQL", "AWS", "GitHub Actions", "Docker", 
    "TensorFlow", "PyTorch", "Next.js", "Python", "TypeScript"
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Gradient Blobs */}
      {/* Enhanced Gradient Blobs */}
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

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AG
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

      {/* Hero Section */}
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

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="about" className="relative z-10 py-20 px-6 bg-white/30 dark:bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{exp.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="group">
                <Badge 
                  variant="outline" 
                  className="w-full justify-center py-3 px-4 text-sm font-medium hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-900/20 dark:hover:border-blue-800 transition-all duration-200 cursor-default"
                >
                  {tech}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6 bg-white/30 dark:bg-gray-800/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
            Interested in collaborating or have a project in mind? I'd love to hear from you.
          </p>
          
          <Card className="border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea placeholder="Tell me about your project or just say hello!" rows={5} />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-300">
              Or reach out directly at{' '}
              <a href="mailto:abhishek@example.com" className="text-blue-600 hover:underline">
                abhishek@example.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 Abhishek Gurudwar. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
