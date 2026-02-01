const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
    preferences: {
      theme: { type: String, enum: ["light", "dark"], default: "light" },
      defaultView: { type: String, enum: ["list", "board"], default: "board" },
    },
  },
  {
    timestamps: true,
  },
);

//indexing

userSchema.index({ email: 1 });

module.exports = mongoose.model("user", userSchema);
