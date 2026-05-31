const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const employeeRoutes = require("./routes/EmployeesRoute.js");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/employees", employeeRoutes);
app.get("/", (req, res) => {
  res.send(
    "Welcome to the Employee Management API \n to start using the API, please navigate to /employees",
  );
});

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on : http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
