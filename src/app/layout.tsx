import './globals.css'
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'MiggleQuest',
  description: 'Get dudes, do quests, learn skills, conquer they foe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  )
}
