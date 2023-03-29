const dotenv = require('dotenv');
dotenv.config();
const APIKey = process.env.API_KEY;

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// designates what port the app will listen to for incoming requests
app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
})

app.get('/getAPIKey', (req, res) => {
    res.send({key: APIKey});
})
