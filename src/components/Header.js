// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import './Header.css'; // Import a separate CSS file for styling if needed

function Header() {
  return (
    <header>
      <div className="logo">Your Logo</div>
      <nav>
        <ul>
          <li><Link to="/ph-mock-website-demo">Home</Link></li>
          <li><Link to="/ph-mock-website-demo/accommodation">Accommodation</Link></li>
          <li><Link to="/ph-mock-website-demo/facilities">Facilities</Link></li>
          <li><Link to="/ph-mock-website-demo/life">Life at Pioneer House</Link></li>
          <li><Link to="/ph-mock-website-demo/events">Events</Link></li>
          <li><Link to="/ph-mock-website-demo/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="search-bar">
        {/* Add search functionality with input and search button */}
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>
    </header>
  );
}

export default Header;
