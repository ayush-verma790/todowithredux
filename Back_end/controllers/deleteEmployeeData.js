const Employee = require("../models/Employee");
exports.deleteEmployeeData = async (req, res) => {
  try {const {id}=req.params;
  await Employee.findByIdAndDelete(id);
  

  // response
  res .json({
    success:true,
    message:" delete success ",

  })
  
 
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
