const mongoose = require("mongoose");
const empSchema = new mongoose.Schema({

name: {
  type: String,
  required: true,
},
designation: {
  type: String,
  required: true,
},
joiningDate: {
  type: Date,
  default: Date.now,
},
department: {
  
  type: String,
  enum: ['Technical', 'HR', 'Accounts', 'Operations'],
  required: true,
},
isActive: {
  type: Boolean,
  default: true,
},
});
module.exports=mongoose.model("Employee",empSchema);
