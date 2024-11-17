import React from 'react';

import LogoN5 from '../assets/Images/applepayplogo.svg'
import LogoN6 from '../assets/Images/applepayplogodarkmode.svg'
import LogoN7 from '../assets/Images/googlepaylogo.svg'
import LogoN8 from '../assets/Images/googlepaylogodarkmode.svg'
import LogoN9 from '../assets/Images/2mobiles with bankcards.png'


const ShowCase = () => {
  return (
    <>
      <section aria-label="showcase" className="showcase">
        <div className="container space-y-3">
          <h1 className="d4">Manage All Your Money in One App</h1>

          <div className="content space-y-3">
            <p className="text-lg">
              We offer you a new generation of the mobile banking.
              Save, spend & manage money in your pocket.
            </p>

            <div className="market-btns">
              <a href="#" className="store-btn">
                <span className="sr-only">download on the app store</span>
                <img className="show-light" src={LogoN5} alt="appstorelogo" />
                <img className="show-dark" src={LogoN6} alt="appstorelogodarkmode" />
              </a>
              <a href="#" className="store-btn">
                <span className="sr-only">get it on google</span>
                <img className="show-light" src={LogoN7} alt="googleplaylogo" />
                <img className="show-dark" src={LogoN8} alt="googlepaylogodarkmode" />
              </a>
            </div>

            <div className="more">
              <a className="btn-round btn-white">
                <i className="fa-solid fa-chevron-down"></i>
              </a>
              <span>Discover more</span>
            </div>
          </div>

          <div className="phone-img-container">
            <img src={LogoN9} alt="two iphones with bank cards image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCase;

