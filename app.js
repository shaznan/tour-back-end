const express = require("express");
const app = express();
const tourRoutes = require("./routes/tourRoutes");
const cors = require("cors");

if (process.env.NODE_ENV === "development") {
  console.log(`running in ${process.env.NODE_ENV} env`);
}

app.use(cors());

app.use(express.json());
app.use("/api/v1/tours", tourRoutes);

module.exports = app;
