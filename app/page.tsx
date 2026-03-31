"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail, ExternalLink, ArrowDown, MapPin, Phone, Send, BookOpen, Brain, Sparkles, Cpu, Zap, Code2, Database, Server, Cloud } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import Image from "next/image"

const experiences = [
  {
    period: "Dec 2022 — March 2026",
    title: "Software Developer, Backend",
    company: "IT Himalaya Pvt Ltd (Procit BV, Netherlands)",
    location: "Kathmandu, Nepal",
    description: [
      "Designed microservices architecture using Node.js and Express for KCM / moveXM, building modular REST APIs with Swagger and implementing JWT-based authentication. Integrated Flowmailer and SurveyJS for scalable survey and notification workflows",
      "Optimized PostgreSQL systems (functions, triggers, procedures) to handle datasets exceeding 700-800M records, achieving 1-2s response times and improving query performance",
      "Containerized services using Docker and deployed on Azure with storage integration, improving scalability and environment consistency",
      "Delivered features in Agile teams, contributing to code reviews and sprint cycles. Automated workflows with shell scripts and cron jobs"
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "Docker", "Azure", "JWT", "REST APIs"],
  },
  {
    period: "Jun 2022 — Aug 2022",
    title: "Internship",
    company: "Crupee Software Development",
    location: "Kathmandu, Nepal",
    description: [
      "Acquired knowledge in multiple web development technologies, concentrating on Node.js, Express, and MongoDB for implementing a data collection system",
      "Implemented Web API for all the CRUD functionality of the application with HTTP verbs and Custom Routing for web API endpoints"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "REST APIs"],
  }
]

const education = {
  institution: "Advanced College of Engineering & Management",
  university: "Tribhuvan University, Nepal",
  degree: "Bachelor of Engineering in Computer Engineering",
  graduated: "July 2022",
  percentage: "76.39/100"
}

const projects = [
  {
    title: "Blog Website",
    description: "A blog web app developed using Django and Python with user account registration, login, updating posts, deleting and viewing all posts.",
    technologies: ["Python", "Django"],
    period: "Sep 2022 - Nov 2022",
    type: "Personal Project",
    image: "/images/computer-setup.jpg"
  },
  {
    title: "Realistic Rendering System using GAN",
    description: "This system can render any greyscale video and images. Its conference paper was published at SET Conference.",
    technologies: ["Deep Learning", "Image Processing", "Computer Vision", "AI"],
    period: "Apr 2021 - Apr 2022",
    type: "Team of 4",
    image: "/images/code-screen.jpg",
    published: true
  },
  {
    title: "Automatic HTML Code Generation using LSTM and CNN",
    description: "This system can recreate a website from the hand-drawn wireframe by generating the HTML tags automatically. Selected for poster presentation at SET Conference.",
    technologies: ["Image Processing", "Computer Vision", "LSTM", "CNN"],
    period: "Sep 2020 - Mar 2021",
    type: "Team of 4",
    image: "/images/tech-abstract.jpg"
  }
]

const skills = [
  { category: "Languages", items: ["JavaScript (Node.js)", "TypeScript", "Python"] },
  { category: "Frameworks", items: ["Express.js", "NestJS", "Django", "TensorFlow", "Keras"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis"] },
  { category: "Tools", items: ["Git", "Docker", "Azure", "JIRA", "Linux", "VSCode"] },
  { category: "Concepts", items: ["REST APIs", "Microservices", "JWT Auth", "System Design", "Agile/Scrum"] },
]

const publication = {
  authors: "Sah, R.R., Kafle, S., Timalsina, S., Thapa, U., and Dahal, S.",
  title: "REALISTIC RENDERING SYSTEM USING GAN",
  conference: "The 3rd Science Engineering and Technology Conference (SET-2021)",
  location: "Kathmandu, Nepal"
}

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
              RRS
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
              <a href="https://github.com/f9rajiv" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/rajivranjansah1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
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
                    alt="Rajiv Ranjan Sah"
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
                Rajiv Ranjan Sah
              </h1>
              <h2 className="text-xl md:text-2xl text-primary font-medium mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                Software Developer, Backend
              </h2>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-250">
                <Badge className="bg-gradient-to-r from-cyan-500/20 to-primary/20 text-primary border border-primary/30 gap-1">
                  <Brain className="h-3 w-3" />
                  AI Enthusiast
                </Badge>
                <Badge variant="outline" className="border-muted-foreground/30 text-muted-foreground gap-1">
                  <Sparkles className="h-3 w-3" />
                  Deep Learning
                </Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                Building scalable microservices and optimizing database systems. Passionate about AI/ML with published research in GANs and computer vision. Experienced in Node.js, Express, PostgreSQL, and cloud technologies.
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">f9rajiv@gmail.com</span>
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
          
          {/* Education Card */}
          <div className="mt-16 p-6 bg-card rounded-xl border border-border animate-in fade-in slide-in-from-bottom-6 duration-500 delay-600">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{education.degree}</h3>
                <p className="text-primary font-medium">{education.institution}</p>
                <p className="text-muted-foreground text-sm">{education.university}</p>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                  <span>Graduated: {education.graduated}</span>
                  <span>Score: {education.percentage}</span>
                </div>
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
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* AI Enthusiast Section */}
        <section className="py-20 border-t border-border">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-primary/10 text-primary text-sm font-medium mb-4">
              <Brain className="h-4 w-4" />
              Passion for Innovation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI Enthusiast
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Exploring the frontiers of artificial intelligence with hands-on experience in deep learning, computer vision, and generative models.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "Deep Learning",
                description: "Experience with TensorFlow and Keras for building neural networks including GANs, CNNs, and LSTMs",
                gradient: "from-purple-500/20 to-primary/20"
              },
              {
                icon: Cpu,
                title: "Computer Vision",
                description: "Published research on realistic rendering using GANs and automatic HTML generation from wireframes",
                gradient: "from-cyan-500/20 to-blue-500/20"
              },
              {
                icon: Sparkles,
                title: "Generative AI",
                description: "Passionate about exploring LLMs, image generation, and the future of AI-powered applications",
                gradient: "from-primary/20 to-teal-500/20"
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient background on hover */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  item.gradient
                )} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 border-t border-border">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Zap className="h-4 w-4" />
              Professional Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Work Experience
            </h2>
          </div>
          
          <div className="relative">
            {/* Animated gradient timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cyan-500 to-primary/20" />
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={cn(
                  "relative mb-16 animate-in fade-in duration-700",
                  index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%] md:text-left"
                )}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline node with pulse effect */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 z-20">
                  <div className="relative">
                    <div className="w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/30" />
                    <div className="absolute inset-0 w-5 h-5 bg-primary rounded-full animate-ping opacity-30" />
                  </div>
                </div>
                
                {/* Content card */}
                <div className={cn(
                  "ml-14 md:ml-0 group",
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                )}>
                  <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden">
                    {/* Decorative gradient blob */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Period badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-sm text-primary font-medium mb-4">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      {exp.period}
                    </div>
                    
                    {/* Title and company */}
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-semibold mb-1">{exp.company}</p>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-5">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </div>
                    
                    {/* Description with styled bullets */}
                    <ul className="space-y-3 mb-5">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3 group/item">
                          <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-cyan-500" />
                          <span className="text-muted-foreground text-sm leading-relaxed group-hover/item:text-foreground transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Tech stack with icons */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {exp.technologies.map((tech, i) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-gradient-to-r from-secondary to-secondary/50 hover:from-primary/20 hover:to-cyan-500/20 transition-all duration-300 text-xs font-medium"
                          style={{ animationDelay: `${i * 50}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
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
                  {project.published && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary text-primary-foreground">Published</Badge>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span>{project.period}</span>
                    <span>&#8226;</span>
                    <span>{project.type}</span>
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
              </div>
            ))}
          </div>

          {/* Publication */}
          <div className="mt-12 p-6 bg-card rounded-xl border border-border animate-in fade-in slide-in-from-bottom-6 duration-500">
            <h3 className="text-lg font-semibold text-foreground mb-4">Publication</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <span className="text-foreground">{publication.authors}</span>, &quot;{publication.title}&quot;, <em>{publication.conference}</em>, {publication.location}.
            </p>
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
                <a href="mailto:f9rajiv@gmail.com" className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all group">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">f9rajiv@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+9779813736603" className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all group">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">+977 9813736603</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-4">Find me on</h4>
                <div className="flex items-center gap-4">
                  {[
                    { href: "https://github.com/f9rajiv", icon: Github, label: "GitHub" },
                    { href: "https://linkedin.com/in/rajivranjansah1", icon: Linkedin, label: "LinkedIn" },
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
              <h3 className="text-lg font-semibold text-foreground mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">Name</label>
                    <Input id="name" placeholder="Your name" className="bg-card" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" className="bg-card" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm text-muted-foreground mb-2 block">Subject</label>
                  <Input id="subject" placeholder="What's this about?" className="bg-card" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">Message</label>
                  <Textarea id="message" placeholder="Your message..." rows={5} className="bg-card resize-none" />
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
            &copy; {new Date().getFullYear()} Rajiv Ranjan Sah. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  )
}
