// src/utils/appError.js
export class AppError extends Error {
  constructor(message, statusCode, errors = []) {
    super(message);
    this.statusCode = statusCode;
    // Classify errors as operational (client errors) or programming errors
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.errors = errors; // Optional array of detailed errors
    this.isOperational = true;

    // Capture the stack trace (excluding the constructor call)
    Error.captureStackTrace(this, this.constructor);
  }
}
