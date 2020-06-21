import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div>
            
            {/* <!-- mail --> */}
            <div id="mail" className="banner-bottom mail contact pt-5">
                    <div className="container pt-md-3">
                    <h3 className="heading text-center mb-sm-5 mb-4">Contact Us</h3>
                        <div className="row w3ls_banner_bottom_grids">
                            <div className="col-lg-6 w3layouts_mail_grid_left">
                                <div className="agileits_mail_grid_left">
                                    <h3>Contact Details</h3>
                                    <p className="mb-sm-5 mb-3"> if you have any queries please feel free to contact me. </p>
                                    <ul>
                                        <li><label><i className="fa fa-map-marker" aria-hidden="true"></i></label>Dhanmondi Shankar, Dhaka 1209, Bangladesh.</li>
                                        <li><label><i className="fa fa-envelope" aria-hidden="true"></i></label><a href="mailto:info@example.com">touhid4572@diu.edu.bd</a>, <a href="mailto:info@example1.com">touhid_cse@engineer.com</a></li>
                                        <li><label><i className="fa fa-phone" aria-hidden="true"></i></label>+8801681941159, +01765472894</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-lg-0 mt-5 wthree_mail_pos">
                                <form >
                                    <div className="w3_agileits_contact_left">
                                        <h3>Get In Touch</h3>
                                        <input type="text" name="Name" placeholder="Your Name" required=""/>
                                        <input type="email" name="Email" placeholder="Your Email" required=""/>
                                        <input type="text" name="Phone" placeholder="Phone Number" required=""/>
                                        <textarea placeholder="Your Message..." required=""></textarea>
                                        <div className="w3_agileits_contact_right">
                                            <input type="submit" value="SEND MESSAGE"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"> </div>
                                </form>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
                {/* <div className="w3_agileits_map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409238.13468062127!2d34.24871928853258!3d36.7424200891376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f4a4c0be6e9f%3A0x4dbef2b1f81e7d77!2sMersin%2C+Mesudiye+Mahallesi%2C+Akdeniz%2FMersin+Province%2C+Turkey!5e0!3m2!1sen!2sin!4v1490868886492"></iframe>
                </div> */}
            {/* <!-- //mail --> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}
