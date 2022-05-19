const express = require("express");
const {
  userLogin,
  userRegister,
} = require("../../controllers/usersControllers.js/usersControllers");

const usersRouter = express.Router();

usersRouter.post("/login", userLogin);
usersRouter.post("/register", userRegister);

module.exports = { usersRouter };
