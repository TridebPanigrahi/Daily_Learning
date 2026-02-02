const express = require("express");
const { getUser, createUser } = require("../controllers/user");
const router = express.Router();

router.post("/user", createUser);

module.exports = router