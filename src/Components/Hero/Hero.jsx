import React from 'react';
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className="paddinds innerWidth flexCenter hero-container">

            <div className="flexColStart hero-left">
              <div className="hero-title">
                <div className="oreng-circle"/>
                <h1>Discover <br/> Most Suitable <br/> Property</h1>
              </div>
              <div className="flexColStart hero-des">
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </div>
              <div className="flexCenter search-bar">
                <HiLocationMarker color='var(--blue)' size={25}/>
                <input type="text" />
                <button className='button'>Search</button>
              </div>
              <div className="flexCenter stats">
              <div className="flexColStart stat">
                  <span>
                    <CountUp start={5000} end={9000} duration={4}/>
                    <span>+</span>
                  </span>
                  <span>
                    Premium Products
                  </span>
                </div>

                <div className="flexColStart stat">
                  <span>
                    <CountUp start={1950} end={2000} duration={4}/>
                    <span>+</span>
                  </span>
                  <span>
                    Happy Customers
                  </span>
                </div>

                <div className="flexColStart stat">
                  <span>
                    <CountUp end={28} duration={4}/>
                    <span>+</span>
                  </span>
                  <span>
                    Award Winning
                  </span>
                </div>
              </div>
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