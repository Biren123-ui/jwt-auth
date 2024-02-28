const router = require("express").Router();
const { signup_post, login_post } = require("../controller/Auth.controller");
const { body } = require("express-validator");
const { validation } = require("../middlewares/validator.middlewares");

router.post(
  "/signup",
  [
    body("email")
      .trim()
      .isEmail()
      .withMessage("enter a valid email")
      .notEmpty()
      .withMessage("email required"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("password required")
      .isLength({ min: 6 })
      .withMessage("minimum password length is 6"),
  ],
  validation,
  signup_post
);

router.post("/login", login_post);

module.exports = router;
