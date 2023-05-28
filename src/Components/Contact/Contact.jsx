import React from 'react';
import "./Contact.css";
import { MdCall } from 'react-icons/md';

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>our Contacts</span>
                <span className='primaryText'>Easy to Contact</span>
                <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing 
                    Lorem ipsum dolor sit. elit. Placeat, enim?</span>
                <div className="flexCenter contactModes">
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexCenter icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span>Call</span><span>0.21 123 145 14</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact