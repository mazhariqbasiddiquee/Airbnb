const mongoose=require("mongoose")

const schema=mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Password:{type:String},

})

let GuestModel=mongoose.model("Guest",schema)
module.exports=GuestModel