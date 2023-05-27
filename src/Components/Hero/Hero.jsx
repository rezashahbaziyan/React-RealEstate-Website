import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className="paddinds innerWidth flexCenter hero-container">

            <div className="hero-left"></div>
            <div className="flexCenter hero-right">
              <div className="image-container">
                <img src="./hero-image.png" alt="" />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Hero