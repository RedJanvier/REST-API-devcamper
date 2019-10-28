const express = require('express');
const bootcampsRouter = require('./routes/bootcamps.js');

const app = express();

app.use('/api/v1/bootcamps', bootcampsRouter);

module.exports = app;
