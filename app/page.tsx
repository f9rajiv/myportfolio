"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Twitter, Mail, ExternalLink, ArrowDown, MapPin, Phone, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import Image from "next/image"

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior Frontend Engineer",
    company: "TechCorp",
    description: "Build and maintain critical components used to construct the frontend. Work closely with cross-functional teams to implement accessible UI components.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    link: "#"
  },
  {
    period: "2021 — 2023",
    title: "Frontend Developer",
    company: "StartupX",
    description: "Developed and shipped user-facing features using modern JavaScript frameworks. Built reusable components and front-end libraries for future use.",
    technologies: ["Vue.js", "JavaScript", "SCSS", "GraphQL"],
    link: "#"
  },
  {
    period: "2019 — 2021",
    title: "Web Developer",
    company: "DigitalAgency",
    description: "Collaborated with designers to create responsive and accessible websites. Optimized applications for maximum speed and scalability.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
    link: "#"
  }
]

const projects = [
  {
    title: "Project Alpha",
    description: "A comprehensive design system built with React and TypeScript. Features 50+ accessible components with full dark mode support.",
    technologies: ["React", "TypeScript", "Storybook", "Testing Library"],
    link: "#",
    image: "/images/computer-setup.jpg"
  },
  {
    title: "Project Beta",
    description: "Real-time collaboration platform enabling teams to work together seamlessly. Built with modern web technologies.",
    technologies: ["Next.js", "WebSockets", "PostgreSQL", "Redis"],
    link: "#",
    image: "/images/code-screen.jpg"
  },
  {
    title: "Project Gamma",
    description: "AI-powered analytics dashboard providing insights and predictions. Features interactive charts and data visualizations.",
    technologies: ["Python", "TensorFlow", "D3.js", "FastAPI"],
    link: "#",
    image: "/images/tech-abstract.jpg"
  }
]

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "GraphQL", "REST APIs"] },
  { category: "Tools", items: ["Git", "Docker", "Figma", "VS Code", "CI/CD"] },
]

const navItems = ["About", "Skills", "Experience", "Projects", "Contact"]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.toLowerCase()))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background">
      {/* Animated gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-medium" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl animate-pulse-fast" />
      </div>
      
      {/* Spotlight effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.06), transparent 80%)`,
        }}
      />

      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
              AR
            </a>
            <ul className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      activeSection === item ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Single Column CV Style */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-24">
        
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex flex-col justify-center py-20">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Profile Image */}
            <div className="md:col-span-1 flex justify-center animate-in fade-in zoom-in duration-700">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-primary/30 ring-offset-4 ring-offset-background">
                  <Image
                    src="/images/computer-setup.jpg"
                    alt="Alex Rivera"
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-3 shadow-lg">
                  <Send className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            {/* Hero Text */}
            <div className="md:col-span-2 text-center md:text-left">
              <p className="text-primary font-medium mb-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                Alex Rivera
              </h1>
              <h2 className="text-xl md:text-2xl text-primary font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                Senior Frontend Engineer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                I build accessible, pixel-perfect digital experiences for the web. 
                Passionate about crafting interfaces that blend thoughtful design with robust engineering.
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">hello@alexrivera.dev</span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
                <Button onClick={() => scrollToSection("contact")} className="gap-2">
                  <Mail className="h-4 w-4" />
                  Get In Touch
                </Button>
                <Button variant="outline" asChild>
                  <a href="/resume.pdf" download>
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-16 animate-bounce">
            <button onClick={() => scrollToSection("skills")} className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={skillGroup.category}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-in fade-in slide-in-from-bottom-6 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors animate-in fade-in zoom-in"
                      style={{ animationDelay: `${(index * 100) + (i * 50)}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            Work Experience
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={cn(
                  "relative grid md:grid-cols-2 gap-8 mb-12 animate-in fade-in duration-500",
                  index % 2 === 0 ? "md:text-right" : ""
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background md:-translate-x-1/2 z-10" />
                
                {/* Content */}
                <div className={cn(
                  "ml-8 md:ml-0",
                  index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"
                )}>
                  <span className="text-sm text-primary font-medium">{exp.period}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className={cn(
                    "flex flex-wrap gap-2 mt-3",
                    index % 2 === 0 ? "md:justify-end" : ""
                  )}>
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-6 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-in fade-in slide-in-from-left-6 duration-500 delay-200">
              <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
              
              <div className="space-y-4">
                <a href="mailto:hello@alexrivera.dev" className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all group">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">hello@alexrivera.dev</p>
                  </div>
                </a>
                
                <a href="tel:+1234567890" className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all group">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">+1 (234) 567-890</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-4">Find me on</h4>
                <div className="flex items-center gap-4">
                  {[
                    { href: "https://github.com", icon: Github, label: "GitHub" },
                    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-in fade-in slide-in-from-right-6 duration-500 delay-300">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can I help you?" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message..." rows={5} />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <a href="https://nextjs.org" className="text-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              Next.js
            </a>{" "}
            &{" "}
            <a href="https://tailwindcss.com" className="text-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              Tailwind CSS
            </a>
            . Hosted on{" "}
            <a href="https://pages.github.com" className="text-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              GitHub Pages
            </a>
            .
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            &copy; {new Date().getFullYear()} Alex Rivera. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  )
}
