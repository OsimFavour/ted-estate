import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'
import React from 'react'
import Spinner from '../Spinner'
// import MainScript from '../MainScript'

const Layout = () => {
    return (
        <>
        {/* <MainScript /> */}
        <div className="container-xxl bg-white p-0">
            <Spinner/>
            <Navbar/>
                <Outlet/>
            <Footer/>
            <Link to="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></Link>
        </div>
            
        </>
    )
}

export default Layout