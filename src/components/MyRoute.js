import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Display from './pages/crud/firebase/Display'
import ImageUpload from './pages/crud/firebase/ImageUpload'
import ImagesHook from './pages/crud/firebase/ImagesHook'
import Services from './pages/Services'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import AdminPage from './pages/admin/AdminPage'
// import About from './pages/About'

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
                <Route path="/crud-firebase" component={Display}/>
                <Route path="/firebase-file-upload" component={ImageUpload}/>
                <Route path="/firebase-image-list" component={ImagesHook}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    )
}
