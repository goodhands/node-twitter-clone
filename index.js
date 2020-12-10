const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const router = express.Router();

const errorHandler = require('./middleware/Error');

const routes = require('./routes/router');

require('./models/client');

//serve our API from /v1/api/
app.use('/v1/api/', routes(router));

//serve our images from the public folder
app.use('/public', express.static("public"));

//adds all request to the API to request.body
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("We do not have a documentation yet!")
});

//handle all errors
app.use(errorHandler);

module.exports = app;