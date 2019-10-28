const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const CONNECTDB = require('./config/db');
const bootcampsRouter = require('./routes/bootcamps.js');

const app = express();
dotenv.config({ path: './config/config.env' });
CONNECTDB();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcampsRouter);

module.exports = app;
