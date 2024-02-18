const HostModel=require("../model/entities.model")
const express=require("express")
const HoustRouter=express.Router()


HoustRouter.get("/",async(req,res)=>{
    
    try{
        let data=await HostModel.find()
        res.status(200).json({data})
    }
    catch(err){
        res.json({err})
    }
})

HoustRouter.post("/add",async(req,res)=>{
    try{
        let data=new HostModel(req.body)
        await data.save()
        res.status(201).json({data})
    }
    catch(err){
        res.status(500).json({err})
    }
})


HoustRouter.patch("/update/:_id",async(req,res)=>{
    let {_id}=req.params
    try{
        let data=await HostModel.findByIdAndUpdate({_id},req.body)
        res.status(200).json({data})
    }
    catch(err){
        res.status(500).json({err})
    }
})


HoustRouter.delete("/delete/:_id",async(req,res)=>{
    let {_id}=req.params
    try{
        let data=await HostModel.findByIdAndDelete({_id})
        res.status(200).json({data})
    }
    catch(err){
        res.status(500).json({err})
    }
})



module.exports=HoustRouter