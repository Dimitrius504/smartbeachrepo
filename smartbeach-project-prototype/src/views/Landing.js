import React from "react";
import sunny from "../assets/images/sunny.png";
//import live from "../assets/images/live.jpg"

function Landing() {
  return (
    <body className="body-bg">
      <section id="presentation">

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
          <h1>23 °C<img src={sunny} alt="sun" /></h1>
          <p>Today's Beach Condition</p>
          <a href="/forecast">SAFE</a>
        </div>

      </section>
    </body>
    // <main>
    //   <section className="presentation">
    //     <div className="introduction">
    //       <div className="intro-text">
    //         <h1 className="landing"> 23 °C <img src={sunny} alt="sun" />
    //         </h1>
    //         <p>Today's Beach Conditions</p>
    //         <div className="cta">
    //           <button className="cta-select"><h1>SAFE</h1></button>
    //           <button className="cta-select" id="wind-speed-select"><h2>Wind Speed</h2><h1 className="kph"><strong>28</strong>kph</h1><i className="bi bi-cursor-fill"></i></button>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="cover">
    //     <iframe
    //         src="https://www.youtube.com/embed/Anpo_1-tsUs"
    //         title="Drone video of Kincardine"
    //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //         allowFullScreen
    //       ></iframe>

    //       <h1 className="cover-text">Station Beach, ON</h1>
    //     </div>
    //   </section>
    // </main>

  );
}

export default Landing;