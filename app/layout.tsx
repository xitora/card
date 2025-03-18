import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'xitora 카드 페이지',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
