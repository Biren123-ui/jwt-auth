const mongoose = require("mongoose");

connectDb = async (req, res) => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );
    console.log(
      `mongodb connected || DB host ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongodb connection failed");
    process.exit(1);
  }
};

module.exports = { connectDb };
