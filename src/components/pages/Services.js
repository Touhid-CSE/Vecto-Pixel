import React from 'react'
import './Services.css'
import Testimonials from './Testimonials'
import WhyChooseUs from './WhyChooseUs'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

const Services = () => {
    return (
        <div>
            <section className="services py-5">
                <div className="container py-lg-5 py-3">
                    <h3 className="heading text-center">Our Services</h3>
                    <p className="service-sub-heading w-75 mx-auto">The main purpose here is to make you able to use graphic design tools and techniques in a professional way. Graphic Design helps to build brand identity of a company.</p>
                     {/* main options start */}
                        <Nav variant="pills" className="mb-sm-5 mb-4 justify-content-center" defaultActiveKey="fsfs">
                            <Nav.Item>
                                <Nav.Link eventKey="fsfs">Graphics Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Digital Marketing</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    {/* Main options end */}
                    <div className="row service-grids">
                        {/* new section  */}
                        <div className="row tabs">
                            <Tab.Container id="service-tabs-container" defaultActiveKey="tab_1">
                                {/* left section */}
                                <div className="service-left col-lg-4 col-sm-12 col-md-8 m-md-auto px-0">
                                <Nav variant="pills" className="service-menu-items" as="ul" defaultActiveKey="#tab_1">
                                    <Nav.Item className="card" as="li">
                                        <Nav.Link eventKey="tab_1">
                                                <i className="fa fa-desktop fa-3x"></i>
                                                <p>Graphic Design</p>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="card" as="li">
                                        <Nav.Link eventKey="tab_2">
                                            <i className="fa fa-desktop fa-3x"></i>
                                            <p>Graphic Design</p>
                                        </Nav.Link>
                                    </Nav.Item>   
                                    <Nav.Item className="card" as="li">
                                        <Nav.Link eventKey="tab_3">
                                            <i className="fa fa-desktop fa-3x"></i>
                                            <p>Graphic Design</p>
                                        </Nav.Link>
                                    </Nav.Item>  
                                    <Nav.Item className="card" as="li">
                                        <Nav.Link eventKey="lihghnk-1">
                                            <i className="fa fa-desktop fa-3x"></i>
                                            <p>Graphic Design</p>
                                        </Nav.Link>
                                    </Nav.Item>  
                                    <Nav.Item className="card" as="li">
                                        <Nav.Link eventKey="linfffk-1">
                                            <i className="fa fa-desktop fa-3x"></i>
                                            <p>Graphic Design</p>
                                        </Nav.Link>
                                    </Nav.Item>  
                                    <Nav.Item className="card" as="li">
                                        <Nav.Link eventKey="linkds-1">
                                            <i className="fa fa-desktop fa-3x"></i>
                                            <p>Graphic Design</p>
                                        </Nav.Link>
                                    </Nav.Item>  
                                    <Nav.Item className="card" as="li">
                                        <Nav.Link eventKey="lidsdnk-1">
                                            <i className="fa fa-desktop fa-3x"></i>
                                            <p>Graphic Design</p>
                                        </Nav.Link>
                                    </Nav.Item>  
                                    <Nav.Item className="card" as="li">
                                        <Nav.Link eventKey="#shdjsh">
                                            <i className="fa fa-desktop fa-3x"></i>
                                            <p>Graphic Design</p>
                                        </Nav.Link>
                                    </Nav.Item>  
                                    <Nav.Item className="card" as="li">
                                        <Nav.Link eventKey="#gd">
                                            <i className="fa fa-desktop fa-3x"></i>
                                            <p>Graphic Design</p>
                                        </Nav.Link>
                                    </Nav.Item>  
                                </Nav>
                                </div>
                                {/* end of left section  */}

                                {/* right-section */}
                                <div className="card service-right col-lg-8 col-sm-12 col-md-8 m-auto px-sm-0">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="tab_1">
                                            <div className="row">
                                                <div className="col-lg-7 col-sm-7 pr-0 pl-4 pt-4">
                                                    <div className="gd-left">
                                                        <h3>Professional Graphic Design</h3>
                                                        <p>The main purpose here is to make you able to use graphic design tools and techniques in a professional way. Graphic Design helps to build brand identity of a company. Thus it needs to be conceptual an...</p>
                                                        <a href ><span className="highlight-icon">» </span>Read More</a>
                                                    </div>
                                                    <div className="seat">
                                                        <p>Admission Going On </p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-sm-5">
                                                    <div className="gd-right">
                                                        <img  src="https://creativeitinstitute.com/front/images/courses_qube/graphic.jpg" alt="gd1" className="img-fluid w-100" />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab_2">
                                        <div className="row">
                                            <div className="col-lg-7 col-sm-7 pr-0">
                                                <div className="gd-left">
                                                    <h3>Responsive Web Design</h3>
                                                    <p>Web design means creating websites with user-friendly structure and with aesthetic approach. A web designer always thinks about the layout, color scheme and unique design of a website. But their task...</p>
                                                    <a href><span className="highlight-icon">» </span>Read More</a>
                                                </div>
                                                <div className="seat">
                                                    <p>Admission Going On</p>
                                                </div>
                                                </div>
                                                <div className="col-lg-5 col-sm-5">
                                                    <div className="gd-right">
                                                        <img src="https://creativeitinstitute.com/front/images/courses_qube/web.jpg" alt="gd1" className="img-fluid w-100" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                                {/* end of right section */}
                            </Tab.Container>
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