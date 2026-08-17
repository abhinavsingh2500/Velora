/**
 * Custom application error class for operational errors.
 * Extends the built-in Error class to attach HTTP status codes, status flags,
 * and operational indicators for the global error middleware.
 */
class AppError extends Error {
  /**
   * @param {string} message - Human-readable error description message
   * @param {number} statusCode - Standard HTTP status code (e.g. 400, 404, 500)
   */
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
