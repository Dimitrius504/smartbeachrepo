import React from "react";
import beachsafety from '../assets/images/infopage.png';
import smartbeachgraphic from '../assets/images/infopage.png';

function Live() {
  return (
    <div>
      <div className="presentationLive">
        <div className="topImagesContainer">
          <img src={beachsafety} alt="prediction" className="sideBySideImage" />
          <img src={smartbeachgraphic} alt="smart beach banner" className="sideBySideImage" />
        </div>
        <div className="TP">
          <div className="aboutContent">
            <h1 className="bold">The Smart Beach Project</h1>
            <div className="paragraphContainer">
              <h2>Smart Beach Safety</h2>
              <p>
                Beach safety is about more than just enjoying the sun and surf—it's about protecting yourself and others while soaking up the coastal beauty. Before heading to the beach, take a moment to assess the conditions and familiarize yourself with any potential hazards. Always swim in designated areas with lifeguard supervision and pay attention to warning signs or flags indicating water conditions. Remember to stay vigilant of rip currents, which can swiftly pull swimmers away from shore, and never underestimate the power of the great lakes. By staying informed and prepared, you can enjoy a safe and enjoyable beach day for everyone.
              </p>
            </div>
            <div className="paragraphContainer">
              <h2>The Smart Beach Mission</h2>
              <p>
                The new Smart Beach pilot program, launched by the region’s Municipal Innovation Council and hosted at the Municipality of Kincardine’s Station Beach, will provide beachgoers with up-to-date information so they can stay safe at the beach.
                Smart Beach uses innovative technologies to collect and analyse water and weather conditions and develop a system that will provide beachgoers with real-time information on local water conditions, including rough surf and the presence of rip currents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Live;