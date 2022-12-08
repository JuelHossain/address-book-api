const generateToken = require("../../lib/generateToken");
const sendError = require("../../lib/sendError");

// this api will generate a token for the user
// this api expect user info in request body.
// if no user info found this api will send an error.

const sendToken = async (req, res) => {
  try {
    const { user } = req.body;
    if (user) {
      const accessToken = await generateToken(user);
      res.send({ accessToken });
    }
    sendError(res, "user not found", "user not found in the request body");
  } catch (err) {
    sendError(res, err, "generating token was not successfull");
  }
};

module.exports = sendToken;
