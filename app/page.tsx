import { Code, Mail, Github, Linkedin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import Link from "next/link"
import { Navigation3D } from "@/components/navigation-3d"

export default function Home() {
  return (
    <div className="min-h-screen bg-standard-dark">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-header backdrop-blur supports-[backdrop-filter]:bg-header/80">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-lg instagram-gradient">Prem Sai Arroju</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#experience" className="transition-colors hover:text-primary">
                Experience
              </Link>
              <Link href="#education" className="transition-colors hover:text-primary">
                Education
              </Link>
              <Link href="#skills" className="transition-colors hover:text-primary">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-primary">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="flex items-center gap-2">
                <a
                  href="#contact"
                  className="ml-auto hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary/20 bg-card hover:bg-primary/10 hover:text-primary h-9 px-4 py-2"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
                <a
                  href="https://drive.google.com/file/d/1UkTp2QApWLQhqldefxQA73F3RBWVYrEi/view?usp=drive_links"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary/20 bg-card hover:bg-primary/10 hover:text-primary h-9 px-4 py-2"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-6 md:py-12">
        {/* Hero Section */}
        <section id="about" className="mx-auto max-w-5xl py-8 md:py-12 lg:py-16">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Prem Sai Arroju</h1>
                <h2 className="text-xl font-medium text-muted-foreground">Software Developer/Engineer</h2>
              </div>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://www.linkedin.com/in/premsaiarroju/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href="https://github.com/PremSaiArroju" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://leetcode.com/u/premsaiarroju/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    Leetcode
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/profile.jpg"
                alt="Prem Sai Arroju"
                className="aspect-square overflow-hidden rounded-full object-cover object-center border-4 border-primary/20 shadow-lg shadow-primary/20"
                width={300}
                height={300}
              />
            </div>
          </div>
        </section>

        {/* 3D Navigation */}
        <Navigation3D />

        {/* Experience Section */}
<section id="experience" className="mx-auto max-w-5xl py-8 md:py-12 space-y-6">
  <h2 className="text-2xl font-bold">Professional Experience</h2>

  <Card>
    <CardContent className="p-6">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold">Software Development Engineer</h3>
          <p className="text-sm text-muted-foreground">IBeam Technologies</p>
        </div>
        <div className="text-right">
          <p className="text-sm">Texas, USA</p>
          <p className="text-sm text-muted-foreground">Jan 2025 – Present</p>
        </div>
      </div>

    </CardContent>
  </Card>

  <Card>
    <CardContent className="p-6">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold">University Software Developer</h3>
          <p className="text-sm text-muted-foreground">CSU Long Beach</p>
        </div>
        <div className="text-right">
          <p className="text-sm">Long Beach, CA</p>
          <p className="text-sm text-muted-foreground">Aug 2024 – Dec 2024</p>
        </div>
      </div>

    </CardContent>
  </Card>

  <Card>
    <CardContent className="p-6">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold">Software Development Engineer</h3>
          <p className="text-sm text-muted-foreground">Accenture</p>
        </div>
        <div className="text-right">
          <p className="text-sm">Bangalore, India</p>
          <p className="text-sm text-muted-foreground">Aug 2021 – Dec 2022</p>
        </div>
      </div>

    </CardContent>
  </Card>

  <Card>
    <CardContent className="p-6">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold">Software Engineer</h3>
          <p className="text-sm text-muted-foreground">Akshada Foods</p>
        </div>
        <div className="text-right">
          <p className="text-sm">Hyderabad, India</p>
          <p className="text-sm text-muted-foreground">Jan 2020 – Jul 2021</p>
        </div>
      </div>

    </CardContent>
  </Card>
</section>
        {/* Education Section */}
        <section id="education" className="mx-auto max-w-5xl py-8 md:py-12 space-y-6">
          <h2 className="text-2xl font-bold">Education</h2>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold">Master of Science in Computer Science</h3>
                  <p className="text-sm text-muted-foreground">California State University Long Beach</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">California, USA</p>
                  <p className="text-sm text-muted-foreground">Jan 2023 - Dec 2024</p>
                </div>
              </div>
              <p className="text-sm">CGPA: 3.5</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold">Bachelor of Science in Computer Science</h3>
                  <p className="text-sm text-muted-foreground">Jawaharlal Nehru Technological University</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">Hyderabad, INDIA</p>
                  <p className="text-sm text-muted-foreground">Jun 2017 - May 2021</p>
                </div>
              </div>
              <p className="text-sm">CGPA: 3.8</p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
<section id="skills" className="mx-auto max-w-5xl py-8 md:py-12 space-y-6">
  <h2 className="text-2xl font-bold">Technical Skills</h2>

  <Card>
    <CardContent className="p-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-lg font-medium">Programming Languages</h3>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Python</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Java</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">JavaScript</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">C/C++</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">GoLang</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">C#</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">PHP</Badge>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-medium">Libraries/Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">ReactJS</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Node.js</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Spring Boot</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Django</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">TensorFlow</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Keras</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">PyTorch</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">GraphQL</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Elasticsearch</Badge>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-medium">Tools / Platforms</h3>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Docker</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Kubernetes</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">AWS</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Azure</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">GCP</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Terraform</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Jenkins</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Git</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Jira</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Helm</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Bash</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Unix/Linux</Badge>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-medium">Databases</h3>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">MongoDB</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">MySQL</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Firestore</Badge>
            <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">SQL</Badge>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</section>
        {/* Projects Section */}
<section id="projects" className="mx-auto max-w-5xl py-8 md:py-12 space-y-6">
  <h2 className="text-2xl font-bold">Projects & Open-Source</h2>

  <Card>
    <CardContent className="p-6">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold">Scalable E-commerce Platform</h3>
          <div className="mt-1 flex flex-wrap gap-2">
            <Badge variant="outline">AWS</Badge>
            <Badge variant="outline">Microservices</Badge>
            <Badge variant="outline">Kafka</Badge>
            <Badge variant="outline">Docker</Badge>
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">Node.js</Badge>
          </div>
        </div>
        <Button asChild variant="outline" size="sm">
          <a
            href="https://github.com/PremSaiArroju" // Replace with actual project link if available
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
          >
            View Project
          </a>
        </Button>
      </div>
      <ul className="ml-6 list-disc space-y-2 text-sm">
        <li>
          Designed a high-performance shopping platform supporting thousands of users simultaneously, achieving 99.99% uptime.
        </li>
        <li>
          Implemented event-driven architecture and optimized system response to sub-100ms for real-time performance.
        </li>
        <li>
          Reduced operational costs and improved user satisfaction through scalable architecture.
        </li>
      </ul>
    </CardContent>
  </Card>

  <Card>
    <CardContent className="p-6">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold">Real-time Analytics Dashboard</h3>
          <div className="mt-1 flex flex-wrap gap-2">
            <Badge variant="outline">Elasticsearch</Badge>
            <Badge variant="outline">Node.js</Badge>
            <Badge variant="outline">Kafka</Badge>
            <Badge variant="outline">Docker</Badge>
            <Badge variant="outline">AWS</Badge>
            <Badge variant="outline">PostgreSQL</Badge>
          </div>
        </div>
        <Button asChild variant="outline" size="sm">
          <a
            href="https://github.com/PremSaiArroju" // Replace with actual project link if available
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
          >
            View Project
          </a>
        </Button>
      </div>
      <ul className="ml-6 list-disc space-y-2 text-sm">
        <li>
          Developed a live dashboard for monitoring and analyzing high-volume event streams.
        </li>
        <li>
          Enabled proactive anomaly detection and performance trend analysis in real-time.
        </li>
        <li>
          Reduced data processing latency and improved operational visibility with interactive UI components.
        </li>
      </ul>
    </CardContent>
  </Card>

  <Card>
    <CardContent className="p-6">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold">Serverless Inventory Management System</h3>
          <div className="mt-1 flex flex-wrap gap-2">
            <Badge variant="outline">AWS</Badge>
            <Badge variant="outline">Serverless</Badge>
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">Node.js</Badge>
            <Badge variant="outline">MongoDB</Badge>
          </div>
        </div>
        <Button asChild variant="outline" size="sm">
          <a
            href="https://github.com/PremSaiArroju" // Replace with actual project link if available
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
          >
            View Project
          </a>
        </Button>
      </div>
      <ul className="ml-6 list-disc space-y-2 text-sm">
        <li>
          Led the winning team in a university hackathon to develop a serverless inventory tool improving stock accuracy and audit readiness.
        </li>
        <li>
          Enabled real-time updates and scalable performance using AWS services and MongoDB.
        </li>
        <li>
          Streamlined inventory operations, reducing overhead and manual intervention.
        </li>
      </ul>
    </CardContent>
  </Card>
</section>

        {/* Certifications Section */}
 <section className="mx-auto max-w-5xl py-8 md:py-12">
  <h2 className="text-2xl font-bold mb-6">Certifications</h2>
  <div className="grid gap-4 md:grid-cols-2">

    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">AWS Certified Solutions Architect – Associate</h3>
            <p className="text-sm text-muted-foreground">Amazon Web Services</p>
            <p className="text-xs text-muted-foreground mt-1">Issued Nov 2024 · Expires Nov 2027</p>
          </div>
          <Button asChild variant="outline" size="sm">
            <a
              href="https://www.credly.com/badges/ebee7800-f458-4fe2-a9eb-dd085812e680"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs"
            >
              View Certificate
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">CCNA Routing and Switching: Introduction to Networks</h3>
            <p className="text-sm text-muted-foreground">Cisco Networking Academy</p>
            <p className="text-xs text-muted-foreground mt-1">Issued Jul 2019</p>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">Web Applications for Everybody Specialization</h3>
            <p className="text-sm text-muted-foreground">Coursera</p>
            <p className="text-xs text-muted-foreground mt-1">Issued May 2020</p>
            <p className="text-xs text-muted-foreground">Credential ID: HVVAZ9UDTN7V</p>
          </div>
          <Button asChild variant="outline" size="sm">
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/HVVAZ9UDTN7V"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs"
            >
              View Certificate
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>

    {/* Retain existing certifications */}
    {/* Academy Accreditation - Generative AI Fundamentals, Introduction to TensorFlow, AI For Everyone, Python (Basic), HTML & CSS */}

  </div>
</section>

        {/* Contact Section */}
 <section id="contact" className="mx-auto max-w-5xl py-8 md:py-12">
  <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
  <div className="grid gap-6 md:grid-cols-2">
    <Card>
      <CardContent className="p-6">
        <div className="grid gap-6">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:premsai7373@gmail.com" className="hover:underline">
                  premsai7373@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Linkedin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">
                <a
                  href="https://www.linkedin.com/in/premsaiarroju/"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Github className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">GitHub</h3>
              <p className="text-sm text-muted-foreground">
                <a
                  href="https://github.com/PremSaiArroju"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View my projects
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Leetcode</h3>
              <p className="text-sm text-muted-foreground">
                <a
                  href="https://leetcode.com/premsaiarroju"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View my profile
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Medium Articles</h3>
              <p className="text-sm text-muted-foreground">
                <a
                  href="https://medium.com/@premsaiarroju"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read my articles
                </a>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>


            {/* Contact Form */}
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t bg-footer">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 Prem Sai Arroju. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="mailto:premsai7373@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/premsaiarroju/"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/PremSaiArroju"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
