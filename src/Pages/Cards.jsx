import React, { useEffect, useState } from 'react'
import Card  from './Card'
import { useLoaderData, useParams } from 'react-router-dom'

export default function Cards() {
    const Cards = useLoaderData()
    console.log(Cards)
    const {products} = useParams()
    console.log(products)
    const[productsCard , setproductsCard]=useState([])
    useEffect((() => {
        const productsCard = [...Cards].filter(card=>card.name === products.name)
        setproductsCard(productsCard)

    },[]))
    console.log(productsCard)
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
