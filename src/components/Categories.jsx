import React from 'react';
import './Categories.css';

const categories = [
  { id: 1, title: 'Crater Lake', img: 'https://cdn.prod.website-files.com/64e55b39f289bedb9b5dfb6b/6528c4dd40e92ae64dc97e2f_CraterLakeSummer-DK20-47.jpg' },
  { id: 2, title: 'Horse Riding', img: 'https://i.pinimg.com/1200x/79/9c/81/799c81f53df4e5750173de8cc30ddacf.jpg' },
  { id: 3, title: 'Boat Driving', img: 'https://i.pinimg.com/736x/5e/0d/06/5e0d0667baa905bf9cecccbca8391197.jpg' },
  { id: 4, title: 'Camping', img: 'https://i.pinimg.com/736x/b6/f7/82/b6f7827f119cd16b26064ccba81b40b9.jpg' },
];

const Categories = () => {
  return (
    <section className="container text-center section-padding">
      <p className="accent-text">Who we are</p>
      <h2 className="section-title">Adventure Ideas</h2>
      <div className="category-grid">
        {categories.map(cat => (
          <div key={cat.id} className="cat-item">
            <div className="cat-circle">
              <img src={cat.img} alt={cat.title} />
            </div>
            <h3>{cat.title}</h3>
            <p>Explore the best hiking trails in the heart of Ethiopia.</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Categories;