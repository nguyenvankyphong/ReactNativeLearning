 import React from 'react'
 import RatingStars from './RatingStars'

const Products = (props) => {
  return (
      props.products.map(pro => (
          <div key = {pro.id}>
            <h3>{pro.name}</h3>
            <p>{pro.price}đ</p>
            <RatingStars rating = {pro.rating}/>
          </div>
      ))
    
  )
}

export default Products
