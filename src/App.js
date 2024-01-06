import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="hero-section">
          <h1>Find Your Perfect Accommodation</h1>
          <p>Discover a range of accommodation options that suit your needs.</p>
        </section>
        <section className="featured-section">
          {/* Add featured accommodation components here */}
          <div className="accommodation-card">
            <img src="https://placekitten.com/300/200" alt="Accommodation" />
            <h2>Accommodation Name</h2>
            <p>Description of the accommodation.</p>
          </div>
          {/* Repeat for other featured accommodations */}
        </section>
        <section className="explore-section">
          <h2>Explore More Accommodation Options</h2>
          {/* Add more accommodation options here */}
        </section>
      </main>
    </div>
  );
}

export default App;
