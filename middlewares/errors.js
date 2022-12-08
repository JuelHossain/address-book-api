const sendError = require("../lib/sendError");

const notFoundHandler = (req, res, next) => {
  next({ code: 404, message: "your url was not found" });
};

const errorHandler = (err, req, res, next) => {
  if (err.code === 404) {
    sendError(res, "not found", "Your url was not found", 404);
  }
  if (!req.timeout) {
    sendError(res, err);
    next();
  } else {
    next(err);
  }
};

module.exports = { notFoundHandler, errorHandler };
