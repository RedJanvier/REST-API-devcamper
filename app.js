const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bootcampsRouter = require('./routes/bootcamps.js');

dotenv.config({ path: './config/config.env' });

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcampsRouter);

module.exports = app;
