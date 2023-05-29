import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side */}
            <div className="flexColStart">
                <img src="./logo2.png" alt="" width={120}/>

                <span className='secondaryText'>
                    Lorem ipsum dolor sit amet consectetur <br/>
                    adipisicing as quaerat explicabo. Assumenda.
                </span>
            </div>

            {/* right side */}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>145 New york, FL 4571</span>
            
            <div className="flexCenter f-menu">
                <span>Property</span>
                <span>Services</span>
                <span>Product</span>
                <span>About Us</span>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Footer