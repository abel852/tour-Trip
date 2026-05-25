import React from 'react';
import './InfoBanner.css';

const InfoBanner = () => {
  return (
    <section className="container banner-padding">
      <div className="info-banner">
        <div className="banner-content">
          <p className="accent-text">Taste the Adventure</p>
          <h2>Hiking, Comfort and Traditional <br /> Food of Ethiopia</h2>
          <p className="banner-description">
            Experience the perfect blend of rugged highland trekking and 
            world-renowned Ethiopian hospitality. From Simien peaks to 
            traditional coffee ceremonies.
          </p>
          <button className="banner-btn">Discover More</button>
        </div>
        
        <div className="banner-image-wrap">
          <img 
            src="https://i.pinimg.com/1200x/4b/6b/1b/4b6b1bf6c8e70ae3c8878b6232023802.jpg" 
            alt="Ethiopian Culture" 
          />
          
          <div className="banner-badge">
             <span>Best Choice</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBanner;