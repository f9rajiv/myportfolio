"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Twitter, Mail, ExternalLink, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

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
    image: "/placeholder-project.jpg"
  },
  {
    title: "Project Beta",
    description: "Real-time collaboration platform enabling teams to work together seamlessly. Built with modern web technologies.",
    technologies: ["Next.js", "WebSockets", "PostgreSQL", "Redis"],
    link: "#",
    image: "/placeholder-project.jpg"
  },
  {
    title: "Project Gamma",
    description: "AI-powered analytics dashboard providing insights and predictions. Features interactive charts and data visualizations.",
    technologies: ["Python", "TensorFlow", "D3.js", "FastAPI"],
    link: "#",
    image: "/placeholder-project.jpg"
  }
]

const navItems = ["About", "Experience", "Projects"]

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
      {/* Spotlight effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.06), transparent 80%)`,
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left column - Fixed header */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                <a href="/">Alex Rivera</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                Senior Frontend Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                I build accessible, pixel-perfect digital experiences for the web.
              </p>

              {/* Navigation */}
              <nav className="nav hidden lg:block mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <ul className="w-max">
                  {navItems.map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => scrollToSection(item)}
                        className={cn(
                          "group flex items-center py-3 transition-all duration-300",
                          activeSection === item ? "text-foreground" : "text-muted-foreground"
                        )}
                      >
                        <span
                          className={cn(
                            "mr-4 h-px transition-all duration-300 group-hover:w-16 group-hover:bg-foreground",
                            activeSection === item ? "w-16 bg-foreground" : "w-8 bg-muted-foreground"
                          )}
                        />
                        <span className="text-xs font-bold uppercase tracking-widest group-hover:text-foreground">
                          {item}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social links */}
            <ul className="ml-1 mt-8 flex items-center gap-5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@example.com"
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </header>

          {/* Right column - Main content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            {/* About section */}
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                  About
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I&apos;m a developer passionate about crafting accessible, pixel-perfect user
                  interfaces that blend thoughtful design with robust engineering. My favorite
                  work lies at the intersection of design and development, creating experiences
                  that not only look great but are meticulously built for performance and usability.
                </p>
                <p>
                  Currently, I&apos;m a Senior Front-End Engineer at{" "}
                  <a href="#" className="font-medium text-foreground hover:text-primary transition-colors">
                    TechCorp
                  </a>
                  , specializing in accessibility. I contribute to the creation and maintenance
                  of UI components that power the frontend, ensuring our platform meets web
                  accessibility standards and best practices.
                </p>
                <p>
                  In my spare time, I&apos;m usually exploring new technologies, contributing to
                  open-source projects, or working on personal side projects that push my
                  boundaries as a developer.
                </p>
              </div>
            </section>

            {/* Experience section */}
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                  Experience
                </h2>
              </div>
              <div>
                <ol className="group/list">
                  {experiences.map((exp, index) => (
                    <li
                      key={index}
                      className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500"
                      style={{ animationDelay: `${300 + index * 100}ms` }}
                    >
                      <ExperienceCard {...exp} />
                    </li>
                  ))}
                </ol>
                <div className="mt-12">
                  <a
                    href="/resume.pdf"
                    className="group inline-flex items-center font-medium text-foreground hover:text-primary transition-colors"
                  >
                    View Full Resume
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </section>

            {/* Projects section */}
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                  Projects
                </h2>
              </div>
              <div>
                <ul className="group/list">
                  {projects.map((project, index) => (
                    <li
                      key={index}
                      className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500"
                      style={{ animationDelay: `${400 + index * 100}ms` }}
                    >
                      <ProjectCard {...project} />
                    </li>
                  ))}
                </ul>
                <div className="mt-12">
                  <a
                    href="#"
                    className="group inline-flex items-center font-medium text-foreground hover:text-primary transition-colors"
                  >
                    View All Projects
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
              <p>
                Loosely designed in{" "}
                <a
                  href="https://figma.com"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Figma
                </a>{" "}
                and coded in{" "}
                <a
                  href="https://code.visualstudio.com/"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visual Studio Code
                </a>
                . Built with{" "}
                <a
                  href="https://nextjs.org/"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js
                </a>{" "}
                and{" "}
                <a
                  href="https://tailwindcss.com/"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </a>
                , deployed with{" "}
                <a
                  href="https://vercel.com/"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel
                </a>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}

function ExperienceCard({
  period,
  title,
  company,
  description,
  technologies,
  link
}: {
  period: string
  title: string
  company: string
  description: string
  technologies: string[]
  link: string
}) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
        {period}
      </header>
      
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-foreground">
          <div>
            <a
              href={link}
              className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary transition-colors"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {title} ·{" "}
                <span className="inline-block">
                  {company}
                  <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                </span>
              </span>
            </a>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal text-muted-foreground">
          {description}
        </p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li key={tech}>
              <Badge variant="secondary" className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  technologies,
  link
}: {
  title: string
  description: string
  technologies: string[]
  link: string
  image: string
}) {
  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <a
            href={link}
            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary transition-colors"
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            <span>
              {title}
              <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
            </span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal text-muted-foreground">
          {description}
        </p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li key={tech}>
              <Badge variant="secondary" className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="z-10 sm:order-1 sm:col-span-2">
        <div className="aspect-video rounded border-2 border-border bg-secondary/50 flex items-center justify-center text-muted-foreground text-xs transition group-hover:border-muted-foreground/50">
          Preview
        </div>
      </div>
    </div>
  )
}
