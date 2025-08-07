import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - AI-Powered Marketing Automation",
  description:
    "Grow your brand 10x faster with AI-powered marketing automation. Data-driven insights, automated workflows, and ROI optimization for marketing managers and agencies.",
  keywords: "AI marketing, marketing automation, brand growth, ROI optimization",
  openGraph: {
    title: "ADmyBRAND AI Suite - AI-Powered Marketing Automation",
    description: "Grow your brand 10x faster with AI-powered marketing automation",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
