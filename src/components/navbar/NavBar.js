import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import  navStyle from './NavBar.module.css'
import logo from "../../assets/images/Vecto-Pixel-Logo.png"

export default function NavBar() {

    const [toggoleControl, setToggoleControl] = useState({display: ""})
    
    const handleToggleButtonClick = () => {
       
        toggoleControl.display ==='none' ?  

            setToggoleControl({display : "flex"}) 
        :  
            setToggoleControl({display : "none"})

       
      
    }

    return (
        <nav className={navStyle.navbar}>
            <div className={navStyle.logo}>
                <NavLink className={navStyle.linkItem} exact activeStyle={{}} to="/">
                    <img alt="logo" src={logo} />
                </NavLink>
            </div>
            <a href="#toggleButton" onClick={handleToggleButtonClick} className={navStyle.toggleButton}>
                <span className={navStyle.bar}></span>
                <span className={navStyle.bar}></span>
                <span className={navStyle.bar}></span>
            </a>
            <div className={navStyle.navbarLinks} style={toggoleControl}>
                <ul>
                    <li><NavLink className={navStyle.linkItem} exact activeStyle={{}} to="/">Home</NavLink></li>
                    <li><NavLink className={navStyle.linkItem} exact activeStyle={{}} to="/about">About</NavLink></li>
                    <li><NavLink className={navStyle.linkItem} exact activeStyle={{}} to="/services">Services</NavLink></li>
                    <li><NavLink className={navStyle.linkItem} exact activeStyle={{}} to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink className={navStyle.linkItem} exact activeStyle={{}} to="/contact">Contact</NavLink></li>
                    <li><NavLink className={navStyle.linkItem} exact activeStyle={{}} to="/admin">Admin</NavLink></li>
               
                </ul>
            </div>
        </nav>
    )
}
