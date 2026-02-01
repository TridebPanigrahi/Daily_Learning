const mongoose = require("mongoose");

function connectDb() {
  try {
    mongoose
      .connect(process.env.URI)
      .then(() => console.log("MongoDb connected successfully"));
  } catch (error) {
    // throw error;
    process.exit(1)
  }
}

module.exports = connectDb