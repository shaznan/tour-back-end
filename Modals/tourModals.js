const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Tour must have a user name"],
    trim: true,
  },
  imgUrl: {
    type: String,
    required: [true, "Tour must have an Image Url"],
  },
  description: {
    type: String,
  },
  title: {
    type: String,
    required: [true, "Tour must have a title"],
  },
  province: {
    type: String,
    required: [true, "Tour must have a Province"],
  },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
