const express= require ('express');
const cors= require('cors');
const UserRoutes= require('./Routes/user');

const app= express();

const allowedLinks=[
    "http://localhost:3000",
    "http://localhost:1000"
]
const corsOption=(req,res) => { 
    let temp;
    let origin=req.header('Origin');
    if( allowedLinks.indexOf(origin)>-1){
        temp={
            origin:true,
            optionSucessStatus:'200'
        }

    }else{
        temp={
            origin:false,
            optionSucessStatus:'204'
        }
    }

    res(null,temp)
 }
app.use(cors(corsOption))

app.use(UserRoutes)


app.listen('4000',() => { 
    console.log('server is listening on port 4000')
 })