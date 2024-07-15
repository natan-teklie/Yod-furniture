import React from 'react'


import WspGallery from './WspGallery'

const Gallery = () => {
  const galleryImages =[
    {
    img:"https://m.media-amazon.com/images/I/81+nGC3hRGL._AC_SL1500_.jpg"
  },
    {
    img:"https://m.media-amazon.com/images/I/8189SDyX4jS._AC_SX679_.jpg"
  },
    {
    img:"https://m.media-amazon.com/images/I/81+nGC3hRGL._AC_SL1500_.jpg"
  },
    {
    img:"https://m.media-amazon.com/images/I/81+nGC3hRGL._AC_SL1500_.jpg"
  },
    {
    img:"https://m.media-amazon.com/images/I/8189SDyX4jS._AC_SX679_.jpg"
  },
    {
    img:"https://m.media-amazon.com/images/I/81+nGC3hRGL._AC_SL1500_.jpg"
  },
    {
    img:"https://m.media-amazon.com/images/I/8189SDyX4jS._AC_SX679_.jpg"
  }
]
  return (
    <div className='pp'>
<br />
<div>
  <strong>Responsive photo gallery </strong>
  <br />
  <br />
 <WspGallery  galleryImages ={galleryImages}/>
 <br />
 <br />
 <div>WebStylePress</div>
</div>
    </div>
  )
}

export default Gallery