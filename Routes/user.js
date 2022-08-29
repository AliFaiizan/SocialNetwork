const express= require('express')
const UserController= require('../Controllers/user')


const router= express.Router()


router.get('/user',UserController.home)


module.exports=router;