import React, { useEffect, useState } from 'react'
import CardDetails from './CardDetails'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/slices/productSlice'

const Products = () => {
    const [data, setData] = useState([])
    const [sample,setSample]=useState("hi")
    
    const dispatch=useDispatch();
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((result)=>setData(result.products))
    }, [])
    const onClickHandler = (e) => {
        console.log(e);
    }
    return (
        <>
        <CardDetails/>
        <button onClick={onClickHandler}>
                Click
            </button>
        <div>
            {
            data.map((item,index)=>{
                return (
                    <>
                    <img src={item.thumbnail}/>
                    <h1>{item.title}</h1>
                    <a href='#'onClick={()=>dispatch(addProduct({
                        id:item.id,
                        title:item.title,
                        price:item.price
                    }))}>Add to products</a>
                    </>
                )
            })    
        }
        </div>

        </>
    )
}

export default Products
