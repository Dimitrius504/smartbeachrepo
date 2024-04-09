import React, { Component } from "react";
import sunny from "../assets/images/sunny.png";
import sunnyclowdy from "../assets/images/sunnyclowdy.png";
import rainy from "../assets/images/rainy.png";

class ForecastComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastData: {
        temperature: null,
        description: "",
        windSpeed: null,
        airpressure: null,
        tomorrowForecast: {
          temperature: null,
          description: "",
          windSpeed: null,
          airpressure: null,
          hourlyForecast: []
        },
        dayAfterTomorrowForecast: {
          temperature: null,
          description: "",
          windSpeed: null,
          airpressure: null,
          hourlyForecast: []
        },
      },
      loading: true,
    };
  }

  componentDidMount() {
    fetch("/weather")
      .then((res) => res.json())
      .then((data) => {
        const tomorrowForecastData = data.tomorrowForecast;
        const dayAfterTomorrowForecastData = data.dayAfterTomorrowForecast;
        if (tomorrowForecastData && dayAfterTomorrowForecastData) {
          this.setState({
            forecastData: {
              temperature: Math.round(data.temperature),
              description: data.description,
              windSpeed: data.windSpeed,
              airpressure: data.airpressure,
              tomorrowForecast: {
                temperature: Math.round(tomorrowForecastData.temperature),
                description: tomorrowForecastData.description,
                windSpeed: tomorrowForecastData.windSpeed,
                airpressure: tomorrowForecastData.airpressure,
                hourlyForecast: tomorrowForecastData.hourlyForecast
              },
              dayAfterTomorrowForecast: {
                temperature: Math.round(dayAfterTomorrowForecastData.temperature),
                description: dayAfterTomorrowForecastData.description,
                windSpeed: dayAfterTomorrowForecastData.windSpeed,
                airpressure: tomorrowForecastData.airpressure,
                hourlyForecast: dayAfterTomorrowForecastData.hourlyForecast
              },
            },
            loading: false,
          });
        } else {
          console.error("Error: Forecast data for tomorrow or the day after tomorrow is missing.");
          this.setState({ loading: false });
        }
      })
      .catch((error) => {
        console.error("Error fetching forecast data:", error);
        this.setState({ loading: false });
        
      });
  }

  iconDeterminator(description) {
    if (description.includes("clear") || description.includes("few clouds")) {
      return sunny;
    } else if (
      description.includes("scattered clouds") ||
      description.includes("broken clouds")
    ) {
      return sunnyclowdy;
    } else if (
      description.includes("shower rain") ||
      description.includes("rain") ||
      description.includes("thunderstorm") ||
      description.includes("mist")
    ) {
      return rainy;
    }
    return sunny; // Default icon
  }

  render() {
    const { forecastData, loading } = this.state;
    const { temperature, description, windSpeed, airpressure, tomorrowForecast, dayAfterTomorrowForecast } = forecastData;

    if (loading) {
      return <div>Loading...</div>;
    }

    const tomorrowIcon = this.iconDeterminator(tomorrowForecast.description);
    const dayAfterTomorrowIcon = this.iconDeterminator(dayAfterTomorrowForecast.description);

    const getSpecificHourData = (hourlyForecast, hour) => {
      return (
        hourlyForecast.find((item) => {
          const itemHour = new Date(item.dateTime).getHours();
          return itemHour === hour;
        }) || null
      ); // Return null if data for the specified hour is not found
    };

    const threeOClockData = getSpecificHourData(tomorrowForecast.hourlyForecast, 3);

    // Check if data is found for 3 o'clock
    if (threeOClockData) {
      console.log("Data for 3 o'clock:", threeOClockData);
    } else {
      console.log("No data found for 3 o'clock.");
    }    

    return (
      <div>
        <h1>Forecast Component</h1>
        <div>
          <h2>Tomorrow's Forecast</h2>
          <img src={tomorrowIcon} alt="Weather Icon" />
          <p>Temperature: {tomorrowForecast.temperature} °C</p>
          <p>Description: {tomorrowForecast.description}</p>
          <p>Wind Speed: {tomorrowForecast.windSpeed} m/s</p>
          <p>Air Pressure: {tomorrowForecast.airpressure} hPa</p>
          <p>Tomorrow's Hourly Forecast:</p>
          <ul>
            {tomorrowForecast.hourlyForecast.map(hour => (
              <li key={hour.dateTime}>
                {hour.dateTime}: {hour.temperature} °C, {hour.description}, Wind Speed: {hour.windSpeed} m/s, {hour.airpressure}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Day After Tomorrow's Forecast</h2>
          <img src={dayAfterTomorrowIcon} alt="Weather Icon" />
          <p>Temperature: {dayAfterTomorrowForecast.temperature} °C</p>
          <p>Description: {dayAfterTomorrowForecast.description}</p>
          <p>Wind Speed: {dayAfterTomorrowForecast.windSpeed} m/s</p>
          <p>Air Pressure: {dayAfterTomorrowForecast.airpressure}</p>
          <p>Day After Tomorrow's Hourly Forecast:</p>
          <ul>
            {dayAfterTomorrowForecast.hourlyForecast.map(hour => (
              <li key={hour.dateTime}>
                {hour.dateTime}: {hour.temperature} °C, {hour.description}, Wind Speed: {hour.windSpeed}, {hour.airpressure} m/s
              </li>
            ))}
          </ul>
          <h1>{threeOClockData.dateTime}</h1>
        </div>
      </div>
    );
  }
}

export default ForecastComponent;
