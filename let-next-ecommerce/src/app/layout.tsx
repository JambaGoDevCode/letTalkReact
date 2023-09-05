import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600'],
  style: ['italic', 'normal'],
  variable:'--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400','500','600'],
  style: ['italic', 'normal'],
  variable:'--font-montserrat',
});


export const metadata: Metadata = {
  title: 'Next JS Ecommerce aplication',
  description: 'A simple aplication whith Next JS for portifolio',
  applicationName: 'Ecommerce arteyetu',
  authors:[{name:'João Jamba'}],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}
