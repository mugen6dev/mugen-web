import React from 'react'
import './Works.css';
import hand from '../assets/hand.svg';
import neuroWeb from '../assets/neuro_web.jpeg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomLeftArrow, CustomRightArrow } from './CustomArrows';
import phone from '../assets/phone.png';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Works = () => {
  return (

    <section className="works" id='workid'>

      <h1 className='worksText'>WORKS</h1>

      <div className='slider'>

        <div className="container">

          <Carousel
          swipeable={false}
          draggable = {false} 
          containerClass="carousel-container" 
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          infinite={true}
          responsive={responsive}>

            <div className='card'>

              <img src={neuroWeb} alt="website" />

              <div className='text'>
                <h1>Neurotunez Web</h1>
                <p>We are a team of developers and recent graduates from NIT Calicut. With a fresh perspective and a drive for innovation, we deliver trending and top-notch software solutions.</p>
              </div>

            </div>

            <div className='card'>

              <img src={phone} alt="website" />

              <div className='text'>
                <h1>Neurotunez App(In progress)</h1>
                <p>We are a team of developers and recent graduates from NIT Calicut. With a fresh perspective and a drive for innovation, we deliver trending and top-notch software solutions.</p>
              </div>

            </div>
            <div>Item 3</div>
            <div>Item 4</div>
          </Carousel>

        </div>

      </div>

    </section>

  )
}

export default Works
