import React from 'react'
import Product from './Product'

const Parent4 = () => {

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 69999
    },
    {
      id: 2,
      name: "AirPods Pro",
      price: 24999
    },
    {
      id: 3,
      name: "MacBook Air",
      price: 99999
    }
  ]

  return (
    <div>
      <h1>PRODUCTS</h1>

      {products.map((x) => (
        <Product
          key={x.id}
          product={x}
        />
      ))}

    </div>
  )
}

export default Parent4