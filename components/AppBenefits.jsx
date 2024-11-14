import React from 'react';

import LogoN26 from '../assets/Images/App benefits/forecast image.png'
import LogoN27 from '../assets/Images/App benefits/contact bank cardimage.png'
import LogoN28 from '../assets/Images/App benefits/credit-cardicon.svg'
import LogoN29 from '../assets/Images/App benefits/waleticon.svg'

const AppBenefits = () => {
  return (
    <>  
      <section aria-label="app benefits" className="app-benefits">
        <div className="container space-y-3">
          <div className="del-1">
            <div className="content-transfer space-y-2">
              <h2 className="h2">Make your money transfer simple and clear</h2>

              <div className="list space-y-1">
                <span className="item">
                  <i className="fa-regular fa-circle-check"></i>
                  <ul>Banking transactions are free for you</ul>
                </span>

                <span className="item">
                  <i className="fa-regular fa-circle-check"></i>
                  <ul>No monthly cash commission</ul>
                </span>

                <span className="item">
                  <i className="fa-regular fa-circle-check"></i>
                  <ul>Manage payments and transactions online</ul>
                </span>
              </div>

              <a className="btn btn-primary" href="#">
                <span>Learn more</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <img src={LogoN26} alt="Forecast App image" />
          </div>

          <div className="del-2">
            <img src={LogoN27} alt="Contact Bank Card image" />

            <div className="content-receive space-y-3">
              <h2 className="h2">Receive payment from international bank details</h2>

              <div className="card">
                <div className="item space-y-1">
                  <img src={LogoN28} alt="Credit-card icon" />
                  <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                </div>

                <div className="item space-y-1">
                  <img src={LogoN29} alt="Wallet icon" />
                  <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                </div>
              </div>

              <a className="btn btn-primary" href="#">
                <span>Learn more</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppBenefits;

