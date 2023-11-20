const Employee = require("../models/Employee");
exports.getEmployeeData = async (req, res) => {
  try {
    const empfind = await Employee.find({});
    res.status(200).json({
      success: true,
      data: empfind,
      message: " entire data fetch",
    });
  } catch (err) {
    console.log(err);
    console.log(err);
    res.status(500).json({
      sucess: false,
      data: "error",
      message: err.message,
    });
  }
};
