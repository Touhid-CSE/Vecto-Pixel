import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import users from './TestimonialsData'
import './Testimonials.css'

export default function Testimonials() {

    let settings = {
        infinite: true,
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    }

    return (
        <div>
            <section className="testimonials py-5">
                <div className="container py-md-3">
                    <h3 className="heading text-capitalize mb-sm-5 mb-4 text-center">Testimonials</h3>
                    <div className="">
                        <div className="testimonial-item-list">
                            {
                                users.length === 0  ? (
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                ):(
                                    <Slider {...settings}>
                                        { users.map(user => (
                                                <div className="testimonial-item pt-5" key={user.id}>
                                                    <div className="testimonial-item-info card px-5">
                                                        <div className="testimonial-item-top">
                                                            <p> {user.message} </p>
                                                        </div>
                                                        <div className="testimonial-item-grids">
                                                            <div className="testimonial-item-img">
                                                                <img src={user.imgUrl} className="" alt="not found" />
                                                            </div>
                                                            <div className="testimonial-item-img-info">
                                                                <h5>{user.name}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )) }
                                    </Slider>
                                ) 
                            }
                           
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
