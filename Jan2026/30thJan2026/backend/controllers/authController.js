const jwt = require("jsonwebtoken");
async function refreshToken(req, res) {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ message: "No refreshtoken" });
    }

    const decode = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    const newAccessToken = jwt.sign(
      { userId: decode.userId, role: decode.role },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: "15m" },
    );
    res.json({ token: newAccessToken });
  } catch {
    res.status(401).json({ message: "Invalid refresh token" });
  }
}

module.exports = {
    refreshToken
}