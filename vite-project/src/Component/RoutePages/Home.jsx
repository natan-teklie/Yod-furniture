import React from 'react'
import './All.css'
import HeaderNav from '../HeaderNav/HeaderNav'
import CarouselEffect from '../Carousel/Carousel'
import Catagory from '../Catagory/Catagory'
import Product from '../Product/Product'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
    <HeaderNav/>
    <CarouselEffect/>
    <Catagory/>
    <Product/>
    <Footer/>
    </>
  )
}

export default Home