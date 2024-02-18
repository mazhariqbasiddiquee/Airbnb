const BookingModel=require("../model/booking.model")
const express=require("express")
const BookingRouter=express.Router()


BookingRouter.get("/",async(req,res)=>{
    let {Guest_id}=req.body
    
    try{
        let data=await BookingModel.find({Guest_id})
        res.status(200).json({data})
    }
    catch(err){
        res.json({err})
    }
})

BookingRouter.post("/add",async(req,res)=>{
    console.log(req.body)

    try{
        let data=new BookingModel(req.body)
        await data.save()
        res.status(201).json({data})
    }
    catch(err){
        res.status(500).json({err})
    }
})


BookingRouter.patch("/update/:_id",async(req,res)=>{
    let {_id}=req.params
    try{
        let data=await BookingModel.findByIdAndUpdate({_id},req.body)
        res.status(200).json({data})
    }
    catch(err){
        res.status(500).json({err})
    }
})


BookingRouter.delete("/delete/:_id",async(req,res)=>{
    let {_id}=req.params
    try{
        let data=await BookingModel.findByIdAndDelete({_id})
        res.status(200).json({data})
    }
    catch(err){
        res.status(500).json({err})
    }
})



module.exports=BookingRouter