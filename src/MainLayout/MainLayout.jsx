import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Others Components */}
      <div className='min-h-[calc(100vh-288px)] container mx-auto px-4 py-12'>
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  )
}
