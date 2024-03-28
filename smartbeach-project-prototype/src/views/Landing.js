import React from "react";
import sunny from "../assets/images/sunny.png";
import live from "../assets/images/live.jpg"


function Landing() {
    return (
      <main>
        <section className="presentation">
        <div className="introduction">
          <div className="intro-text">
            <h1 className="landing"> 23 °C <img src={sunny} alt="sun" />
</h1>
            <p>Today's Beach Conditions</p>
            <div className="cta">
              <button className="cta-select"><h1>SAFE</h1></button>
            </div>
            <div className="cta" id="wind-speed">
              <button className="cta-select" id="wind-speed-select"><h2>Wind Speed</h2><h1 className="kph"><strong>28</strong>kph</h1><i className="bi bi-cursor-fill"></i></button>
            </div>
          </div>
        </div>

        <div className="cover">
        <img src={live} alt="Live Footage" />

          <h1 className="cover-text">LIVE Station Beach, Kincardine ON</h1>
        </div>
      </section>
      </main>
    
    );
}

export default Landing;