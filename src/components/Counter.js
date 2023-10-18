import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/productSlice'

const Counter = () => {
    const count=useSelector((store)=>store.counter.count)
    const dispatch=useDispatch()

  return (
    <div>
      <p>count:{count}</p>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Counter
