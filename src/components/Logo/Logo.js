import React from 'react';
import classes from './Logo.module.css';
import vectoPixelLogo from '../../assets/images/Vecto-Pixel-Logo.png'

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={vectoPixelLogo} alt="Vecto Pixel"/>
    </div>
)

export default logo;