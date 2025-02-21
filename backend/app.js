const express=require('express');
const app=express();
require("dotenv").config()
const dbconnect=require("./configs/mongoose-connection")
app.get('/',(req,res)=>{
    res.send('Hello, World!');
})


app.listen(8080)