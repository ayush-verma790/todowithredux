const express=require("express");
const router=express.Router();

const {createEmployeeData}=require("../controllers/createEmployeeData");
const {getEmployeeData}=require("../controllers/getEmployeeData");
const {updateEmployeeData}=require("../controllers/updateEmployeeData");
const {deleteEmployeeData}=require("../controllers/deleteEmployeeData");


router.post("/create",createEmployeeData);
router.get("/fetch",getEmployeeData);
router.put("/update/:id",updateEmployeeData);
router.delete("/delete/:id",deleteEmployeeData);
module.exports=router;