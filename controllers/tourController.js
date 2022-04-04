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

exports.deleteTour = async (req, res) => {
  try {
    const selectedId = req.query.id;
    await Tour.findByIdAndDelete({ _id: selectedId });

    res.status(201).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};

exports.getAllTour = async (req, res) => {
  console.log(req.query);
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
    // if (req.query.fields === "province") {
    //   tour = [...new Set(tour.map((item) => item.province))].map((province) =>
    //     tour.find((item) => item.province === province)
    //   );
    // }
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
