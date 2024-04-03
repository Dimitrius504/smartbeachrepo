import React from "react";
import sunny from "../assets/images/sunny.png";
import rainy from "../assets/images/rainy.png"
import sunnycloudy from "../assets/images/sunnyclowdy.png"
    function Forecast() {
      return(


    <main className="body-bg">
        <section className="mobile">
          <h1>04/02 | 6:13pm</h1>
          <br />
        <h2> 23 °C <img className="ratingIcon" src={sunny} alt="sun" /> </h2>
        <h1 className="rating">Safe</h1>
        </section>

        <div class="dailyForecast"><h2>Weekly Forecast</h2></div>
        <div class="cards">
        <div class="card1">
        <h1 className="cardHead">Tommorows Forecast</h1>
        <h2 class="cardTemp"> 23 °C <img className="ratingIcon" src={rainy} alt="sun" /> </h2>
        <h1 className="rating">Safe</h1>
        </div>
        <div class="card2">
          <h1 className="cardHead">Wednesdays Forecast</h1>
          <h2 class="comingSoon"> Weekly Forecast Coming Soon!</h2>
        </div>
        </div>
        <h1 className="mobile">Today</h1>
        <table class="mobileTable">
          <tr class="columnHeads">
            <th><h2>Time</h2><h1 class="headText">0.5m</h1></th>
            <th><h2>Wave Height</h2><h1 class="headText">0.5m</h1></th>
            <th><h2>Water Tempeture</h2><h1 class="headText">0.5m</h1></th>
            <th><h2>Air Pressure</h2><h1 class="headText">0.5m</h1></th>
          </tr>
          <tr>
            <th class="timeFont">
              <h4>6 am</h4>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>
          <tr>
          <th class="timeFont">
              <h4>9 am</h4>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
          <th class="timeFont">
              <h4>12 pm</h4>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
          <th class="timeFont">
              <h4>3 pm</h4>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
          <th class="timeFont">
              <h4>9 pm</h4>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
          <th class="timeFont">
              <h4>12 am</h4>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>
        </table>
        <h1 className="mobile">Tommorow</h1>
        <table class="mobileTable">
          <tr class="columnHeads">
            <th><h2>Time</h2><h1 class="headText">0.5m</h1></th>
            <th><h2>Wave Height</h2><h1 class="headText">0.5m</h1></th>
            <th><h2>Water Tempeture</h2><h1 class="headText">0.5m</h1></th>
            <th><h2>Air Pressure</h2><h1 class="headText">0.5m</h1></th>
          </tr>
          <tr>
            <th class="timeFont">
              <h4>6 am</h4>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>
          <tr>
          <th class="timeFont">
              <h4>9 am</h4>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
          <th class="timeFont">
              <h4>12 pm</h4>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
          <th class="timeFont">
              <h4>3 pm</h4>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
          <th class="timeFont">
              <h4>9 pm</h4>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
          <th class="timeFont">
              <h4>12 am</h4>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>
        </table>
        <div class="forecastPage">
        {/* Todays Table */}
        <h1 class="hidden">Today<i class="bi bi-chevron-down"></i></h1>
        <table class="hidden">
          <tr class="columnHeads">
            <th><h2>Time</h2> <h1 class="headText">0.2m</h1></th>
            <th><h2>Rating</h2><h1 class="headText">0.4m</h1></th>
            <th><h2>Weather</h2><h1 class="headText">0.5m</h1></th>
            <th><h2>Wind speed</h2><h1 class="headText">0.5m</h1></th>
            <th><h2>Wave Height</h2><h1 class="headText">0.5m</h1></th>
            <th><h2>Water Tempeture</h2><h1 class="headText">0.5m</h1></th>
            <th><h2>Air Pressure</h2><h1 class="headText">0.5m</h1></th>
          </tr>



          <tr class="tableRow">
            <th class="tableTime">
              <h2 class="timeFont">6am</h2>
              <span class="timeSafety"></span>
            </th>
            <th class="rating">
              <h4>Safe</h4>


            </th>
            <th class="weather">
            <h2> 23 °C <img className="ratingIcon" src={sunny} alt="sun" /> </h2>
            </th>
            <th class="time">
              <h4>2.00kph</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
          <th class="tableTime">
              <h2 class="timeFont">6am</h2>
              <span class="timeSafety"></span>
            </th>

            <th class="rating">
              <h4>Safe</h4>
            </th>
            <th class="weather">
            <h2> 23 °C <img className="ratingIcon" src={rainy} alt="sun" /> </h2>
            </th>
            <th class="windSpeed">
              <h4>2.00kph</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
          <th class="tableTime">
              <h2 class="timeFont">6am</h2>
              <span class="timeSafety"></span>
            </th>

            <th class="rating">
              <h4>Safe</h4>


            </th>
            <th class="weather">
            <h2> 23 °C <img  className="ratingIcon" src={rainy} alt="sun" /> </h2>
            </th>
            <th class="windSpeed">
              <h4>2.00kph</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
            <th class="tableTime">
              <h2 class="timeFont">6am</h2>
              <span class="timeSafety"></span>
            </th>

            <th class="rating">
              <h4>Safe</h4>


            </th>
            <th class="weather">
            <h2> 23 °C <img  className="ratingIcon" src={sunnycloudy} alt="sun" /> </h2>
            </th>
            <th class="windSpeed">
              <h4>2.00kph</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
            <th class="tableTime">
              <h2 class="timeFont">6am</h2>
              <span class="timeSafety"></span>
            </th>

            <th class="rating">
              <h4>Safe</h4>


            </th>
            <th class="weather">
            <h2> 23 °C <img  className="ratingIcon" src={sunny} alt="sun" /> </h2>
            </th>
            <th class="windSpeed">
              <h4>2.00kph</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
            <th class="tableTime">
              <h2 class="timeFont">6am</h2>
              <span class="timeSafety"></span>
            </th>

            <th class="rating">
              <h4>Safe</h4>
            </th>

            <th class="weather">
            <h2> 23 °C <img className="ratingIcon" src={sunny} alt="sun" /> </h2>
            </th>
            <th class="windSpeed">
              <h4>2.00kph</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>
        </table>


        {/* Tommorows Table  */}
        <h1 class="hidden">Tommorow<i class="bi bi-chevron-down"></i></h1>
        <table class="hidden"> 
        <tr class="columnHeads">
            <th><h2>Time</h2> <h1 class="headText">0.2m</h1></th>
            <th><h2>Rating</h2><h1 class="headText">0.4m</h1></th>
            <th><h2>Weather</h2><h1 class="headText">0.5m</h1></th>
            <th><h2>Wind speed</h2><h1 class="headText">0.5m</h1></th>
            <th><h2>Wave Height</h2><h1 class="headText">0.5m</h1></th>
            <th><h2>Water Tempeture</h2><h1 class="headText">0.5m</h1></th>
            <th><h2>Air Pressure</h2><h1 class="headText">0.5m</h1></th>
          </tr>



          <tr class="tableRow">
            <th class="tableTime">
              <h2 class="timeFont">6am</h2>
              <span class="timeSafety"></span>
            </th>
            <th class="rating">
              <h4>Safe</h4>


            </th>
            <th class="weather">
            <h2> 23 °C <img className="ratingIcon" src={sunny} alt="sun" /> </h2>
            </th>
            <th class="windSpeed">
              <h4>2.00kph</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
          <th class="tableTime">
              <h2 class="timeFont">6am</h2>
              <span class="timeSafety"></span>
            </th>

            <th class="rating">
              <h4>Safe</h4>
            </th>
            <th class="weather">
            <h2> 23 °C <img className="ratingIcon" src={sunny} alt="sun" /> </h2>
            </th>
            <th class="windSpeed">
              <h4>2.00kph</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
          <th class="tableTime">
              <h2 class="timeFont">6am</h2>
              <span class="timeSafety"></span>
            </th>

            <th class="rating">
              <h4>Safe</h4>


            </th>
            <th class="weather">
            <h2> 23 °C <img  className="ratingIcon" src={sunny} alt="sun" /> </h2>
            </th>
            <th class="windSpeed">
              <h4>2.00kph</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
            <th class="tableTime">
              <h2 class="timeFont">6am</h2>
              <span class="timeSafety"></span>
            </th>

            <th class="rating">
              <h4>Safe</h4>


            </th>
            <th class="weather">
            <h2> 23 °C <img  className="ratingIcon" src={sunny} alt="sun" /> </h2>
            </th>
            <th class="windSpeed">
              <h4>2.00kph</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
            <th class="tableTime">
              <h2 class="timeFont">6am</h2>
              <span class="timeSafety"></span>
            </th>

            <th class="rating">
              <h4>Safe</h4>


            </th>
            <th class="weather">
            <h2> 23 °C <img  className="ratingIcon" src={sunny} alt="sun" /> </h2>
            </th>
            <th class="windSpeed">
              <h4>2.00kph</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>

          <tr class="tableRow">
            <th class="tableTime">
              <h2 class="timeFont">6am</h2>
              <span class="timeSafety"></span>
            </th>

            <th class="rating">
              <h4>Safe</h4>
            </th>

            <th class="weather">
            <h2> 23 °C <img className="ratingIcon" src={sunny} alt="sun" /> </h2>
            </th>
            <th class="windSpeed">
              <h4>2.00kph</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waveHeight">
              <h4>4.3m</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
            <th class="waterTemp">
              <h4>15c</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
                        <th class="airPressure">
              <h4>100mb</h4>

              <span></span>
              <span></span>
              <span></span>
            </th>
          </tr>
        </table>
      </div>
    </main>
);
}
export default Forecast;