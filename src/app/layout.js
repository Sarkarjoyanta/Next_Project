import './globals.css'
import { Poppins } from 'next/font/google'

 
const pop = Poppins({
  subsets: ['latin'],
  variable: '--font-pop',
  weight: ['300', '400', '500','600', '700']
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={pop.variable}>
      <body>{children}</body>
    </html>
  )
}