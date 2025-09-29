import User from "../models/userModel.js";
const addToCart= async(req,res)=>{
    const {productId} =req.body
    try {
        const userData=await User.findById(req.userId)
        const cartData=userData.cartData
        if(!cartData[productId]){
            cartData[productId]=1
        }else{
            cartData[productId]+=1
        }
        await User.findByIdAndUpdate(req.userId,{cartData})
        res.status(201).json({success:true,message:'cartData updated successfully!'})
    } catch (error) {
        cosnole.log(error)
        res.status(500).json({success:false, message:"Something went wrong!"})
    }
}

const removeFromCart =async(req,res)=>{
    const {productId} =req.body
    try {
        const userData=await User.findById(req.userId)
        const cartData=userData.cartData
        if(cartData[productId]>0){
            cartData[productId]-=1
        }
        await User.findByIdAndUpdate(req.userId,{cartData})
        res.status(201).json({success:true, message:'cartData updated successfully!'})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"Server error"})
    }
}

const getFromCart =async(req,res)=>{
    try {
        const userData=await User.findById(req.userId)
        const cartData=userData.cartData
        res.status(200).json({success:true, message:"cartData fetched successfully!",cartData})
    } catch (error) {
       console.log(error)
       res.status(500).json({success:false,message:'Server error'})
    }
}

export {addToCart,removeFromCart,getFromCart}