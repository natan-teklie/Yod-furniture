import { useState } from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'






import './App.css'
import HeaderNav from './Component/HeaderNav/HeaderNav'
import CarouselEffect from './Component/Carousel/Carousel'
import Catagory from './Component/Catagory/Catagory'
import Product from './Component/Product/Product'
import About from './Component/RoutePages/About'
import Home from './Component/RoutePages/Home'
import Contact from './Component/RoutePages/Contact'
import Gallery from './Component/RoutePages/Gallery/Gallery'



function App() {
  return (
    <>
   
    <Router> 
    <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route path='/about' element ={<About/>} />
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/product' element = {<b/>}/>
        <Route path='/gallery' element = {<Gallery/>}/>
    </Routes>
    </Router>
    
    </>
  )
}

export default App
