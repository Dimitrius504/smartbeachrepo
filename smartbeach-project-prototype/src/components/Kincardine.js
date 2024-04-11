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
    };

    this.safetyDeterminator = this.safetyDeterminator.bind(this);
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

  getWindCondition(windspeed) {
    if (windspeed < 17.5) {
      return "Safe - Green";
    } else if (windspeed >= 39) {
      return "Unsafe - Red";
    } else if (windspeed >= 60) {
      return "Extreme Conditions, Very Unsafe";
    } else {
      return "Caution - Yellow";
    }
  }

  getAirPressure(air_pressure_at_mean_sea_level) {
    let main_sea_level = air_pressure_at_mean_sea_level;

    // Convert to Pascals (Pa)
    let pressure_Pa = main_sea_level * 100000;

    if (pressure_Pa >= 102300) {
      return "Unsafe";
    } else if (pressure_Pa <= 100300) {
      return "Unsafe";
    } else {
      return "Safe";
    }
  }

  getAirTemperature(air_temperature) {
    const temperatureCelsius = air_temperature - 273.15;
    if (temperatureCelsius < 10 || temperatureCelsius > 30) {
      return "Unsafe - Red";
    } else if (temperatureCelsius <= -5 || temperatureCelsius <= 35) {
      return "Extreme Conditions, Very Unsafe";
    } else {
      return "Safe - Green";
    }
  }

  getSeaSurfaceWave(sea_surface_wave_mean_period) {
    if (sea_surface_wave_mean_period < 5) {
      return "Unsafe - Red";
    } else if (sea_surface_wave_mean_period > 10) {
      return "Safe - Green";
    } else {
      return "Caution - Yellow";
    }
  }

  getSeaSurfaceWaveHeight(sea_surface_wave_significant_height) {
    if (sea_surface_wave_significant_height > 3) {
      return "Unsafe - Red For Boaters";
    } else if (sea_surface_wave_significant_height < 1.5) {
      return "Safe - Green";
    } else {
      return "Caution - Yellow";
    }
  }

  getSeaSurfaceWaveDirection(sea_surface_wave_from_direction) {
    const compassDirections = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(sea_surface_wave_from_direction / 45) % 8;
    const compassDirection = compassDirections[index];

    if (["NE", "E", "SE"].includes(compassDirection)) {
      return `Safe - Green - Offshore Winds - ${compassDirection}`;
    } else if (["N", "S"].includes(compassDirection)) {
      return `Caution - Yellow - Crossshore Winds - ${compassDirection}`;
    } else {
      return `Yellow - Caution - Onshore Winds  - ${compassDirection}`;
    }
  }

  getWindFromDirection(wind_from_direction) {
    const normalizedWindDirection = (wind_from_direction + 360) % 360;

    if (
      (normalizedWindDirection >= 45 && normalizedWindDirection <= 135) ||
      (normalizedWindDirection >= 225 && normalizedWindDirection <= 315)
    ) {
      return "Caution - Yellow - Onshore Winds";
    } else if (
      (normalizedWindDirection >= 0 && normalizedWindDirection < 45) ||
      (normalizedWindDirection >= 135 && normalizedWindDirection < 225) ||
      (normalizedWindDirection > 315 && normalizedWindDirection <= 360)
    ) {
      return "Safe - Green - Offshore Winds";
    } else {
      return "Caution - Yellow - Cross-shore Winds";
    }
  }

  getSeaWaterTemperature(sea_water_temperature_1) {
    const temperatureCelsius = sea_water_temperature_1 - 273.15;

    if (temperatureCelsius < 5 || temperatureCelsius > 30) {
      return "Unsafe - Red";
    } else {
      return "Safe - Green";
    }
  }

  // detrimentalConditionFactor(sea_surface_wave_from_direction, wind_from_direction, air_pressure_at_mean_sea_level) {
  //   if(sea_surface_wave_from_direction ) {

  //   }
  // }

  // Determinator for overall return of safety from each conditional statement
  safetyDeterminator() {
    const {
      windspeed,
      air_pressure_at_mean_sea_level,
      air_temperature,
      sea_surface_wave_mean_period,
      sea_surface_wave_significant_height,
      sea_surface_wave_from_direction,
    } = this.state;

    const windCondition = this.getWindCondition(windspeed);
    const airPressureCondition = this.getAirPressure(
      air_pressure_at_mean_sea_level
    );
    const airTemperatureCondition = this.getAirTemperature(air_temperature);
    const seaWavePeriodCondition = this.getSeaSurfaceWave(
      sea_surface_wave_mean_period
    );
    const seaWaveHeightCondition = this.getSeaSurfaceWaveHeight(
      sea_surface_wave_significant_height
    );
    const seaWaveDirectionCondition = this.getSeaSurfaceWaveDirection(
      sea_surface_wave_from_direction
    );

    let safeCount = 0;
    let somewhatSafeCount = 0;
    let unsafeCount = 0;

    // Count occurrences of safety conditions
    if (windCondition.includes("Good") || windCondition.includes("Safe"))
      safeCount++;
    else if (windCondition.includes("Caution")) somewhatSafeCount++;
    else if (
      windCondition.includes("Extreme") ||
      windCondition.includes("Bad") ||
      windCondition.includes("Unsafe") ||
      windCondition.includes("Red")
    )
      unsafeCount++;

    if (
      airPressureCondition.includes("Good") ||
      airPressureCondition.includes("Safe")
    )
      safeCount++;
    else if (airPressureCondition.includes("Caution")) somewhatSafeCount++;
    else if (
      airPressureCondition.includes("Extreme") ||
      airPressureCondition.includes("Bad") ||
      airPressureCondition.includes("Unsafe") ||
      airPressureCondition.includes("Red")
    )
      unsafeCount++;

    if (
      airTemperatureCondition.includes("Good") ||
      airTemperatureCondition.includes("Safe")
    )
      safeCount++;
    else if (airTemperatureCondition.includes("Caution")) somewhatSafeCount++;
    else if (
      airTemperatureCondition.includes("Extreme") ||
      airTemperatureCondition.includes("Bad") ||
      airTemperatureCondition.includes("Unsafe") ||
      airTemperatureCondition.includes("Red")
    )
      unsafeCount++;

    if (
      seaWavePeriodCondition.includes("Good") ||
      seaWavePeriodCondition.includes("Safe")
    )
      safeCount++;
    else if (seaWavePeriodCondition.includes("Caution")) somewhatSafeCount++;
    else if (
      seaWavePeriodCondition.includes("Extreme") ||
      seaWavePeriodCondition.includes("Bad") ||
      seaWavePeriodCondition.includes("Unsafe") ||
      seaWavePeriodCondition.includes("Red")
    )
      unsafeCount++;

    if (
      seaWaveHeightCondition.includes("Good") ||
      seaWaveHeightCondition.includes("Safe")
    )
      safeCount++;
    else if (seaWaveHeightCondition.includes("Caution")) somewhatSafeCount++;
    else if (
      seaWaveHeightCondition.includes("Extreme") ||
      seaWaveHeightCondition.includes("Bad") ||
      seaWaveHeightCondition.includes("Unsafe") ||
      seaWaveHeightCondition.includes("Red")
    )
      unsafeCount++;

    if (seaWaveDirectionCondition.includes("Safe")) safeCount++;
    else if (seaWaveDirectionCondition.includes("Caution")) somewhatSafeCount++;
    else if (seaWaveDirectionCondition.includes("Unsafe")) unsafeCount++;

    // Determine general advisory based on counts
    switch (true) {
      case (unsafeCount > safeCount) && (unsafeCount > somewhatSafeCount):
        return "Mostly Safe";
      case( safeCount > unsafeCount) && (safeCount > somewhatSafeCount):
        return "Mostly Safe";
      case (somewhatSafeCount > safeCount) && (somewhatSafeCount > unsafeCount):
        return "Somewhat Safe";
      case safeCount < (unsafeCount + somewhatSafeCount):
        return "Mostly Unsafe";
      case unsafeCount < (somewhatSafeCount + safeCount):
        return "Mostly Safe";
      default:
        return "Unknown";
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

    const generalAdvisory = this.safetyDeterminator();

    return (
      <div>
        {/* <h1>Kincardine Api Component</h1> */}
        <p>Wind Speed: {this.getWindCondition(windspeed)}</p>
        <h1>{generalAdvisory}</h1>
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
        <p>{this.safetyDeterminator}</p>
      </div>
    );
  }
}

export default ApiComponent;
