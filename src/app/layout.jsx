import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BrandCraft Agency | Premium Design & Marketing',
  description: 'Professional Graphic Design, Logo Design, Packaging, Marketing & Video Editing Agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}