let express = require('express');
const app = express();  
const path = require('path');

require('dotenv').config();


const bodyParser = require('body-parser');

const conditions = require('./routes/conditions');
const weather = require('./routes/weather');
const kincardineApi = require('./routes/api');

app.use(bodyParser.json())


app.use('/conditions', conditions);
app.use('/weather', weather);
app.use('/api', kincardineApi);

app.get('/', async (req, res) => {
    res.send('Server Running');
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
