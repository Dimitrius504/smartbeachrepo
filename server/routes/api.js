const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

router.get('/', async (req, res) => {
    try {
        const kincardineApi = `${process.env.API_BASE_URL}`;
        
        // Fetch data from the API
        fetch(kincardineApi)
            .then(response => response.json())
            .then(data => {
                // Extract the required data from the response
                const air_pressure_at_mean_sea_level = data[0]['air_pressure_at_mean_sea_level (Pa)']
                const air_temperature = data[0]['air_temperature (K)'];
                const sea_surface_wave_mean_period = data[0]['sea_surface_wave_mean_period (s)'];
                const sea_surface_wave_significant_height = data[0]['sea_surface_wave_significant_height (m)'];
                const sea_surface_wave_from_direction = data[0]['sea_surface_wave_from_direction (degree)'];
                const wind_from_direction = data[0]['wind_from_direction (degree)'];
                const wind_speed_of_gust = data[0]['wind_speed_of_gust (m s-1)'];
                const windspeed = data[0]['wind_speed (m s-1)'];
                const sea_water_temperature_1 = data[0]['sea_water_temperature_1 (K)'];
                const total_water_velocity_1 = data[0]['total_water_velocity_1']

                console.log('air_pressure_at_mean_sea_level:', air_pressure_at_mean_sea_level);
                console.log('air_temperature', air_temperature);
                console.log('sea_surface_wave_mean_period:', sea_surface_wave_mean_period);
                console.log('sea_surface_wave_significant_height:', sea_surface_wave_significant_height);
                console.log('sea_surface_wave_from_direction:', sea_surface_wave_from_direction);
                console.log('wind_from_direction:', wind_from_direction);
                console.log('wind_speed_of_gust:', wind_speed_of_gust);
                console.log('sea_water_temperature_1:', sea_water_temperature_1);
                console.log('Wind Speed:', windspeed);
                console.log('total_water_velocity_1:', total_water_velocity_1);


                // Send the data as JSON response
                res.json({
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
                    total_water_velocity_1: total_water_velocity_1
                });
            });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
    
});

module.exports = router;