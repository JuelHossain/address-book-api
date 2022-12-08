const generateToken = require("../../lib/generateToken");
const sendError = require("../../lib/sendError");

// this api will generate a token for the user
// this api expect user as an object info in request body.
// if no user info found this api will send an error.

const sendToken = async (req, res) => {
  try {
    const user = req.body;
    const validUser =
      typeof user === "object" && !Array.isArray(user) && Object.keys(user).length > 0;

    if (validUser) {
      const accessToken = await generateToken(user);
      res.send({ accessToken });
    } else {
      sendError(res, "user not found", "user not found in the request body");
    }
  } catch (err) {
    sendError(res, err, "generating token was not successfull");
  }
};

module.exports = sendToken;
