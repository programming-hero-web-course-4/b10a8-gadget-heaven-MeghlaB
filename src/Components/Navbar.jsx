import React from 'react'
import { FaHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink ,Link, useLocation} from 'react-router-dom'

export default function Navbar() {
    const location = useLocation()
    const isHomePage = location.pathname ==='/'? "bg-purple-600  -mb-12 text-white rounded-t-2xl":"text-black bg-white"
  return (
    <div className={`navbar container mx-auto mt-2 ${isHomePage} gap-4`}>
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
            <NavLink className={({isActive})=>`${isActive?' border px-5 py-3  rounded-2xl bg-purple-600 text-white':''}`} to={'/'}>Home</NavLink>
            <NavLink className={({isActive})=>`${isActive?' border px-5 py-3  rounded-2xl bg-purple-600 text-white':''}`} to={'/statistics'}>Statistics</NavLink>
            <NavLink className={({isActive})=>`${isActive?'border px-5 py-3 rounded-2xl bg-purple-600 text-white':''}`}  to={'/dashboard'}>Dashboard</NavLink>
            </ul>
        </div>
        <div className="navbar-end gap-4 text-2xl">
            <Link> <TiShoppingCart></TiShoppingCart> </Link>
            <Link> <FaHeart></FaHeart> </Link>
        </div>
      
    </div>
  )
}
