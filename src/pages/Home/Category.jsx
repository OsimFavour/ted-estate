import React from 'react'
import iconApartment from '../../assets/img/icon-apartment.png'
import iconVilla from '../../assets/img/icon-villa.png'
import iconHouse from '../../assets/img/icon-house.png'
import iconHousing from '../../assets/img/icon-housing.png'
import iconBuilding from '../../assets/img/icon-building.png'
import iconNeighborhood from '../../assets/img/icon-neighborhood.png'
import iconCondominium from '../../assets/img/icon-condominium.png'
import iconLuxury from '../../assets/img/icon-luxury.png'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                    <h1 className="mb-3">Property Types</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <Link className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src={iconApartment} alt="Icon"/>
                                </div>
                                <h6>Apartment</h6>
                                <span>123 Properties</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <Link className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src={iconVilla} alt="Icon"/>
                                </div>
                                <h6>Villa</h6>
                                <span>123 Properties</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src={iconHouse} alt="Icon"/>
                                </div>
                                <h6>Home</h6>
                                <span>123 Properties</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <Link className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src={iconHousing} alt="Icon"/>
                                </div>
                                <h6>Office</h6>
                                <span>123 Properties</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <Link className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src={iconBuilding} alt="Icon"/>
                                </div>
                                <h6>Building</h6>
                                <span>123 Properties</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <Link className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src={iconNeighborhood} alt="Icon"/>
                                </div>
                                <h6>Townhouse</h6>
                                <span>123 Properties</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src={iconCondominium} alt="Icon"/>
                                </div>
                                <h6>Shop</h6>
                                <span>123 Properties</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <Link className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src={iconLuxury} alt="Icon"/>
                                </div>
                                <h6>Garage</h6>
                                <span>123 Properties</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category