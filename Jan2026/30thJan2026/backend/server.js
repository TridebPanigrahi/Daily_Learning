require("dotenv").config();
const express = require("express");
const connectDb = require("./db/dbConnection");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");

const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173/",
//     credentials: true,
//   }),
// );

app.use(cors());

// App-level middleware
app.use(express.json());

//routers
app.use("/api", userRouter);

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
