import React from 'react';
import JsxWrapper from '../../hoc/JsxWrapper';
import classes from './Layout.module.css';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';


const layout = (props) => (
    <JsxWrapper>
        <NavBar></NavBar>
        <main className={classes.Content}>
            {props.children}
        </main>
        <Footer></Footer>
    </JsxWrapper>
) 

export default layout;