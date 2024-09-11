// Import express
const express = require("express");

// Initialize express
const app = express();

// Define a basic route
app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not found.");
});

// Listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
