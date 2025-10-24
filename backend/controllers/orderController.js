import User from "../models/userModel.js";
import Order from "../models/orderModel.js";
import Stripe from 'stripe'
import dotenv from 'dotenv'
dotenv.config()

const stripe=new Stripe(process.env.stripe_key)
const placeOrder=async(req,res)=>{
    const frontend_url='http://localhost:3000' //https://e-commerce-project-eight-liart.vercel.app
    //console.log(frontend_url)
    const {items,address,amount} =req.body
    try {
        const order=new Order({
            items,
            address,
            amount,
            userId:req.userId
        })
        await order.save()
        await User.findByIdAndUpdate(req.userId,{cartData:{}})

        const line_items= items.map(item=>({
            price_data:{
                product_data:{
                    name:item.name
                },
                currency:'usd',
                unit_amount:item.price *100
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data:{
                product_data:{
                    name:'Delivery charge'
                },
                currency:'usd',
                unit_amount:4*100
            },
            quantity:1
        })

        const session =await  stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url :`${frontend_url}/verify?success=true&orderId=${order._id}`,
            cancel_url :`${frontend_url}/verify?success=false&orderId=${order._id}`
        })
        res.status(200).json({success:true,session:session.url})
    } catch (error) {
       console.log(error)
       res.json({success:false, message:'something went wrong'})
    }
}

const Verify = async(req,res)=>{
    const {success,orderId} =req.body
    try {
        if(success =='true'){
            await Order.findByIdAndUpdate(orderId,{payment:'true'})
            res.status(200).json({success:true, message:'payment successful'})

        }
        else{
            await Order.findByIdAndDelete(orderId)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'Server error'})
    }
}

const updateStatus =async(req,res)=>{
    const {orderId,status}=req.body
    try {
      const order=  await Order.findByIdAndUpdate(orderId,{status})
      if(!order){
        return res.status(400).json({success:false,message:'order not found'})
      }
        res.status(201).json({success:true,message:'Status updated successfully!'})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'something went wrong!'})
    }
}

const userOrder=async(req,res)=>{
    try {
        const orders=await Order.find({userId:req.userId}).sort({createdAt:-1})
        res.status(200).json({success:true,data:orders})
    } catch (error) {
       console.log(error) 
       res.status(500).json({success:false, message:'Something went wrong!'})
    }
}

const allOrders=async(_,res)=>{
    try {
        const orders=await Order.find({})
        res.status(200).json({success:true,data:orders})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'Something went wrong!'})
    }
}

export {placeOrder,Verify,updateStatus,userOrder,allOrders}