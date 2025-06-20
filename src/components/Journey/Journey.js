import React from 'react';
import { journeyData } from '../../data/journeyData';
import './Journey.css';

function Journey() {
  return (
    <div className="journey-section">
      <h1 className="journey-title">My Journey</h1>
      {journeyData.map((journey, idx) => (
        <div className="journey-block" key={idx}>
          <h2 className="journey-block-title">{journey.title}</h2>
          {journey.description && <p className="journey-block-desc">{journey.description}</p>}
          <div className="journey-gallery">
            {journey.gallery && journey.gallery.length > 0 ? (
              journey.gallery.map((img, i) => (
                <div className="journey-gallery-card" key={i}>
                  <img src={process.env.PUBLIC_URL + '/' + img} alt={journey.title + '-' + i} />
                </div>
              ))
            ) : (
              <div className="journey-gallery-placeholder">No images yet.</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Journey; 