export function getWindCondition(windspeed) {
  if (windspeed < 17.5) {
    return "Safe";
  } else if (windspeed >= 39) {
    return "Unsafe";
  } else if (windspeed >= 60) {
    return "Very Unsafe";
  } else {
    return "Caution";
  }
}

export function tomorrowAirPressure(tomorrowAirPressure) {

  if (tomorrowAirPressure < 980) {
    return "Bad - Red";
  } else if (tomorrowAirPressure >= 980 && tomorrowAirPressure <= 1050) {
    return "Safe - Green";
  } else if (tomorrowAirPressure > 1050) {
    return "Somewhat Safe - Yellow";
  } else {
    return "Unknown";
  }
}

export function dayAfterTomorrowAirPressure(dayAfterTmrAirPressure) {
  if (dayAfterTmrAirPressure < 980) {
    return "Bad - Red";
  } else if (dayAfterTmrAirPressure >= 980 && dayAfterTmrAirPressure <= 1050) {
    return "Safe - Green";
  } else if (dayAfterTmrAirPressure > 1050) {
    return "Somewhat Safe - Yellow";
  } else {
    return "Unknown";
  }
}


export function getSeaWaterTemperature(sea_water_temperature_1) {
  let temperatureCelsius = sea_water_temperature_1 - 273.15;

  if (temperatureCelsius < -250) {
    return "...";
  } else if (temperatureCelsius < 10) {
    return `${Math.round(temperatureCelsius)} °C`;
  } else if (temperatureCelsius > 30) {
    return `${Math.round(temperatureCelsius)} °C`;
  } else {
    return `${Math.round(temperatureCelsius)} °C`;
  }
}

export function getAirTemperature(air_temperature) {
  const temperatureCelsius = air_temperature - 273.15;

  if (temperatureCelsius < 5) {
    return "Bad - Too Cold - Red";
  } else if (temperatureCelsius > 30) {
    return "Bad - Too Hot - Red";
  } else if (temperatureCelsius <= -5 || temperatureCelsius <= 35) {
    return "Extremely Unsafe Beach Conditions";
  } else {
    return "Good - Safe";
  }
}

export function getSeaSurfaceWaveHeight(sea_surface_wave_significant_height) {
  if (sea_surface_wave_significant_height === undefined || sea_surface_wave_significant_height === null) {
    return "Loading...";
  }
  if (sea_surface_wave_significant_height > 3) {
    return "Red - Unsafe - Bad For Boaters";
  } else if (sea_surface_wave_significant_height < 1) {
    return "Green - Safe - Good";
  } else {
    return "Yellow - Somewhat Unsafe";
  }
}


export function getAirPressure(air_pressure_at_mean_sea_level) {
  let main_sea_level = air_pressure_at_mean_sea_level;

  if (main_sea_level < 980) {
    return "Unsafe";
  } else if (main_sea_level > 1050) {
    return "Unsafe";
  } else {
    return "Safe";
    
  }
}


export function tomorrowWindCondition ({tomorrowForecastwindspeed}) {
  if (tomorrowForecastwindspeed < 17.5) {
    return "Safe";
  } else if (tomorrowForecastwindspeed >= 39) {
    return "Unsafe";
  } else if (tomorrowForecastwindspeed >= 60) {
    return "Very Unsafe";
  } else {
    return "Caution";
  }
}

export function dayAfterTomorrowWindCondition ({dayAfterTomorrowForecastwindspeed}) {
  if (dayAfterTomorrowForecastwindspeed < 17.5) {
    return "Safe";
  } else if (dayAfterTomorrowForecastwindspeed >= 39) {
    return "Unsafe";
  } else if (dayAfterTomorrowForecastwindspeed >= 60) {
    return "Very Unsafe";
  } else {
    return "Caution";
  }
}

export function tomorrowTempCondition ({TomorrowTempCondition}) {

  if (TomorrowTempCondition < 5) {
    return "Bad - Too Cold - Red";
  } else if (TomorrowTempCondition > 30) {
    return "Bad - Too Hot - Red";
  } else if (TomorrowTempCondition <= -5 || TomorrowTempCondition <= 35) {
    return "Extremely Unsafe Beach Conditions";
  } else {
    return "Good - Safe";
  }
}

export function dayAfterTomorrowTempCondition ({dayAfterTomorrowTempCondition}) {

  if (dayAfterTomorrowTempCondition < 5) {
    return "Bad - Too Cold - Red";
  } else if (dayAfterTomorrowTempCondition > 30) {
    return "Bad - Too Hot - Red";
  } else if (dayAfterTomorrowTempCondition <= -5 || dayAfterTomorrowTempCondition <= 35) {
    return "Extremely Unsafe Beach Conditions";
  } else {
    return "Good - Safe";
  }
}


export function safetyDeterminator(
  windspeed,
  air_pressure_at_mean_sea_level,
  air_temperature,
  sea_surface_wave_significant_height,
  sea_surface_wave_from_direction
) {
  const windCondition = getWindCondition(windspeed);
  const airPressureCondition = getAirPressure(air_pressure_at_mean_sea_level);
  const airTemperatureCondition = getAirTemperature(air_temperature);
  const seaWaveHeightCondition = getSeaSurfaceWaveHeight(sea_surface_wave_significant_height);
  // const seaWaveDirectionCondition = getSeaSurfaceWaveDirection(sea_surface_wave_from_direction);

  let safeCount = 0;
  let somewhatSafeCount = 0;
  let unsafeCount = 0;

  // Count occurrences of safety conditions
if (windCondition.includes("Extreme")) unsafeCount++;
else if (windCondition.includes("Green")) safeCount++;
else if (windCondition.includes("Yellow")) somewhatSafeCount++;
else if (windCondition.includes("Red")) unsafeCount++;
else if (windCondition.includes("Unsafe")) unsafeCount++;
else if (windCondition.includes("Caution")) somewhatSafeCount++; // Adjusted to somewhatSafeCount
else if (windCondition.includes("Safe")) safeCount++; // Adjusted to safeCount
else if (windCondition.includes("Good")) safeCount++; // Adjusted to safeCount


if (airPressureCondition.includes("Extreme")) unsafeCount++;
else if (airPressureCondition.includes("Green")) safeCount++;
else if (airPressureCondition.includes("Yellow")) somewhatSafeCount++;
else if (airPressureCondition.includes("Red")) unsafeCount++;
else if (airPressureCondition.includes("Unsafe")) unsafeCount++;
else if (airPressureCondition.includes("Caution")) somewhatSafeCount++; // Adjusted to somewhatSafeCount
else if (airPressureCondition.includes("Safe")) safeCount++; // Adjusted to safeCount
else if (airPressureCondition.includes("Good")) safeCount++; // Adjusted to safeCount

if (airTemperatureCondition.includes("Extreme")) unsafeCount++;
else if (airTemperatureCondition.includes("Green")) safeCount++;
else if (airTemperatureCondition.includes("Yellow")) somewhatSafeCount++;
else if (airTemperatureCondition.includes("Red")) unsafeCount++;
else if (airTemperatureCondition.includes("Unsafe")) unsafeCount++;
else if (airTemperatureCondition.includes("Caution")) somewhatSafeCount++; // Adjusted to somewhatSafeCount
else if (airTemperatureCondition.includes("Safe")) safeCount++; // Adjusted to safeCount
else if (airTemperatureCondition.includes("Good")) safeCount++; // Adjusted to safeCount
  

  // if (seaWavePeriodCondition.includes("Extreme")) unsafeCount++;
  // else if (seaWavePeriodCondition.includes("Green")) safeCount++;
  // else if (seaWavePeriodCondition.includes("Yellow")) somewhatSafeCount++;
  // else if (seaWavePeriodCondition.includes("Red")) unsafeCount++;

  if (seaWaveHeightCondition.includes("Extreme")) unsafeCount++;
  else if (seaWaveHeightCondition.includes("Green")) safeCount++;
  else if (seaWaveHeightCondition.includes("Yellow")) somewhatSafeCount++;
  else if (seaWaveHeightCondition.includes("Red")) unsafeCount++;
  else if (seaWaveHeightCondition.includes("Unsafe")) unsafeCount++;
  else if (seaWaveHeightCondition.includes("Caution")) somewhatSafeCount++; // Adjusted to somewhatSafeCount
  else if (seaWaveHeightCondition.includes("Safe")) safeCount++; // Adjusted to safeCount
  else if (seaWaveHeightCondition.includes("Good")) safeCount++; // Adjusted to safeCount


  // if (seaWaveDirectionCondition.includes("Extreme")) unsafeCount++;
  // else if (seaWaveDirectionCondition.includes("Green")) safeCount++;
  // else if (seaWaveDirectionCondition.includes("Yellow")) somewhatSafeCount++;
  // else if (seaWaveDirectionCondition.includes("Red")) unsafeCount++;

  // Determine general advisory based on counts
  if (unsafeCount > safeCount && unsafeCount > somewhatSafeCount) {
    return "Unsafe";
  } else if (safeCount > unsafeCount && safeCount > somewhatSafeCount) {
    return "Safe";
  } else if (somewhatSafeCount > safeCount && somewhatSafeCount > unsafeCount) {
    return "Caution";
  } else if (safeCount < unsafeCount + somewhatSafeCount) {
    return "Unsafe";
  } else if (unsafeCount < somewhatSafeCount + safeCount) {
    return "Safe";
  } else {
    return "Unknown";
  }
}
