"use client";
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useThemeContext, ThemeContextProvider} from './Context';



const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const {color, setColor} = useThemeContext();
  return (
    <html lang="en" >
    <ThemeContextProvider>  
      <body className={inter.className} suppressHydrationWarning={true} >
        {children}
        </body>
        </ThemeContextProvider>
    </html>
  )
}
