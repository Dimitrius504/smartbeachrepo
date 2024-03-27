import React, { Component } from "react";

class WeatherComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: null,
      description: "",
      windSpeed: null,
      loading: true // Add a loading state to handle loading state
    };
  }

  componentDidMount() {
    fetch("/weather")
      .then((res) => res.json())
      .then((data) => {
        // Update state with data received from API
        this.setState({
          temperature: Math.round(data.temperature),
          description: data.description,
          windSpeed: data.windSpeed,
          loading: false // Set loading to false after data is fetched
        });
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        this.setState({ loading: false }); // Update loading state in case of error
      });
  }

  render() {
    return (
      <div>
        <h1>Weather Component</h1>
        <p>Temperature: {this.state.temperature} °C</p>
        <p>Description: {this.state.description}</p>
        <p>Wind Speed: {this.state.windSpeed} m/s</p>
      </div>
    );
  }
}

export default WeatherComponent;
