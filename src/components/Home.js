import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <main>
        <section className="hero-section">
          {/* Change the hero image to showcase the best of Pioneer House */}
          <img src="https://placekitten.com/1200/400" alt="Pioneer House" />
          <h1>Welcome to Pioneer House</h1>
          <p>Experience a vibrant community where students thrive.</p>
        </section>
        <section className="highlights-section">
          <h2>Key Highlights</h2>
          {/* Add key features like room types, amenities, etc. */}
          <div className="highlight-card">
            <h3>Various Room Types</h3>
            <p>Choose from a range of comfortable living spaces.</p>
          </div>
          <div className="highlight-card">
            <h3>Amenities</h3>
            <p>Enjoy modern facilities and conveniences.</p>
          </div>
          <div className="highlight-card">
            <h3>Proximity to Campus</h3>
            <p>Conveniently located near the heart of the campus.</p>
          </div>
          {/* Add more cards for other highlights */}
        </section>
        <section className="testimonials-section">
          <h2>What Residents Say</h2>
          {/* Add testimonials and reviews from current residents and alumni */}
          <div className="testimonial">
            <p>"Living at Pioneer House has been an amazing experience. The community is welcoming, and the events make it feel like home."</p>
            <p className="author">- John Doe, Resident</p>
          </div>
          {/* Add more testimonials */}
        </section>
        <section className="explore-section">
          <h2>Explore Pioneer House</h2>
          {/* Add more content to encourage exploring accommodation options */}
        </section>
      </main>
    </div>
  );
}

export default Home;
