import React from 'react'
import classes from './Product.module.css'

const ProductCard = (props) => {
  return (
    <div className={classes.product}>
        <a href="">
            <span>
                <h2>{props.data.title}</h2>
            </span>
            <img src={props.data.imageSrc}/>
            <p>shop now</p>
        </a>
    </div>
  )
}

export default ProductCard