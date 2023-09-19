import './globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MiggleQuest',
  description: 'Get dudes, do quests, learn skills, conquer they foe',
}

export interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}
