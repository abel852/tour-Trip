import React from 'react';
import './Partners.css';

const Partners = () => {
  const partnerLogos = [
    { id: 1, name: 'Wanderlust', img: 'https://i.pinimg.com/1200x/1f/3d/45/1f3d457b535e88c1698736b3d428da11.jpg' },
    { id: 2, name: 'Ventura', img: 'https://static.wixstatic.com/media/77f548_f390ecef6f2949a8821d6f689f1f701a~mv2.png/v1/fit/w_2500,h_1330,al_c/77f548_f390ecef6f2949a8821d6f689f1f701a~mv2.png' },
    { id: 3, name: 'Wild Pine', img: 'https://radiantethiopiatours.com/wp-content/uploads/Radiant-Ethiopia-Logo-Vertical.jpg' },
    { id: 4, name: 'Mountain', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmdt9Hozz_13-ni-hIxYO0Wc7Jn1-DFU93nQ&s' },
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <div className="text-center">
          <p className="accent-text">Our Strategic Partners</p>
          <h2 className="partners-title">Trusted By Leading Adventure Groups</h2>
        </div>

        <div className="partners-grid">
          {partnerLogos.map((logo) => (
            <div key={logo.id} className="partner-item">
              <img src={logo.img} alt={logo.name} title={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;