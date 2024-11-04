import React, { useEffect, useState } from 'react'
import Card  from './Card'
import { useLoaderData, useParams } from 'react-router-dom'

export default function Cards() {
    const Cards = useLoaderData()
    // console.log(Cards)
    const products = useParams()
    const [productsCard , setproductsCard] = useState([])
    useEffect(()=>{
      if(products && products.name){
        if(products.name === 'All Products'){
          setproductsCard(Cards)
        }
       
        else{ const filterByProduct = [...Cards].filter((product)=>product.name === products.name)
        setproductsCard(filterByProduct)
        }
       
      }
      else{
        setproductsCard(Cards.slice(0,6))
      }
      
      
    },[Cards,products])
    if(productsCard.length === 0){
      return <div className='text-center flex items-center justify-center mx-36'><h1 className='text-5xl font-bold text-purple-600 mt-6'>404 not page find</h1></div>
    }

  return (
    <div className='w-3/4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            productsCard.map((card)=><Card key={card.product_id} card={card} ></Card>)
        }
      </div>
    </div>
  )
}
