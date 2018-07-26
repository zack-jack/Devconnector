const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello"));

//sets up port for heroku later || 5000 for local dev now
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
