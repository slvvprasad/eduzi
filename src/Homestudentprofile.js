// AboutUs.js
import React from 'react';
import './Homestudentprofile.css';

const Homestudentprofile = () => {
    const imageUrl = 'https://t4.ftcdn.net/jpg/01/11/43/31/360_F_111433183_hlgM6m7jwUNPpmD3xW1YlWeryLEdOxmw.jpg'; // Replace with your image URL

    return (
      <div className="about-us-container">
      {/* <div className="about-us-header">
          <h1>Prefered Student Profiles</h1>
          <p>Get to know who can join?</p>
      </div> */}
      <div className="about-us-content">
          <div className="about-us-text">
              <div className="about-us-section">
                  <h2>Working Professionals (1-3 years) in Operations, Credit, Finance, Accounting, Sales, Marketing, etc.</h2>
                  {/* <p>Working Professionals (1-3 years) in Operations, Credit, Finance, Accounting, Sales, Marketing, etc.</p> */}
              </div>
              <div className="about-us-section">
                  <h2>Experienced Professionals (4-10 years) in Operations, Credit, Finance, Accounting, Sales, Marketing, etc.</h2>
                  {/* <p>Experienced Professionals (4-10 years) in Operations, Credit, Finance, Accounting, Sales, Marketing, etc.</p> */}
              </div>
              <div className="about-us-section">
                  <h2>Fresh graduates/Postgraduates in Finance, Commerce, Accounting (B. Com, BBA, MBA).</h2>
                  {/* <p>Fresh graduates/Postgraduates in Finance, Commerce, Accounting (B. Com, BBA, MBA).</p> */}
              </div>
          </div>
          <div className="about-us-image">
              <img src={imageUrl} alt="Our Team" />
          </div>
      </div>
  </div>
    );
}

export default Homestudentprofile;
