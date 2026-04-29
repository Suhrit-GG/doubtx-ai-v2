import './globals.css'

export const metadata = {
  title: 'DoubtX AI',
  description: 'AI-powered school doubt solving app'
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