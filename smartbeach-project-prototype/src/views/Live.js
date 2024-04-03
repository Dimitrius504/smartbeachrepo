import React from "react";
import beachsafe from '../assets/images/beachsafe.jpeg';


function Live() {
    return (
        <main>
      <section className="presentationLive">
        <section className="TP">
          <h1>About Us</h1>
          {/* <p className="modelTime">Model run: Jan 01 8am-10(Jan01 18 UTC)</p> */}
          
          <h1>Kincardine Beach Safety</h1>
          <p>
            Here at Station Beach, beach safey is very important our beach is featured as one of the top locations in Canada for surfing. Along with that the beach has very strong rip currents and undertows.
            It is important that beach goers and surfers pay attention to the Flags displaying the beach conditions and to pay attention to lifegaurd signals. 
            There is no night swimming is permitted at Station Beach. As Well please pay attention to designated swim areas and stay clear from pier like structures.  
            {/* The perfect combination of gentle winds and clear skies creates
            ideal conditions for surfing and swimming. Take advantage of the
            waves and have a wonderful time in the weather. Safety should always
            come first, so be sure to follow any local regulations and stay
            hydrated. Don't forget to apply sunscreen if you'll be out in the
            sun for awhile. Enjoy your day spent by the water! */}
          </p>
          <img src={beachsafe} alt="beachsafe"/>
          <p>Please visit kindcardine beaches website for more information: <a href="https://www.kincardine.ca/en/play-and-explore/beaches.aspx"></a>The Munciplaity of Kincardine</p>
          {/* Add saftey information link :https://www.kincardine.ca/en/play-and-explore/beaches.aspx */}
        </section>
      </section>
    </main>
    );
}

export default Live;