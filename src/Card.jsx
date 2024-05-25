// Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ title, imageUrl, description }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageUrl} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="buy-now-button">Buy Now</button> {/* Add Buy Now button */}
      </div>
    </div>
  );
};

export default Card;
