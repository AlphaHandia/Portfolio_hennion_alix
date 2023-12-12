import profileImage from '../../assets/images/alix-hennion.jpg'
import React from 'react';



const Banner = () => {
  return (
    <div className="banner-container">
      {/* Left side */}
      <div className="left-side">
        <img src={profileImage} alt="alix hennion" />
     
      </div>

      {/* Right side with weather functionality */}
      <div className="right-side">
      <div>
          <p>Short Presentation:</p>
          <p>Programming Languages: HTML<i class="fa-brands fa-html5"></i>, CSS<i class="fa-brands fa-css3-alt"></i>, JavaScript<i class="fa-brands fa-js"></i>, etc.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
