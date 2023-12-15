import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Home | markusmaga.se",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="main">{children}</div>
      </body>
    </html>
  )
}
