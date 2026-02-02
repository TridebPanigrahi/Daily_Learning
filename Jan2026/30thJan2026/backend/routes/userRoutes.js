const express = require("express");
const { getUser, createUser } = require("../controllers/user");
const { login } = require("../controllers/login");
const router = express.Router();

//user router for getting data
router.post("/login", login);
router.post("/user", createUser);

module.exports = router