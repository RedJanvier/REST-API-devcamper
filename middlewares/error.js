const ErrorResponse = require('../utils/ErrorResponse');

const errorHandler = (err, req, res, next) => {
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  let error = { ...err, message: err.message };

  if (err.name === 'CastError') {
    const message = `Resource not found of id ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || 'Server Error' });
  next();
};

module.exports = errorHandler;
