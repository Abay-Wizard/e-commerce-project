import User from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import validator from 'validator'

const createToken =(id)=>{
    const token=jwt.sign({id},process.env.jwt_secret)
    return token
}
const registerUser=async(req,res)=>{
   const {name,email,password}=req.body
   try {
    const exist=await User.findOne({email})
    if(exist){
        return res.status(400).json({success:false, message:"Account already exist!"})
    }
    if(password.length<8){
        return res.status(400).json({success:false,message:"Your password should be at least 8 characters long!"})
    }
    if(!validator.isEmail(email)){
        return res.status(400).json({success:false,message:"Please, enter valid email address!"})
    }
    const salt= await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)
    const user = new User({
       name,
       email,
       password:hashedPassword
    })
    await user.save()
    const token = createToken(user._id)
    res.json({success:true,token,message:"User registered successfully!"})
   } catch (error) {
    console.log(error)
    res.status(500).json({success:false,message:'Something went wrong!'})
   }
}

const loginUser =async(req,res)=>{
    const {email,password} =req.body
    try {
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({success:false, message:"Invalid email or password"})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({success:false, message:'Invalid email or password'})
        }
        const token=createToken(user._id)
        res.json({success:true,token,message:"Login successful!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"something went wrong!"})
    }
}

export {registerUser,loginUser}