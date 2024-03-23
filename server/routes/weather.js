const express = require('express');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');



router.get('/', async (req, res) => {
    
    const api = `https://api.openweathermap.org/data/2.5/weather?id=5992144&appid=acc94d3c8cb55a8424823537a253aabd&units=metric`;
    
    // Fetch data from the API
    fetch(api)
    .then(response => response.json())
    .then(data => {
        const tempk = data.main.temp;
        const description = data.weather[0].description;
        const windSpeed = data.wind.speed;
        
        // Send the data as JSON response
        res.json({
            temperature: tempk,
            description: description,
            windSpeed: windSpeed
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});
  
module.exports = router;