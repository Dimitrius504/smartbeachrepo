import './App.css';
// import './Forecast.css';
// import './Live.css';
// import './Landing.css';
import './Footer.css';
import './Header.css'
//import Conditions from './components/Condition';
//import WeatherComponent from './components/Weather';
//import ApiComponent from './components/Kincardine';
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
    {/*<Conditions /> */}
    {/*<WeatherComponent />*/}
    {/*<ApiComponent />*/}
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/forecast" element={<div id="forecast-page"><Forecast/></div>}/>
            <Route path="/live" element={<Live/>}/>
          </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;