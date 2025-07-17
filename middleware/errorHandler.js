function errorHandler(err, req, res, next) {
  console.error(err.stack); // Log the error stack to the terminal

  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
  });
}

module.exports = errorHandler;