import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abhishek Gurudwar - AI Engineer & Full Stack Developer',
  description: 'Portfolio of Abhishek Gurudwar - AI Engineer, Full Stack Developer, and Agentic Systems Architect specializing in LLMs, RAG, FastAPI, and React.',
  keywords: 'AI Engineer, Full Stack Developer, Machine Learning, React, FastAPI, LLMs, RAG',
  authors: [{ name: 'Abhishek Gurudwar' }],
  openGraph: {
    title: 'Abhishek Gurudwar - AI Engineer & Full Stack Developer',
    description: 'Building intelligent, scalable AI platforms with LLMs, RAG, FastAPI, and React.',
    type: 'website',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
