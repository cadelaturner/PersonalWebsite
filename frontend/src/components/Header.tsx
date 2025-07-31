import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <div className="shingo-logo">
            <div className="logo-circle">S</div>
          </div>
          <div className="header-text">
            <h1>Shingo Institute</h1>
            <p>AI-Enabled Avatar</p>
          </div>
        </div>
        <div className="tagline">
          <p>Operational Excellence Through Principle-Based Leadership</p>
        </div>
      </div>
    </header>
  );
};

export default Header;