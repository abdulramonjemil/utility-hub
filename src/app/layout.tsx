import type { Metadata } from "next"
import localFont from "next/font/local"
import { APP_NAME, APP_TAGLINE } from "@/shared/brand"

import "./globals.css"

const gtWalsheimPro = localFont({
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
  title: `${APP_NAME.default} — ${APP_TAGLINE.default}`,
  description: `${APP_TAGLINE.default}`
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${gtWalsheimPro.variable} ${gtWalsheimPro.className}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
