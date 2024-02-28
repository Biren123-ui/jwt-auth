const {validationResult}=require("express-validator")

const validation=(req,res,next)=>
{
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
      console.log(errors);
      res.status(400).json({status:0,Message:"validation failed",error:errors.array()})
    }
    else{
       console.log("validation success");
       next()
    }
}

module.exports={
    validation
}