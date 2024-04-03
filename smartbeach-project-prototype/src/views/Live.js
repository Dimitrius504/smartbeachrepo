import React from "react";
import beachsafety2 from '../assets/images/beachsafety2.jpeg';
//import smartbeachgraphic from '../assets/images/smartbeachgraphic.png';
//import abouthero from '../assets/images/abouthero.webp';
//import infoimage1 from '../assets/images/infoimage1.png';
import infoimage2 from '../assets/images/infoimage2.png';


function Live() {
  return (
    <main>
      <div class="live-wrapper">
        <section id="live-hero">
          <h1>Turning current data into safe swimming</h1>
          <a href="#live-info-container">Learn More</a>
        </section>
      </div>
      <section id="live-info-container">
        <h1>The Smart Beach Project</h1>
        <div class="live-info">
          <div>
            <h2>Smart Beach Mission</h2>
            <p>The new Smart Beach pilot program, launched by the region’s Municipal Innovation Council and hosted at the Municipality of Kincardine’s Station Beach, will provide beachgoers with up-to-date information so they can stay safe at the beach.
              Smart Beach uses innovative technologies to collect and analyse water and weather conditions and develop a system that will provide beachgoers with real-time information on local water conditions, including rough surf and the presence of rip currents.</p>
          </div>
          <div className="info-img">
            <img src={infoimage2} alt="" />
          </div>


        </div>
        <div class="live-info">
          <div class="info-img live-info-img">
            <img src={beachsafety2} alt="" />
          </div>
          <div>
            <h2>Smart Beach Safety</h2>
            <p>Beach safety is about more than just enjoying the sun and surf—it's about protecting yourself and others while soaking up the coastal beauty. Before heading to the beach, take a moment to assess the conditions and familiarize yourself with any potential hazards. Always swim in designated areas with lifeguard supervision and pay attention to warning signs or flags indicating water conditions. Remember to stay vigilant of rip currents, which can swiftly pull swimmers away from shore, and never underestimate the power of the great lakes. By staying informed and prepared, you can enjoy a safe and enjoyable beach day for everyone.</p>
          </div>
        </div>

      </section>
    </main>
  );
}

export default Live;