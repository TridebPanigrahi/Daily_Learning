const userData = [
  { name: "trideb", age: 26 },
  { name: "kaushik", age: 24 },
];
const userDB = {
  // crating for Shema with mongoose
};
const express = require("express");

//Initializing express
const app = express();

//using json

app.use(express.json());

//creating a route
app.get("/", (req, res) => {
  res.end("Server is running");
});

//creating a user route
app.get("/user", (req, res) => {
  res.status(200).json(userData);
});

//creating a headth route
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

//creating a post request

app.post("/new-user", async (req, res) => {
  try {
    const body = req.body;
    // user DB
    const user = userDB;
    const userData = await user.create(body);
    res.json(userData);
  } catch (error) {
    console.error(error, error);
    res.json({});
  }
});

//Creating a server

app.listen(5000, () => {
  console.log("creating a server");
});
