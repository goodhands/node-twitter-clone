const express = require('express');
const app = express();

const response = {
    name: "devloader",
    picture: "https://pbs.twimg.com/profile_images/1224109219353366535/2WcqXKkX_400x400.jpg"
}

app.get('/', (req, res) => {
    res.send(response)
});

module.exports = app;