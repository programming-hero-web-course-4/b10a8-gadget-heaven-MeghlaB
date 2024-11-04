import React from 'react'
// import Banner from '../Components/HomeBanner'
import Heading from '../Home/Heading'
import { Outlet, useLoaderData } from 'react-router-dom'
import Productsbtn from './Products'
import HomeBanner from '../Components/HomeBanner'
import Hero from '../Components/Hero'
// import Join from '../Components/Join'

export default function Home() {
  const products = useLoaderData()
  // console.log(products)
  return (
    <div>
        {/* banner */}
        <HomeBanner></HomeBanner>
        <Hero></Hero>
      {/* Heading */}
      <Heading
      title={'Explore Cutting-Edge Gadgets'}
      >
      </Heading>
      {/* Products btn */} 
      <div className='flex gap-4 container mx-auto'>
      <Productsbtn products={products}></Productsbtn>
      <Outlet></Outlet>
      </div>
      {/* <Outlet></Outlet> */}
    </div>
  )
}
