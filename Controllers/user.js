const { validationResult } = require('express-validator');
const { emailValidation } = require('../helpers/validation');
const User=require('../models/user');


module.exports.register=async(req,res,next) => { 
    const errors=validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }
     
    try{

        const {
            first_name,
            last_name,
            user_name,
            email,
            password,
            bYear,
            bMonth,
            bDay,
            gender
        } = req.body
        

        const user = await new User({
          first_name,
          last_name,
          user_name,
          email,
          password,
          bYear,
          bMonth,
          bDay,
          gender,
        }).save()
    
        
        res.status(200).json({
            "message":`${user} sucessfully created`,
        })
    }catch{
        res.status(500).json({"message":"failder to register data"})
    }
 } 