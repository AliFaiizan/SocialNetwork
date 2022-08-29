const express= require('express');
const { body, check } = require('express-validator');
const UserController= require('../Controllers/user');
const User = require('../models/user');


const router= express.Router()


router.post(
  "/register",
  check("email")
    .isEmail()
    .withMessage("Invalid Email")
    .custom((email) => {
      const doesExists = User.findOne(email);
      return Promise.reject("Email already exists");
    }),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password should be atleast 6 character long")
    .custom((password) => { 
        if(!password===req.body.confirmPassword){
            throw new Error("Password does not match")
        }
     }),
  check("first_name").isLength({ min: 3 }).withMessage("First name is too short"),
  check("last_name").isLength({ min: 3 }).withMessage("Last name is too short"),
  UserController.register
);



module.exports=router;