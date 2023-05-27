import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "./Swiper.css";
import "./Residencies.css";
import data from '../../utils/slider.json'
const Residences = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerwidth r-containers">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>
        </div>
    </section>
  )
}

export default Residences