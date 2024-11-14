import React from 'react'

import LogoN36 from '../assets/Images/Any questions/call icon.svg'
import LogoN37 from '../assets/Images/Any questions/message icon.svg'

const ContactUsTablet = () => {
  return (
    <>
    <div className="contact-2">
            <div className="box tablet">
              <img src={LogoN36} alt="call logo" />
              <p>Still have questions?</p>
              <a className="btn" href="#">
                <span className="color-purple">Contact us</span>
                <i className="fa-solid fa-arrow-right color-purple"></i>
              </a>
            </div>

            <div className="box tablet">
              <img src={LogoN37} alt="message logo" />
              <p>Don't like phone calls?</p>
              <a className="btn" href="#">
                <span className="color-green">Contact us</span>
                <i className="fa-solid fa-arrow-right color-green"></i>
              </a>
            </div>
          </div>
    
    </>
  )
}

export default ContactUsTablet