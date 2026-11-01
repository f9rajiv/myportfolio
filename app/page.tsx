"use client"

import type { ChangeEvent, FormEvent, ReactNode } from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

// Base path injected from next.config.mjs, so asset URLs work locally and on GitHub Pages.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""
const with_base_path = (path: string) => `${BASE_PATH}${path}`

const EMAIL_ADDRESS = "f9rajiv@gmail.com"
const GITHUB_URL = "https://github.com/f9rajiv"
const LINKEDIN_URL = "https://linkedin.com/in/rajivranjansah1"

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

const empty_contact_form: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

const work_history = [
  {
    role: "Backend developer",
    employer: "IT Himalaya, Kathmandu, working for Procit BV (Netherlands)",
    period: "Dec 2022 – Mar 2026",
    highlights: [
      "Designed the microservice architecture for KCM and moveXM in Node.js and Express: modular REST APIs documented with Swagger, JWT authentication, and survey and notification workflows built on SurveyJS and Flowmailer.",
      "Tuned PostgreSQL functions, triggers and procedures over tables of 700–800 million rows until the main queries answered in 1–2 seconds.",
      "Containerised the services with Docker and deployed them on Azure with Azure Storage.",
      "Worked in Scrum sprints with code review, and automated routine jobs with shell scripts and cron.",
    ],
    stack: "Node.js, Express, PostgreSQL, Docker, Azure, JWT",
  },
  {
    role: "Backend developer intern",
    employer: "Crupee Software Development, Kathmandu",
    period: "Jun 2022 – Aug 2022",
    highlights: [
      "Built the REST API for a data collection system: full CRUD over HTTP with custom routing for each endpoint.",
    ],
    stack: "Node.js, Express, MongoDB",
  },
]

const education_history = [
  {
    degree: "MSc, Computer Science and Engineering (applied computing)",
    school: "University of Oulu, Finland",
    period: "2026 – present",
  },
  {
    degree: "BE, Computer Engineering",
    school: "Advanced College of Engineering & Management, Tribhuvan University, Nepal",
    period: "2022",
  },
]

const skill_groups = [
  { label: "Languages", items: "JavaScript (Node.js), TypeScript, Python" },
  { label: "Backend", items: "Express, NestJS, Django, REST APIs, JWT auth, microservices" },
  { label: "Databases", items: "PostgreSQL, MySQL, MongoDB, SQLite, Redis" },
  { label: "Infrastructure", items: "Docker, Azure, Linux, Git, shell scripting" },
  { label: "Machine learning", items: "TensorFlow, Keras; GANs, CNNs and LSTMs (see Projects)" },
  { label: "Spoken", items: "English (fluent), Nepali (native), Finnish (beginner)" },
]

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="grid gap-x-10 gap-y-5 border-t border-rule py-12 md:grid-cols-[8rem_1fr]"
    >
      <h2 id={`${id}-title`} className="text-base font-medium text-muted-foreground md:pt-0.5">
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  )
}

export default function Portfolio() {
  const [is_submitting, set_is_submitting] = useState(false)
  const [contact_form, set_contact_form] = useState<ContactFormData>(empty_contact_form)
  const { toast } = useToast()

  const handle_contact_input_change = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target
    set_contact_form((current_form) => ({ ...current_form, [id]: value }))
  }

  const handle_contact_submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!WEB3FORMS_ACCESS_KEY) {
      toast({
        variant: "destructive",
        title: "The form isn't set up yet",
        description: `Email me directly at ${EMAIL_ADDRESS} instead.`,
      })
      return
    }

    set_is_submitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: "Portfolio contact form",
          name: contact_form.name,
          email: contact_form.email,
          message: contact_form.message,
          subject: contact_form.subject || "New message from rajivranjansah.com.np",
          botcheck: "",
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "The form service rejected the message.")
      }

      set_contact_form(empty_contact_form)
      toast({
        title: "Message sent",
        description: "I'll reply to the email address you gave.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Message not sent",
        description: `${error instanceof Error ? error.message : "The form service didn't respond."} You can email me at ${EMAIL_ADDRESS}.`,
      })
    } finally {
      set_is_submitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-6">
      <header className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-6 text-sm">
        <a href={with_base_path("/")} className="font-medium text-foreground no-underline">
          rajivranjansah.com.np
        </a>
        <nav aria-label="Sections">
          <ul className="flex gap-6">
            <li><a href="#work">Work</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Introduction */}
        <section className="grid gap-10 pb-16 pt-12 md:grid-cols-[1fr_auto] md:pt-20">
          <div className="max-w-[36rem]">
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Rajiv Ranjan Sah
            </h1>
            <p className="mt-6 text-xl leading-relaxed">
              Backend developer. For three years I built Node.js services and tuned PostgreSQL databases
              with hundreds of millions of rows for Procit BV in the Netherlands. I&apos;m now doing an MSc
              in Computer Science and Engineering at the University of Oulu.
            </p>
            <p className="mt-4 text-muted-foreground">
              Based in Oulu, Finland, and open to backend developer roles and internships.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <li><a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a></li>
              <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <Image
            src={with_base_path("/images/2x2.jpg")}
            alt="Portrait of Rajiv Ranjan Sah"
            width={160}
            height={200}
            priority
            className="h-[200px] w-[160px] rounded-sm object-cover"
          />
        </section>

        <Section id="work" title="Work">
          <div className="space-y-10">
            {work_history.map((job) => (
              <article key={job.role + job.period}>
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <p>{job.employer}</p>
                <p className="text-sm text-muted-foreground">{job.period}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-muted-foreground">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-muted-foreground">{job.stack}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="space-y-14">
            <article>
              <h3 className="text-lg font-semibold">Colourising old photos and film with a GAN</h3>
              <p className="text-sm text-muted-foreground">Apr 2021 – Apr 2022, team of 4</p>
              <figure className="mt-5">
                <div className="grid max-w-[34rem] grid-cols-2 gap-3">
                  <Image
                    src={with_base_path("/images/projects/gan-input.jpg")}
                    alt="Black and white engraving of a temple square in Nepal"
                    width={273}
                    height={184}
                    className="aspect-square w-full rounded-sm object-cover"
                  />
                  <Image
                    src={with_base_path("/images/projects/gan-output.jpg")}
                    alt="The same engraving after the model added colour"
                    width={256}
                    height={256}
                    className="aspect-square w-full rounded-sm object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-muted-foreground">
                  A greyscale engraving given to the model (left) and the colourised result (right).
                </figcaption>
              </figure>
              <p className="mt-5 max-w-[38rem]">
                A generative adversarial network that adds plausible colour to black and white images and
                video frames. We trained it in TensorFlow and Keras and wrapped it in a Django web app for
                uploading images and video.
              </p>
              <p className="mt-3 max-w-[38rem] text-sm text-muted-foreground">
                Sah, R.R., Kafle, S., Timalsina, S., Thapa, U. and Dahal, S. &ldquo;Realistic rendering
                system using GAN.&rdquo; <em>3rd Science, Engineering and Technology Conference (SET-2021)</em>,
                Kathmandu.
              </p>
              <p className="mt-3">
                <a href="https://github.com/f9rajiv/Realistic-Rendering-system-using-GAN" target="_blank" rel="noopener noreferrer">
                  Code on GitHub
                </a>
              </p>
            </article>

            <article>
              <h3 className="text-lg font-semibold">HTML from hand-drawn wireframes</h3>
              <p className="text-sm text-muted-foreground">Sep 2020 – Mar 2021, team of 4, poster at SET-2021</p>
              <figure className="mt-5">
                <Image
                  src={with_base_path("/images/projects/wireframe-sketch.jpg")}
                  alt="Pencil sketch of a web page with a navigation bar, heading, text field, buttons and footer"
                  width={1200}
                  height={865}
                  className="w-full max-w-[26rem] rounded-sm"
                />
                <figcaption className="mt-2 text-sm text-muted-foreground">
                  One of the paper wireframes the system turns into HTML.
                </figcaption>
              </figure>
              <p className="mt-5 max-w-[38rem]">
                Photograph a wireframe sketched on paper and get back the HTML for it. A CNN reads the
                sketch and an LSTM writes out the tags one at a time.
              </p>
              <p className="mt-3">
                <a href="https://github.com/f9rajiv/AUTOMATIC-HTML-CODE-GENERATOR-USING-LSTM" target="_blank" rel="noopener noreferrer">
                  Code on GitHub
                </a>
              </p>
            </article>

            <article>
              <h3 className="text-lg font-semibold">Blog platform</h3>
              <p className="text-sm text-muted-foreground">Sep 2022 – Nov 2022, personal project</p>
              <p className="mt-3 max-w-[38rem]">
                A Django blog with sign-up, login and profile pictures, where users write, edit and delete
                their own posts.
              </p>
              <p className="mt-3">
                <a href="https://github.com/f9rajiv/blogsites" target="_blank" rel="noopener noreferrer">
                  Code on GitHub
                </a>
              </p>
            </article>
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="space-y-6">
            {education_history.map((entry) => (
              <div key={entry.degree}>
                <h3 className="text-lg font-semibold">{entry.degree}</h3>
                <p>{entry.school}</p>
                <p className="text-sm text-muted-foreground">{entry.period}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-[9rem_1fr]">
            {skill_groups.map((group) => (
              <div key={group.label} className="contents">
                <dt className="font-medium">{group.label}</dt>
                <dd className="mb-2 sm:mb-0">{group.items}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-[36rem]">
            Email me at <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a> or send a message here.
          </p>
          <form className="mt-6 max-w-[36rem] space-y-4" onSubmit={handle_contact_submit}>
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
                <Input id="name" value={contact_form.name} onChange={handle_contact_input_change} autoComplete="name" required />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
                <Input id="email" type="email" value={contact_form.email} onChange={handle_contact_input_change} autoComplete="email" required />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                Subject <span className="font-normal text-muted-foreground">(optional)</span>
              </label>
              <Input id="subject" value={contact_form.subject} onChange={handle_contact_input_change} />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
              <Textarea id="message" value={contact_form.message} onChange={handle_contact_input_change} rows={6} required />
            </div>
            <Button type="submit" disabled={is_submitting}>
              {is_submitting ? "Sending…" : "Send message"}
            </Button>
            <p className="text-sm text-muted-foreground">
              Your name, email and message go to me through{" "}
              <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer">Web3Forms</a>{" "}
              and are only used to reply to you.
            </p>
          </form>
        </Section>
      </main>

      <footer className="border-t border-rule py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Rajiv Ranjan Sah
      </footer>
    </div>
  )
}
