import React from 'react'

const TestimonialCard = ({testimonial}) => {
  return (
    <div className="testimonial-item bg-light rounded p-3">
        <div className="bg-white border rounded p-4">
            <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
            <div className="d-flex align-items-center">
                <img className="img-fluid flex-shrink-0 rounded" alt='' src={testimonial} style={{width: '45px', height: '45px'}}/>
                <div className="ps-3">
                    <h6 className="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard