"use client"

import { Badge } from "@/components/ui/badge"

const techStack = [
  "OpenAI", "Claude", "RAG", "LangChain", "Agentic AI", "HuggingFace","SentenceTransformers",  "PyTorch", "TensorFlow", "Scikit-learn", "Python", "FastAPI", "Flask", "Node.js", "Java", "Spring Boot", "REST APIs", "Microservices", "Next.js", "React.js", "TypeScript", "JavaScript", "TailwindCSS", "Redux", "Zustand", "AWS", "EC2", "S3", "RDS", "Lambda", "EKS", "GCP", "Docker","GIT", "Jenkins", "GitHub Actions", "CI/CD", "PostgreSQL", "MongoDB", "Supabase", "Vector Databases", "Agile", "TDD", "Pair Programming","Windsurf IDE","Cursor IDE"
]

export default function TechStack() {
  return (
    <section id="skills" className="relative z-10 py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <div key={index} className="group w-full">
              <Badge
                variant="outline"
                className="w-full min-h-14 justify-center py-3 px-4 text-sm font-medium hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-900/20 dark:hover:border-blue-800 transition-all duration-200 cursor-default"
              >
                {tech}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
