import React from 'react'
import './Services.css'
import Testimonials from '../Testimonials/Testimonials'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
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
                     <Tab.Container id="main-tabs-container" defaultActiveKey="graphics_design">
                        <Nav variant="pills" className="mb-sm-5 mb-4 justify-content-center" defaultActiveKey="graphics_design">
                            <Nav.Item>
                                <Nav.Link eventKey="graphics_design">Graphics Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="digital_marketing">Digital Marketing</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        {/*main tabs contents section  */}
                        <Tab.Content>
                            <Tab.Pane eventKey="graphics_design">
                                <div className="row service-grids">
                                    {/* new section  */}
                                        <Tab.Container id="service-tabs-container" defaultActiveKey="tab_1">
                                            <div className="service-grids-container">
                                                {/* left section */}
                                                <div className="service-left">
                                                    <Nav variant="pills" className="service-menu-items" as="ul" defaultActiveKey="#tab_1">
        
                                                        <Nav.Item className="item1 card" as="li">
                                                            <Nav.Link eventKey="tab_1">
                                                                    <i className="fa fa-desktop fa-3x"></i>
                                                                    <p>Graphic Design</p>
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item className="item2 card" as="li">
                                                            <Nav.Link eventKey="tab_2">
                                                                <i className="fa fa-desktop fa-3x"></i>
                                                                <p>Graphic Design</p>
                                                            </Nav.Link>
                                                        </Nav.Item>   
                                                        <Nav.Item className="item3 card" as="li">
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
                                                <div className=" service-right card">
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="tab_1">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-sm-7 pr-0">
                                                                    <div className="gd-left">
                                                                        <h3>Professional Graphic Design</h3>
                                                                        <p>The main purpose here is to make you able to use graphic design tools and techniques in a professional way. Graphic Design helps to build brand identity of a company. Thus it needs to be conceptual an...</p>
                                                                        <a href="vectopixel" ><span className="highlight-icon">» </span>Read More</a>
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
                                                                    <a href="vectopixel"><span className="highlight-icon">» </span>Read More</a>
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
                                                <div className=" service-galary-section">
                                                    <h1>My Bottom section</h1>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="tab_1">
                                                            <div className="row">
                                                                <h1>tab 1</h1>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="tab_2">
                                                            <div className="row">
                                                                <h1>tab 2</h1>
                                                            </div>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </div>

                                            </div> {/*end of service-grids-container */}
                                            
                                        </Tab.Container>

                                    {/* end of new section  */}
                                </div>
                                
                            </Tab.Pane>
                            <Tab.Pane eventKey="digital_marketing">
                                <div className="row">
                                    <h1>Digital Marketing Active</h1>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                        {/* end of main tabs contents section  */}

                    </Tab.Container>
                    {/* Main options end */}
                </div>
                
            </section>
           
            <WhyChooseUs></WhyChooseUs>
            <Testimonials></Testimonials>
        </div>
    )
}

export default Services