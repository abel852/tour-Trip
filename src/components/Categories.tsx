import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const categories = [
  { id: 1, title: 'Everest Base Camp', slug: 'everest-base-camp-trek', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, title: 'Horse Riding', img: 'https://i.pinimg.com/1200x/79/9c/81/799c81f53df4e5750173de8cc30ddacf.jpg' },
  { id: 3, title: 'Boat Driving', img: 'https://i.pinimg.com/736x/5e/0d/06/5e0d0667baa905bf9cecccbca8391197.jpg' },
  { id: 4, title: 'Camping', img: 'https://i.pinimg.com/736x/b6/f7/82/b6f7827f119cd16b26064ccba81b40b9.jpg' },
];

const Categories: React.FC = () => {
  return (
    <section className="container section-padding">
      <div className="text-center mb-12">
        <span className="accent-text">Who we are</span>
        <h2 className="section-title">Adventure Ideas</h2>
      </div>
      <div className="category-grid">
        {categories.map(cat => (
          <div key={cat.id} className="cat-item">
            <Link to={cat.slug ? `/tour/${cat.slug}` : '#'} className="block group">
              <div className="cat-circle">
                <img src={cat.img} alt={cat.title} />
              </div>
              <h3>{cat.title}</h3>
              <p>Explore the best hiking trails in the heart of Ethiopia.</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Categories;
