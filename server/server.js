const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");
const authRoutes = require("./routes/authRoutes");


// Config
dotenv.config();

// Connect Database
connectDB();

// App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Portfolio API Running...");
});
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

// Port
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});