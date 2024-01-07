import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

// Import components for different pages
import Home from './components/Home';
import Facilities from './components/Facilities';
import Events from './components/Events';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
