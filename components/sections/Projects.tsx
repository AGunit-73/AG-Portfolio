"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Agentic RAG Platform",
    tech: ["LLMs", "RAG", "Python", "FastAPI"],
    description: "Advanced legal document summarization system using Large Language Models and Retrieval-Augmented Generation for intelligent document processing.",
    github: "#",
  },
  {
    title: "RFQ Matching Platform",
    tech: ["FastAPI", "Pinecone", "Python", "ML"],
    description: "Intelligent document matching platform using vector databases and semantic search for automated RFQ processing and vendor matching.",
    github: "https://github.com/AGunit-73/Intelligent-Document-Matcher",
  },
  {
    title: "IoT Mixer Control System",
    tech: ["React", "Flask", "Raspberry Pi", "IoT"],
    description: "Real-time industrial mixer control system with web interface, sensor monitoring, and automated control algorithms for manufacturing processes.",
    github: "https://github.com/AGunit-73/industrial-edge-controller-case-study",
  },
  {
    title: "E-commerce MVP",
    tech: ["Next.js", "Stripe", "GitHub Actions", "CI/CD"],
    description: "Full-stack e-commerce platform with payment integration, automated deployment pipeline, and modern responsive design for seamless shopping experience.",
    github: "https://github.com/AGunit-73/Ecom-shop",
  },
  {
    title: "AI Food Generator",
    tech: ["ResNet", "Gemini API", "Streamlit", "Computer Vision"],
    description: "AI-powered food recognition and recipe generation system using deep learning models and generative AI for culinary creativity.",
    github: "https://github.com/chandu659/NutrinexAI",
  },
  {
    title: "Inflation Predictor",
    tech: ["KNN", "LogReg", "Python", "Data Viz"],
    description: "Machine learning model for economic forecasting with interactive visualizations of macroeconomic data and predictive analytics dashboard.",
    github: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 backdrop-blur-sm">
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
  )
}
