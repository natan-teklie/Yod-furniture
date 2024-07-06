import React from 'react'
import classes from './Product.module.css'
import { ProductInfo } from './productInfo'
import ProductCard from './ProductCard'

const Product = () => {
  return (
    <div className={classes.product_container}>{
        
        ProductInfo.map((items)=>{
          return  <ProductCard data={items}/>
        })
        
        }
        </div>
  )
}

export default Product