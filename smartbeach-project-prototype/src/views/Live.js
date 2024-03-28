import React from "react";
import prediction from '../assets/images/prediction.png';


function Live() {
    return (
        <main>
      <section className="presentationLive">
        <section className="TP">
          <h1 className="bold">Today's Prediction</h1>
          <p className="modelTime">Model run: Jan 01 8am-10(Jan01 18 UTC)</p>
          <img src={prediction} alt="prediction"/>
          <h1>About us</h1>
          <p>
            The perfect combination of gentle winds and clear skies creates
            ideal conditions for surfing and swimming. Take advantage of the
            waves and have a wonderful time in the weather. Safety should always
            come first, so be sure to follow any local regulations and stay
            hydrated. Don't forget to apply sunscreen if you'll be out in the
            sun for awhile. Enjoy your day spent by the water!
          </p>
          {/* Add saftey information link :https://www.kincardine.ca/en/play-and-explore/beaches.aspx */}
        </section>
      </section>
    </main>
    );
}

export default Live;