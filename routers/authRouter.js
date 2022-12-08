const express = require("express");
const sendToken = require("../controller/shared/sendToken");

const authRouter = express.Router();

authRouter.route("/").post(sendToken);

module.exports = authRouter;
