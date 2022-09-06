const { validationResult } = require('express-validator');
const { emailValidation } = require('../helpers/validation');
const User=require('../models/user');


module.exports.register=async(req,res,next) => { 
    const errors=validationResult(req);

     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }

      // for generating username if already exists
    let isValid = false;
    let usrn=req.body.user_name
    do {
        usernameExists = await User.findOne({ user_name: usrn});
        if (usernameExists) {
        usrn += (new Date() * Math.random())
            .toString()
            .substring(0, 1);
        } else {
        isValid = true;
        }
    } while (isValid);
    req.body["user_name"] = usrn;
      
     
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
            message:`sucessfully created`,
            user:user.id,
            user_name:user.user_name
        })
    }catch{
        res.status(500).json({"message":"failed to register data"})
    }
 } 