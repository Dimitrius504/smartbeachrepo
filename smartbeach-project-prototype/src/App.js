import './App.css';
import './Forecast.css';
import './Live.css';
import './Landing.css';
//import Conditions from './components/Condition';
import WeatherComponent from './components/Weather';
import ApiComponent from './components/Kincardine';
import ForecastComponent from './components/ForecastApiData';
import Header from './views/shared/Header';
import Landing from './views/Landing';
import Forecast from './views/Forecast';
import Live from './views/Live'
// import 'bootstrap';
// import 'bootstrap-icons';
// import 'react-popper';


//Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/forecast" element={<div id="forecast-page"><Forecast/></div>}/>
            <Route path="/live" element={<Live/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;