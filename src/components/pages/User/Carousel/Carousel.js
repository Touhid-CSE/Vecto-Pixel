import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import classes from './Carousel.module.css'

const carousel = (props) => {
    return (
        <div className={classes.Carousel}>
            <Carousel interval={props.carouselInterval}>
            {
                 props.carouselImages.map((image, i) => {
                    return (
                        <Carousel.Item key={i}>
                        <img
                          className=""
                          src={image.url}
                        //   height="550px"
                          alt={image.name}
                        />
                        <Carousel.Caption>
                            <div className={classes.Caption}>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </Carousel.Caption>
                      </Carousel.Item>
                    )
                })
            }
        </Carousel>

        </div>
    )
}

export default carousel;