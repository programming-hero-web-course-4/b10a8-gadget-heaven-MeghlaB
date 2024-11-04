import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import { LuStar } from "react-icons/lu";
import { BsCart4 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
export default function CardDetails() {
    const product = useLoaderData()
    console.log(product)
    const {product_id}= useParams()
    console.log(product_id)
    const [products , setProducts] = useState([])
    useEffect(()=>{
        const productFind = product.find((product)=> product.product_id == product_id)
        setProducts(productFind)
    },[])
    console.log(products)
    const {product_image,name,price,description,Specification,rating
        
    } = products
  return (
      <div>
          <div className='bg-[#9538E2] min-h-[350px] w-full  rounded-lg'>
            <div className='hero-content items-center text-center'>
                <div className='pt-2 '>
                    <h1 className='text-xl md:text-2xl pt-0 lg:text-3xl font-bold text-white'>
                     Product Details
                    </h1>
                    <p className="py-6 text-white">
                        Explore the latest gadgets that will take your experience to the next level. <br />s From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
            </div>
        </div>
        <div className=" px-10 container mx-auto  relative -top-40  ">
      <div className=" border bg-white p-4 rounded-2xl border-white  ">
        <div className=" rounded-md banner bg-white p-6 flex gap-14  ">
           <div className='p-5 h-[450px] w-[424px] shadow-md rounded-md'>
               <img src={product_image} alt="" className='w-full' />
           </div>
           <div className='space-y-2'>
                <h1 className='text-xl lg:text-2xl font-bold'>{name}</h1>
                <p className='text-xs font-bold'>Price: <span>$</span>{price}</p>
                <button className='btn rounded-full border-green-300 text-green-500'>in Stock</button>
                <h1 className="text-gray-500 text-xl">{description}</h1>
                <div>
                    <h1 className='text-xl lg:text-2xl font-bold'>Specification:</h1>
                    <ul className='text-xl ml-12'>
                       {
                        Specification && Specification.map(list=>(<li key={list} className='list-decimal'>{list}</li>))
                       }
                    </ul>
                </div>
                <h1 className='text-xl font-bold'>Ratings</h1>
                <div className='flex text-xl text-amber-400 '>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><LuStar /></p>
                    <div className='ml-3 px-2 w-12  bg-gray-200 border rounded-full'>
                      <button className='text-black'>{rating}</button>
                    </div>
                </div>  
                <div className='flex items-center gap-6'>
                    <button className='flex gap-2 items-center btn bg-purple-800 rounded-full text-white hover:bg-purple-950 '>Add to Cart<BsCart4 className='text-xl' /></button>
                    <div >
                      <CiHeart className='text-2xl w-10 h-10 items-center rounded-full border-spacing-20'/>
                    </div> 
                    
                </div>   
           </div>
        </div>
        </div>
      </div>
      </div>
      
   
  )
}
