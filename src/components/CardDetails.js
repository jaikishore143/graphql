import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
const CardDetails = () => {
    const products=useSelector(state=>state)
    console.log(products)
  return (
    <div>
      Total Products:0-Total Price -0
      {products.products.map((ele)=>(
        <h1>{ele.title}</h1>
      ))}
    </div>
  )
}

export default CardDetails
