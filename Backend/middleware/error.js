const error=(req,res,next)=>{
    try{
        next()
    }
    catch(err){
        res.json({err})
    }
}

module.exports=error