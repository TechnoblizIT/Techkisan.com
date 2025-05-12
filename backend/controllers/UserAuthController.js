const userModel=require("../models/user-model")
module.exports.registerUser=async(req,res)=>{
    try{
 const { name, email, password } = req.body;
 
 const newUser= new userModel({ name, email, password });
 await newUser.save()
  res.status(200).send({message:"User Created Sucessfully"})
    }
catch(e){
  console.log(e.message)
  res.status(500).send({message:"Internal Server Issue"})
}


}