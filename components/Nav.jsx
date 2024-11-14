
import React, { useState, useEffect } from 'react';

import LogoN1 from '../assets/Images/Siliconlogo.svg';
import LogoN2 from '../assets/Images/Siliconlogodarkmodepage.svg';
import LogoN3 from '../assets/Images/Hamburgericon.svg';
import LogoN4 from '../assets/Images/loggingubben.svg';

import { Link } from 'react-router-dom';

const Nav = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

 
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkmode');
    if (savedDarkMode === 'on') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };


  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newDarkMode = !prev;
      if (newDarkMode) {
        localStorage.setItem('darkmode', 'on');
        document.documentElement.classList.add('dark');
      } else {
        localStorage.setItem('darkmode', 'off');
        document.documentElement.classList.remove('dark');
      }
      return newDarkMode;
    });
  };

  return (
    <nav className="main-nav" aria-label="main navigation">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <div className="container">
        <Link to="/Home">
          <img className="show-light" src={LogoN1} alt="Siliconlogo" />
          <img className="show-dark" src={LogoN2} alt="Siliconlogo darkmode" />
        </Link>

        <div className="darkmode-toggle">
          <p>Dark Mode</p>
          <label className="toggle">
            <input
              type="checkbox" checked={isDarkMode} onChange={toggleDarkMode}/>
            <span className="slider"></span>
          </label>
        </div>

        <button
          className="menu-btn" aria-controls="main-menu" aria-expanded={isMenuOpen} aria-label="toggle navigation" onClick={toggleMenu}>
          <img src={LogoN3} alt="" />
        </button>

        <ul id="main-menu" className={`main-menu ${isMenuOpen ? '' : 'hide'}`}>
          <li>
          <Link className="nav-link home" to="/Home">Home</Link>
          <Link className="nav-link">Features</Link>
          <Link className="nav-link" to="/Contact">Contact</Link>
          </li>
          <li className="space">
            <a href="#" className="btn btn-primary">
              <img src={LogoN4} alt="sign in/ut logo" />
              <span>Sign in / up</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

