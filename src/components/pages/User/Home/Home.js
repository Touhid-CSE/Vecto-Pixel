import React, { Component } from 'react';
// import React, { useState } from 'react';
// import classes from './Home.module.css';
// import Carousel from 'react-bootstrap/Carousel';
import Carousel from '../Carousel/Carousel';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import lp1 from "../../../../assets/images/lp1.jpg";
import lp2 from "../../../../assets/images/lp2.jpg";

class HomePage extends Component {

  state = {
    carousel: {
      index: 0,
      direction: null, 
      images: [
        { url: lp1, name: 'First Slide' },
        { url: lp2, name: 'Second Slide' }
      ],
      interval: '2500'
    }
  }

  carouselSelectHandler = (selectedIndex, e) => {
    this.setState({
      carousel: {
        index: selectedIndex,
        direction: e.direction
      }
    })
  }

  render() {
    return (
      <div className="home-page"> 
         <Carousel 
          carouselInterval={this.state.carousel.interval}
          carouselImages={this.state.carousel.images}
        />
        <About></About>
        <Portfolio></Portfolio>
        <Contact />
        <Services></Services>  
      </div>
    )
  }
}

export default HomePage;



// function based Component that uses HOOC

// const ControlledCarousel = () => {
//     const [index, setIndex] = useState(0);
//     const [direction, setDirection] = useState(null);
  
//     const handleSelect = (selectedIndex, e) => {
//       setIndex(selectedIndex);
//       setDirection(e.direction);
//     };
  
//     return (
//       <div className="home-page">

//         <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval="2500">
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     // src="http://unsplash.it/1080/720/?random"
//                     src={lp1}
//                     height="550px"
//                     alt="First slide"
//                   />
//                   <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     // src="http://unsplash.it/1080/720/?random"
//                     src={lp2}
//                     height="550px"
//                     alt="Second slide"
//                   />
          
//                   <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//               </Carousel>
               
//                <About></About>

//               {/* Image gallery section  */}
//               <Portfolio></Portfolio>

//               <Contact />

//               <Services></Services>
              

//       </div>
//     );
//   }

//   export default ControlledCarousel
  
//   //render(<ControlledCarousel />);