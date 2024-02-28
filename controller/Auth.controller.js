const { User } = require("../models/user.models");

const signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existedUser = await User.findOne({ email });
    if (!existedUser) {
      try {
        const user = await User.create({
          email,
          password,
        });

        res
          .status(200)
          .json({ status: 1, message: "successfully created", data: user });
      } catch (error) {
        console.log("something went wrong while creating the user in db");
        res.status(500).json({
          status: 0,
          message: "user not created",
          message: error.message,
        });
      }
    } else {
      res.send("the user is already exist");
    }
  } catch (error) {
    console.log("errors=>", error);
    res.status(500).json({
      status: 0,
      message: "something went wrong while fetchinh the user in db",
    });
  }
};

const login_post = (req, res) => {
  res.send("login");
};

module.exports = {
  signup_post,
  login_post,
};
