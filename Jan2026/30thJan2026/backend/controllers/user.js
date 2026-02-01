const User = require("../models/user");

async function getUser(req, res) {
  try {
    const users = await User.find({}).select("-password").limit(10).lean();

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function createUser(req, res) {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await User.create(req.body);

    res.status(201).json({
      message: "Data saved successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getUser,
  createUser,
};
