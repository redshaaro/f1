import Navbar from "@/components/Navbar/Navbar"
import "./globals.css"
import { Inter } from "next/font/google"
import Footer from "@/components/Footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Welcome to F1",
  description: "AAM aast",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico"/>
      </head>
    
      <body className={inter.className}>
      <Navbar  ></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
