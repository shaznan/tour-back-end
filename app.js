const express = require("express");
const app = express();

if (process.env.NODE_ENV === "development") {
  console.log(`running in ${process.env.NODE_ENV} env`);
}

module.exports = app;
