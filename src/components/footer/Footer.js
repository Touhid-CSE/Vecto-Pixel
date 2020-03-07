import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/images/Vecto-Pixel-Logo.png'

export default function Footer() {
    return (
         <footer className="py-5">
            <div className="container py-md-3">
                <div className="row footer-grids">
                    <div className="col-lg-4 footer-grid-left">
                        <div className="footer-logo">
                            <img src={footerLogo} alt="Logo" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 footer-grid-middle">
                        <h4>We Accepts</h4>
                        <p>The main purpose here is to make you able to use graphic design tools and techniques in a professional way.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 follow-us-grid mt-md-0 mt-4">
                        <h4> follow us</h4>
                        <div className="social mb-4 text-center">
                            <ul className="d-flex justify-content-center">
                                <li className="mr-2"><a href="#facebook"><span className="fa fa-facebook-f"></span></a></li>
                                <li className="mx-sm-2 mr-2"><a href="#twitter"><span className="fa fa-twitter"></span></a></li>
                                <li className="mx-sm-2 mr-2"><a href="#unknown"><span className="fa fa-rss"></span></a></li>
                                <li className="mx-sm-2 mr-2"><a href="#linkdin"><span className="fa fa-linkedin-in"></span></a></li>
                                <li className="mx-sm-2 mr-2"><a href="#googleplus"><span className="fa fa-google-plus"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright mt-5">
                    <p className="text-center">© 2020 Vecto Pixel | Developed by <a href="http://github.com/Touhid-CSE"> Think Diffrent </a></p>
                </div>
            </div>
        </footer>
    )
}
