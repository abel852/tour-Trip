import React, { useState } from 'react';
import { FaTimes, FaSearchPlus } from 'react-icons/fa'; // Added search icon for hover
import './Gallary.css';

const Gallary = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { url: 'https://i.pinimg.com/736x/59/61/57/5961578db23937fe7f2625600e348cea.jpg', title: 'Wonchi Crater Lake' },
    { url: 'https://i.pinimg.com/1200x/dc/6a/75/dc6a754c8c1da55a4e632ad9bad9705c.jpg', title: 'Simien Mountains' },
    { url: 'https://i.pinimg.com/1200x/fe/29/e7/fe29e738c90191013533504111774b45.jpg', title: 'Entoto Park' },
    { url: 'https://preview.redd.it/wenchi-crater-lake-ethiopia-v0-u0hb99w6d0l61.jpg?width=960&format=pjpg&auto=webp&s=6a7dedb3fab7c69f7f00446cf7f62a5fcf1340f1', title: 'Hiking Trails' },
    { url: 'https://preview.redd.it/wenchi-crater-lake-ethiopia-v0-svhynew6d0l61.jpg?width=960&format=pjpg&auto=webp&s=4e00a135d4e5946c6b9c8cde2bdaeb21a13597cf', title: 'Lake View' },
    { url: 'https://i.pinimg.com/1200x/5c/89/23/5c892308f55deec820eb234bb42ce48b.jpg', title: 'Danakil Depression' },
    { url: 'https://i.pinimg.com/1200x/a1/d4/8b/a1d48bf829b16fa402e8a563d42f7d82.jpg', title: 'Mountain Camping' },
    { url: 'https://i.pinimg.com/1200x/04/56/e0/0456e0c8aa2f864a77c91842977182ae.jpg', title: 'Horseback Trekking' },
    { url: 'https://i.pinimg.com/1200x/be/16/5d/be165db9dd9208016d9eca7fff960d48.jpg', title: 'Horseback Trekking' },
    { url: 'https://i.pinimg.com/1200x/24/1d/55/241d55c232a0e7670de907c6e7a5006d.jpg', title: 'Dallol' },
  ];

  return (
    <section id="gallery" className="section-padding container">
      <div className="text-center gallery-head">
        <p className="accent-text">Visual Journey</p>
        <h2 className="section-title">Ethiopian Landscapes</h2>
      </div>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <div key={i} className="gallery-item" onClick={() => setSelectedImg(img.url)}>
            <img src={img.url} alt={img.title} />
            <div className="gallery-overlay">
              <FaSearchPlus className="zoom-icon" />
              <h4>{img.title}</h4>
            </div>
          </div>
        ))}
      </div>

      
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <button className="close-btn"><FaTimes /></button>
          <img src={selectedImg} alt="Enlarged" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default Gallary;