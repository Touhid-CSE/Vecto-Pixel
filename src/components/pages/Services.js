import React from 'react'
import './Services.css'
import Testimonials from './Testimonials'

const Services = () => {
    return (
        <div className="">
        {/* // <!-- services --> */}
            <section className="inner-services py-5">
                <div className="container py-lg-5 py-3">
                    <h3 className="heading text-center mb-sm-5 mb-4">Our Services</h3>
                    <div className="row service-grids">
                        <div className="col-md-4 service-grid1">
                            <i className="fa clr1 fa-video"></i>
                            <h4>Video Editing</h4>
                            <p>Duis fringilla velit ipsum dignissim init ipsum elementum. Curabitur fermentum libero acsit amet consectetur dolor sit. </p>
                        </div>
                        <div className="col-md-4 mt-md-0 mt-5 service-grid1">
                            <i className="fa clr2 fa-camera"></i>
                            <h4>Photo Editing</h4>
                            <p>Duis fringilla velit ipsum dignissim init ipsum elementum. Curabitur fermentum libero acsit amet consectetur dolor sit. </p>
                        </div>
                        <div className="col-md-4 mt-md-0 mt-5 service-grid1">
                            <i className="fa clr3 fa-images"></i>
                            <h4>Banner Desing</h4>
                            <p>Duis fringilla velit ipsum dignissim init ipsum elementum. Curabitur fermentum libero acsit amet consectetur dolor sit. </p>
                        </div>
                        <div className="col-md-4 mt-5 service-grid2 text-center">
                            <i className="fa clr3 fa-images"></i>
                            <h4>Logo Design</h4>
                            <p>Duis fringilla velit ipsum dignissim init acd ipsum elementum. Curabitur fermen libero lacsit amet consectetur dolor sit. </p>
                        </div>
                        <div className="col-md-4 mt-5 service-grid2 text-center">
                            <i className="fa clr2 fa-images"></i>
                            <h4>My text</h4>
                            <p>Duis fringilla velit ipsum dignissim init acd ipsum elementum. Curabitur fermen libero lacsit amet consectetur dolor sit. </p>
                        </div>
                        <div className="col-md-4 mt-5 service-grid2 text-center">
                            <i className="fa clr1 fa-images"></i>
                            <h4>My Text</h4>
                            <p>Duis fringilla velit ipsum dignissim init acd ipsum elementum. Curabitur fermen libero lacsit amet consectetur dolor sit. </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* // <!-- //services --> */}

            {/* // <!-- services --> */}
            <section className="services">
                <div className="banner-dott1 py-5">
                    <div className="container py-3">
                    <h3 className="heading text-center mb-5 pb-lg-5">Why Choose Us</h3>
                        <div className="row servicegrids">
                            <div className="col-lg-3 col-sm-6">
                                <div className="grid1">
                                    <i className="fa fa-trophy mr-3" aria-hidden="true"></i>
                                    <h3>Reasonable <span>prices</span></h3>
                                    <p className=""> Phasellus iaculis sapien. </p> 
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt-sm-0 mt-5">
                                <div className="grid1">
                                    <i className="fa fa-trophy mr-3" aria-hidden="true"></i>
                                    <h3>Creative <span>Works</span></h3>
                                    <p className=""> Phasellus iaculis sapien. </p> 
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt-lg-0 mt-5">
                                <div className="grid1">
                                    <i className="fa fa-trophy mr-3" aria-hidden="true"></i>
                                    <h3>Your <span>Text</span></h3>
                                    <p className=""> Phasellus iaculis sapien. </p> 
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt-lg-0 mt-5">
                                <div className="grid1">
                                    <i className="fa fa-trophy mr-3" ></i>
                                    <h3>Your <span>Text</span></h3>
                                    <p className=""> Phasellus iaculis sapien. </p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* // <!-- //services --> */}

            {/* // <!-- testimonials --> */}
            <Testimonials></Testimonials>
            {/* // <!-- //testimonials --> */}
        </div>
    )
}

export default Services