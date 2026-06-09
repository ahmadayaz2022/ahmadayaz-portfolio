const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    skillName:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Skill", skillSchema);