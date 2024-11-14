import React from 'react';

import LogoN16 from '../assets/Images/Mobile image with bankcard .png'
import LogoN17 from '../assets/Images/logo1credit-card.svg'
import LogoN18 from '../assets/Images/logo4shield.svg'
import LogoN19 from '../assets/Images/logo2bars-graphic.svg'
import LogoN20 from '../assets/Images/logo5communication.svg'
import LogoN21 from '../assets/Images/logo3wallet.svg'
import LogoN22 from '../assets/Images/logo6happy.svg'



const Featurs = () => {
  return (
    <>
      <section aria-label="app features" className="features">
        <div className="container space-y-3">
          <div className="iphone">
            <img src={LogoN16} alt="" />
          </div>

          <div className="text space-y-1">
            <h2 className="h1">App Features</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus
              facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
            </p>

            <div className="features-grid">
              <div className="feature-card">
                <div className="icon-container">
                  <img src={LogoN17} alt="credit card logo" />
                </div>
                <div className="space-y-1">
                  <h3 className="h5">Easy Payments</h3>
                  <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="icon-container">
                  <img src={LogoN18} alt="shield logo" />
                </div>
                <div className="space-y-1">
                  <h3 className="h5">Data Security</h3>
                  <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="icon-container">
                  <img src={LogoN19} alt="bars graphic logo " />
                </div>
                <div className="space-y-1">
                  <h3 className="h5">Cost Statistics</h3>
                  <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="icon-container">
                  <img src={LogoN20} alt="communication logo" />
                </div>
                <div className="space-y-1">
                  <h3 className="h5">Support 24/7</h3>
                  <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="icon-container">
                  <img src={LogoN21} alt="wallet logo" />
                </div>
                <div className="space-y-1">
                  <h3 className="h5">Regular Cashback</h3>
                  <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="icon-container">
                  <img src={LogoN22} alt="happy face logo" />
                </div>
                <div className="space-y-1">
                  <h3 className="h5">Top Standards</h3>
                  <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featurs;

