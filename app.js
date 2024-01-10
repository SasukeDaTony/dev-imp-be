const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("my first API in a long time");
});

module.exports = app;
