import type React from "react"
import type { Metadata } from "next"
import { Abhaya_Libre } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const abhayaLibre = Abhaya_Libre({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
})

export const metadata: Metadata = {
  title: "The Corner Cafe - Where Every Cup Tells a Story",
  description:
    "Experience exceptional food, artisan coffee, and warm hospitality at The Corner Cafe. Located in the heart of downtown, we serve fresh, locally-sourced meals in a cozy atmosphere.",
  keywords: "cafe, restaurant, coffee, breakfast, lunch, dinner, local, downtown, reservations",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={abhayaLibre.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
