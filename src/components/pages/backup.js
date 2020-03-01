import React from 'react'
import './Services.css'
import Testimonials from './Testimonials'
import WhyChooseUs from './WhyChooseUs'

const Services = () => {
    return (
        <div>
            <section className="services py-5">
                <div className="container py-lg-5 py-3">
                    <h3 className="heading text-center mb-sm-5 mb-4">Our Services</h3>
                    <div className="row service-grids">
                        {/* new section  */}

                        <div className="row tabs">

                            {/* left section */}
                            <div className="col-lg-4 col-sm-12 col-md-8 m-md-auto px-0">
                                <ul className="nav nav-pills nav-stacked">
                                    <li className="active">
                                        <a href="#tab_1" data-toggle="pill">
                                            {/* <span className="flaticon-design"></span> */}
                                            <i className="fa fa-desktop"></i>
                                            <p>Graphic Design</p>
                                        </a>
                                    </li>
                                    <li className="brlrb">
                                        <a href="#tab_2" data-toggle="pill">
                                            {/* <span className="flaticon-web-design"></span> */}
                                            <i className="fa fa-desktop"></i>
                                            <p>Web Design</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#tab_3" data-toggle="pill">
                                            {/* <span className="flaticon-web-development"></span> */}
                                            <i className="fa fa-desktop"></i>
                                            <p>Web Development</p>
                                        </a>
                                    </li>
                                    <li className="btbb">
                                        <a href="#tab_4" data-toggle="pill">
                                            {/* <span className="flaticon-chart"></span> */}
                                            <i className="fa fa-desktop"></i>
                                            <p>Digital Marketing</p>
                                        </a>
                                    </li>
                                    <li className="brlrb">
                                        <a href="#tab_5" data-toggle="pill">
                                            {/* <span className="flaticon-house-plans"></span> */}
                                            <i className="fa fa-desktop"></i>
                                            <p>Interior Design</p>
                                        </a>
                                    </li>
                                    <li className="bt">
                                        <a href="#tab_6" data-toggle="pill">
                                            {/* <span className="flaticon-group"></span> */}
                                            <i className="fa fa-desktop"></i>
                                            <p>Networking</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#tab_7" data-toggle="pill">
                                            {/* <span className="flaticon-mobile-app-developing"></span> */}
                                            <i className="fa fa-desktop"></i>
                                            <p>App Development</p>
                                        </a>
                                    </li>
                                    <li className="bl-0 br-0">
                                        <a href="#tab_8" data-toggle="pill">
                                            {/* <span className="flaticon-web-design-1"></span> */}
                                            <i className="fa fa-desktop"></i>
                                            <p>UI/UX Design</p>
                                        </a>
                                    </li>
                                    <li className="bt">
                                        <a href="#tab_9" data-toggle="pill">
                                            {/* <span className="flaticon-modeling"></span> */}
                                            <i className="fa fa-desktop"></i>
                                            <p>3D Animation</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* end of left section  */}

                            {/* right-section */}
                            <div className="col-lg-8 col-sm-12 col-md-8 m-auto px-sm-0">
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tab_1">
                                        <div className="row">
                                            <div className="col-lg-7 col-sm-7 pr-0">
                                                <div className="gd-left">
                                                    <h3>Professional Graphic Design</h3>
                                                    <p>The main purpose here is to make you able to use graphic design tools and techniques in a professional way. Graphic Design helps to build brand identity of a company. Thus it needs to be conceptual an...</p>
                                                    <a href="https://creativeitinstitute.com/professional-graphic-design-training-in-bangladesh"><span className="highlight-icon">» </span>Read More</a>
                                                </div>
                                                <div className="seat">
                                                    <p> <img alt="" src="https://creativeitinstitute.com/front/images/seat.png" /> <span></span>Admission Going On </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-sm-5">
                                                <div className="gd-right">
                                                    <img  src="https://creativeitinstitute.com/front/images/courses_qube/graphic.jpg" alt="gd1" className="img-fluid w-100" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                     <div className="tab-pane" id="tab_2">
                                        <div className="row">
                                            <div className="col-lg-7 col-sm-7 pr-0">
                                                <div className="gd-left">
                                                    <h3>Responsive Web Design</h3>
                                                    <p>Web design means creating websites with user-friendly structure and with aesthetic approach. A web designer always thinks about the layout, color scheme and unique design of a website. But their task...</p>
                                                    <a href="https://creativeitinstitute.com/responsive-web-design-training-in-bangladesh"><span className="highlight-icon">» </span>Read More</a>
                                                </div>
                                                <div className="seat">
                                                    <p> <img alt="" src="https://creativeitinstitute.com/front/images/seat.png" /> <span></span>Admission Going On</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-sm-5">
                                                <div className="gd-right">
                                                    <img src="https://creativeitinstitute.com/front/images/courses_qube/web.jpg" alt="gd1" className="img-fluid w-100" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end of right section */}


                        </div>

                        {/* end of new section  */}
                    </div>
                </div>
            </section>
           
            <WhyChooseUs></WhyChooseUs>
            <Testimonials></Testimonials>
        </div>
    )
}

export default Services