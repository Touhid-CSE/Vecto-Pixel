import React, { Component} from 'react';
import JsxWrapper from '../JsxWrapper/JsxWrapper';
import classes from './Layout.module.css';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';

class Layout extends Component {
    render () {
        return (
            <JsxWrapper>
                <NavBar></NavBar>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Footer></Footer>
            </JsxWrapper>
        )
    }
} 

export default Layout;