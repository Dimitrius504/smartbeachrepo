import React, { Component } from "react";
import sunny from "../assets/images/sunny.png";
import sunnyclowdy from "../assets/images/sunnyclowdy.png";
import rainy from "../assets/images/rainy.png";

class WeatherComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {
        temperature: null,
        description: "",
        windSpeed: null,
      },
      loading: true,
    };
  }

  componentDidMount() {
    fetch("/weather")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          weatherData: {
            temperature: Math.round(data.temperature),
            description: data.description,
            windSpeed: data.windSpeed,
          },
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        this.setState({ loading: false });
      });
  }

  // iconDeterminator() {
  //   const { description } = this.state.weatherData; // Access description from weatherData

  //   if (description) {
  //     if (description.includes("clear") || description.includes("few clouds")) {
  //       return sunny;
  //     } else if (
  //       description.includes("scattered clouds") ||
  //       description.includes("broken clouds")
  //     ) {
  //       return sunnyclowdy;
  //     } else if (
  //       description.includes("shower rain") ||
  //       description.includes("rain") ||
  //       description.includes("thunderstorm") ||
  //       description.includes("mist")
  //     ) {
  //       return rainy;
  //     }
  //   }

  //   // Return a default icon if description is undefined or doesn't match any conditions
  //   return sunny;
  // }

  render() {
    const { weatherData, loading } = this.state;
    const { temperature, description, windSpeed } = weatherData;

    if (loading) {
      return <div>Loading...</div>;
    }

    // const weatherIcon = this.iconDeterminator();

    return (
      <div>
        <h1>Weather Component</h1>
        <p>Temperature: {temperature} °C</p>
        <p>Description: {description}</p>
        <p>Wind Speed: {windSpeed} m/s</p>
      </div>
    );
  }
}


export default WeatherComponent;
