import React, { Component } from "react";
import axios from "axios";

class ApiComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        windspeed: null,
        air_pressure_at_mean_sea_level: null,
        air_temperature: null,
        sea_surface_wave_mean_period: null,
        sea_surface_wave_significant_height: null,
        sea_surface_wave_from_direction: null,
        wind_from_direction: null,
        wind_speed_of_gust: null,
        windspeed: null,
        sea_water_temperature_1: null,
        total_water_velocity_1: null,
      loading: true // Add a loading state to handle loading state
    };
  }

  componentDidMount() {
    axios.get("/api")
      .then((response) => {
        const { windspeed, air_pressure_at_mean_sea_level, air_temperature, sea_surface_wave_mean_period, sea_surface_wave_significant_height, sea_surface_wave_from_direction, wind_from_direction,wind_speed_of_gust,sea_water_temperature_1, total_water_velocity_1 } = response.data;
        // Update state with data received from backend API
        this.setState({
            windspeed: windspeed,
            air_pressure_at_mean_sea_level: air_pressure_at_mean_sea_level,
            air_temperature: air_temperature,
            sea_surface_wave_mean_period: sea_surface_wave_mean_period,
            sea_surface_wave_significant_height: sea_surface_wave_significant_height,
            sea_surface_wave_from_direction: sea_surface_wave_from_direction,
            wind_from_direction: wind_from_direction,
            wind_speed_of_gust: wind_speed_of_gust,
            windspeed: windspeed,
            sea_water_temperature_1: sea_water_temperature_1,
            total_water_velocity_1: total_water_velocity_1,
          loading: false // Set loading to false after data is fetched
        });
      })
      .catch((error) => {
        console.error('Error fetching backend data:', error);
        this.setState({ loading: false }); // Update loading state in case of error
      });
  }

  render() {
    const { windspeed, air_pressure_at_mean_sea_level, air_temperature, sea_surface_wave_mean_period, sea_surface_wave_significant_height, sea_surface_wave_from_direction, wind_from_direction,wind_speed_of_gust,sea_water_temperature_1, total_water_velocity_1, loading } = this.state;

    if (loading) {
      return <h1>Loading Api Data...</h1>;
    }

    return (
      <div>
        <h1>Kincardine Api Component</h1>
        <p>Wind Speed: {windspeed}</p>
        <p>air_pressure_at_mean_sea_level: {air_pressure_at_mean_sea_level}</p>
        <p>air_temperature: {air_temperature}</p>
        <p>sea_surface_wave_mean_period: {sea_surface_wave_mean_period}</p>
        <p>sea_surface_wave_significant_height: {sea_surface_wave_significant_height}</p>
        <p>sea_surface_wave_from_direction: {sea_surface_wave_from_direction}</p>
        <p>wind_from_direction: {wind_from_direction}</p>
        <p>wind_speed_of_gust: {wind_speed_of_gust}</p>
        <p>wind_speed_of_gust: {sea_water_temperature_1}</p>
        <p>total_water_velocity_1: {total_water_velocity_1}</p>
      </div>
    );
  }
}

export default ApiComponent;
