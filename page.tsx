import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Mail, Github, Linkedin, Download } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Alex.Design
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#projects" className="text-sm font-medium hover:text-black/70 transition-colors">
              Projects
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-black/70 transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-black/70 transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-black/70 transition-colors">
              Contact
            </Link>
          </nav>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container py-24 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Product Designer & UX Specialist
              </h1>
              <p className="text-lg text-gray-500 max-w-md">
                I create thoughtful digital experiences that connect people and technology in meaningful ways.
              </p>
              <div className="flex gap-4">
                <Button>
                  View Projects
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Contact Me</Button>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Designer portrait"
                width={600}
                height={600}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Selected Projects</h2>
                <p className="text-gray-500 max-w-md">
                  A collection of my most impactful product design work across various industries.
                </p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button variant="outline" size="sm">
                  All
                </Button>
                <Button variant="outline" size="sm">
                  Mobile
                </Button>
                <Button variant="outline" size="sm">
                  Web
                </Button>
                <Button variant="outline" size="sm">
                  Brand
                </Button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Project Card 1 */}
              <div className="group overflow-hidden rounded-xl border bg-white transition-all hover:shadow-md">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Finance app dashboard"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Finance Dashboard App</h3>
                  <p className="text-gray-500 mb-4">
                    A comprehensive financial management application with intuitive data visualization.
                  </p>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium">
                      UX Design
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium">
                      UI Design
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium">
                      Research
                    </span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Button variant="outline" size="sm" className="w-full">
                    View Case Study
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="group overflow-hidden rounded-xl border bg-white transition-all hover:shadow-md">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="E-commerce mobile app"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">E-commerce Mobile App</h3>
                  <p className="text-gray-500 mb-4">
                    A streamlined shopping experience with personalized recommendations.
                  </p>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium">
                      Mobile
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium">
                      UI Design
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium">
                      Prototyping
                    </span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Button variant="outline" size="sm" className="w-full">
                    View Case Study
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="group overflow-hidden rounded-xl border bg-white transition-all hover:shadow-md">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Health tracking app"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Health Tracking Platform</h3>
                  <p className="text-gray-500 mb-4">
                    A holistic health monitoring system with actionable insights and progress tracking.
                  </p>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium">
                      Web App
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium">
                      UX Research
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium">
                      Design System
                    </span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Button variant="outline" size="sm" className="w-full">
                    View Case Study
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button>
                View All Projects
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Designer at work"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                <p className="text-gray-500">
                  I'm a product designer with over 5 years of experience creating digital products that solve real
                  problems for users. My approach combines strategic thinking with creative execution to deliver
                  meaningful experiences.
                </p>
                <p className="text-gray-500">
                  Previously, I worked at leading tech companies where I helped shape products used by millions of
                  people. My design process is deeply rooted in user research, iterative testing, and collaborative
                  problem-solving.
                </p>
                <p className="text-gray-500">
                  When I'm not designing, you can find me exploring photography, attending design meetups, or
                  experimenting with new creative tools and technologies.
                </p>
                <div className="pt-4">
                  <Button>
                    More About Me
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Skills & Expertise</h2>
              <p className="text-gray-500 max-w-md mx-auto">
                My comprehensive skill set allows me to handle the entire product design process from concept to
                execution.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Skill Card 1 */}
              <div className="bg-white p-8 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">UX Design</h3>
                <ul className="space-y-2 text-gray-500">
                  <li>User Research</li>
                  <li>Information Architecture</li>
                  <li>Wireframing</li>
                  <li>Usability Testing</li>
                  <li>Journey Mapping</li>
                </ul>
              </div>

              {/* Skill Card 2 */}
              <div className="bg-white p-8 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">UI Design</h3>
                <ul className="space-y-2 text-gray-500">
                  <li>Visual Design</li>
                  <li>Design Systems</li>
                  <li>Interaction Design</li>
                  <li>Responsive Design</li>
                  <li>Animation</li>
                </ul>
              </div>

              {/* Skill Card 3 */}
              <div className="bg-white p-8 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
                <ul className="space-y-2 text-gray-500">
                  <li>Figma</li>
                  <li>Adobe Creative Suite</li>
                  <li>Protopie</li>
                  <li>HTML/CSS</li>
                  <li>Design Tokens</li>
                </ul>
              </div>

              {/* Skill Card 4 */}
              <div className="bg-white p-8 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">Product Strategy</h3>
                <ul className="space-y-2 text-gray-500">
                  <li>Market Research</li>
                  <li>Competitive Analysis</li>
                  <li>Feature Prioritization</li>
                  <li>Product Roadmapping</li>
                  <li>A/B Testing</li>
                </ul>
              </div>

              {/* Skill Card 5 */}
              <div className="bg-white p-8 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <ul className="space-y-2 text-gray-500">
                  <li>Cross-functional Teams</li>
                  <li>Design Workshops</li>
                  <li>Design Critiques</li>
                  <li>Stakeholder Management</li>
                  <li>Agile Methodology</li>
                </ul>
              </div>

              {/* Skill Card 6 */}
              <div className="bg-white p-8 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">Leadership</h3>
                <ul className="space-y-2 text-gray-500">
                  <li>Design Direction</li>
                  <li>Mentoring</li>
                  <li>Project Management</li>
                  <li>Design Advocacy</li>
                  <li>Process Improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Let's Work Together</h2>
                <p className="text-gray-500 max-w-md">
                  I'm currently available for freelance projects, full-time opportunities, and creative collaborations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <a href="mailto:hello@alexdesign.com" className="text-gray-500 hover:text-black transition-colors">
                      hello@alexdesign.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Linkedin className="h-5 w-5 text-gray-500" />
                    <a href="#" className="text-gray-500 hover:text-black transition-colors">
                      linkedin.com/in/alexdesign
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Github className="h-5 w-5 text-gray-500" />
                    <a href="#" className="text-gray-500 hover:text-black transition-colors">
                      github.com/alexdesign
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">© 2025 Alex.Design. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-black transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
