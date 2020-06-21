import React from 'react'
import './WhyChooseUs.css'

export default function WhyChooseUs() {
    return (
        <div>
            <section className="why-choose-us">
                <div className="why-choose-us-dott py-5">
                    <div className="container py-3">
                    <h3 className="heading text-center mb-5 pb-lg-5">Why Choose Us</h3>
                        <div className="row why-choose-us-grids">
                            <div className="col-lg-3 col-sm-6">
                                <div className="why-us-grid">
                                    <i className="fa fa-trophy mr-3" aria-hidden="true"></i>
                                    <h3>Reasonable <span>prices</span></h3>
                                    <p className=""> Phasellus iaculis sapien. </p> 
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt-sm-0 mt-5">
                                <div className="why-us-grid">
                                    <i className="fa fa-trophy mr-3" aria-hidden="true"></i>
                                    <h3>Creative <span>Works</span></h3>
                                    <p className=""> Phasellus iaculis sapien. </p> 
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt-lg-0 mt-5">
                                <div className="why-us-grid">
                                    <i className="fa fa-trophy mr-3" aria-hidden="true"></i>
                                    <h3>Your <span>Text</span></h3>
                                    <p className=""> Phasellus iaculis sapien. </p> 
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt-lg-0 mt-5">
                                <div className="why-us-grid">
                                    <i className="fa fa-trophy mr-3" ></i>
                                    <h3>Your <span>Text</span></h3>
                                    <p className=""> Phasellus iaculis sapien. </p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
