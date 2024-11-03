import React from 'react'

export default function Footer() {
  return (
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>Gadget Heaven</h1>
            <p className='text-[16px] text-gray-500 font-semibold'>Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <nav>
            <div className="grid grid-flow-col gap-4 lg:gap-16 ">
                <nav className=''>
                    <h6 className=" text-[18px] font-bold text-black">Services</h6>
                    <div className='text-[16px] text-gray-600 py-3 '>
                    <a className="pt-2 ">Product Support</a><br />
                    <a className="pt-2">Order Tracking</a><br />
                    <a className="pt-2">Shipping & Delivery</a><br />
                    <a className="py-2">Returns</a>
                    </div>
                </nav>
                <nav>
                    <h6 className="text-[18px] font-bold text-black">Company</h6>
                   <div  className='text-[16px] text-gray-600 py-3'>
                    <a className="pt-2">About us</a><br />
                    <a className="pt-2">Careers</a><br />
                    <a className="pt-2">Contact</a><br />
                    
                   </div>
                </nav>
                <nav>
                    <h6 className="text-[18px] font-bold text-black ">Legal</h6>
                    <div  className='text-[16px] text-gray-600 py-3'>
                        <a className="pt-2">Terms of use</a><br />
                        <a className="pt-2">Privacy policy</a><br />
                        <a className="pt-2">Cookie policy</a>
                    </div>
                </nav>
            </div>
        </nav>
        
</footer>
   
  )
}
