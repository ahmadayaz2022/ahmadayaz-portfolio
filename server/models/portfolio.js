const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    title:String,
    about:String,
    phone:String,
    address:String,
    github:String,
    linkedin:String
});

module.exports = mongoose.model("Portfolio", portfolioSchema);