import React from 'react';
import './App.css';
import './Footer.css';
import './Header.css';
import Header from './views/shared/Header';
import Footer from './views/shared/Footer';
import Landing from './views/Landing';
import Forecast from './views/Forecast';
import Live from './views/Live';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='nonExistent'>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/forecast" element={<div id="forecast-page"><Forecast /></div>} />
          <Route path="/live" element={<Live />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
