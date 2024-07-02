import React from 'react'
import './All.css'
import Footer from '../Footer/Footer'
import HeaderNav from '../HeaderNav/HeaderNav'
import CarouselEffect from '../Carousel/Carousel'
import abtBanner from './bannerImage/abtBanner.jpg'

const About = () => {
  return (
    <>
    <HeaderNav/>
   
    <div className='about_container'>
      <img src={abtBanner} alt=""  />
      
      <h1>who is Yod Furniture?</h1>
    
    <p>
    In manufacturing we have continued to invest in new technology and machinery to continue its popular pace with new designs and styles to suit clients' needs. In particular, we have invested in post-forming machinery. Technology to work with corian material as well as other woodworking machines. Having established itself as a market leader for office furniture, the group has also continued its growth strategy and has developed additional lines that includes kitchens and wardrobes, joinery & fit outs and custom made furniture.</p>
    <p>
    In manufacturing we have continued to invest in new technology and machinery to continue its popular pace with new designs and styles to suit clients' needs. In particular, we have invested in post-forming machinery. Technology to work with corian material as well as other woodworking machines. Having established itself as a market leader for office furniture, the group has also continued its growth strategy and has developed additional lines that includes kitchens and wardrobes, joinery & fit outs and custom made furniture.</p>
    <p>
    In manufacturing we have continued to invest in new technology and machinery to continue its popular pace with new designs and styles to suit clients' needs. In particular, we have invested in post-forming machinery. Technology to work with corian material as well as other woodworking machines. Having established itself as a market leader for office furniture, the group has also continued its growth strategy and has developed additional lines that includes kitchens and wardrobes, joinery & fit outs and custom made furniture.</p>
    <Footer/>
    </div>
   
    </>
  )
}

export default About