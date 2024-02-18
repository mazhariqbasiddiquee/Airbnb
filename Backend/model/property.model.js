const mongoose=require("mongoose")

const schema=mongoose.Schema({
    Name:{type:String},
    Location:{type:String},
    PropertyType:{type:String,enum:["Apartment","House","Unique Homes"]},
    About:{type:String},
    Booked:{type:Boolean,default:"false"},
    img:{type:String},
    Host_id:{type: mongoose.Schema.Types.ObjectId,ref:"Host"} 
})

let PropertyModel=mongoose.model("Property",schema)
module.exports=PropertyModel