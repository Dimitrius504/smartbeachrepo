import React, { useState, useEffect } from "react";
import rainy from "../assets/images/rainy.png";
import sunny from "../assets/images/sunny.png";
import sunnycloudy from "../assets/images/sunnyclowdy.png";
import ApiComponent from "../components/Kincardine";
import logobeach from "../assets/images/logobeach.png"

import {
  getWindCondition,
  getSeaWaterTemperature,
  getAirPressure,
  getAirTemperature,
  getSeaSurfaceWaveHeight,
  safetyDeterminator,
  tomorrowWindCondition,
  dayAfterTomorrowWindCondition,
  tomorrowTempCondition,
  dayAfterTomorrowTempCondition,
  tomorrowAirPressure,
  dayAfterTomorrowAirPressure,
} from "../WeatherUtil";

function Forecast() {
  const [generalAdvisory, setGeneralAdvisory] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [airpressure, setAirPressure] = useState(null);
  const [description, setDescription] = useState("");
  const [windSpeed, setWindSpeed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [dayAfterTomorrowForecast, setDayAfterTomorrowForecast] =
    useState(null);
  const [tomorrowForecast, setTomorrowForecast] = useState(null);
  const [dayAfterNineAMData, setDayAfterNineAMData] = useState(null);
  const [dayAferTwelvePMData, setDayAfterTwelvePMData] = useState(null);
  const [dayAftersixPMData, setDayAfterSixPMData] = useState(null);
  const [dayAfterninePMData, setDayAfterNinePMData] = useState(null);
  const [dayAftermidnightData, setDayAfterMidnightData] = useState(null);
  const [dayAfterthreeAMData, setDayAfterThreeAMData] = useState(null);
  const [dayAfterthreePMData, setDayAfterThreePMData] = useState(null);
  const [tomorrowNineAMData, setTomorrowNineAMData] = useState(null);
  const [tomorrowTwelvePMData, setTomorrowTwelvePMData] = useState(null);
  const [tomorrowThreePMData, setTomorrowThreePMData] = useState(null);
  const [tomorrowSixPMData, setTomorrowSixPMData] = useState(null);
  const [tomorrowNinePMData, setTomorrowNinePMData] = useState(null);
  const [tomorrowMidnightData, setTomorrowMidnightData] = useState(null);
  const [tomorrowThreeAMData, setTomorrowThreeAMData] = useState(null);
  const [waveHeight, setWaveHeight] = useState(null);
  const [seaWaterTemp, setSeaWaterTemp] = useState(null);
  const [seaWaveDir, setSeaWaveDir] = useState(null);
  let [currentDayOfWeek, setCurrentDayOfWeek] = useState("");
  let [nextDayOfWeek, setNextDayOfWeek] = useState("");
  let [dayAfterNextDayOfWeek, setDayAfterNextDayOfWeek] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setWaveHeight(Math.round(data.sea_surface_wave_significant_height));
        setSeaWaterTemp(Math.round(data.sea_water_temperature_1));
        setSeaWaveDir(data.sea_surface_wave_from_direction);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching wave height data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("/weather")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the data received from the API
        setForecastData(data);
        setTemperature(Math.round(data.temperature));
        setDescription(data.description);
        setWindSpeed(data.windSpeed);
        setAirPressure(data.airpressure);

        setLoading(false);

        // Update weather icon
        setWeatherIcon(updateWeatherIcon(data.description));

        setTomorrowForecast(data.tomorrowForecast);
        setDayAfterTomorrowForecast(data.dayAfterTomorrowForecast);

        // Set data for today's specific hours
        setTomorrowNineAMData(
          getHourlyData(data.tomorrowForecast.hourlyForecast, 9)
        );
        setTomorrowTwelvePMData(
          getHourlyData(data.tomorrowForecast.hourlyForecast, 12)
        );
        setTomorrowThreePMData(
          getHourlyData(data.tomorrowForecast.hourlyForecast, 15)
        );
        setTomorrowSixPMData(
          getHourlyData(data.tomorrowForecast.hourlyForecast, 18)
        );
        setTomorrowNinePMData(
          getHourlyData(data.tomorrowForecast.hourlyForecast, 21)
        );
        setTomorrowMidnightData(
          getHourlyData(data.tomorrowForecast.hourlyForecast, 0)
        );
        setTomorrowThreeAMData(
          getHourlyData(data.tomorrowForecast.hourlyForecast, 3)
        );

        // Set data for tomorrow's specific hours
        setDayAfterNineAMData(
          getHourlyData(data.dayAfterTomorrowForecast.hourlyForecast, 9)
        );
        setDayAfterTwelvePMData(
          getHourlyData(data.dayAfterTomorrowForecast.hourlyForecast, 12)
        );
        setDayAfterThreePMData(
          getHourlyData(data.dayAfterTomorrowForecast.hourlyForecast, 15)
        );
        setDayAfterSixPMData(
          getHourlyData(data.dayAfterTomorrowForecast.hourlyForecast, 18)
        );
        setDayAfterNinePMData(
          getHourlyData(data.dayAfterTomorrowForecast.hourlyForecast, 21)
        );
        setDayAfterMidnightData(
          getHourlyData(data.dayAfterTomorrowForecast.hourlyForecast, 0)
        );
        setDayAfterThreeAMData(
          getHourlyData(data.dayAfterTomorrowForecast.hourlyForecast, 3)
        );

        let currentDate = new Date();
        let daysOfWeek = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        let dayOfWeekName = daysOfWeek[currentDate.getDay()];
        let currentDayOfWeekIndex = currentDate.getDay();
        setCurrentDayOfWeek(dayOfWeekName);

        // Calculate the index of the next day of the week
        const nextDayIndex = (currentDayOfWeekIndex + 1) % 7;
        const dayAfterNextDayIndex = (currentDayOfWeekIndex + 2) % 7;

        setNextDayOfWeek(daysOfWeek[nextDayIndex]);
        setDayAfterNextDayOfWeek(daysOfWeek[dayAfterNextDayIndex]);

        console.log("Tomorrow's Forecast:", data.tomorrowForecast);
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

  useEffect(() => {
    const setColorByCondition = (data, selector) => {
      if (data !== null) {
        const condition = getWindCondition(data.windSpeed);
        const color =
          condition === "Safe"
            ? "#47d49a"
            : condition === "Unsafe"
            ? "#f26322"
            : "#fbd858";
        document.querySelectorAll(selector).forEach((span) => {
          span.style.backgroundColor = color;
        });
      }
    };

    setColorByCondition(tomorrowNineAMData, ".nineAmWindSpan");
    setColorByCondition(tomorrowTwelvePMData, ".twelveTmrWind");
    setColorByCondition(tomorrowThreePMData, ".tmrThreeWind");
    setColorByCondition(tomorrowSixPMData, ".tmrSixWind");
    setColorByCondition(tomorrowNinePMData, ".tmrNineWind");
    setColorByCondition(tomorrowMidnightData, ".tmrMidnightWind");

    setColorByCondition(tomorrowNineAMData, ".nineAmAirpres");
    setColorByCondition(tomorrowTwelvePMData, ".twelvePmAirpress");
    setColorByCondition(tomorrowThreePMData, ".threePmAirPress");
    setColorByCondition(tomorrowSixPMData, ".sixPmAirPress");
    setColorByCondition(tomorrowNinePMData, ".ninePmAirPress");
    setColorByCondition(tomorrowMidnightData, ".midnightAirPress");

    setColorByCondition(dayAfterNineAMData, ".dayAfterNineAmWind");
    setColorByCondition(dayAferTwelvePMData, ".dayAfterTwelvePmWind");
    setColorByCondition(dayAfterthreePMData, ".dayAfterThreePmWind");
    setColorByCondition(dayAftersixPMData, ".dayAfterSixPmWind");
    setColorByCondition(dayAfterninePMData, ".dayAfterNinePmWind");
    setColorByCondition(dayAftermidnightData, ".dayAfterMidnightWind");

    setColorByCondition(dayAfterNineAMData, ".dayAferNineAmAirpress");
    setColorByCondition(dayAferTwelvePMData, ".dayAferTwelvePmAirpress");
    setColorByCondition(dayAfterthreePMData, ".dayAferThreePmAirpress");
    setColorByCondition(dayAftersixPMData, ".dayAferSixPmAirpress");
    setColorByCondition(dayAfterninePMData, ".dayAferNinePmAirpress");
    setColorByCondition(dayAftermidnightData, ".dayAferMidnightAirpress");

    if (waveHeight !== null) {
      const condition = getSeaSurfaceWaveHeight(waveHeight);
      const color =
        condition === "Safe"
          ? "#fbd858"
          : condition === "Unsafe"
          ? "#f26322"
          : "#47d49a";
      document.querySelectorAll(".waveHeightTmr").forEach((span) => {
        span.style.backgroundColor = color;
      });
      document.querySelectorAll(".waveHeightTmr").forEach((span) => {
        span.innerHTML = "";
      });
    } else {
      document.querySelectorAll(".waveHeightTmr").forEach((span) => {
        span.style.backgroundColor = "grey";
      });
    }

    if (seaWaterTemp !== null) {
      const condition = getSeaWaterTemperature(seaWaterTemp);
      const color = condition === "Safe" ? "#fbd858" : "#47d49a";
      document.querySelectorAll(".seaWaterTemp").forEach((span) => {
        span.style.backgroundColor = color;
      });
    } else {
      document.querySelectorAll(".seaWaterTemp").forEach((span) => {
        span.style.backgroundColor = "grey";
      });
    }
  }, [windSpeed, airpressure, waveHeight, seaWaterTemp]);

  const updateWeatherIcon = (description) => {
    let iconPath;
    if (description) {
      if (description.includes("clear") || description.includes("few clouds")) {
        iconPath = sunny;
      } else if (
        description.includes("scattered clouds") ||
        description.includes("broken clouds") ||
        description.includes("overcast clouds")
      ) {
        iconPath = sunnycloudy;
      } else if (
        description.includes("shower rain") ||
        description.includes("rain") ||
        description.includes("thunderstorm") ||
        description.includes("mist")
      ) {
        iconPath = rainy;
      } else {
        iconPath = sunny; // Default icon
      }
    } else {
      iconPath = sunny;
    }
    return iconPath;
  };

  // Function to filter hourly data for a specific hour
  const getHourlyData = (hourlyForecast, hour) => {
    const found =
      hourlyForecast.find((item) => {
        const itemHour = new Date(item.dateTime).getHours();
        return itemHour === hour;
      }) || null;

    console.log("HOURLY DATA", found);
    console.log(waveHeight);

    return found; // Return null if data for the specified hour is not found
  };

  if (loading) {
    return (
      <div id="loading">
        <div id="loading-content">
          <img src={logobeach} alt="Logo" />
        </div>
      </div>
    );
  }
  return (
    <main>
      <div className="mobileHead">
        <h1 className="headTime">{currentDayOfWeek}</h1>
        <br />
        <h2 className="headTemp">
          {temperature ? `${temperature} °C` : ""}
          {weatherIcon && (
            <img className="ratingIcon" src={weatherIcon} alt="weather icon" />
          )}
        </h2>
        <h1 className="rating">{generalAdvisory}</h1>
      </div>

      <div className="dailyForecast">
        <h2>Weekly Forecast</h2>
      </div>
      <div className="cards">
        <div className="card1">
          <h1 className="cardHead">{nextDayOfWeek} Forecast</h1>
          <h2 className="cardTemp">
            {tomorrowForecast ? `${tomorrowForecast.temperature} °C` : ""}
            {tomorrowForecast && tomorrowForecast.weatherIcon && (
              <img
                className="ratingIcon"
                src={tomorrowForecast.weatherIcon}
                alt="weather icon"
              />
            )}
          </h2>
          <h1 className="rating">
            {safetyDeterminator(
              getSeaSurfaceWaveHeight,
              tomorrowTempCondition(tomorrowForecast.temperature),
              tomorrowWindCondition(tomorrowForecast.windSpeed),
              tomorrowAirPressure(tomorrowForecast.airpressure),
              dayAfterTomorrowAirPressure(dayAfterTomorrowForecast.airpressure),
              getSeaWaterTemperature(seaWaterTemp)
            )}
          </h1>
        </div>
        <div className="card1">
          <h1 className="cardHead">{dayAfterNextDayOfWeek} Forecast</h1>
          <h2 className="cardTemp">
            {dayAfterTomorrowForecast
              ? `${dayAfterTomorrowForecast.temperature} °C`
              : ""}
            {dayAfterTomorrowForecast &&
              dayAfterTomorrowForecast.weatherIcon && (
                <img
                  className="ratingIcon"
                  src={dayAfterTomorrowForecast.weatherIcon}
                  alt="weather icon"
                />
              )}
          </h2>
          <h1 className="rating">
            {safetyDeterminator(
              getSeaSurfaceWaveHeight,
              dayAfterTomorrowTempCondition(
                dayAfterTomorrowForecast.temperature
              ),
              dayAfterTomorrowWindCondition(dayAfterTomorrowForecast.windSpeed),
              getAirPressure,
              getSeaWaterTemperature
            )}
          </h1>
        </div>
      </div>
      <h1 className="mobile">{nextDayOfWeek}</h1>
      <div className="mtContainer">
        <table className="mobileTable">
          <tbody>
            <tr>
              <th className="timeFont">
                <h4>Wave Height</h4>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
            </tr>
            <tr>
              <th className="timeFont">
                <h4>Water Tempeture</h4>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
            </tr>

            <tr className="tableRow">
              <th className="timeFont">
                <h4>Air Pressure</h4>
              </th>
              <th className="airPressure">
                <h4>{tomorrowNineAMData.airpressure} hPa</h4>
                <span className="nineAmAirpres"></span>
                <span className="nineAmAirpres"></span>
                <span className="nineAmAirpres"></span>
              </th>
              <th className="airPressure">
                <h4>{tomorrowThreePMData.airpressure} hPa</h4>
                <span className="threePmAirPress"></span>
                <span className="threePmAirPress"></span>
                <span className="threePmAirPress"></span>
              </th>
              <th className="airPressure">
                <h4>{tomorrowNinePMData.airpressure} hPa</h4>
                <span className="ninePmAirPress"></span>
                <span className="ninePmAirPress"></span>
                <span className="ninePmAirPress"></span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className="mobile">{dayAfterNextDayOfWeek}</h1>
      <secton className="mtContainer">
        <table className="mobileTable">
          <tbody>
            <tr>
              <th className="timeFont">
                <h4>Wave Height</h4>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
            </tr>
            <tr>
              <th className="timeFont">
                <h4>Water Temperature</h4>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
            </tr>

            <tr className="tableRow">
              <th className="timeFont">
                <h4>Air Pressure</h4>
              </th>
              <th className="airPressure">
                <h4>{dayAfterNineAMData.airpressure} hPa</h4>
                <span className="dayAferNineAmAirpress"></span>
                <span className="dayAferNineAmAirpress"></span>
                <span className="dayAferNineAmAirpress"></span>
              </th>
              <th className="airPressure">
                <h4>{dayAfterthreePMData.airpressure} hPa</h4>
                <span className="dayAferThreePmAirpress"></span>
                <span className="dayAferThreePmAirpress"></span>
                <span className="dayAferThreePmAirpress"></span>
              </th>
              <th className="airPressure">
                <h4>{dayAfterninePMData.airpressure} hPa</h4>
                <span className="dayAferNinePmAirpress"></span>
                <span className="dayAferNinePmAirpress"></span>
                <span className="dayAferNinePmAirpress"></span>
              </th>
            </tr>
          </tbody>
        </table>
      </secton>
      <div className="forecastPage">
        {/* Todays Table */}
        <h1 className="hidden">
          {nextDayOfWeek}
          <i className="bi bi-chevron-down"></i>
        </h1>
        <table className="hidden">
          <tbody>
            <tr className="columnHeads">
              <th>
                <h2></h2> <h1 className="headText">0.2m</h1>
              </th>
              <th>
                <h2>Rating</h2>
                <h1 className="headText">0.4m</h1>
              </th>
              <th>
                <h2>Weather</h2>
                <h1 className="headText">0.5m</h1>
              </th>
              <th>
                <h2>Wind speed</h2>
                <h1 className="headText">0.5m</h1>
              </th>
              <th>
                <h2>Wave Height</h2>
                <h1 className="headText">{waveHeight} m</h1>
              </th>
              <th>
                <h2>Water Temperature</h2>
                <h1 className="headText">0.5m</h1>
              </th>
              <th>
                <h2>Air Pressure</h2>
                <h1 className="headText">0.5m</h1>
              </th>
            </tr>

            <tr className="tableRow">
              <th className="tableTime">
                <h2 className="timeFont">{tomorrowNineAMData.dateTime}</h2>
                <span className="timeSafety"></span>
              </th>
              <th className="rating">
                <h4>
                  {safetyDeterminator(
                    getSeaSurfaceWaveHeight,
                    tomorrowTempCondition(tomorrowNineAMData.temperature),
                    tomorrowWindCondition(tomorrowNineAMData.windSpeed),
                    tomorrowAirPressure(tomorrowNineAMData.airpressure),
                    dayAfterTomorrowAirPressure(tomorrowNineAMData.airpressure),
                    getSeaWaterTemperature
                  )}
                </h4>
              </th>
              <th className="weather">
                <h2>
                  {" "}
                  {tomorrowNineAMData.temperature} °C{" "}
                  <img
                    src={updateWeatherIcon(tomorrowNineAMData.description)}
                    alt="Weather Icon"
                  />{" "}
                </h2>
              </th>
              <th className="time">
                <h4>{tomorrowNineAMData.windSpeed} kph</h4>

                <span className="nineAmWindSpan"></span>
                <span className="nineAmWindSpan"></span>
                <span className="nineAmWindSpan"></span>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>

                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>

                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
              <th className="airPressure">
                <h4>{tomorrowNineAMData.airpressure} hPa</h4>

                <span className="nineAmAirpres"></span>
                <span className="nineAmAirpres"></span>
                <span className="nineAmAirpres"></span>
              </th>
            </tr>

            <tr className="tableRow">
              <th className="tableTime">
                <h2 className="timeFont">{tomorrowTwelvePMData.dateTime}</h2>
                <span className="timeSafety"></span>
              </th>

              <th className="rating">
                <h4>
                  {safetyDeterminator(
                    getSeaSurfaceWaveHeight,
                    tomorrowTempCondition(tomorrowTwelvePMData.temperature),
                    tomorrowWindCondition(tomorrowTwelvePMData.windSpeed),
                    tomorrowAirPressure(tomorrowTwelvePMData.airpressure),
                    dayAfterTomorrowAirPressure(
                      tomorrowTwelvePMData.airpressure
                    ),
                    getSeaWaterTemperature
                  )}
                </h4>
              </th>
              <th className="weather">
                <h2>
                  {" "}
                  {tomorrowTwelvePMData.temperature} °C{" "}
                  <img
                    src={updateWeatherIcon(tomorrowTwelvePMData.description)}
                    alt="Weather Icon"
                  />{" "}
                </h2>
              </th>
              <th className="windSpeed">
                <h4>{tomorrowTwelvePMData.windSpeed} kph</h4>

                <span className="twelveTmrWind"></span>
                <span className="twelveTmrWind"></span>
                <span className="twelveTmrWind"></span>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>

                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>

                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
              <th className="airPressure">
                <h4>{tomorrowTwelvePMData.airpressure} hPa</h4>

                <span className="twelvePmAirpress"></span>
                <span className="twelvePmAirpress"></span>
                <span className="twelvePmAirpress"></span>
              </th>
            </tr>

            <tr className="tableRow">
              <th className="tableTime">
                <h2 className="timeFont">{tomorrowThreePMData.dateTime}</h2>
                <span className="timeSafety"></span>
              </th>

              <th className="rating">
                <h4>
                  {safetyDeterminator(
                    getSeaSurfaceWaveHeight,
                    tomorrowTempCondition(tomorrowThreePMData.temperature),
                    tomorrowWindCondition(tomorrowThreePMData.windSpeed),
                    tomorrowAirPressure(tomorrowThreePMData.airpressure),
                    dayAfterTomorrowAirPressure(
                      tomorrowThreePMData.airpressure
                    ),
                    getSeaWaterTemperature
                  )}
                </h4>
              </th>
              <th className="weather">
                <h2>
                  {" "}
                  {tomorrowThreePMData.temperature} °C{" "}
                  <img
                    src={updateWeatherIcon(tomorrowThreePMData.description)}
                    alt="Weather Icon"
                  />{" "}
                </h2>
              </th>
              <th className="windSpeed">
                <h4>{tomorrowThreePMData.windSpeed} kph</h4>

                <span className="tmrThreeWind"></span>
                <span className="tmrThreeWind"></span>
                <span className="tmrThreeWind"></span>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>

                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>

                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
              <th className="airPressure">
                <h4>{tomorrowThreePMData.airpressure} hPa</h4>

                <span className="threePmAirPress"></span>
                <span className="threePmAirPress"></span>
                <span className="threePmAirPress"></span>
              </th>
            </tr>

            <tr className="tableRow">
              <th className="tableTime">
                <h2 className="timeFont">{tomorrowSixPMData.dateTime}</h2>
                <span className="timeSafety"></span>
              </th>

              <th className="rating">
                <h4>
                  {safetyDeterminator(
                    getSeaSurfaceWaveHeight,
                    tomorrowTempCondition(tomorrowSixPMData.temperature),
                    tomorrowWindCondition(tomorrowSixPMData.windSpeed),
                    tomorrowAirPressure(tomorrowSixPMData.airpressure),
                    dayAfterTomorrowAirPressure(tomorrowSixPMData.airpressure),
                    getSeaWaterTemperature
                  )}
                </h4>
              </th>
              <th className="weather">
                <h2>
                  {" "}
                  {tomorrowSixPMData.temperature} °C{" "}
                  <img
                    src={updateWeatherIcon(tomorrowSixPMData.description)}
                    alt="Weather Icon"
                  />{" "}
                </h2>
              </th>
              <th className="windSpeed">
                <h4>{tomorrowSixPMData.windSpeed} kph</h4>

                <span className="tmrSixWind"></span>
                <span className="tmrSixWind"></span>
                <span className="tmrSixWind"></span>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>

                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>

                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
              <th className="airPressure">
                <h4>{tomorrowSixPMData.airpressure} hPa</h4>

                <span className="sixPmAirPress"></span>
                <span className="sixPmAirPress"></span>
                <span className="sixPmAirPress"></span>
              </th>
            </tr>

            <tr className="tableRow">
              <th className="tableTime">
                <h2 className="timeFont">{tomorrowNinePMData.dateTime}</h2>
                <span className="timeSafety"></span>
              </th>

              <th className="rating">
                <h4>
                  {safetyDeterminator(
                    getSeaSurfaceWaveHeight,
                    tomorrowTempCondition(tomorrowNinePMData.temperature),
                    tomorrowWindCondition(tomorrowNinePMData.windSpeed),
                    tomorrowAirPressure(tomorrowNinePMData.airpressure),
                    dayAfterTomorrowAirPressure(tomorrowNinePMData.airpressure),
                    getSeaWaterTemperature
                  )}
                </h4>
              </th>
              <th className="weather">
                <h2>
                  {" "}
                  {tomorrowNinePMData.temperature} °C{" "}
                  <img
                    src={updateWeatherIcon(tomorrowNinePMData.description)}
                    alt="Weather Icon"
                  />{" "}
                </h2>
              </th>
              <th className="windSpeed">
                <h4>{tomorrowNinePMData.windSpeed} kph</h4>

                <span className="tmrNineWind"></span>
                <span className="tmrNineWind"></span>
                <span className="tmrNineWind"></span>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>

                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>

                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
              <th className="airPressure">
                <h4>{tomorrowNinePMData.airpressure} hPa</h4>

                <span className="ninePmAirPress"></span>
                <span className="ninePmAirPress"></span>
                <span className="ninePmAirPress"></span>
              </th>
            </tr>

            <tr className="tableRow">
              <th className="tableTime">
                <h2 className="timeFont">{tomorrowMidnightData.dateTime}</h2>
                <span className="timeSafety"></span>
              </th>

              <th className="rating">
                <h4>
                  {safetyDeterminator(
                    getSeaSurfaceWaveHeight,
                    tomorrowTempCondition(tomorrowMidnightData.temperature),
                    tomorrowWindCondition(tomorrowMidnightData.windSpeed),
                    tomorrowAirPressure(tomorrowMidnightData.airpressure),
                    dayAfterTomorrowAirPressure(
                      tomorrowMidnightData.airpressure
                    ),
                    getSeaWaterTemperature
                  )}
                </h4>
              </th>

              <th className="weather">
                <h2>
                  {" "}
                  {tomorrowMidnightData.temperature} °C{" "}
                  <img
                    src={updateWeatherIcon(tomorrowMidnightData.description)}
                    alt="Weather Icon"
                  />{" "}
                </h2>
              </th>
              <th className="windSpeed">
                <h4>{tomorrowMidnightData.windSpeed} kph</h4>

                <span className="tmrMidnightWind"></span>
                <span className="tmrMidnightWind"></span>
                <span className="tmrMidnightWind"></span>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>

                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>

                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
              <th className="airPressure">
                <h4>{tomorrowMidnightData.airpressure} hPa</h4>

                <span className="midnightAirPress"></span>
                <span className="midnightAirPress"></span>
                <span className="midnightAirPress"></span>
              </th>
            </tr>
          </tbody>
        </table>

        {/* Tommorows Table  */}
        <h1 className="hidden">
          {dayAfterNextDayOfWeek}
          <i className="bi bi-chevron-down"></i>
        </h1>
        <table className="hidden">
          <tbody>
            <tr className="columnHeads">
              <th>
                <h2>Time</h2> <h1 className="headText">0.2m</h1>
              </th>
              <th>
                <h2>Rating</h2>
                <h1 className="headText">0.4m</h1>
              </th>
              <th>
                <h2>Weather</h2>
                <h1 className="headText">0.5m</h1>
              </th>
              <th>
                <h2>Wind speed</h2>
                <h1 className="headText">0.5m</h1>
              </th>
              <th>
                <h2>Wave Height</h2>
                <h1 className="headText">{waveHeight} m</h1>
              </th>
              <th>
                <h2>Water Temperature</h2>
                <h1 className="headText">0.5m</h1>
              </th>
              <th>
                <h2>Air Pressure</h2>
                <h1 className="headText">0.5m</h1>
              </th>
            </tr>

            <tr className="tableRow">
              <th className="tableTime">
                <h2 className="timeFont">{dayAfterNineAMData.dateTime}</h2>
                <span className="timeSafety"></span>
              </th>
              <th className="rating">
                <h4>
                  {safetyDeterminator(
                    getSeaSurfaceWaveHeight,
                    tomorrowTempCondition(dayAfterNineAMData.temperature),
                    tomorrowWindCondition(dayAfterNineAMData.windSpeed),
                    tomorrowAirPressure(dayAfterNineAMData.airpressure),
                    dayAfterTomorrowAirPressure(dayAfterNineAMData.airpressure),
                    getSeaWaterTemperature
                  )}
                </h4>
              </th>
              <th className="weather">
                <h2>
                  {" "}
                  {dayAfterNineAMData.temperature} °C{" "}
                  <img
                    src={updateWeatherIcon(dayAfterNineAMData.description)}
                    alt="Weather Icon"
                  />{" "}
                </h2>
              </th>
              <th className="windSpeed">
                <h4>{dayAfterNineAMData.windSpeed} kph</h4>

                <span className="dayAfterNineAmWind"></span>
                <span className="dayAfterNineAmWind"></span>
                <span className="dayAfterNineAmWind"></span>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>

                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>

                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
              <th className="airPressure">
                <h4>{dayAfterNineAMData.airpressure} hPa</h4>

                <span className="dayAferNineAmAirpress"></span>
                <span className="dayAferNineAmAirpress"></span>
                <span className="dayAferNineAmAirpress"></span>
              </th>
            </tr>

            <tr className="tableRow">
              <th className="tableTime">
                <h2 className="timeFont">{dayAferTwelvePMData.dateTime}</h2>
                <span className="timeSafety"></span>
              </th>

              <th className="rating">
                <h4>
                  {safetyDeterminator(
                    getSeaSurfaceWaveHeight,
                    tomorrowTempCondition(dayAferTwelvePMData.temperature),
                    tomorrowWindCondition(dayAferTwelvePMData.windSpeed),
                    tomorrowAirPressure(dayAferTwelvePMData.airpressure),
                    dayAfterTomorrowAirPressure(
                      dayAferTwelvePMData.airpressure
                    ),
                    getSeaWaterTemperature
                  )}
                </h4>
              </th>
              <th className="weather">
                <h2>
                  {" "}
                  {dayAferTwelvePMData.temperature} °C{" "}
                  <img
                    src={updateWeatherIcon(dayAferTwelvePMData.description)}
                    alt="Weather Icon"
                  />{" "}
                </h2>
              </th>
              <th className="windSpeed">
                <h4>{dayAferTwelvePMData.windSpeed} kph</h4>

                <span className="dayAfterTwelvePmWind"></span>
                <span className="dayAfterTwelvePmWind"></span>
                <span className="dayAfterTwelvePmWind"></span>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>

                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>

                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
              <th className="airPressure">
                <h4>{dayAferTwelvePMData.airpressure} hPa</h4>

                <span className="dayAferTwelvePmAirpress"></span>
                <span className="dayAferTwelvePmAirpress"></span>
                <span className="dayAferTwelvePmAirpress"></span>
              </th>
            </tr>

            <tr className="tableRow">
              <th className="tableTime">
                <h2 className="timeFont">{dayAfterthreePMData.dateTime}</h2>
                <span className="timeSafety"></span>
              </th>

              <th className="rating">
                <h4>
                  {safetyDeterminator(
                    getSeaSurfaceWaveHeight,
                    tomorrowTempCondition(dayAfterthreePMData.temperature),
                    tomorrowWindCondition(dayAfterthreePMData.windSpeed),
                    tomorrowAirPressure(dayAfterthreePMData.airpressure),
                    dayAfterTomorrowAirPressure(
                      dayAfterthreePMData.airpressure
                    ),
                    getSeaWaterTemperature
                  )}
                </h4>
              </th>
              <th className="weather">
                <h2>
                  {" "}
                  {dayAfterthreePMData.temperature} °C{" "}
                  <img
                    src={updateWeatherIcon(dayAfterthreePMData.description)}
                    alt="Weather Icon"
                  />{" "}
                </h2>
              </th>
              <th className="windSpeed">
                <h4>{dayAfterthreePMData.windSpeed} kph</h4>

                <span className="dayAfterThreePmWind"></span>
                <span className="dayAfterThreePmWind"></span>
                <span className="dayAfterThreePmWind"></span>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>

                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>

                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
              <th className="airPressure">
                <h4>{dayAfterthreePMData.airpressure} hPa</h4>

                <span className="dayAferThreePmAirpress"></span>
                <span className="dayAferThreePmAirpress"></span>
                <span className="dayAferThreePmAirpress"></span>
              </th>
            </tr>

            <tr className="tableRow">
              <th className="tableTime">
                <h2 className="timeFont">{dayAftersixPMData.dateTime}</h2>
                <span className="timeSafety"></span>
              </th>

              <th className="rating">
                <h4>
                  {safetyDeterminator(
                    getSeaSurfaceWaveHeight,
                    tomorrowTempCondition(dayAftersixPMData.temperature),
                    tomorrowWindCondition(dayAftersixPMData.windSpeed),
                    tomorrowAirPressure(dayAftersixPMData.airpressure),
                    dayAfterTomorrowAirPressure(dayAftersixPMData.airpressure),
                    getSeaWaterTemperature
                  )}
                </h4>
              </th>
              <th className="weather">
                <h2>
                  {" "}
                  {dayAftersixPMData.temperature} °C{" "}
                  <img
                    src={updateWeatherIcon(dayAftersixPMData.description)}
                    alt="Weather Icon"
                  />
                </h2>
              </th>
              <th className="windSpeed">
                <h4>{dayAftersixPMData.windSpeed} kph</h4>

                <span className="dayAfterSixPmWind"></span>
                <span className="dayAfterSixPmWind"></span>
                <span className="dayAfterSixPmWind"></span>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>

                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>

                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
              <th className="airPressure">
                <h4>{dayAftersixPMData.airpressure} hPa</h4>

                <span className="dayAferSixPmAirpress"></span>
                <span className="dayAferSixPmAirpress"></span>
                <span className="dayAferSixPmAirpress"></span>
              </th>
            </tr>

            <tr className="tableRow">
              <th className="tableTime">
                <h2 className="timeFont">{dayAfterninePMData.dateTime}</h2>
                <span className="timeSafety"></span>
              </th>

              <th className="rating">
                <h4>
                  {safetyDeterminator(
                    getSeaSurfaceWaveHeight,
                    tomorrowTempCondition(dayAfterninePMData.temperature),
                    tomorrowWindCondition(dayAfterninePMData.windSpeed),
                    tomorrowAirPressure(dayAfterninePMData.airpressure),
                    dayAfterTomorrowAirPressure(dayAfterninePMData.airpressure),
                    getSeaWaterTemperature
                  )}
                </h4>
              </th>
              <th className="weather">
                <h2>
                  {" "}
                  {dayAfterninePMData.temperature} °C{" "}
                  <img
                    src={updateWeatherIcon(dayAfterninePMData.description)}
                    alt="Weather Icon"
                  />{" "}
                </h2>
              </th>
              <th className="windSpeed">
                <h4>{dayAfterninePMData.windSpeed} kph</h4>
                <span className="dayAfterNinePmWind"></span>
                <span className="dayAfterNinePmWind"></span>
                <span className="dayAfterNinePmWind"></span>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>

                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>

                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
              <th className="airPressure">
                <h4>{dayAfterninePMData.airpressure} hPa</h4>

                <span className="dayAferNinePmAirpress"></span>
                <span className="dayAferNinePmAirpress"></span>
                <span className="dayAferNinePmAirpress"></span>
              </th>
            </tr>

            <tr className="tableRow">
              <th className="tableTime">
                <h2 className="timeFont">{dayAftermidnightData.dateTime}</h2>
                <span className="timeSafety"></span>
              </th>

              <th className="rating">
                <h4>
                  {safetyDeterminator(
                    getSeaSurfaceWaveHeight,
                    tomorrowTempCondition(dayAftermidnightData.temperature),
                    tomorrowWindCondition(dayAftermidnightData.windSpeed),
                    tomorrowAirPressure(dayAftermidnightData.airpressure),
                    dayAfterTomorrowAirPressure(
                      dayAftermidnightData.airpressure
                    ),
                    getSeaWaterTemperature
                  )}
                </h4>
              </th>

              <th className="weather">
                <h2>
                  {" "}
                  {dayAftermidnightData.temperature} °C{" "}
                  <img
                    src={updateWeatherIcon(dayAftermidnightData.description)}
                    alt="Weather Icon"
                  />{" "}
                </h2>
              </th>
              <th className="windSpeed">
                <h4>{dayAftermidnightData.windSpeed} kph</h4>

                <span className="dayAfterMidnightWind"></span>
                <span className="dayAfterMidnightWind"></span>
                <span className="dayAfterMidnightWind"></span>
              </th>
              <th className="waveHeight">
                <h4>{waveHeight} m</h4>

                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
                <span className="waveHeightTmr"></span>
              </th>
              <th className="waterTemp">
                <h4>{getSeaWaterTemperature(seaWaterTemp)}</h4>

                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
                <span className="seaWaterTemp"></span>
              </th>
              <th className="airPressure">
                <h4>{dayAftermidnightData.airpressure} hPa</h4>

                <span className="dayAferMidnightAirpress"></span>
                <span className="dayAferMidnightAirpress"></span>
                <span className="dayAferMidnightAirpress"></span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
export default Forecast;
