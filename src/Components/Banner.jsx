import React from 'react'
import Hero from './Hero'
export default function Banner() {
  return (
    <div className=' '>
      <div className="  bg-purple-600 min-h-[400px] gap-1 rounded-lg">
        <div className="hero-content items-center text-center ">
            <div className="pt-6">
            <h1 className="text-xl md:text-2xl pt-0 lg:text-5xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="py-6 text-white">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="btn bg-slate-50 rounded-2xl text-purple-500">Shop Now</button>
            </div>
        </div>
        </div>
        
    </div>
  )
}
