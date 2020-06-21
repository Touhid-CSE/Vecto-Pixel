import React from 'react'
import './About.css'

export default function () {
    return (
        <section className="about-section py-3">
            <div className="container py-lg-5 py-3">
                <h3 className="about-title text-center">Welcome To: <span style={{fontSize: "34px"}}><span style={{color: '#0973b9'}}>Vecto</span> Pixel</span> </h3>
                <div className="about-section-grids">
                    <div className="about-grid-top">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                    <div className="about-grid-bottom-left">
                        <div className="our-mission">
                            <h5>Our Mission</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="our-strength">
                            <h5>Our Strength</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="about-grid-bottom-right">
                        <img src="http://unsplash.it/355/237/?random" alt="Reload" />
                    </div>
                </div>
            </div>
        </section>
    )
}
