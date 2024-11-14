import React from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import LogoN39 from '../assets/Images/Contact/bx-home.svg'



const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <section className="breadcrumb-section">
            <div className="container">
                
                <ul className="breadcrumb">
                <li>
                    <img src={LogoN39} alt="Home logo" />   
                    <Link to="/home">Homepage</Link>
                </li>

                    {
                        pathnames.map((value, index) => {
                            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                            return (
                                <li key={to}>
                                    { index === pathnames.length - 1
                                        ? (<span>{value.replace(/-/g, ' ')}</span>)
                                        : (<Link to={to}>{value.replace(/-/g, ' ')}</Link>)}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    );
};

export default Breadcrumb;
