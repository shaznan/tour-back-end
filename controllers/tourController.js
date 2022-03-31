const Tour = require("../Modals/tourModals");

exports.createTour = async (req, res) => {
  try {
    const tour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour,
      },
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
    const tour = await Tour.find();
    res.status(200).json({
      status: "success",
      data: { tour },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed something went wrong",
      message: error,
    });
  }
};
