"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react"

const experiences = [
  {
    title: "AI Engineer",
    company: "Metis Analytics",
    period: "01/2025 - Present",
    description: "Developing advanced AI solutions and machine learning models for data analytics and business intelligence platforms.",
  },
  {
    title: "Software Engineering Lead",
    company: "Saint Louis University",
    period: "08/2024 - 12/2024",
    description: "Led development teams in building scalable web applications and implementing best practices for software architecture.",
  },
  {
    title: "Teaching Assistant",
    company: "Saint Louis University",
    period: "08/2023 - 12/2024",
    description: "Assisted in delivering course content, mentoring students, and grading assignments to support effective learning outcomes.",
  },
  {
    title: "Software Development Engineer",
    company: "Accenture",
    period: "06/2020 - 03/2022",
    description: "Developed enterprise-level applications and contributed to digital transformation projects for Fortune 500 clients.",
  },
  {
    title: "Software Engineering Intern",
    company: "ProfEdge",
    period: "01/2020 - 05/2020",
    description: "Built web applications and gained hands-on experience in full-stack development and agile methodologies.",
  },
]

export default function Experience() {
  return (
    <section id="about" className="relative z-10 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-0 backdrop-blur-sm">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-5 dark:text-gray-400">
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
  )
}
