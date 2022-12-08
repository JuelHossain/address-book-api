require("dotenv").config();
const express = require("express");
const cors = require("cors");
const client = require("./db/client");
const authRouter = require("./routers/authRouter");
const contactRouter = require("./routers/contactRouter");
const { notFoundHandler, errorHandler } = require("./middlewares/errors");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

(async () => {
  try {
    await client.connect();
    app.use("/auth", authRouter);
    app.use("/contacts", contactRouter);
  } catch (err) {
    console.log("There was some error", err);
  } finally {
    app.get("/", (req, res) => {
      res.send("address book server is running, Yeh!");
    });
    app.use("*", notFoundHandler);
    app.use(errorHandler);
    app.listen(port, () => {
      console.log("server is running on", port);
    });
  }
})();
