'use client';
import { Image, useTheme } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react"
import { createContext, useContext,  useState} from "react";
import React from "react";
import { ThemeContext, useThemeContext} from './Context';



const lightImg = '../toLightMode.svg';
const darkImg = '../toDarkMode.svg';

export default function ToDay()
{
    
    const {color, setColor} = useThemeContext();


    return(
<Button  style = {{backgroundColor : "white"}} onPress={()=>{ (color == 'lightTheme') ? setColor('darkTheme') : setColor('lightTheme'); } }  auto  >
    <Image  showSkeleton
      width={20}
      height={20}  
      src={(color == "lightTheme") ? darkImg : lightImg}
      alt="Default Image"
      objectFit="fill"
      />
</Button>  
)
}
