// Events.js
import React from 'react';
import './Events.css';

function Events() {
  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      {/* Event 1 */}
      <div className="event-card">
        <img src="https://via.placeholder.com/800x400" alt="Event" />
        <h3>Event Title 1</h3>
        <p>Date and Time: January 1, 2023, 5:00 PM</p>
        <p>Location: Venue A</p>
        <p>Description of the event goes here.</p>
        <button className="register-button">Register</button>
      </div>
      
      {/* Event 2 */}
      <div className="event-card">
        <img src="https://via.placeholder.com/800x400" alt="Event" />
        <h3>Event Title 2</h3>
        <p>Date and Time: January 15, 2023, 7:00 PM</p>
        <p>Location: Venue B</p>
        <p>Description of the event goes here.</p>
        <button className="register-button">Register</button>
      </div>
      {/* Repeat for other events */}
    </div>
  );
};

export default Events;
