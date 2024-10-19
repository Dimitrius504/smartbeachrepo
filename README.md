# SmartBeach Project

## Overview
The SmartBeach Project is a dynamic full-stack web application designed to provide real-time safety and weather updates for Kincardine Beach, Ontario. It integrates data from environmental buoys and weather APIs to inform users about current beach conditions and forecasts.

## Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js with Express
- **APIs:** Local Buoy System, OpenWeatherMap
- **Other:** CORS, Body-parser, Dotenv

## Features
- **Real-Time Data Fetching:** Integrates real-time data from a local buoy and OpenWeatherMap API.
- **Safety Ratings:** Provides users with safety ratings based on current beach conditions.
- **Weather Forecasting:** Offers detailed forecasts including temperature, wind speed, and general weather conditions.
- **Responsive Design:** Ensures accessibility and usability across various devices.

## Project Structure
- `server/`: Server-side logic including API route definitions.
  - `index.js`: Main server setup and route integrations.
  - `routes/`: Definitions for various endpoints like conditions and weather data.
- `smartbeach-project-prototype/`: React application for the frontend.
  - `src/`: Source files for React components and utilities.
    - `components/`: Reusable React components for the UI.
    - `views/`: Page-specific components like Landing, Forecast, and Live pages.
  - `public/`: Static files including index.html and images.

## Setup Instructions
1. Clone the repository: `git clone https://github.com/Dimitrius504/smartbeach.git`
2. Navigate to the project directory and install dependencies: `npm install`
3. Start the backend server: `node server/index.js`
4. In a new terminal, start the React application: `npm start` within the `smartbeach-project-prototype` directory.
5. Access the app locally at `http://localhost:3000`

## Demo
View the live application here: [SmartBeach Live Demo](https://smartbeach.onrender.com)

## Team - Deep Sea Coders
- **Zoe McLean** - Project Manager, Full Stack Developer
- **Dimitrius McKinnon** - Project Manager, Full Stack Developer
- **Makayla Wilkinson** - Full Stack Developer
- **Cameron Vanriel** - Front End Developer
- **Rino Oana** - Designer, Front End Developer
- **Sayaka Ohara** - Full Stack Developer

## Acknowledgments
Thanks to all the contributors and Kincardine Beach management for their cooperation and data access.
