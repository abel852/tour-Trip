import React, { useState, useEffect } from 'react';
import { FaMountain } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  
  const images = [
    "https://i.pinimg.com/736x/de/ed/f8/deedf8bfdda2c1c238836f265e963ed3.jpg", 
    "https://i.pinimg.com/736x/48/e4/af/48e4afbd84f77226fd844eaddb015d0a.jpg", 
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2000&q=100", 
    "https://i.pinimg.com/1200x/3e/6a/84/3e6a84a6dfd882967be7c91523495ab9.jpg" 
  ];

  const [currentImage, setCurrentImage] = useState(0);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer); 
  }, [images.length]);

  return (
    <section 
      id="home" 
      className="hero" 
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${images[currentImage]})` }}
    >
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-pop">
            <FaMountain />
          </div>
          
          <p className="accent-text animate-fade-in">Explore the Roof of Africa</p>
          
          <h1 className="animate-slide-up">
            Ethiopian Highlands <br /> 
            <span>& Wild Adventures</span>
          </h1>
          
          <p className="hero-description animate-fade-in">
            Trek through the Simien Mountains, witness the lava lakes of Erta Ale, 
            and discover the ancient history of the Ethiopian highlands with local experts.
          </p>

          <div className="hero-btns animate-slide-up">
            <button className="btn-main">View Expeditions</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
      </div>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#fff" d="M0,224L120,202.7C240,181,480,139,720,144C960,149,1200,203,1320,229.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;