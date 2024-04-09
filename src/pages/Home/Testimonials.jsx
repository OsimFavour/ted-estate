import React from 'react'
import testimonial1 from '../../assets/img/testimonial-1.jpg' 
import testimonial2 from '../../assets/img/testimonial-2.jpg'
import testimonial3 from '../../assets/img/testimonial-3.jpg'
import TestimonialCard from '../../components/TestimonialCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import SwiperButton from '../../components/SwiperButtons';

const Testimonials = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                    <h1 className="mb-3 font-700">Our Clients Say!</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    loop={true}
                    grabCursor= {true}
                    spaceBetween={16}
                    slidesPerView='auto'
                    centeredSlides='auto'
                    breakpoints={{
                        1150: {
                            slidesPerView: 2,
                            centeredSlides: false
                        }
                    }}
                    navigation={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}            
                >
                    <div class="">

                        <div class="">
                            <div className="container w-100">
                            <SwiperSlide>
                                <TestimonialCard testimonial={testimonial1}/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <TestimonialCard testimonial={testimonial2}/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <TestimonialCard testimonial={testimonial3}/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <TestimonialCard testimonial={testimonial1}/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <TestimonialCard testimonial={testimonial2}/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <TestimonialCard testimonial={testimonial3}/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <TestimonialCard testimonial={testimonial1}/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <TestimonialCard testimonial={testimonial2}/>
                            </SwiperSlide>
                            </div>

                            
                        </div>

                        <SwiperButton/>
                    </div>
                    
                </Swiper>
               
            </div>
        </div>
    )
}

export default Testimonials