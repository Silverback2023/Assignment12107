import React from "react";
import PropTypes from "prop-types";
import "./ShoeInfo.css";

const ShoeInfo = ({ data }) => {
  const handleLocationClick = (websiteUrl) => {
    
    window.open(websiteUrl, "_blank"); 
  };

  return (
    <div className="shoe-info-container">
      <div className="shoe-grid">
        {data.map((shoe, index) => (
          <div className="shoe-container" key={index}>
            <div className="shoe-image-container">
              <div className="shoe-image-circle">
                <img src={shoe.image} alt={shoe.name} className="shoe-image" />
              </div>
            </div>
            <div className="shoe-details">
              <h1 className="shoe-name">Name: {shoe.name}</h1>
              <p className="brand-price">Price: ${shoe.price}</p>
              <span className="Location">Location: {shoe.description}</span>
              <button
                className="location-button"
                onClick={() => handleLocationClick(shoe.website)}
              >
                Visit Website
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ShoeInfo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired, 
    })
  ),
};

export default ShoeInfo;
