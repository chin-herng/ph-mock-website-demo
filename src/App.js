import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

// Import components for different pages
import Home from './components/Home';
import Facilities from './components/Facilities';
import Events from './components/Events';
import AuthPage from './components/AuthPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/ph-mock-website-demo/" element={<Home />} />
            <Route path="/ph-mock-website-demo/facilities" element={<Facilities />} />
            <Route path="/ph-mock-website-demo/events" element={<Events />} />
            <Route path="/ph-mock-website-demo/auth" element={<AuthPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
