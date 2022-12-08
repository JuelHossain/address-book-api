const jwt = require("jsonwebtoken");

// this function will receive the user information and create a uniq accessToken for the user.
// user is mandatory to pass otherwise undefined will be returned explicitly.

const generateToken = async (user) => {
  try {
    if (user) {
      const accessToken = await jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: "1d"
      });
      return accessToken;
    }
    console.log("please give a valid user");
  } catch (err) {
    console.log("generating access token failed", err);
  }
};

module.exports = generateToken;
