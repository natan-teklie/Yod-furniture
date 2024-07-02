import React from 'react'
import './Carousel.css'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { slideImage } from './image/data'

const CarouselEffect = () => {
  return (
    <div 	style={{maxHeight:"95vh",
      maxWidth:"100%", top:"40%"
    }} >
    <Carousel
    autoPlay ={true}
    infiniteLoop ={true}
    showThumbs = {false}
    showIndicators = {false}
    showStatus ={false}
    showArrows = {true}
    className='caro'
    dynamicHeight={false}
    >
   
        {
            slideImage.map((slide)=>{
                return <img src={slide} style={{maxHeight:"100%"}} />
            })
        }
   
    </Carousel>
    <div className="hero_img"></div>
    </div>
  )
}

export default CarouselEffect