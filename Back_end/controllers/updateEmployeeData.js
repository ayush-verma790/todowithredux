const Employee=require("../models/Employee");
exports.updateEmployeeData=async(req,res)=>{
    try{
        const {id}=req.params;
        const{name, designation, department}=req.body;
        const  emp=await Employee.findByIdAndUpdate(
            {_id:id},
            {name,designation,department},
        
        )
         res.status(200).json({
            success:true,
            data:emp,
            message:"update succesfully"
         }
         )
    }
    catch(err){
        console.log(err);
        console.log(err);
        res.status(500).json({
          sucess: false,
          data: "error",
          message: err.message,
        });
    }
}