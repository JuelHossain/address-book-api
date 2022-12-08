const jwt = require("jsonwebtoken");

const generateToken = async (user) => {
  try {
    if (user) {
      const accessToken = await jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: "1d"
      });
      return accessToken;
    }
    console.log("please give a valid user");
    return null;
  } catch (err) {
    console.log("generating access token failed", err);
    return null;
  }
};

module.exports = generateToken;
