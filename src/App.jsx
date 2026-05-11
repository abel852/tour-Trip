import React from 'react';
import Hero from './components/Hero';
import TopBar from './components/TopBar';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Gallary from './components/Gallary';
import InfoBanner from './components/InfoBanner';
import Partners from './components/Partners';
import Contact from './components/Contact';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Categories />
      <Stats />
      <Gallary />



      <InfoBanner />
      <Partners />
      <Contact />

      
      <footer style={{ background: '#0e221f', color: 'white', padding: '100px 20px', textAlign: 'center', marginTop: '50px' }}>
        <div className="container">
          <p className="accent-text">Join Us</p>

          
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '30px' }}>
            Get the Latest News
          </h2>

          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            <input
              type="email"
              placeholder="Your Email"
              style={{
                padding: '15px',
                width: '100%',
                maxWidth: '300px',
                border: 'none',
                borderRadius: '5px 0 0 5px',
                outline: 'none'
              }}
            />
            <button style={{
              padding: '15px 30px',
              background: '#19b5bc',
              color: 'white',
              border: 'none',
              borderRadius: '0 5px 5px 0',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              Subscribe
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '1.5rem' }}>
            <FaFacebook /> <FaInstagram /> <FaTwitter /> <FaYoutube />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;