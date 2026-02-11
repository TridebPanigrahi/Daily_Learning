require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("./model/userSchema");
const JWT = require("jsonwebtoken");

//initialised

const app = express();

app.use(express.json());

//Connection Db

function connectDB() {
  try {
    mongoose.connect(process.env.URI).then(() => {
      console.log("MongoDB connected Successfully");
    });
  } catch {
    process.exit(1);
  }
}

connectDB();

//Routing for login

app.get("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.status(404).json({ message: "Email not found" });
    const user = await userSchema.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Credential" });
    }

    const token = JWT.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_Access,
      {
        expiresIn: "15m",
      },
    );

    res.status(200).json({
      message: "Login Successfully",
      token,
      data: {
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server is running on Port 5000");
});
