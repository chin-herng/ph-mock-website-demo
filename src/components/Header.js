// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

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
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>
      <div className="auth-buttons">
        <Link to="/ph-mock-website-demo/auth">Register / Login</Link>
      </div>
    </header>
  );
}

export default Header;
