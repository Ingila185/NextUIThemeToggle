"use client";
import { createContext, useContext, useState } from "react";
import React from 'react';


export const ThemeContext = createContext({
    color: 'lightTheme',
    setColor: (color)=>
    {
            color = color;
    }
});

export const ThemeContextProvider = ({ children }) => {
   const [color, setColor] = useState('lightTheme');

    return (
        <ThemeContext.Provider value={{ color, setColor }}>
            {children}
        </ThemeContext.Provider>
    )
};
export const useThemeContext = () => useContext(ThemeContext);
