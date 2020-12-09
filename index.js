const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const router = express.Router();

const routes = require('./routes/router');

require('./models/client');

//serve our API from /v1/api/
app.use('/v1/api/', routes(router));

//adds all request to the API to request.body
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("We do not have a documentation yet!")
});

module.exports = app;