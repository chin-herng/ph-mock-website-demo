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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/accommodation">Accommodation</Link></li>
          <li><Link to="/facilities">Facilities</Link></li>
          <li><Link to="/life">Life at Pioneer House</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
