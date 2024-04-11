import React from "react";
import sunny from "../assets/images/sunny.png";

function Landing() {
  return (
    <main>
    <div className="live-wrapper">
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
          <h1 className="weather">23 °C<img src={sunny} alt="sun" /></h1>
          <p className="weather">Today's Beach Condition</p>
          <a className="weather" href="/forecast">SAFE</a>
        </div>
      </section>
    </div>
  </main>
  
  );
}

export default Landing;
