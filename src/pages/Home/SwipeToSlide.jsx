import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/img/left-arrow.svg"
import RightArrow from "../../assets/img/right-arrow.svg"
import { services } from "../../utils/Data";

function SwipeToSlide() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );

  const settings = {
    // className: "center",
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 1,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    prevArrow: <SlickArrowLeft/>,
    nextArrow: <SlickArrowRight/>,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 2, // Change to 2 items on mobile
        },
      },
    ],
  };
  return (
    <>
    <div className="slider-container container">
      <h2>Single Item</h2>
      <Slider {...settings}>
          {services.map((item, index) => {

            return (
              <section key={index} class="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded" >
                <div class="row d-flex justify-content-center">
                  <div class="col-md-10">
                    <div class="card">
                      <div class="card-body m-3">
                        <div class="row">
                          <div class="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                              class="rounded-circle img-fluid shadow-1" alt="woman avatar" width="200" height="200" />
                          </div>
                          <div class="col-lg-8">
                            <p class="text-muted fw-light mb-4">
                              {item.tagline}
                            </p>
                            <p class="fw-bold lead mb-2"><strong>{item.title}</strong></p>
                            <p class="fw-bold text-muted mb-0">Product manager</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )

          })}
      </Slider>

      
      </div>
    </>
  );
}

export default SwipeToSlide;
