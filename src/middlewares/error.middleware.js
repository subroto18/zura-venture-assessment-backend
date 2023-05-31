const { constants } = require("../utils/constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stace,
      });

    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthenticate user",
        message: err.message,
        stackTrace: err.stace,
      });

    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden route",
        message: err.message,
        stackTrace: err.stace,
      });
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stace,
      });
    case constants.SERVER_ERROR:
      res.json({
        title: "Server error",
        message: err.message,
        stackTrace: err.stace,
      });
    default:
      res.json({
        title: "No error found",
        message: err.message,
        stackTrace: err.stace,
      });
  }
};

module.exports = errorHandler;
