import React from "react";
import './App.css';
import './Forecast.css';
// import Conditions from './components/Condition';
// import WeatherComponent from './components/Weather';
// import ApiComponent from './components/Kincardine';
import MobileHamburgerMenu from './components/MobileHamburgerMenu';
import Header from './views/shared/Header';
import Footer from './views/shared/Footer';
import Landing from './views/Landing';
import Forecast from './views/Forecast';
import Live from './views/Live'



//Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
    {/* <Conditions /> 
    <WeatherComponent />
        <ApiComponent /> */}
    <div id="content-container" className="content-wrapper">
    <MobileHamburgerMenu />
    <BrowserRouter>
          <Routes>
            <Route path="/landing" element={<Landing/>}/>
            <Route path="/forecast" element={<div id="forecast-page"><Forecast/></div>}/>
            <Route path="/live" element={<Live/>}/>
          </Routes>
        </BrowserRouter>
    </div>
        <Footer/>
    </div>
  );
}

export default App;
