import type { Metadata } from "next"
import localFont from "next/font/local"
import { APP_TAGLINE, APP_TITLE } from "@/shared/brand"

import "./globals.css"

const gtWalsheim = localFont({
  src: [
    {
      path: "../fonts/gt-walsheim-pro/GTWalsheimPro-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/gt-walsheim-pro/GTWalsheimPro-Bold.ttf",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-gt-walsheim-pro"
})

export const metadata: Metadata = {
  title: `${APP_TITLE.default} — ${APP_TAGLINE.default}`,
  description: `${APP_TAGLINE.default}`
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${gtWalsheim.variable} ${gtWalsheim.className}`}>
        {children}
      </body>
    </html>
  )
}
