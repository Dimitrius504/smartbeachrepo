import React, { useState, useEffect } from "react";
import sunny from "../assets/images/sunny.png";
import sunnyclowdy from "../assets/images/sunnyclowdy.png";
import rainy from "../assets/images/rainy.png";
import live from "../assets/images/live.jpg";
import logobeach from "../assets/images/logobeach.png";
import ApiComponent from "../components/Kincardine";
import '../Landing.css';

import { Link } from "react-router-dom";

function Landing() {
  const [temperature, setTemperature] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [generalAdvisory, setGeneralAdvisory] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);

  useEffect(() => {
    fetch("https://smartbeach-api-server-data.onrender.com/weather")
      .then((res) => res.json())
      .then((data) => {
        setTemperature(Math.round(data.temperature));
        setWindSpeed(Math.round(data.windSpeed));
        setDescription(data.description);
        setLoading(false);
        updateWeatherIcon(data.description);
        const advisory = ApiComponent.safetyDeterminator(data);
        setGeneralAdvisory(advisory);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      const apiComponent = new ApiComponent();
      setGeneralAdvisory(apiComponent.safetyDeterminator());
    }
  }, [loading]);

  // const updateAdvisory = (generalAdvisory) => {
  //   if (generalAdvisory.includes('Mostly Unsafe') {

  //   })
  // }

  const updateWeatherIcon = (description) => {
    if (description) {
      if (description.includes("clear") || description.includes("few clouds")) {
        setWeatherIcon(sunny);
      } else if (
        description.includes("scattered clouds") ||
        description.includes("broken clouds") ||
        description.includes("overcast clouds")
      ) {
        setWeatherIcon(sunnyclowdy);
      } else if (
        description.includes("shower rain") ||
        description.includes("rain") ||
        description.includes("thunderstorm") ||
        description.includes("mist")
      ) {
        setWeatherIcon(rainy);
      } else {
        setWeatherIcon(sunny); // Default icon
      }
    } else {
      setWeatherIcon(sunny);
    }
  };

  if (loading) {
    return (
      <div id="loading">
        <div id="loading-content">
          <img src={logobeach} alt="Logo" />
        </div>
      </div>
    );
  }

//   return (
//     <div>
//       <div className="presentation">
//         <div className="introduction">
//           <div className="intro-text">
//             <h1 className="landing">
//               {temperature}°c{" "}
//               <img src={weatherIcon} alt="weatherIcon" id="weatherIcon" />
//             </h1>
//             <h2>
//               <em>{description}</em>
//             </h2>
//             <div className="cta">
//               <Link to="/forecast">
//                 <button className="cta-select">
//                   <h1>{generalAdvisory}</h1>
//                 </button>
//               </Link>
//             </div>
//             <div className="cta" id="wind-speed">
//               <button className="cta-select" id="wind-speed-select">
//                 <h2>Wind Speed</h2>
//                 <h1 className="kph">
//                   <strong>{windSpeed}</strong>kph
//                 </h1>
//                 <i className="bi bi-cursor-fill"></i>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="cover">
//           <iframe
//             src="https://www.youtube.com/embed/Anpo_1-tsUs"
//             title="Drone video of Kincardine"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>

//           <h1 className="cover-text">Station Beach, ON</h1>
//         </div>
//       </div>
//     </div>
//   );
// }


  return (
    <main>
    <div className="landing-live-wrapper">
      <section id="live-hero">
        <div className="image-container">
          <iframe
            src="https://www.youtube.com/embed/Anpo_1-tsUs?showinfo=0&rel=0"
            title="Drone video of Kincardine"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="700"
            height="394"
          ></iframe>
          <h1>Station Beach, Kincardine</h1>
        </div>
        <div className="weather-conditions">
          <h1 className="weather"> {temperature}°c{" "}
              <img src={weatherIcon} alt="weatherIcon" id="weatherIcon" /></h1>
          <p className="weather">Today's Beach Condition</p>
          <a className="weather" href="/forecast">{generalAdvisory}</a>
        </div>
      </section>
    </div>
  </main>
  
  );
}

export default Landing;