import React from 'react'
import property1 from '../../assets/img/property-1.jpg'
import property2 from '../../assets/img/property-2.jpg'
import property3 from '../../assets/img/property-3.jpg'

const TestimonialTests = () => {
  return (
    <div className='container'>
      <h1 className="display-3 text-center fw-bold my-4">Owl Carousel</h1>
      <div className="row">
          <div className="owl-carousel owl-theme">
            <div className="item">
              <div className="card">
                  <div className="card-body">
                    <img src={property1} alt="" className='card-img-top'/>
                    <hr />
                    <h1 className='text-center'>Owl Carousel</h1>
                  </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                  <div className="card-body">
                    <img src={property2} alt="" className='card-img-top'/>
                    <hr />
                    <h1 className='text-center'>Owl Carousel</h1>
                  </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                  <div className="card-body">
                    <img src={property3} alt="" className='card-img-top'/>
                    <hr />
                    <h1 className='text-center'>Owl Carousel</h1>
                  </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                  <div className="card-body">
                    <img src={property1} alt="" className='card-img-top'/>
                    <hr />
                    <h1 className='text-center'>Owl Carousel</h1>
                  </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                  <div className="card-body">
                    <img src={property2} alt="" className='card-img-top'/>
                    <hr />
                    <h1 className='text-center'>Owl Carousel</h1>
                  </div>
              </div>
            </div>

            
          </div>
      </div>
    </div>
  )
}

export default TestimonialTests