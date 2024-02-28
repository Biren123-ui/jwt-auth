const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
    try {
      // Generate a secure random salt with appropriate cost factor
      const salt = await bcrypt.genSalt(10); // Increase cost factor for improved security
 
      // Hash the password using the generated salt
      this.password = await bcrypt.hash(this.password, salt);
 
      next();
    } catch (error) {
      console.error(error);
      next(error); 
    }
  });
 

const User = mongoose.model("user", userSchema);

module.exports = { User };
