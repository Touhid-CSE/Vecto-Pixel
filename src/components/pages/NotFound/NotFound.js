import React from 'react'
import './NotFound.css'

export default function NotFound() {
    return (
        <div>
            {/* <!-- error content --> */}
            <section className="error py-5 text-center">
                <div className="container py-md-3">
                    <h2>404</h2>
                    <h3 className="mb-4"> Oops! Page Not Found </h3>
                    <p className="mb-4">The page you are looking fo is not found in this server ! please go back to home page</p>
                    <a href="home" className="mr-sm-3">Home page </a>
                    <a href="contact" className=""> Contact Us </a>
                </div>
            </section>
            {/* <!-- //error content --> */}
        </div>
    )
}
