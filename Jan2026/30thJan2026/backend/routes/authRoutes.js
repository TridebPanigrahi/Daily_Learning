const express = require("express");
const { login } = require("../controllers/login");
const { refreshToken } = require("../controllers/authController");
const router = express.Router();

router.post("/login", login);
router.post("/refresh", refreshToken);

module.exports = router;
