const mongoose=require("mongoose")

const schema=mongoose.Schema({
    Name:{type:String},
    Paid:{type:Boolean,default:"true"},
    Property_id:{type:mongoose.Schema.Types.ObjectId,ref:"Property"} ,
    Guest_id:{type: mongoose.Schema.Types.ObjectId,ref:"Guest"},
    start_date:{type:Date},
    end_date:{type:Date},
    img:{type:String} 

})

let BookingModel=mongoose.model("Booking",schema)
module.exports=BookingModel