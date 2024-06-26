import React from 'react'
import carousel1 from '../../assets/img/carousel-1.jpg'
import carousel2 from '../../assets/img/carousel-2.jpg'

const Header = () => {
    return (
        <div className="container-fluid header bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-5 mt-lg-5">
                    <h1 className="display-5 animated fadeIn mb-4 font-700">Find A <span className="text-primary">Perfect Home</span> To Live With Your Family</h1>
                    <p className="animated fadeIn mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet
                        sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                    <a href="" className="btn btn-primary button-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
                </div>
                <div className="col-md-6 animated fadeIn">
                    <div className="owl-carousel header-carousel">
                        <div className="owl-carousel-item">
                            <img className="img-fluid" src={carousel1} alt=""/>
                        </div>
                        <div className="owl-carousel-item">
                            <img className="img-fluid" src={carousel2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header