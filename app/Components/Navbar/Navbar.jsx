import "./Navbar.css";
import { navbar } from "../const";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

const Navbar = () => (
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
        </div>
        
        <HiBars3BottomRight className="icon"/>

    </div>
)

export default Navbar;