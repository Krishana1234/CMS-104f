const mongoose = require("mongoose")

exports.connectDatabase = async ()=> {
    //connect database

    await mongoose.connect("mongodb+srv://hello:hello@cluster0.ldhl8f2.mongodb.net/?retryWrites=true&w=majority")
     console.log("Database is connected sucessfully")
  

}