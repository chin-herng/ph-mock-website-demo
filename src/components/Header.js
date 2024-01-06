// Header.js
import React from 'react';
import './Header.css'; // Import a separate CSS file for styling if needed

function Header() {
  return (
    <header>
      <div className="logo">Your Logo</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#accommodation">Accommodation</a></li>
          <li><a href="#about">About Us</a></li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
