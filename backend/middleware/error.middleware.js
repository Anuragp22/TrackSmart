// src/middleware/error.middleware.js
import { AppError } from '../utils/appError.js';

export const errorHandler = (err, req, res, next) => {
  // Log the error for debugging
  console.error(err);

  // If the error is an instance of AppError, use its properties;
  // otherwise, fall back to a generic 500 error.
  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';
  const message = err.message || 'Internal Server Error';

  // In development, include the error stack trace
  const response = {
    status,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  };

  res.status(statusCode).json(response);
};
