const Tour = require("../Modals/tourModals");

exports.createTour = async (req, res) => {
  try {
    const tour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      tour,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllTour = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludeFeilds = ["page", "sort", "limit", "fields"];
    excludeFeilds.forEach((item) => delete queryObj[item]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Tour.find(JSON.parse(queryStr));

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    const tour = await query;
    res.status(200).json({
      status: "success",
      tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed something went wrong",
      message: error,
    });
  }
};
