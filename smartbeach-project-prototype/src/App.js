import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Conditions from './components/Condition';
// import WeatherComponent from './components/Weather';
// import ApiComponent from './components/Kincardine';
import Home from './pages/Home';
import Forecast from './pages/Forecast';


function App() {
// practise

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route element={<Forecast />} />
        </Routes>
      </BrowserRouter>
    {/* <Conditions />
    <WeatherComponent />
    <ApiComponent /> */}
    </div>
  );
}

export default App;
