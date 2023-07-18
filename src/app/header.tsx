"use client";
import { Navbar,  Avatar } from "@nextui-org/react";
import Logo from './Logo';
import ToDay from "./toDay";

export default function NavbarTheme()
{
    return(
        <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
            <Logo />
            </Navbar.Brand>
            <Navbar.Content>
            <Navbar.Item>
          <a target = "blank" href = "https://www.linkedin.com/in/ingila-ejaz-a4316460/">LinkedIn</a>
          </Navbar.Item>
            <Navbar.Item>
            <ToDay />
          </Navbar.Item>
          
            </Navbar.Content>
        </Navbar>
    
    );
}