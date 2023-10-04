import React from 'react';
import PropTypes from 'prop-types'; 
import './Header.css';

const Header = (props) => {
  // Define the URL of the Jordan logo image
  const jordanLogoUrl = 'data:image/png;base64,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'; // Replace with the actual direct image URL

  return (
    <header className="header-container">
      <h1>
        Sole Searcher Jordan Edition
        <img src={jordanLogoUrl} alt="Jordan Logo" className="jordan-logo" />
      </h1>
    </header>
  );
}

// Define PropTypes for the Header component
Header.propTypes = {
  title: PropTypes.string,
}

export default Header;