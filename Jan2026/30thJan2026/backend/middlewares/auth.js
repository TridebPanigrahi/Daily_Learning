const jwt = require("jsonwebtoken");

async function auth(req, res) {
  try {
    const headers = req.headers.authorization;
    if (!headers || !headers.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const token = headers.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.user = decode;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}
