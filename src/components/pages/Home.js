import React, {useState} from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel'
import About from './About'
import Portfolio from './Portfolio';
import Contact from './Contact'
import Services from './Services'

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <div className="home-page">

        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval="2500">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="http://unsplash.it/1080/720/?random"
                    height="600px"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="http://unsplash.it/1080/720/?random"
                    height="600px"
                    alt="Second slide"
                  />
          
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="http://unsplash.it/1080/720/?random"
                    height="600px"
                    alt="Third slide"
                  />
          
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
               
               <About></About>

              {/* Image gallery section  */}
              <Portfolio></Portfolio>

              <Services></Services>

              {/* Contact Section  */}
              <Contact></Contact>

      </div>
    );
  }

  export default ControlledCarousel
  
  //render(<ControlledCarousel />);