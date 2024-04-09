// import React, { useState, useEffect } from "react";
// import rainy from "../assets/images/rainy.png";
// import sunny from "../assets/images/sunny.png";
// import sunnycloudy from "../assets/images/sunnyclowdy.png";

// function Forecast() {
//   // const [forecastData, setForecastData] = useState(null);
//   // const [temperature, setTemperature] = useState(null);
//   // const [description, setDescription] = useState("");
//   // const [windSpeed, setWindSpeed] = useState(null);
//   // const [loading, setLoading] = useState(true);
//   // const [weatherIcon, setWeatherIcon] = useState(null);
//   // const [currentDateTime, setCurrentDateTime] = useState("");
//   // const [todayForecast, setTodayForecast] = useState(null);
//   // const [tomorrowForecast, setTomorrowForecast] = useState(null);
//   // const [nineAMData, setNineAMData] = useState(null);
//   // const [twelvePMData, setTwelvePMData] = useState(null);
//   // const [threePMData, setThreePMData] = useState(null);
//   // const [sixPMData, setsixPMData] = useState(null);
//   // const [ninePMData, setninePMData] = useState(null);
//   // const [midnightData, setmidnightData] = useState(null);
//   // const [threeAMData, setThreeAMData] = useState(null);
//   // const [tomorrowNineAMData, setTomorrowNineAMData] = useState(null);
//   // const [tomorrowTwelvePMData, setTomorrowTwelvePMData] = useState(null);
//   // const [tomorrowThreePMData, setTomorrowThreePMData] = useState(null);
//   // const [tomorrowSixPMData, setTomorrowsixPMData] = useState(null);
//   // const [tomorrowNinePMData, setTomorrowninePMData] = useState(null);
//   // const [tomorrowMidnightData, setTomorrowmidnightData] = useState(null);
//   // const [tomorrowThreeAMData, setTomorrowThreeAMData] = useState(null);

//   const [forecastData, setForecastData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [tomorrowForecast, setTomorrowForecast] = useState(null);
//   const [dayAfterTomorrowForecast, setDayAfterTomorrowForecast] =
//     useState(null);

//   useEffect(() => {
//     fetch("/weather")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data); // Log the data received from the API
//         setForecastData(data);

//         setTomorrowForecast(data.tomorrowForecast);
//         setDayAfterTomorrowForecast(data.dayAfterTomorrowForecast);

//         setTemperature(Math.round(data.temperature));
//         setDescription(data.description);
//         setWindSpeed(data.windSpeed);

//         setLoading(false);
//         setCurrentDateTime(data.tomorrowForecast.dt_txt);

//         // Update weather icon
//         setWeatherIcon(updateWeatherIcon(data.description));

//         console.log("Tomorrow's Forecast Data:", data.tomorrowForecast);
//         console.log(
//           "Day After Tomorrow's Forecast Data:",
//           data.dayAfterTomorrowForecast
//         );

//         console.log("Tomorrow's Forecast:", tomorrowForecast);
//         console.log("Day After Tomorrow's Forecast:", dayAfterTomorrowForecast);

//         // Set data for today's specific hours
//         // setNineAMData(getHourlyData(data.tomorrowForecast.hourlyForecast, 9));
//         // setTwelvePMData(getHourlyData(data.tomorrowForecast.hourlyForecast, 12));
//         // setThreePMData(getHourlyData(data.tomorrowForecast.hourlyForecast, 15));
//         // setsixPMData(getHourlyData(data.tomorrowForecast.hourlyForecast, 18));
//         // setninePMData(getHourlyData(data.tomorrowForecast.hourlyForecast, 21));
//         // setmidnightData(getHourlyData(data.tomorrowForecast.hourlyForecast, 0));
//         // setThreeAMData(getHourlyData(data.tomorrowForecast.hourlyForecast, 3));

//         // // Set data for tomorrow's specific hours
//         // setTomorrowNineAMData(
//         //   getHourlyData(data.tomorrowForecast.hourlyForecast, 9)
//         // );
//         // setTomorrowTwelvePMData(
//         //   getHourlyData(data.tomorrowForecast.hourlyForecast, 12)
//         // );
//         // setTomorrowThreePMData(
//         //   getHourlyData(data.tomorrowForecast.hourlyForecast, 15)
//         // );
//         // setTomorrowsixPMData(
//         //   getHourlyData(data.tomorrowForecast.hourlyForecast, 18)
//         // );
//         // setTomorrowninePMData(
//         //   getHourlyData(data.tomorrowForecast.hourlyForecast, 21)
//         // );
//         // setTomorrowmidnightData(
//         //   getHourlyData(data.tomorrowForecast.hourlyForecast, 0)
//         // );
//         // setTomorrowThreeAMData(
//         //   getHourlyData(data.tomorrowForecast.hourlyForecast, 3)
//         // );

//         // console.log("Tomorrow's Forecast:", tomorrowForecast);
//       })
//       .catch((error) => {
//         console.error("Error fetching weather data:", error);
//         setLoading(false);
//       });
//   }, []);

//   const updateWeatherIcon = (description) => {
//     let iconPath;
//     if (description) {
//       if (description.includes("clear") || description.includes("few clouds")) {
//         iconPath = sunny;
//       } else if (
//         description.includes("scattered clouds") ||
//         description.includes("broken clouds") ||
//         description.includes("overcast clouds")
//       ) {
//         iconPath = sunnycloudy;
//       } else if (
//         description.includes("shower rain") ||
//         description.includes("rain") ||
//         description.includes("thunderstorm") ||
//         description.includes("mist")
//       ) {
//         iconPath = rainy;
//       } else {
//         iconPath = sunny; // Default icon
//       }
//     } else {
//       iconPath = sunny;
//     }
//     return iconPath;
//   };

//   // Function to filter hourly data for a specific hour
//   const getHourlyData = (hourlyForecast, hour) => {
//     return (
//       hourlyForecast.find((item) => {
//         const itemHour = new Date(item.dateTime).getHours();
//         return itemHour === hour;
//       }) || null
//     ); // Return null if data for the specified hour is not found
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <div className="mobileHead">
//         <h1 className="headTime">{currentDateTime}</h1>
//         <br />
//         <h2 className="headTemp">
//           {temperature ? `${temperature} °C` : ""}
//           {weatherIcon && (
//             <img className="ratingIcon" src={weatherIcon} alt="weather icon" />
//           )}
//         </h2>
//         <h1 className="rating">Safe</h1>
//       </div>

//       <div className="dailyForecast">
//         <h2>Weekly Forecast</h2>
//       </div>
//       <div className="cards">
//         <div className="card1">
//           <h1 className="cardHead">Today's Forecast</h1>
//           <h2 className="cardTemp">
//             {todayForecast ? `${todayForecast.temperature} °C` : ""}
//             {todayForecast && todayForecast.weatherIcon && (
//               <img
//                 className="ratingIcon"
//                 src={todayForecast.weatherIcon}
//                 alt="weather icon"
//               />
//             )}
//           </h2>
//           <h1 className="rating">Safe</h1>
//         </div>
//         <div className="card1">
//           <h1 className="cardHead">Tomorrow's Forecast</h1>
//           <h2 className="cardTemp">
//             {tomorrowForecast ? `${tomorrowForecast.temperature} °C` : ""}
//             {tomorrowForecast && tomorrowForecast.weatherIcon && (
//               <img
//                 className="ratingIcon"
//                 src={tomorrowForecast.weatherIcon}
//                 alt="weather icon"
//               />
//             )}
//           </h2>
//           <h1 className="rating">Safe</h1>
//         </div>
//       </div>
//       <h1 className="mobile">Today</h1>
//       <div className="mtContainer">
//         <table className="mobileTable">
//           <tbody>
//             <tr>
//               <th className="timeFont">
//                 <h4>Wave Height</h4>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>
//             <tr>
//               <th className="timeFont">
//                 <h4>Water Tempeture</h4>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>

//             <tr className="tableRow">
//               <th className="timeFont">
//                 <h4>Air Pressure</h4>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <h1 className="mobile">Tommorow</h1>
//       <secton className="mtContainer">
//         <table className="mobileTable">
//           <tbody>
//             <tr>
//               <th className="timeFont">
//                 <h4>Wave Height</h4>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>
//             <tr>
//               <th className="timeFont">
//                 <h4>Water Tempeture</h4>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>

//             <tr className="tableRow">
//               <th className="timeFont">
//                 <h4>Air Pressure</h4>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>
//           </tbody>
//         </table>
//       </secton>
//       <div className="forecastPage">
//         {/* Todays Table */}
//         <h1 className="hidden">
//           Today<i className="bi bi-chevron-down"></i>
//         </h1>
//         <table className="hidden">
//           <tbody>
//             <tr className="columnHeads">
//               <th>
//                 <h2></h2> <h1 className="headText">0.2m</h1>
//               </th>
//               <th>
//                 <h2>Rating</h2>
//                 <h1 className="headText">0.4m</h1>
//               </th>
//               <th>
//                 <h2>Weather</h2>
//                 <h1 className="headText">0.5m</h1>
//               </th>
//               <th>
//                 <h2>Wind speed</h2>
//                 <h1 className="headText">0.5m</h1>
//               </th>
//               <th>
//                 <h2>Wave Height</h2>
//                 <h1 className="headText">0.5m</h1>
//               </th>
//               <th>
//                 <h2>Water Tempeture</h2>
//                 <h1 className="headText">0.5m</h1>
//               </th>
//               <th>
//                 <h2>Air Pressure</h2>
//                 <h1 className="headText">0.5m</h1>
//               </th>
//             </tr>

//             <tr className="tableRow">
//               <th className="tableTime">
//                 <h2 className="timeFont">{midnightData.dateTime}</h2>
//                 <span className="timeSafety"></span>
//               </th>
//               <th className="rating">
//                 <h4>Safe</h4>
//               </th>
//               <th className="weather">
//                 <h2>
//                   {" "}
//                   {midnightData.temperature} °C{" "}
//                   <img
//                     src={updateWeatherIcon(midnightData.description)}
//                     alt="Weather Icon"
//                   />{" "}
//                 </h2>
//               </th>
//               <th className="time">
//                 <h4>{midnightData.windSpeed} kph</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>

//             <tr className="tableRow">
//               <th className="tableTime">
//                 <h2 className="timeFont">{nineAMData.dateTime}</h2>
//                 <span className="timeSafety"></span>
//               </th>

//               <th className="rating">
//                 <h4>Safe</h4>
//               </th>
//               <th className="weather">
//                 <h2>
//                   {" "}
//                   {nineAMData.temperature} °C{" "}
//                   <img
//                     src={updateWeatherIcon(nineAMData.description)}
//                     alt="Weather Icon"
//                   />{" "}
//                 </h2>
//               </th>
//               <th className="windSpeed">
//                 <h4>{nineAMData.windSpeed} kph</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>

//             <tr className="tableRow">
//               <th className="tableTime">
//                 <h2 className="timeFont">{twelvePMData.dateTime}</h2>
//                 <span className="timeSafety"></span>
//               </th>

//               <th className="rating">
//                 <h4>Safe</h4>
//               </th>
//               <th className="weather">
//                 <h2>
//                   {" "}
//                   {twelvePMData.temperature} °C{" "}
//                   <img
//                     src={updateWeatherIcon(twelvePMData.description)}
//                     alt="Weather Icon"
//                   />{" "}
//                 </h2>
//               </th>
//               <th className="windSpeed">
//                 <h4>{twelvePMData.windSpeed} kph</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>

//             <tr className="tableRow">
//               <th className="tableTime">
//                 <h2 className="timeFont">{threePMData.dateTime}</h2>
//                 <span className="timeSafety"></span>
//               </th>

//               <th className="rating">
//                 <h4>Safe</h4>
//               </th>
//               <th className="weather">
//                 <h2>
//                   {" "}
//                   {threePMData.temperature} °C{" "}
//                   <img
//                     src={updateWeatherIcon(threePMData.description)}
//                     alt="Weather Icon"
//                   />{" "}
//                 </h2>
//               </th>
//               <th className="windSpeed">
//                 <h4>{threePMData.windSpeed} kph</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>

//             <tr className="tableRow">
//               <th className="tableTime">
//                 <h2 className="timeFont">{sixPMData.dateTime}</h2>
//                 <span className="timeSafety"></span>
//               </th>

//               <th className="rating">
//                 <h4>Safe</h4>
//               </th>
//               <th className="weather">
//                 <h2>
//                   {" "}
//                   {sixPMData.temperature} °C{" "}
//                   <img
//                     src={updateWeatherIcon(sixPMData.description)}
//                     alt="Weather Icon"
//                   />{" "}
//                 </h2>
//               </th>
//               <th className="windSpeed">
//                 <h4>{sixPMData.windSpeed} kph</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>

//             <tr className="tableRow">
//               <th className="tableTime">
//                 <h2 className="timeFont">{ninePMData.dateTime}</h2>
//                 <span className="timeSafety"></span>
//               </th>

//               <th className="rating">
//                 <h4>Safe</h4>
//               </th>

//               <th className="weather">
//                 <h2>
//                   {" "}
//                   {ninePMData.temperature} °C{" "}
//                   <img
//                     src={updateWeatherIcon(ninePMData.description)}
//                     alt="Weather Icon"
//                   />{" "}
//                 </h2>
//               </th>
//               <th className="windSpeed">
//                 <h4>{ninePMData.windSpeed} kph</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>
//           </tbody>
//         </table>

//         {/* Tommorows Table  */}
//         <h1 className="hidden">
//           Tommorow<i className="bi bi-chevron-down"></i>
//         </h1>
//         <table className="hidden">
//           <tbody>
//             <tr className="columnHeads">
//               <th>
//                 <h2>Time</h2> <h1 className="headText">0.2m</h1>
//               </th>
//               <th>
//                 <h2>Rating</h2>
//                 <h1 className="headText">0.4m</h1>
//               </th>
//               <th>
//                 <h2>Weather</h2>
//                 <h1 className="headText">0.5m</h1>
//               </th>
//               <th>
//                 <h2>Wind speed</h2>
//                 <h1 className="headText">0.5m</h1>
//               </th>
//               <th>
//                 <h2>Wave Height</h2>
//                 <h1 className="headText">0.5m</h1>
//               </th>
//               <th>
//                 <h2>Water Tempeture</h2>
//                 <h1 className="headText">0.5m</h1>
//               </th>
//               <th>
//                 <h2>Air Pressure</h2>
//                 <h1 className="headText">0.5m</h1>
//               </th>
//             </tr>

//             <tr className="tableRow">
//               <th className="tableTime">
//                 <h2 className="timeFont">{tomorrowMidnightData.dateTime}</h2>
//                 <span className="timeSafety"></span>
//               </th>
//               <th className="rating">
//                 <h4>Safe</h4>
//               </th>
//               <th className="weather">
//                 <h2>
//                   {" "}
//                   {tomorrowMidnightData.temperature} °C{" "}
//                   <img
//                     src={updateWeatherIcon(tomorrowMidnightData.description)}
//                     alt="Weather Icon"
//                   />{" "}
//                 </h2>
//               </th>
//               <th className="windSpeed">
//                 <h4>{tomorrowMidnightData.windSpeed} kph</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>

//             <tr className="tableRow">
//               <th className="tableTime">
//                 <h2 className="timeFont">{tomorrowNineAMData.dateTime}</h2>
//                 <span className="timeSafety"></span>
//               </th>

//               <th className="rating">
//                 <h4>Safe</h4>
//               </th>
//               <th className="weather">
//                 <h2>
//                   {" "}
//                   {tomorrowNineAMData.temperature} °C{" "}
//                   <img
//                     src={updateWeatherIcon(tomorrowNineAMData.description)}
//                     alt="Weather Icon"
//                   />{" "}
//                 </h2>
//               </th>
//               <th className="windSpeed">
//                 <h4>{tomorrowNineAMData.windSpeed} kph</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>

//             <tr className="tableRow">
//               <th className="tableTime">
//                 <h2 className="timeFont">{tomorrowTwelvePMData.dateTime}</h2>
//                 <span className="timeSafety"></span>
//               </th>

//               <th className="rating">
//                 <h4>Safe</h4>
//               </th>
//               <th className="weather">
//                 <h2>
//                   {" "}
//                   {tomorrowTwelvePMData.temperature} °C{" "}
//                   <img
//                     src={updateWeatherIcon(tomorrowTwelvePMData.description)}
//                     alt="Weather Icon"
//                   />{" "}
//                 </h2>
//               </th>
//               <th className="windSpeed">
//                 <h4>{tomorrowTwelvePMData.windSpeed} kph</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>

//             <tr className="tableRow">
//               <th className="tableTime">
//                 <h2 className="timeFont">{tomorrowThreePMData.dateTime}</h2>
//                 <span className="timeSafety"></span>
//               </th>

//               <th className="rating">
//                 <h4>Safe</h4>
//               </th>
//               <th className="weather">
//                 <h2>
//                   {" "}
//                   {tomorrowThreePMData.temperature} °C{" "}
//                   <img
//                     src={updateWeatherIcon(tomorrowThreePMData.description)}
//                     alt="Weather Icon"
//                   />
//                 </h2>
//               </th>
//               <th className="windSpeed">
//                 <h4>{tomorrowThreePMData.windSpeed} kph</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>

//             <tr className="tableRow">
//               <th className="tableTime">
//                 <h2 className="timeFont">{tomorrowSixPMData.dateTime}</h2>
//                 <span className="timeSafety"></span>
//               </th>

//               <th className="rating">
//                 <h4>Safe</h4>
//               </th>
//               <th className="weather">
//                 <h2>
//                   {" "}
//                   {tomorrowSixPMData.temperature} °C{" "}
//                   <img
//                     src={updateWeatherIcon(tomorrowSixPMData.description)}
//                     alt="Weather Icon"
//                   />{" "}
//                 </h2>
//               </th>
//               <th className="windSpeed">
//                 <h4>{tomorrowSixPMData.windSpeed} kph</h4>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>

//             <tr className="tableRow">
//               <th className="tableTime">
//                 <h2 className="timeFont">{tomorrowNinePMData.dateTime}</h2>
//                 <span className="timeSafety"></span>
//               </th>

//               <th className="rating">
//                 <h4>Safe</h4>
//               </th>

//               <th className="weather">
//                 <h2>
//                   {" "}
//                   {tomorrowNinePMData.temperature} °C{" "}
//                   <img
//                     src={updateWeatherIcon(tomorrowNinePMData.description)}
//                     alt="Weather Icon"
//                   />{" "}
//                 </h2>
//               </th>
//               <th className="windSpeed">
//                 <h4>{tomorrowNinePMData.windSpeed} kph</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waveHeight">
//                 <h4>4.3m</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="waterTemp">
//                 <h4>15c</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//               <th className="airPressure">
//                 <h4>100mb</h4>

//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </th>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
// export default Forecast;
