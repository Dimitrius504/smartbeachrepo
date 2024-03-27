import React, { Component } from "react";
import axios from "axios";
import Conditions from "./Condition";

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
      sea_water_temperature_1: null,
      total_water_velocity_1: null,
      loading: true,
      detrimental: false,
      safe: false,
      somewhatsafe: false,
      unsafe: false,
    };
  }

  componentDidMount() {
    axios
      .get("/api")
      .then((response) => {
        const {
          windspeed,
          air_pressure_at_mean_sea_level,
          air_temperature,
          sea_surface_wave_mean_period,
          sea_surface_wave_significant_height,
          sea_surface_wave_from_direction,
          wind_from_direction,
          wind_speed_of_gust,
          sea_water_temperature_1,
          total_water_velocity_1,
        } = response.data;
        this.setState({
          windspeed,
          air_pressure_at_mean_sea_level,
          air_temperature,
          sea_surface_wave_mean_period,
          sea_surface_wave_significant_height,
          sea_surface_wave_from_direction,
          wind_from_direction,
          wind_speed_of_gust,
          sea_water_temperature_1,
          total_water_velocity_1,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching backend data:", error);
        this.setState({ loading: false });
      });
  }

  // wind speed safety determinator
  getWindCondition(windspeed) {
    if (windspeed < 17.5) {
      this.setState({ safe: true });
      return "Good - Green";
    } else if (windspeed >= 39) {
      this.setState({ somewhatsafe: true });
      return "Bad - Red";
    } else if (windspeed >= 60) {
      this.setState({ detrimental: true });
      return "Extreme Conditions, Very Unsafe";
    } else {
      return "Caution  - Yellow";
    }
  }

  // air pressure safety determinator
  getAirPressure(air_pressure_at_mean_sea_level) {
    if (air_pressure_at_mean_sea_level < 980000) {
      this.setState({ unsafe: true });
      return "Bad  - Red";
    } else if (air_pressure_at_mean_sea_level > 1050000) {
      this.setState({ unsafe: true });
      return "Bad  - Red";
    } else {
      this.setState({ safe: true });
      return "Good - Green";
    }
  }

  //  air temperature safety detminator
  getAirTempurature(air_temperature) {
    const temperatureCelsius = air_temperature - 273.15;

    if (temperatureCelsius < 10) {
      this.setState({ unsafe: true });
      return "Bad -  Too Cold  - Red";
    } else if (temperatureCelsius > 30) {
      this.setState({ unsafe: true });
      return "Bad  - Too Hot - Red";
    } else if (temperatureCelsius <= -5 || temperatureCelsius <= 35) {
      this.setState({ detrimental: true });
      return "Extremely Unsafe Beach Conditions";
    } else {
      this.setState({ safe: true });
      return `Good - Safe`;
    }
  }

  //  Sea surface wave mean period safety determinator
  getSeaSurfaceWave(sea_surface_wave_mean_period) {
    if (sea_surface_wave_mean_period < 5) {
      this.setState({ unsafe: true });
      return "Red  - Bad";
    } else if (sea_surface_wave_mean_period > 10) {
      this.setState({ safe: true });
      return "Good - Green";
    } else {
      this.setState({ somewhatsafe: true });
      return "Somewhat Unsafe - Yellow";
    }
  }

  getSeaSurfaceWaveHeight(sea_surface_wave_significant_height) {
    if (sea_surface_wave_significant_height > 3) {
      this.setState({ unsafe: true });
      return "Red  - Bad For Boaters";
    } else if (sea_surface_wave_significant_height < 1) {
      this.setState({ safe: true });
      return "Green  - Good";
    } else {
      this.setState({ somewhatsafe: true });
      return "Yellow - Somewhat Unsafe";
    }
  }

  getSeaSurfaceWaveDirection(sea_surface_wave_from_direction) {
    // Convert wind direction to compass direction
    const compassDirections = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(sea_surface_wave_from_direction / 45) % 8;
    const compassDirection = compassDirections[index];

    // Assess beach safety based on wind direction
    if (
      compassDirection === "NE" ||
      compassDirection === "E" ||
      compassDirection === "SE"
    ) {
      this.setState({ safe: true });
      return `Safe - Green - Offshore Winds - ${compassDirection}`;
    } else if (compassDirection === "N" || compassDirection === "S") {
      this.setState({somewhatsafe: true});
      return `Neutral - Yellow - Crossshore Winds - ${compassDirection}`;
    } else {
      this.setState({unsafe: true});
      return `Unsafe - Red - Onshore Winds  - ${compassDirection}`;
    }
  }

  getWindFromDirection(wind_from_direction) {
    const normalizedWindDirection = (wind_from_direction + 360) % 360;

    if (normalizedWindDirection >= 45 && normalizedWindDirection <= 135) {
      this.setState({unsafe: true});
      return "Unsafe - Red - Onshore Winds";
    } else if (
      (normalizedWindDirection >= 0 && normalizedWindDirection < 45) ||
      (normalizedWindDirection > 315 && normalizedWindDirection <= 360)
    ) {
      this.setState({safe: true});
      return "Safe - Green - Offshore Winds";
    } else {
      this.setState({somewhatsafe: true});
      return "Somewhat Unsafe - Yellow - Cross-shore Winds";
    }
  }

  getSeaWaterTemperature(sea_water_temperature_1) {
    const temperatureCelsius = sea_water_temperature_1 - 273.15;

    if (temperatureCelsius < 10) {
      this.setState({unsafe: true});
      return "Bad -  Too Cold  - Red";
    } else if (temperatureCelsius > 30) {
      this.setState({unsafe: true});
      return "Bad  - Too Hot - Red";
    } else {
      this.setState({safe: true});
      return `Good - Safe`;
    }
  }

  // detrimentalConditionFactor(sea_surface_wave_from_direction, wind_from_direction, air_pressure_at_mean_sea_level) {
  //   if(sea_surface_wave_from_direction ) {

  //   }
  // }


  // Determinator for overall return of safety from each conditional statement
  safetyDeterminator() {
    const { safe, somewhatsafe, unsafe } = this.state;

    let safeCount = 0;

    let somewhatSafeCount = 0;

    let unsafeCount = 0;
  
    if (safe) safeCount++;

    if (somewhatsafe) somewhatSafeCount++;

    if (unsafe) unsafeCount++;
  
    if (unsafeCount > safeCount && unsafeCount > somewhatSafeCount) {
      return 'Unsafe';
    } else if (safeCount > unsafeCount && safeCount > somewhatSafeCount) {
      return 'Safe';
    } else if (somewhatSafeCount > safeCount && somewhatSafeCount > unsafeCount) {
      return 'Somewhat Safe';
    } else if (safeCount < (unsafeCount + somewhatSafeCount)){
      return 'Mostly Unsafe';
    } else if (unsafeCount < (somewhatSafeCount + safeCount)){
      return 'Mostly Safe';
    } else {
      return 'Unknown';
    }
  }
  


  render() {
    const {
      windspeed,
      air_pressure_at_mean_sea_level,
      air_temperature,
      sea_surface_wave_mean_period,
      sea_surface_wave_significant_height,
      sea_surface_wave_from_direction,
      wind_from_direction,
      wind_speed_of_gust,
      sea_water_temperature_1,
      total_water_velocity_1,
      loading,
    } = this.state;

    if (loading) {
      return <h1>Loading Api Data...</h1>;
    }

    if (this.state.detrimental) {
      return (
        <div>
          <h1>Beach Unsafe</h1>
          <p>Extreme weather conditions present. Please avoid the beach.</p>
        </div>
      );
    }

    const generalAdvisory = this.safetyDeterminator();

    return (
      <div>
        <h1>Kincardine Api Component</h1>
        <p>Wind Speed: {this.getWindCondition(windspeed)}</p>
        <p>
          air_pressure_at_mean_sea_level:{" "}
          {this.getAirPressure(air_pressure_at_mean_sea_level)}
        </p>
        <p>air_temperature: {this.getAirTempurature(air_temperature)}</p>
        <p>
          sea_surface_wave_mean_period:{" "}
          {this.getSeaSurfaceWave(sea_surface_wave_mean_period)}
        </p>
        <p>
          sea_surface_wave_significant_height:{" "}
          {this.getSeaSurfaceWaveHeight(sea_surface_wave_significant_height)}
        </p>
        <p>
          sea_surface_wave_from_direction:{" "}
          {this.getSeaSurfaceWaveDirection(sea_surface_wave_from_direction)}
        </p>
        <p>
          wind_from_direction: {this.getWindFromDirection(wind_from_direction)}
        </p>
        <p>wind_speed_of_gust: {wind_speed_of_gust}</p>
        <p>
          sea_water_temperature:{" "}
          {this.getSeaWaterTemperature(sea_water_temperature_1)}
        </p>
        <p>total_water_velocity_1: {total_water_velocity_1}</p>

        <h1>General Advisory: {generalAdvisory}</h1>
      </div>
    );
  }
}

export default ApiComponent;
