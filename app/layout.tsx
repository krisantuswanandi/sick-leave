import "./globals.css"
import { Share_Tech_Mono } from "next/font/google"

const shareTechMono = Share_Tech_Mono({ weight: "400", subsets: ["latin"] })

export const metadata = {
  title: "Sick Leave",
  description: "Personal attendance log",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${shareTechMono.className} h-full flex justify-center items-center bg-slate-950 text-slate-500`}>{children}</body>
    </html>
  )
}