import React from 'react';
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started With Homyaz</span>
                <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing 
                <br/>
                elit. Reiciendis debitis impedit delectus.
                </span>
                <button className='button'>
                    <a href="mailto:rezasolid1@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted