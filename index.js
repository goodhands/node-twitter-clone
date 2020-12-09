const { json } = require('express');
const express = require('express');
const app = express();
const route = require('./routes/router');
require('./models/client');

const response = {
    title: "MEVN Stack: Create an app with Vue.js, MongoDB & Express",
    description: "In this tutorial we will learn how to create a large application with Vue.js, MongoDB & Express"
}

app.use('/v1/api/', route);
app.use(json);
app.get('/', (req, res) => {
    res.send(response)
});

module.exports = app;