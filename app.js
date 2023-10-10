const app = require("express")();

const { connectDatabase } = require("./database/database");

//database connection
connectDatabase()


//GET API
app.get("/",(req,res)=>{
    res.json({
        status:2000,
        message:"success"
    })
})




app.listen(2000,()=>{
    console.log("Nodejs has started at port no. 2000")
})