// this fn will be used to send error message to the frontend.
// this fn will receive  response object, error object, message you want to send, code you want to send.

// code and message is optional
// response object and error object is mandatory to pass.

const sendError = (res, error, message = "There was a server side error", code = 500) => {
  res.status(code).send(message);
  console.log(error);
};
module.exports = sendError;
