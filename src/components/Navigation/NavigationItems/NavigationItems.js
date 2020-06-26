import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/'>Home</NavigationItem>
        <NavigationItem link="/about">About</NavigationItem>
        <NavigationItem link="/services">Service</NavigationItem>
        <NavigationItem link="/portfolio">Portfolio</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
)

export default navigationItems;