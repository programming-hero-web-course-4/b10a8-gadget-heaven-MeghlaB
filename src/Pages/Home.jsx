import React from 'react'
import Banner from '../Components/Banner'
import Heading from '../Home/Heading'
import { Outlet, useLoaderData } from 'react-router-dom'
import Productsbtn from './Products'

export default function Home() {
  const products = useLoaderData()
  // console.log(products)
  return (
    <div>
        {/* banner */}
      <Banner></Banner>
      {/* Heading */}
      <Heading
      title={'Explore Cutting-Edge Gadgets'}
      >
      </Heading>
      {/* Products btn */} 
      <div className='flex gap-4'>
      <Productsbtn products={products}></Productsbtn>
      <Outlet></Outlet>
      </div>
      {/* <Outlet></Outlet> */}
    </div>
  )
}
