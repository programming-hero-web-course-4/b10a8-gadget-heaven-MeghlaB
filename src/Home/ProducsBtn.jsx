import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function ProducsBtn({product}) {
    // console.log(product)
  return (
    <div className=' '> 
        <NavLink className={({isActive})=>`bg-[#F7F7F7] px-5 py-3 w-64 rounded-lg space-y-4 ${isActive?'active bg-purple-700 text-white':''}`}  to={`/product/${product.name}` }>
        {product.name}
        </NavLink>
    </div>
  )
}
