require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../../db/models/User");

const userLogin = async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name, password });
  if (user) {
    const token = jwt.sign(
      // eslint-disable-next-line no-underscore-dangle
      { id: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );
    res.status(200).json({ token });
  } else {
    res.status(401).json({ msg: "bad request" });
  }
};

const userRegister = async (req, res, next) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name });
  if (user) {
    const error = new Error();
    error.statusCode = 409;
    error.customMessage = "user already exists";

    next(error);
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({
      name,
      password: encryptedPassword,
    });

    // eslint-disable-next-line no-underscore-dangle
    res.status(201).json({ name: newUser.name, id: newUser._id });
  } catch (error) {
    error.statusCode = 400;
    error.customMessage = "wrong user data";

    next(error);
  }
};

module.exports = { userLogin, userRegister };
