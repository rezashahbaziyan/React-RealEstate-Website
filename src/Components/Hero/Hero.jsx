import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className="paddinds innerWidth flexCenter hero-container">

            <div className="flexColStart hero-left">
              <div className="hero-title">
                <h1>Discover <br/> Most Suitable <br/> Property</h1>
              </div>
              <div className="flexColStart hero-des">
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </div>
              <div className="search-bar">search bar</div>
            </div>
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