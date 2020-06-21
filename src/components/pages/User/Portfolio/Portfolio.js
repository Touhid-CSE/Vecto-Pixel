import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
    return (
        <div className="image-gallery-container">
            <h2 className="image-gallery-heading">Latest Projects</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
            <div className="image-gallery">
                <div className="image-item">
                    <img src="http://unsplash.it/355/237/?random" alt="Reload" />
                </div>
                <div className="image-item">
                    <img src="http://unsplash.it/355/237/?random" alt="Reload" />
                </div>
                <div className="image-item">
                    <img src="http://unsplash.it/355/237/?random" alt="Reload" />
                </div>
                <div className="image-item">
                    <img src="http://unsplash.it/355/237/?random" alt="Reload" />
                </div>
                <div className="image-item">
                    <img src="http://unsplash.it/355/237/?random" alt="Reload" />
                </div>

                <div className="image-item">
                    <img src="http://unsplash.it/355/237/?random" alt="Reload" />
                </div>
               
            </div>
        </div>
    )
}
