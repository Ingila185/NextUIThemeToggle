"use client";
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {ThemeContext, useThemeContext, ThemeContextProvider} from './Context';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Theme Toggle using Next 13.2, Next-UI, next-themes and Context API',
  description: 'Theme Toggle using Next 13.2, Next-UI, next-themes and Context API',
}

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
