"use client"

import { useState } from "react"
import { Menu, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-standard-dark">
        <div className="flex flex-col space-y-4 mt-8">
          <Link
            href="#about"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            href="#experience"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={handleLinkClick}
          >
            Experience
          </Link>
          <Link
            href="#education"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={handleLinkClick}
          >
            Education
          </Link>
          <Link
            href="#skills"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={handleLinkClick}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={handleLinkClick}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
        <div className="pt-4 border-t border-border">
          <Button asChild variant="outline" className="w-full justify-start" size="sm">
            <a
              href="https://drive.google.com/file/d/1UkTp2QApWLQhqldefxQA73F3RBWVYrEi/view?usp=drive_links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

