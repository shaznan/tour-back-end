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
    unique: [true, "Title already exists!"],
    trim: true,
  },
  province: {
    type: String,
    required: [true, "Tour must have a Province"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
