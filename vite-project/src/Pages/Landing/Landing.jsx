import React from 'react'
import LayOut from '../../Component/LayOut/LayOut'
import CarouselEffect from '../../Component/Carousel/Carousel'
import Catagory from '../../Component/Catagory/Catagory'

const Landing = () => {
  return (
    <LayOut>
        <CarouselEffect/>
        <Catagory/>
    </LayOut>
  )
}

export default Landing