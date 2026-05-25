import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container text-center">
        <p className="accent-text">Statistics</p>
        <h2 className="section-title white">Our Footprints</h2>
        <div className="stats-grid">
          <div className="stat-circle-outline">
            <h3>60+</h3>
            <p>Destinations</p>
          </div>
          <div className="stat-circle-outline">
            <h3>8</h3>
            <p>Activities</p>
          </div>
          <div className="stat-circle-outline">
            <h3>200+</h3>
            <p>Guides</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stats;