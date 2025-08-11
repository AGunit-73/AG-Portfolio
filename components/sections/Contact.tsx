"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const email = "Abhishekgurudwar1997@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast({ title: "Email copied", description: email });
    } catch {
      toast({ title: "Couldn’t copy email", description: "Please copy it manually." });
    }
  };

  return (
    <section id="contact" className="relative z-10 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Let’s Connect
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Quickest way to reach me is LinkedIn DMs. Email works too.
        </p>

        <Card className="border-0 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {/* Primary: Email */}
              <Button asChild variant="outline" className="h-12">
                <a
                  href={`mailto:${email}?subject=Hello%20from%20your%20portfolio&body=Hi%20Abhishek,%20`}
                  aria-label="Email Abhishek"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email me
                </a>
              </Button>

              {/* Secondary: LinkedIn */}
              <Button asChild variant="outline" className="h-12">
                <a
                  href="https://linkedin.com/in/abhishek-gurudwar"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open LinkedIn profile"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>

              {/* Secondary: GitHub */}
              <Button asChild variant="outline" className="h-12">
                <a
                  href="https://github.com/AGunit-73"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open GitHub profile"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>

            {/* Plain email + copy helper */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-300">{email}</span>
              <Button variant="ghost" size="icon" onClick={copyEmail} aria-label="Copy email to clipboard">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
