const express=require("express");
const app=express();
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT=3003;

app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended : true}))

app.use(cors());

//import routes 
 const createRoute=require("./routes/empRoutes");
 app.use('/api/v1',createRoute)
 

 app.listen(PORT,()=>{
    console.log(`server started ${PORT}`);
 })

 const dbconnect=require("./config/database");
 dbconnect();
 app.get("/",(req,res)=>{
    res.send(`<h1> This is Homage</h1>`)
 })
