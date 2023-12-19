
import React from 'react';
import WeatherApp from '../weather';



const Banner = () => {
  return (
    <div className="banner-container">
      <WeatherApp/>
     

      
      <div className="right-side">
      <div>
          <p>Short Presentation: </p>
          <p>Programming Languages: HTML<i class="fa-brands fa-html5"></i>, CSS<i class="fa-brands fa-css3-alt"></i>, JavaScript<i class="fa-brands fa-js"></i>, etc.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
