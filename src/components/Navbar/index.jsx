import React from 'react'
import { Link } from 'react-router-dom'
import iconDeal from '../../assets/img/icon-deal.png'

const   Navbar = () => {
    return (
        <div className="container-fluid nav-bar bg-transparent">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <Link href="index.html" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <img className="img-fluid" src={iconDeal} alt="Icon" style={{width: '30px', height: '30px'}}/>
                    </div>
                    <h1 className="m-0 text-primary">ted.com</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <Link href="index.html" className="nav-item nav-link active">Home</Link>
                        <Link href="about.html" className="nav-item nav-link">About</Link>
                        <div className="nav-item dropdown">
                            <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link href="property-list.html" className="dropdown-item">Property List</Link>
                                <Link href="property-type.html" className="dropdown-item">Property Type</Link>
                                <Link href="property-agent.html" className="dropdown-item">Property Agent</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link href="testimonial.html" className="dropdown-item">Testimonial</Link>
                                <Link href="404.html" className="dropdown-item">404 Error</Link>
                            </div>
                        </div>
                        <Link href="contact.html" className="nav-item nav-link">Contact</Link>
                    </div>
                    <Link href="" className="btn btn-primary px-3 d-none d-lg-flex">Add Property</Link>
                </div>
            </nav>
        </div>
    )
}

export default  Navbar