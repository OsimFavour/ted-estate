import React from 'react'
import { useSwiper } from 'swiper/react'


const SwiperButton = () => {
    const swiper = useSwiper()
    return (
        <div>

            <div className="swiper-button-prev">
                <button classNameName='owl-prev' onClick={() => swiper.slidePrev()}><i className="fa-solid fa-arrow-right"></i></button>         
            </div>

            <div className="swiper-button-next">
                <button onClick={() => swiper.slideNext()}><i className="fa-solid fa-arrow-left"></i></button>  
            </div>
                
        </div>
    )
}

export default SwiperButton