import React, { useState, useEffect } from "react";
import sunny from "../assets/images/sunny.png";
import sunnyclowdy from "../assets/images/sunnyclowdy.png";
import rainy from "../assets/images/rainy.png";
import live from "../assets/images/live.jpg";
import ApiComponent from "../components/Kincardine";

import { Link } from "react-router-dom";

function Landing() {
  const [temperature, setTemperature] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [generalAdvisory, setGeneralAdvisory] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);

  useEffect(() => {
    fetch("/weather")
      .then((res) => res.json())
      .then((data) => {
        setTemperature(Math.round(data.temperature));
        setWindSpeed(Math.round(data.windSpeed));
        setDescription(data.description);
        setLoading(false);
        updateWeatherIcon(data.description);
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

  const updateWeatherIcon = (description) => {
    if (description) {
      if (description.includes("clear") || description.includes("few clouds")) {
        setWeatherIcon(sunny);
      } else if (
        description.includes("scattered clouds") ||
        description.includes("broken clouds") ||
        description.includes("poop") ||
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
    return <div>Loading...</div>;
  }

  return (
    <main>
      <section className="presentation">
        <div className="introduction">
          <div className="intro-text">
            <h1 className="landing">
              {temperature}°c{" "}
              <img src={weatherIcon} alt="weatherIcon" id="weatherIcon" />
            </h1>
            <h2>
              <em>{description}</em>
            </h2>
            <div className="cta">
              <Link to="/forecast">
                <button className="cta-select">
                  <h1>{generalAdvisory}</h1>
                </button>
              </Link>
            </div>
            <div className="cta" id="wind-speed">
              <button className="cta-select" id="wind-speed-select">
                <h2>Wind Speed</h2>
                <h1 className="kph">
                  <strong>{windSpeed}</strong>kph
                </h1>
                <i className="bi bi-cursor-fill"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="cover">
          <iframe
            src="https://www.youtube.com/embed/Anpo_1-tsUs"
            title="Drone video of Kincardine"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <h1 className="cover-text">Station Beach, ON</h1>
        </div>
      </section>
    </main>
  );
}

export default Landing;
