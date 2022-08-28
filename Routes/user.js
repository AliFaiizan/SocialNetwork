const express= require('express')


const router= express.Router()


router.get('/user',(req,res,next) => { 
    res.send('there are no users')
 })


module.exports=router;