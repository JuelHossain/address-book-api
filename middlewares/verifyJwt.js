const jwt = require("jsonwebtoken");
const sendError = require("../lib/sendError");


// this middleware function will receive authorization header which will contain the jwt token in request obj and will verify the jwt token and use will be able to access the api if token is good otherwise an error message will be sent based on the token status

// header must contain a property named 'authorization' otherwise 401 error will be sent.
// authorization property examples {authorization:"bearer token"};
// token must be in the second word of the string.

const verifyJwt = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).send({ message: "unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).send({ message: "forbidden" });
      }
      req.decoded = decoded;
      next();
    });
  } catch (error) {
    sendError(res, error, "user authentication was not completed successfully there was an error");
  }
};
module.exports = verifyJwt;
