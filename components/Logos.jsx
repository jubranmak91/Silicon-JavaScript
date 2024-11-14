import React from 'react';


import LogoN10 from '../assets/Images/logo1.svg'
import LogoN11 from '../assets/Images/logo2.svg'
import LogoN12 from '../assets/Images/logo3.svg'
import LogoN13 from '../assets/Images/logo4.svg'
import LogoN14 from '../assets/Images/logo5.svg'
import LogoN15 from '../assets/Images/logo6.svg'


const Logos = () => {
  return (
    <>
      <section aria-label="our-customers" className="logos">
        <div className="container">
          <div className="logo-card">
            <img src={LogoN10} alt="Inspum logo" />
          </div>
          <div className="logo-card">
            <img src={LogoN11} alt="Inspum logo" />
          </div>
          <div className="logo-card">
            <img src={LogoN12} alt="Inspum logo" />
          </div>
          <div className="logo-card">
            <img src={LogoN13} alt="Inspum logo" />
          </div>
          <div className="logo-card">
            <img src={LogoN14} alt="Inspum logo" />
          </div>
          <div className="logo-card">
            <img src={LogoN15} alt="Inspum logo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Logos;

