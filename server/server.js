const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./process/.env" });

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

// Validate MONGO_URI
if (!MONGO_URI) {
  console.error("Error: MONGO_URI is not defined in the environment variables.");
  process.exit(1);
}

// MongoDB Connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

// API Routes
app.get("/", (req, res) => res.send("Job Board API is running"));

try {
  const authRoutes = require("./routes/auth");
  const jobRoutes = require("./routes/jobs");

  app.use("/api/auth", authRoutes);
  app.use("/api/jobs", jobRoutes);
} catch (error) {
  console.error("Error loading routes:", error.message);
}

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
