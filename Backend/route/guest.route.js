const GuestModel=require("../model/guest.model")
const express=require("express")
const bcrypt = require('bcrypt');
const GuestRoute=express.Router()
var jwt = require('jsonwebtoken');
require('dotenv').config()

GuestRoute.get("/",async(req,res)=>{
   
    try{
        let data=await GuestModel.find()
        res.status(200).json({data})
    }
    catch(err){
        res.json({err})
    }
})

GuestRoute.post("/signup",async(req,res)=>{
    let {Name,Email,Password}=req.body
    let User=await GuestModel.findOne({Email})
  
    if(!User){
    try{
        bcrypt.hash(Password, 10, async function(err, hash) {
            if(hash){
                let data=new GuestModel({Email,Password:hash,Name})
               await data.save()
               res.status(201).json({data})

            }
            else{
                console.log(err)
                res.send({err})
            }
            
        });
        
    }
    catch(err){
        res.status(500).json({err})
    }
   }
   else{
    res.status(400).json({message:"already user exist please login"})
   }
})

GuestRoute.post("/login",async(req,res)=>{
    let {Email,Password}=req.body
    let User=await GuestModel.findOne({Email})

    if(User){
        try{
            bcrypt.compare(Password, User.Password, function(err, result) {
              if(result){
                var token = jwt.sign({ _id: User._id }, process.env.Secret);

                res.status(201).json({token,Name:User.Name})

              }
              else{
                res.status(200).json({message:"Wrong password"})
              }
            });
           
        }
        catch(err){
            res.status(500).json({err})
        }

    }
    else{
        res.json({message:"No user exist"})
    }
  
})



GuestRoute.patch("/update/:_id",async(req,res)=>{
    let {_id}=req.params
    try{
        let data=await GuestModel.findByIdAndUpdate({_id},req.body)
        res.status(200).json({data})
    }
    catch(err){
        res.status(500).json({err})
    }
})


GuestRoute.delete("/delete/:_id",async(req,res)=>{
    let {_id}=req.params
    try{
        let data=await GuestModel.findByIdAndDelete({_id})
        res.status(200).json({data})
    }
    catch(err){
        res.status(500).json({err})
    }
})



module.exports=GuestRoute