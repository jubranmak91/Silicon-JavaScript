// import React from 'react';

// import LogoN30 from '../assets/Images/Reviews/icon.svg'
// import LogoN31 from '../assets/Images/Reviews/Funnie Summers profile picture.svg'
// import LogoN32 from '../assets/Images/Reviews/icon.svg'
// import LogoN33 from '../assets/Images/Reviews/Albert Flores profile picture.svg'


// const Reviews = () => {
//   return (
//     <>
//       <section aria-label="Reviews" className="reviews">
//         <div className="container">
//           <div className="del-1">
//             <h2 className="h1">Clients are Loving Our App</h2>
//           </div>

//           <div className="del-2">
//             <div className="card">
//               <img className="logo" src={LogoN30} alt="" />

//               <div className="star">
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-regular fa-star"></i>
//               </div>

//               <p className="review">
//                 Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
//               </p>

//               <div className="content">
//                 <img className="profile-pic" src={LogoN31} alt="" />

//                 <div className="name">
//                   <h4>Fannie Summers</h4>
//                   <p>Designer</p>
//                 </div>
//               </div>
//             </div>

//             <div className="card">
//               <img className="logo" src={LogoN32} alt="Fannie Summers" />

//               <div className="star">
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//               </div>

//               <p className="review">
//                 Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.
//               </p>

//               <div className="content">
//                 <img className="profile-pic" src={LogoN33} alt="Albert Flores" />

//                 <div className="name">
//                   <h4>Albert Flores</h4>
//                   <p>Developer</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Reviews;








import React, { useEffect, useState } from 'react';
import LogoN30 from '../assets/Images/Reviews/icon.svg';

const Reviews = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
        if (!response.ok) {
          throw new Error('Could not fetch testimonials');
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <>
      <section aria-label="Reviews" className="reviews">
        <div className="container">
          <div className="del-1">
            <h2 className="h1">Clients are Loving Our App</h2>
          </div>

          <div className="del-2">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {testimonials.map((testimonial) => (
              <div className="card" key={testimonial.id}>
                <img className="logo" src={LogoN30} alt="Star icon" />

                <div className="star">
                  {Array.from({ length: testimonial.starRating }).map((_, index) => (
                    <i key={index} className="fa-solid fa-star"></i>
                  ))}
                  {Array.from({ length: 5 - testimonial.starRating }).map((_, index) => (
                    <i key={index + testimonial.starRating} className="fa-regular fa-star"></i>
                  ))}
                </div>

                <p className="review">{testimonial.comment}</p>

                <div className="content">
                  <img className="profile-pic" src={testimonial.avatarUrl} alt={testimonial.author} />

                  <div className="name">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.jobRole}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
