require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../../../db/models/User");

const userLogin = async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name, password });
  if (user) {
    const token = jwt.sign(
      // eslint-disable-next-line no-underscore-dangle
      { id: user._id, name: user.name },
      process.env.TOKEN_SECRET,
      { expiresIn: "2d" }
    );
    res.status(200).json({ token });
  } else {
    res.status(401).json({ msg: "bad request" });
  }
};
module.exports = { userLogin };
