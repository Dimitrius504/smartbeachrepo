const express = require("express");
const router = express.Router();
require('dotenv').config();


router.get("/", async (req, res) => {
  try {
    const api = `https://api.openweathermap.org/data/2.5/weather?id=5992144&appid=${process.env.API_KEY_NAME}&units=metric`;
    const forecastApi = `https://api.openweathermap.org/data/2.5/forecast?id=5992144&appid=${process.env.API_KEY_NAME}&units=metric`;

    // Fetch current weather data
    fetch(api)
      .then((response) => response.json())
      .then((currentWeatherData) => {
        const tempk = currentWeatherData.main.temp;
        const description = currentWeatherData.weather[0].description;
        const windSpeed = currentWeatherData.wind.speed;
        const airpressure = currentWeatherData.main.pressure;

        // Fetch 5-day forecast data
        fetch(forecastApi)
          .then((response) => response.json())
          .then((forecastData) => {
            // Get tomorrow's date
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);

            // Extract hourly forecast data for tomorrow and the day after tomorrow
            const tomorrowHourlyForecast = forecastData.list.filter((hour) => {
              const hourDate = new Date(hour.dt * 1000);
              return (
                hourDate.getFullYear() === tomorrow.getFullYear() &&
                hourDate.getMonth() === tomorrow.getMonth() &&
                hourDate.getDate() === tomorrow.getDate()
              );
            });

            // Get the day after tomorrow's date
            const dayAfterTomorrow = new Date(tomorrow);
            dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);

            const dayAfterTomorrowHourlyForecast = forecastData.list.filter(
              (hour) => {
                const hourDate = new Date(hour.dt * 1000);
                return (
                  hourDate.getFullYear() === dayAfterTomorrow.getFullYear() &&
                  hourDate.getMonth() === dayAfterTomorrow.getMonth() &&
                  hourDate.getDate() === dayAfterTomorrow.getDate()
                );
              }
            );

            // Construct response data object
            const responseData = {
              temperature: tempk,
              description: description,
              windSpeed: windSpeed,
              airpressure: airpressure, // Update key to airpressure
              tomorrowForecast: {
                temperature: Math.round(tomorrowHourlyForecast[0].main.temp),
                description: tomorrowHourlyForecast[0].weather[0].description,
                windSpeed: tomorrowHourlyForecast[0].wind.speed,
                airpressure: tomorrowHourlyForecast[0].main.pressure, // Update key to airpressure
                hourlyForecast: tomorrowHourlyForecast.map((hour) => ({
                  temperature: Math.round(hour.main.temp),
                  description: hour.weather[0].description,
                  windSpeed: hour.wind.speed,
                  dateTime: hour.dt_txt,
                  airpressure: hour.main.pressure, // Update key to airpressure
                })),
              },
              dayAfterTomorrowForecast: {
                temperature: Math.round(
                  dayAfterTomorrowHourlyForecast[0].main.temp
                ),
                description:
                  dayAfterTomorrowHourlyForecast[0].weather[0].description,
                windSpeed: dayAfterTomorrowHourlyForecast[0].wind.speed,
                airpressure: dayAfterTomorrowHourlyForecast[0].main.pressure,
                hourlyForecast: dayAfterTomorrowHourlyForecast.map((hour) => ({
                  temperature: Math.round(hour.main.temp),
                  description: hour.weather[0].description,
                  windSpeed: hour.wind.speed,
                  dateTime: hour.dt_txt,
                  airpressure: hour.main.pressure,
                })),
              },
            };

            // Send the combined data as JSON response
            res.json(responseData);
          })
          .catch((error) => {
            console.error("Error fetching forecast data:", error);
            res.status(500).json({ error: "Internal Server Error" });
          });
      })
      .catch((error) => {
        console.error("Error fetching current weather data:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
