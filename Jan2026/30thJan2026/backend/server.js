require("dotenv").config();
const express = require("express");
const connectDb = require("./db/dbConnection");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173/",
//     credentials: true,
//   }),
// );

app.use(cookieParser());

app.use(cors());

// App-level middleware
app.use(express.json());

//routers
app.use("/api", userRouter);
app.use("/auth", authRouter);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDb();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
