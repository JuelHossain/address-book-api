const sendError = require("../lib/sendError");

const notFoundHandler = (req, res) => {
  sendError(res, "not found", "Your Url Doesn't Exists", 404);
};

const errorHandler = (err, req, res, next) => {
  if (!req.timeout) {
    sendError(res, err);
    next();
  } else {
    next(err);
  }
};

module.exports = { notFoundHandler, errorHandler };
