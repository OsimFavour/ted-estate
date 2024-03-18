import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'
import React from 'react'

const Layout = () => {
    return (
        <>
        <div className="container-xxl bg-white p-0">
            <Navbar/>
                <Outlet/>
            <Footer/>
        </div>
            
        </>
    )
}

export default Layout