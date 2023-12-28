"use client"

import "./Navbar.css";
import React, {useState} from "react";
import { navbar } from "../const";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {

    const [navBar, setNavBar] = useState('menu');

    return (
    <div className="navBar">
        <div className="logoDiv">
            <img src="/logo.png" alt="Kamel Daoud Immobilier" />
        </div>

        <div className="menu">
            <ul>
                {navbar.map((item) => (
                    <li><Link href={item.link} className="navList">{item.title}</Link></li>
                ))}
            </ul>

            <IoMdCloseCircle className="closeIcon icon"/>

        </div>
        
        <HiBars3BottomRight className="icon menuIcon"/>

    </div>
)
}

export default Navbar;