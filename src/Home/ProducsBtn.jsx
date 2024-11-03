import React from 'react'
import { Link } from 'react-router-dom'
export default function ProducsBtn({product}) {
    // console.log(product)
  return (
    <div className=' '>
        <Link to={`/product/${product.name}`}>
              <button className='bg-[#F7F7F7] px-5 py-1 w-52 rounded-lg space-y-4'>{product.name}</button>
        </Link>
    </div>
  )
}
