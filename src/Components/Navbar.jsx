import React from 'react'
import { FaHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink ,Link, useLocation} from 'react-router-dom'
// const isHomePage = location.pathname ==='/'? "bg-purple-600  -mb-12 text-white rounded-t-2xl":"text-black bg-white"
// container mx-auto mt-2 gap-4
// className={({isActive})=>`${isActive?' border px-5 py-3  rounded-2xl bg-purple-600 text-white':''}`}
export default function Navbar() {
    const location = useLocation()
    const isHomePage = location.pathname === "/";
    // console.log(isHomePage)
  return (
    <div className={`navbar px-32 flex justify-between ${isHomePage?'absolute top-12 left-0  z-10 text-white':'relative'} `}>
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/statistics'}>Statistics</NavLink>
                    <NavLink to={'/dashboard'}>Dashboard</NavLink>
            </ul>
            </div>
            <Link className="btn btn-ghost text-xl">Gadget Heaven</Link>
        </div>
        <div className="navbar-center hidden lg:flex font-bold text-[16px]">
            <ul className="menu menu-horizontal px-1 gap-4">
            <NavLink  to={'/'}>Home</NavLink>
            <NavLink  to={'/statistics'}>Statistics</NavLink>
            <NavLink  to={'/dashboard'}>Dashboard</NavLink>
            </ul>
        </div>
        <div className="navbar-end gap-4 text-2xl">
            <Link  className='w-10 h-10 rounded-full border flex items-center justify-center'> <TiShoppingCart ></TiShoppingCart> </Link>
            <Link  className='w-10 h-10 rounded-full border flex items-center justify-center' > <FaHeart></FaHeart> </Link>
        </div>
      
    </div>
  )
}
