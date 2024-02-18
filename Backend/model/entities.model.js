const mongoose=require("mongoose")

const schema=mongoose.Schema({
    Name:{type:String},
    HostStatus:{type:String,default:"Active"},
    Location:{type:String},
    PropertyType:{type:String,enum:["Apartment","House","Unique Homes"]},
    About:{type:String},
    HostingSince:{type:Date} 
})

let HostModel=mongoose.model("Host",schema)
module.exports=HostModel