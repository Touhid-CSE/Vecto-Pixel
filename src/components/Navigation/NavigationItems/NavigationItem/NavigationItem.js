import React from 'react';
import classes from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom';

const navigationItem = (props) => {
    let activeStyle = {
        color: 'white',
        backgroundColor: '#0973b9',
        borderBottom: '4px solid red'
    }

    return (
        <li className={classes.NavigationItem}>
            {/* <a href={props.link} className={props.active ? classes.active : null}>{props.children}</a> */}
            <NavLink exact activeStyle={activeStyle} to={props.link}>
                {props.children}
            </NavLink>
        </li>
    )
}

export default navigationItem;