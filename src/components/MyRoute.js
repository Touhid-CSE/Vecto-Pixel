import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Contact from './pages/User/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'
import Home from './pages/User/Home/Home'
import Services from './pages/User/Services/Services'
import About from './pages/User/About/About'
import Portfolio from './pages/User/Portfolio/Portfolio'
import AdminPage from './pages/admin/AdminPage'

export default function MyRoute() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/admin" component={AdminPage}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    )
}
