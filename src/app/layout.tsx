import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Optimum Welfare Foundation | Supporting Life at Every Stage',
  description: 'Optimum Welfare Foundation is a registered public trust in Mumbai, India, supporting individuals across life stages—maternal care, child education, livelihood training, rural agriculture, healthcare, and end-of-life care.',
  keywords: ['NGO', 'Optimum Welfare Foundation', 'Charity', 'Mumbai NGO', '80G tax exemption', 'CSR India', 'Healthcare NGO', 'Rural development'],
  authors: [{ name: 'Optimum Welfare Foundation' }]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
