// Facilities.js
import React from 'react';
import './Facilities.css'; // Import a separate CSS file for styling if needed

function Facilities() {
  // Function to handle the booking when an image is clicked
  const handleBooking = (facilityName) => {
    // For simplicity, you can log the facility name and date to the console
    console.log(`Booking ${facilityName} for specified date`);
  };

  return (
    <div className="facilities-page">
      <h1>Facilities</h1>
      <div className="facility-images">
        {/* Example facility images, replace with your actual facility images */}
        <div className="facility-card" onClick={() => handleBooking('Meeting Room')}>
          <img src="https://placekitten.com/300/200" alt="Meeting Room" />
          <p>Meeting Room</p>
        </div>
        <div className="facility-card" onClick={() => handleBooking('Gym')}>
          <img src="https://placekitten.com/300/200" alt="Gym" />
          <p>Gym</p>
        </div>
        {/* Add more facility cards as needed */}
      </div>
    </div>
  );
}

export default Facilities;
