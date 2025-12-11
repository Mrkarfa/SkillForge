const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/progress", require("./routes/progressRoutes"));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "SkillForge API is running" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
