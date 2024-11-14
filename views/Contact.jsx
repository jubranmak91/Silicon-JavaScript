import React from 'react';
import Nav from '../components/Nav';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import LogoN40 from '../assets/Images/Contact/emaillogo.svg'
import GetOnlineConsulation from '../components/GetOnlineConsulation';
import LogoN41 from '../assets/Images/Contact/googlemaps.png'
import LogoN42 from '../assets/Images/Contact/locationlogo.svg'
import LogoN43 from '../assets/Images/Contact/samtallogo.svg'
import LogoN44 from '../assets/Images/Contact/klockalogo.svg'
import LogoN45 from '../assets/Images/Contact/facebook.svg'
import LogoN46 from '../assets/Images/Contact/twitterlogo.svg'
import LogoN47 from '../assets/Images/Contact/instagramlogo.svg'
import LogoN48 from '../assets/Images/Contact/youtubelogo.svg'
import LogoN49 from '../assets/Images/Contact/career.svg'
const Contact = () => {
  return (

    <div className="contact-page">

      <Nav />

    
      <Breadcrumb />
        
      
      <div className="container desktop-flex">

        
        <div className="contact-us">

          <h2 className="h1"> Contact Us</h2>

          <div className="email-career">
            <div className='email-logo'>
              <img src={LogoN40} alt="email" />
            </div>

            <div className="email">
              <h2>Email us</h2>

              <p>Please feel free to drop us a line. we will respond as soon as possible</p>

              <a className="btn" href="#">
                <span className="color-purple">Leave a message</span>
                <i className="fa-solid fa-arrow-right color-purple"></i>
              </a>
            </div>



          </div>


          <div className="email-career">
            
            <div className='email-logo'>
              <img src={LogoN49} alt="email" />
            </div>

            <div className="email">
              <h2>Carrers</h2>

              <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>

              <a className="btn" href="#">
                <span className="color-purple">Send an application</span>
                <i className="fa-solid fa-arrow-right color-purple"></i>
              </a>
            </div>
          </div>




        </div>


        <GetOnlineConsulation />

      </div>






      <div className="backround">
        <div className="container desktop-flex">
          <div className="maps">
            <img src={LogoN41} alt="Maps" />
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <h2>Medical Center 1</h2>
              <div className="info">
                <img src={LogoN42} alt="Location logo" />
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
              </div>
              <div className="info">
                <img src={LogoN43} alt="Samtal logo" />
                <p>(406) 555-0120</p>
              </div>
              <div className="info">
                <img src={LogoN44} alt="klocka logo" />
                <div>
                  <div className="info">
                  <p className="bold">Mon – Fri:</p><p>9:00 am – 22:00 am</p>
                  </div>
                  <div className="info">
                  <p className="bold">Sat – Sun:</p><p>9:00 am – 20:00 am</p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="space-y-1">
              <h2>Medical Center 2</h2>
              <div className="info">
                <img src={LogoN42} alt="Location logo" />
                <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
              </div>
              <div className="info">
                <img src={LogoN43} alt="Samtal logo" />
                <p>(406) 544-0123</p>
              </div>
              <div className="info">
                <img src={LogoN44} alt="klocka logo" />
                <div>
                  <div className="info">
                  <p className="bold">Mon – Fri:</p><p>9:00 am – 22:00 am</p>
                  </div>
                  <div className="info">
                  <p className="bold">Sat – Sun:</p><p>9:00 am – 20:00 am</p>
                  </div>
                </div>
              </div>
            </div>



            <div className="socialmedia">
              <img src={LogoN45} alt="Facebook" />
              <img src={LogoN46} alt="Twitter" />
              <img src={LogoN47} alt="Instagram" />
              <img src={LogoN48} alt="Youtube" />
            </div>


            
          </div>
          
        </div>


        <div className="container footercontact">
          <Footer />
        </div>
       

      </div>

      
      
     
    </div>



   

  );
};

export default Contact;
