const PropertyModel=require("../model/property.model")
const express=require("express")
const PropertyRoute=express.Router()


PropertyRoute.get("/",async(req,res)=>{

    let {Location,PropertyType}=req.query

    if(Location&&PropertyType){
        try{
           
          let data=  await PropertyModel.find({ Location: Location, PropertyType: PropertyType });
            res.status(200).json({data})
        }
        catch(err){
            res.json({err})
        }

    }

   else if(Location){
    console.log(Location)
        try{
           
            let data=await PropertyModel.find({Location})
            res.status(200).json({data})
        }
        catch(err){
            res.json({err})
        }

    }
    else if(PropertyType){
        try{
           
            let data=await PropertyModel.find({PropertyType})
            res.status(200).json({data})
        }
        catch(err){
            res.json({err})
        }


    }
    else{
        try{
            let data=await PropertyModel.find()
            res.status(200).json({data})
        }
        catch(err){
            res.json({err})
        }

    }
    
  
})

PropertyRoute.post("/add",async(req,res)=>{
    try{
        let data=new PropertyModel(req.body)
        await data.save()
        res.status(201).json({data})
    }
    catch(err){
        res.status(500).json({err})
    }
})


PropertyRoute.patch("/update/:_id",async(req,res)=>{
    let {_id}=req.params
    try{
        let data=await PropertyModel.findByIdAndUpdate({_id},req.body)
        res.status(200).json({data})
    }
    catch(err){
        res.status(500).json({err})
    }
})


PropertyRoute.delete("/delete/:_id",async(req,res)=>{
    let {_id}=req.params
    try{
        let data=await PropertyModel.findByIdAndDelete({_id})
        res.status(200).json({data})
    }
    catch(err){
        res.status(500).json({err})
    }
})



module.exports=PropertyRoute