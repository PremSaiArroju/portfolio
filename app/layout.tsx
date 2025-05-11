import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { MobileNav } from "@/components/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Prem Sai Arroju",
  description:
    "Personal portfolio of Prem Sai Arroju, Software Developer/Engineer.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex items-center md:hidden absolute top-0 left-0 z-50 p-4">
            <MobileNav />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
