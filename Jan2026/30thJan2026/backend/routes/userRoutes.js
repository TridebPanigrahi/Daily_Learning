const express = require("express");
const { getUser, createUser } = require("../controllers/user");
const router = express.Router();

//user router for getting data
router.get("/user", getUser);
router.post("/user", createUser);
