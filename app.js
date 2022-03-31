const express = require("express");
const app = express();
const tourRoutes = require("./routes/tourRoutes");

if (process.env.NODE_ENV === "development") {
  console.log(`running in ${process.env.NODE_ENV} env`);
}

app.use(express.json());
app.use("/api/v1/tours", tourRoutes);

module.exports = app;
