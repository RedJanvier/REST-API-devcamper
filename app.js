const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const CONNECTDB = require('./config/db');
const errorHandler = require('./middlewares/error');
const bootcampsRouter = require('./routes/bootcamps.js');

const app = express();

dotenv.config({ path: './config/config.env' });

CONNECTDB();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcampsRouter);
app.use(errorHandler);

module.exports = app;
