import React from 'react'
import bannerImage from '../assets/banner.jpg';
export default function Hero() {
  return (
    <div className=" px-10 container mx-auto  relative -top-24  ">
      <div className=" border bg-white/15 p-4 rounded-3xl border-white  ">
        <div className=" rounded-md banner   ">
            <img className='rounded-2xl h-[250px] md:h-[350px] lg:h-[550px] w-full' src={bannerImage} alt="" />
        </div>
        </div>
      </div>
    
  )
}
