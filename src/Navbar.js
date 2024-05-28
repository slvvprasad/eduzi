// import React, { useState } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="navbar-intensive">
//       <div className="navbar-9 w-nav" role="banner">
//         <div className="container-28 intensive-2-0 w-container">
//           <a href="#" className="brand-9 w-nav-brand">
//             <div className="html-embed-41903 w-embed">
//               <img
//                 src="https://eduzi.s3.amazonaws.com/Screenshot+2024-05-26+174209.png"
//                 alt=""
//                 width="120px"
//               />
//             </div>
//           </a>
//           <div className="menu-button-6 w-nav-button" onClick={toggleMenu}>
//             <div className={`icon-34 w-icon-nav-menu ${isMenuOpen ? 'open' : ''}`}></div>
//           </div>
//           <nav role="navigation" className={`nav-menu-home-3 w-nav-menu ${isMenuOpen ? 'open' : ''}`}>
//             <div className="logo-div">
//               <div className="nxtwave-white-logo-2 w-embed">
//                 <img
//                   src="https://eduzi.s3.amazonaws.com/Screenshot+2024-05-26+174209.png"
//                   alt="Nxtwave"
//                   width="100%"
//                   loading="lazy"
//                 />
//                 <h1>Eduzi</h1>
//               </div>
//             </div>
//             <a href="#" id="home-primary-navbar" className="desktop-navbar-items track-class w-nav-link">
//               Home
//             </a>
//             <a href="#curriculum" id="curriculum-primary-navbar" className="desktop-navbar-items track-class w-nav-link">
//               Curriculum
//             </a>
//             <a href="#job-support" id="job-support-primary-navbar" className="desktop-navbar-items track-class w-nav-link">
//               Highlights
//             </a>
//             <a href="#reviews" id="reviews-primary-navbar" className="desktop-navbar-items track-class w-nav-link">
//               Educators
//             </a>
//             <a href="#pricing" id="pricing-primary-navbar" className="desktop-navbar-items track-class w-nav-link">
//               Fee
//             </a>
//             <a href="#trusted-by-thousands-to-become-it" id="testimonials-primary-navbar" className="desktop-navbar-items track-class w-nav-link">
//               Testimonials
//             </a>
//             <a href="#faqs" id="faqs-primary-navbar" className="desktop-navbar-items track-class w-nav-link">
//               FAQs
//             </a>
//             <a id="login-primary-navbar" href="#footer" className="link-block-599 track-class w-inline-block">
//               <div>Contact</div>
//               <div className="navhome-login-arrow" />
//             </a>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useEffect, useState } from "react";
import { getTopNav } from "./navbarsdata";
import './Navbar.css';
const Navbar = () => {
  const [navItems, setNavItems] = useState([]);
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");

  useEffect(() => {
    setNavItems(getTopNav());
  }, []);

  const onToggle = () => {
    collapse === "nav__menu"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };

  return (
    <div className="nav__wrapper">
      <div className="container">
        <nav className="nav">
          <a href="#" className="nav__brand">
          <img
                  src="https://eduzi.s3.amazonaws.com/Screenshot+2024-05-26+174209.png"
                  alt=""
                  width="120px"
                />
          </a>
          <ul className={collapse}>
            {navItems.map((item) => (
              <li key={item.id} className="nav__item">
                <a href={item.href} className="nav__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={toggleIcon} onClick={onToggle}>
            <div className="line__1"></div>
            <div className="line__2"></div>
            <div className="line__3"></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
