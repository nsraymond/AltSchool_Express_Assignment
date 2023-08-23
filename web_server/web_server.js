// IMPORTING EXPRESS
const express = require('express');

// INSTANTIATING EXPRESS
const app = express();

// IMPORTING CONTROLLER FUNCTIONS
const controller = require('./web.controller');

// PORT
const PORT = 5000;

// PUBLIC MIDDLEWARE
app.use(express.static('public'));

// GET REQUESTS
app.get('/index.html', controller.homePageHandler);
app.get('*', controller.errorPageHandler);



// SERVER RUNNING ON POERT 5000
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})