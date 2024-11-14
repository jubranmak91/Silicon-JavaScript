import React from 'react';


import LogoN23 from '../assets/Images/How does it work/iPhone 12 Pro 1.png'
import LogoN24 from '../assets/Images/How does it work/iPhone 12 Pro 2.png'
import LogoN25 from '../assets/Images/How does it work/iPhone 12 Pro 3.png'



const HowDoesItWork = () => {
  return (
    <>
      <section aria-label="How Does It Work?" className="howdoesitwork">
        <div className="container space-y-3">
          <h2 className="h1">How Does It Work?</h2>

          <div className="packet-items">
            <div className="item">
              <img src={LogoN23} alt="Iphone 12 pro image 1" />
            </div>
            <div className="item">
              <img src={LogoN24} alt="Iphone 12 pro image 2" />
            </div>
            <div className="item">
              <img src={LogoN25} alt="Iphone 12 pro image 3" />
            </div>
          </div>

          <div className="text space-y-1">
            <h3 className="h4">Latest transaction history</h3>
            <p>
              Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in
              consectetur condimentum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowDoesItWork;

