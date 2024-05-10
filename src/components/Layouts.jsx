import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Carousel from './Carousel'

const Layouts = () => {
  return (
    <>
    {/* <Carousel/> */}
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layouts