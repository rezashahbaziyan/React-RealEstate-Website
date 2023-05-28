import React from 'react'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>our Contacts</span>
                <span className='primaryText'>Easy to Contact</span>
                <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing 
                    Lorem ipsum dolor sit. elit. Placeat, enim?</span>
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