import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import  navStyle from './NavBar.module.css'

export default function NavBar() {

    const [toggoleControl, setToggoleControl] = useState({display: ""})
    // const [width, setWidth] = useState(window.innerWidth)

    // React.useEffect(() => {
    //     const handleResize = () => setWidth(window.innerWidth)
    //     window.addEventListener('resize', handleResize)
    //     return () => {
    //         window.removeEventListener('resize', handleResize)
    //     };
    // })

    const handleToggleButtonClick = () => {
       
        toggoleControl.display ==='none' ?  

            setToggoleControl({display : "flex"}) 
        :  
            setToggoleControl({display : "none"})

       
      
    }

    return (
        <nav className={navStyle.navbar}>
            <div className={navStyle.logo}>
                <NavLink className={navStyle.linkItem} exact activeStyle={{}} to="/">Vecto Pixel</NavLink>
            </div>
            <a href="#toggleButton" onClick={handleToggleButtonClick} className={navStyle.toggleButton}>
                <span className={navStyle.bar}></span>
                <span className={navStyle.bar}></span>
                <span className={navStyle.bar}></span>
            </a>
            <div className={navStyle.navbarLinks} style={toggoleControl}>
                <ul>
                    <li><NavLink className={navStyle.linkItem} exact activeStyle={{}} to="/">Home</NavLink></li>
                    <li><NavLink className={navStyle.linkItem} exact activeStyle={{}} to="/services">Services</NavLink></li>
                    <li><NavLink className={navStyle.linkItem} exact activeStyle={{}} to="/contact">Contact</NavLink></li>
                    <li><NavLink className={navStyle.linkItem} exact activeStyle={{}} to="/crud-firebase">Crud</NavLink></li>
                    <li><NavLink className={navStyle.linkItem} exact activeStyle={{}} to="/firebase-file-upload">Upload</NavLink></li>
                    <li><NavLink className={navStyle.linkItem} exact activeStyle={{}} to="/firebase-image-list">Images</NavLink></li>
               
                </ul>
            </div>
        </nav>
    )
}