"use client"

import { useState, useEffect } from "react"
import { Briefcase, GraduationCap, Code, User } from "lucide-react"

export function Navigation3D() {
  const [activeSection, setActiveSection] = useState("experience")

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["experience", "education", "skills", "projects"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // If the section is in view (with some buffer for better UX)
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="mx-auto max-w-5xl my-8">
      <div className="roadmap-container relative">
        {/* Horizontal line connecting all steps */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-border -translate-y-1/2"></div>

        <div className="grid grid-cols-4 relative">
          {/* Experience */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => scrollToSection("experience")}
              className="roadmap-step relative flex flex-col items-center"
            >
              <div
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 z-10 bg-card transition-all duration-300 ${
                  activeSection === "experience" ? "border-primary glow-effect" : "border-muted-foreground"
                }`}
              >
                <Briefcase
                  className={`h-5 w-5 ${activeSection === "experience" ? "text-primary" : "text-muted-foreground"}`}
                />
              </div>
              <span
                className={`text-sm font-medium ${
                  activeSection === "experience" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Experience
              </span>
            </button>
          </div>

          {/* Education */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => scrollToSection("education")}
              className="roadmap-step relative flex flex-col items-center"
            >
              <div
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 z-10 bg-card transition-all duration-300 ${
                  activeSection === "education" ? "border-primary glow-effect" : "border-muted-foreground"
                }`}
              >
                <GraduationCap
                  className={`h-5 w-5 ${activeSection === "education" ? "text-primary" : "text-muted-foreground"}`}
                />
              </div>
              <span
                className={`text-sm font-medium ${
                  activeSection === "education" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Education
              </span>
            </button>
          </div>

          {/* Skills */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => scrollToSection("skills")}
              className="roadmap-step relative flex flex-col items-center"
            >
              <div
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 z-10 bg-card transition-all duration-300 ${
                  activeSection === "skills" ? "border-primary glow-effect" : "border-muted-foreground"
                }`}
              >
                <Code className={`h-5 w-5 ${activeSection === "skills" ? "text-primary" : "text-muted-foreground"}`} />
              </div>
              <span
                className={`text-sm font-medium ${
                  activeSection === "skills" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Skills
              </span>
            </button>
          </div>

          {/* Projects */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="roadmap-step relative flex flex-col items-center"
            >
              <div
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 z-10 bg-card transition-all duration-300 ${
                  activeSection === "projects" ? "border-primary glow-effect" : "border-muted-foreground"
                }`}
              >
                <User
                  className={`h-5 w-5 ${activeSection === "projects" ? "text-primary" : "text-muted-foreground"}`}
                />
              </div>
              <span
                className={`text-sm font-medium ${
                  activeSection === "projects" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Projects
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
