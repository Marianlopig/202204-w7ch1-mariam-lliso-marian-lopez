const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { usersRouter } = require("./routers/usersRouter/usersRouter");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/users", usersRouter);

module.exports = app;
