import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-body" })
const displayFont = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: "Bruno Reis | Business Intelligence & Dados",
  description: "Portfólio profissional de Bruno Reis: Business Intelligence, Inteligência de Mercado e Ciência de Dados.",
}

export const viewport: Viewport = { themeColor: "#126b59", width: "device-width", initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`} suppressHydrationWarning><body className={bodyFont.className}><ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>{children}</ThemeProvider></body></html>
}
