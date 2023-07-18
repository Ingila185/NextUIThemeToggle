"use client";

import NavbarTheme  from './header';
import { Navbar,  Avatar } from "@nextui-org/react";

export default function FooterNav()
{
    return (
        <div  style={{ position: "absolute", bottom: 0, width:"100%" }}> 
                <Navbar isBordered variant="sticky">
                <Navbar.Toggle showIn="xs" />
                <Navbar.Content>
                <Navbar.Item>
                <h4>Footer </h4>
                </Navbar.Item>
                
                </Navbar.Content>
                
                
                
                </Navbar>



       </div>
       
       )
}