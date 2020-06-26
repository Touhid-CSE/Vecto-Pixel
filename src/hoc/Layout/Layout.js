import React, { Component} from 'react';
import JsxWrapper from '../JsxWrapper/JsxWrapper';
import classes from './Layout.module.css';
// import NavBar from '../../components/navbar/NavBar';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/footer/Footer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => this.setState({showSideDrawer: false})

    sideDrawerToggleHandler = () => this.setState((prevState) => {
        return {showSideDrawer: !prevState.showSideDrawer}
    })


    render () {
        return (
            <JsxWrapper>
                {/* <NavBar></NavBar> */}
                <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Footer></Footer>
            </JsxWrapper>
        )
    }
} 

export default Layout;