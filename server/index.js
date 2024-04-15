const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

require('dotenv').config();

const bodyParser = require('body-parser');

const conditions = require('./routes/conditions');
const weather = require('./routes/weather');
const kincardineApi = require('./routes/api');

app.use(express.static(path.resolve(__dirname, '../smartbeach-project-prototype/build')));

app.use(bodyParser.json());

app.use(cors());

app.use('/conditions', conditions);
app.use('/weather', weather);
app.use('/api', kincardineApi);

app.get('/', async (req, res) => {
    res.send('Server Running');
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../smartbeach-project-prototype/build', 'index.html'));
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
