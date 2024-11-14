// import React, { useState } from 'react';
// import Subscribe from './Subscribe';
// import Footer from './Footer';
// import ContactUs from './ContactUs';
// import ContactUsMobile from './ContactUsMobile';
// import ContactUsTablet from './ContactUsTablet';

// const Bottom = () => {
//   const [isExpanded1, setIsExpanded1] = useState(false);
//   const [isExpanded2, setIsExpanded2] = useState(false);
//   const [isExpanded3, setIsExpanded3] = useState(false);
//   const [isExpanded4, setIsExpanded4] = useState(false);
//   const [isExpanded5, setIsExpanded5] = useState(false);
//   const [isExpanded6, setIsExpanded6] = useState(false);

//   return (
//     <>
//       <section aria-label="Any question ?" className="questions">
//         <div className="container">
//           <div className="del-topp space-y-3">
//             <ContactUs />

//             <div className="del-2">
//               {/* FAQ Item 1 */}
//               <div className={`ruta radius-top ${isExpanded1 ? 'ruta-3' : ''}`}>
//                 <div className="flex">
//                   <h2>Is any of my personal information stored in the App?</h2>
//                   <div className={`more ${isExpanded1 ? 'more-up' : ''}`}>
//                     <a className="btn-round btn-white" onClick={() => setIsExpanded1(!isExpanded1)}>
//                       <i className={`fa-solid ${isExpanded1 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
//                     </a>
//                   </div>
//                 </div>
//                 {isExpanded1 && (
//                   <div>
//                     <p>
//                       Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
//                       cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit.
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* FAQ Item 2 */}
//               <div className={`ruta borttop-line ${isExpanded2 ? 'ruta-3' : ''}`}>
//                 <div className="flex">
//                   <h2>What formats can I download my transaction history in?</h2>
//                   <div className={`more ${isExpanded2 ? 'more-up' : ''}`}>
//                     <a className="btn-round btn-white" onClick={() => setIsExpanded2(!isExpanded2)}>
//                       <i className={`fa-solid ${isExpanded2 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
//                     </a>
//                   </div>
//                 </div>
//                 {isExpanded2 && (
//                   <div>
//                     <p>
//                       Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
//                       cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit.
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* FAQ Item 3 */}
//               <div className={`ruta ${isExpanded3 ? 'ruta-3' : ''}`}>
//                 <div className="flex">
//                   <h2>Can I schedule future transfers?</h2>
//                   <div className={`more ${isExpanded3 ? 'more-up' : ''}`}>
//                     <a className="btn-round btn-white" onClick={() => setIsExpanded3(!isExpanded3)}>
//                       <i className={`fa-solid ${isExpanded3 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
//                     </a>
//                   </div>
//                 </div>
//                 {isExpanded3 && (
//                   <div>
//                     <p>
//                       Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
//                       cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit.
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* FAQ Item 4 */}
//               <div className={`ruta ${isExpanded4 ? 'ruta-3' : ''}`}>
//                 <div className="flex">
//                   <h2>When can I use Banking App services?</h2>
//                   <div className={`more ${isExpanded4 ? 'more-up' : ''}`}>
//                     <a className="btn-round btn-white" onClick={() => setIsExpanded4(!isExpanded4)}>
//                       <i className={`fa-solid ${isExpanded4 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
//                     </a>
//                   </div>
//                 </div>
//                 {isExpanded4 && (
//                   <div>
//                     <p>
//                       Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
//                       cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit.
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* FAQ Item 5 */}
//               <div className={`ruta ${isExpanded5 ? 'ruta-3' : ''}`}>
//                 <div className="flex">
//                   <h2>Can I create my own password that is easy for me to remember?</h2>
//                   <div className={`more ${isExpanded5 ? 'more-up' : ''}`}>
//                     <a className="btn-round btn-white" onClick={() => setIsExpanded5(!isExpanded5)}>
//                       <i className={`fa-solid ${isExpanded5 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
//                     </a>
//                   </div>
//                 </div>
//                 {isExpanded5 && (
//                   <div>
//                     <p>
//                       Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
//                       cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit.
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* FAQ Item 6 */}
//               <div className={`ruta radius-bottom ${isExpanded6 ? 'ruta-3' : ''}`}>
//                 <div className="flex">
//                   <h2>What happens if I forget or lose my password?</h2>
//                   <div className={`more ${isExpanded6 ? 'more-up' : ''}`}>
//                     <a className="btn-round btn-white" onClick={() => setIsExpanded6(!isExpanded6)}>
//                       <i className={`fa-solid ${isExpanded6 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
//                     </a>
//                   </div>
//                 </div>
//                 {isExpanded6 && (
//                   <div>
//                     <p>
//                       Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
//                       cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           <ContactUsTablet />
//           <ContactUsMobile />

//           <div className="bottom">
//             <Subscribe />
//             <Footer />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Bottom;










import React, { useState, useEffect } from 'react';
import Subscribe from './Subscribe';
import Footer from './Footer';
import ContactUs from './ContactUs';
import ContactUsMobile from './ContactUsMobile';
import ContactUsTablet from './ContactUsTablet';

const Bottom = () => {
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState({});

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
        if (!response.ok) {
          throw new Error('Could not fetch FAQs');
        }
        const data = await response.json();
        setFaqs(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = (id) => {
    setIsExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <section aria-label="Any question ?" className="questions">
        <div className="container">
          <div className="del-topp space-y-3">
            <ContactUs />

            <div className="del-2">
              {error && <p style={{ color: 'red' }}>{error}</p>}
              {faqs.map((faq) => (
                <div key={faq.id} className={`ruta ${isExpanded[faq.id] ? 'ruta-3' : ''}`}>
                  <div className="flex">
                    <h2>{faq.title}</h2>
                    <div className={`more ${isExpanded[faq.id] ? 'more-up' : ''}`}>
                      <a className="btn-round btn-white" onClick={() => toggleFAQ(faq.id)}>
                        <i className={`fa-solid ${isExpanded[faq.id] ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                      </a>
                    </div>
                  </div>
                  {isExpanded[faq.id] && (
                    <div>
                      <p>{faq.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <ContactUsTablet />
          <ContactUsMobile />

          <div className="bottom">
            <Subscribe />
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Bottom;









