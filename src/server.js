app.use("/api", require("./routes/jiji.routes"));

const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env")
});

const express = require("express");
const app = require("./app");

const PORT = process.env.PORT || 4000;