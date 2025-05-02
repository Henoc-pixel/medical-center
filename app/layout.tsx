import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cabinet PCM - Prevent Care Medical",
  description: "Cabinet spécialisé en Médecine du Travail en Côte d'Ivoire",
  generator: 'v0.dev',
  icons: {
    icon: "/favicon.ico",
  },
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
