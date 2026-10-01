import React from 'react'

const Product = (props) => {
  return (
    <div>
      <h2>PRODUCT NAME: {props.product.name}</h2>
      <h2>PRICE: {props.product.price}</h2>
    </div>
  )
}

export default Product