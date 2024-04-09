import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import testimonial1 from '../../assets/img/testimonial-1.jpg' 
import testimonial2 from '../../assets/img/testimonial-2.jpg'
import testimonial3 from '../../assets/img/testimonial-3.jpg'

import SwiperButton from '../../components/SwiperButtons';
import TestimonialCard from '../../components/TestimonialCard';

const TestimonialTester = () => {
    
    return (
   <>
        <div className="featured__header section-heading">
            <h2 className='p-3'>
                Featured testimonials
            </h2>
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
                    slidesPerView: 4,
                    centeredSlides: false
                }
            }}
            navigation={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}            
        >
            <div class="featured__container featured__section">

                <div class="featured__swiper">
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
    </>
    );
  
}

export default TestimonialTester


