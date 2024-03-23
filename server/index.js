let express = require('express');
const app = express();  // this will create our express application
const dotenv = require('dotenv');
const path = require('path');

const bodyParser = require('body-parser');

const conditions = require('./routes/conditions');
const weather = require('./routes/weather');
const kincardineApi = require('./routes/api');

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Define a catch-all route that serves 'index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// const weather = require('/weather')
app.use(bodyParser.json())


app.use('/conditions', conditions);

app.use('/weather', weather);

app.use('/api', kincardineApi);

app.get('/', async (req, res) => {
    res.send('Server Running');
});



app.listen(8000)    // This is important as our react app will be using port 3000, however, we will need to move this to a .env

module.exports = app;
