import React from 'react'

import LogoN34 from '../assets/Images/Any questions/call icon.svg'
import LogoN35 from '../assets/Images/Any questions/message icon.svg'



const ContactUs = () => {
  return (
    <>
    <div className="del-1">
        <h2 className="h4">Any questions? Check out the FAQs</h2>
            <p>Still have unanswered questions and need to get in touch?</p>

            <div className="contact-2">
                <div className="box">
                  <img src={LogoN34} alt="call logo" />
                  <p>Still have questions?</p>
                  <a className="btn" href="#">
                    <span className="color-purple">Contact us</span>
                    <i className="fa-solid fa-arrow-right color-purple"></i>
                  </a>
                </div>

                <div className="box">
                  <img src={LogoN35} alt="message logo" />
                  <p>Don't like phone calls?</p>
                  <a className="btn" href="#">
                    <span className="color-green">Contact us</span>
                    <i className="fa-solid fa-arrow-right color-green"></i>
                  </a>
                </div>
            </div>
        </div>
    
    
    </>
  )
}

export default ContactUs