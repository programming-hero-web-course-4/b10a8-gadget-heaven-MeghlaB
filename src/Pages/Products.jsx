import React from 'react'
import ProducsBtn from '../Home/ProducsBtn'
// import { Link } from 'react-router-dom'
export default function Productsbtn({products}) {
    // const[Products , setproducts]=products('All products')
    // console.log(products)
  return (
    <div className=' '>
        <div className='bg-white shadow-xl w-1[300px] py-8 flex flex-col px-10 gap-8'>
            {
              products.map((product)=><ProducsBtn key={product.product_id}
              product={product} 
              ></ProducsBtn>)
            }
        </div>
      </div>
      
  
  )
}
