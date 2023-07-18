"use client";


import NavbarTheme from './header'
import {useThemeContext} from './Context';
import { Container, createTheme, NextUIProvider } from "@nextui-org/react"

import FooterNav from './footer';

export default function Home() {

  const lightTheme = createTheme({
    type: 'light',
   
  })
  
  const darkTheme = createTheme({
    type: 'dark',
    theme:{
      colors: {}
    }
   
  })
  
  const {color, setColor} = useThemeContext();
  return (
    <NextUIProvider disableBaseline  theme={color == "lightTheme" ? lightTheme : darkTheme}>  
    <NavbarTheme />


    <main>    
    <Container>
    <h2>
      Toggle theme using Next 13.2, Next-UI, next-themes and Context API. Clone this repository to build up your own.
    </h2>
    <ul>
    <li>
      <a href = "https://nextjs.org/" target = "blank">Next 13.2</a></li>
    <li>  <a href = "https://nextui.org/" target = "blank">Next UI (Beta)</a> </li>
    <li>  <a href = "https://github.com/pacocoursey/next-themes" target = "blank">next-themes (Pretty Cool)</a></li>
    <li>  <a href = "https://nextjs.org/blog/next-13-2" target = "blank">Context API </a></li>
    <li>  <a href = "http://es6-features.org/" target = "blank">JavaScript ES6</a></li>

    </ul>

    </Container>
    </main>

   
    </NextUIProvider>


  )
}
