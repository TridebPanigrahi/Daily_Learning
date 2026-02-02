const User = require("../models/user");
const bcrypt = require("bcrypt");

async function getUser(req, res) {
  try {
    const users = await User.find({}).select("-password").limit(10).lean();

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// async function createUser(req, res) {
//   try {
//     const token = req.headers.authorization;

//     if (!token) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }

//     const user = await User.create(req.body);

//     res.status(201).json({
//       message: "Data saved successfully",
//       data: user,
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// }

async function createUser(req, res) {
  try {
    const { name, email, password, role } = req.body;

    // basic validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // check duplicate user
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(409).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "User",
    });

    res.status(201).json({
      message: "Registration successful",
      data: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getUser,
  createUser,
};
