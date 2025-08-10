"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Interested in collaborating or have a project in mind? I'd love to hear from you.
        </p>
        <Card className="border-0 backdrop-blur-sm">
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
  )
}
