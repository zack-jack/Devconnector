const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB with mongoose
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Main route
app.get("/", (req, res) => res.send("Hello"));

// Sets up port for heroku later || 5000 for local dev now
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
