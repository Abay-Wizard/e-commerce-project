import Product from "../models/productModel.js";
import fs from 'fs'
import path from 'path'
const createProduct = async(req,res)=>{
    const {name,description,price,ratings,category}=req.body
    const fileName=`${req.file.filename}`
    try {
        const product = new Product({
            name,
            description,
            ratings,
            category,
            price,
            image:fileName
        })
        await product.save()
        res.status(201).json({success:true,message:'Product created successfully!', data:product})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'Server error'})
    }
}

const deleteProduct=async(req,res)=>{
    const {id} =req.params
    try {
        const product =await Product.findById(id)
        if(!product){
            return res.status(404).json({success:false, message:"product not found!"})
        }
        const imagePath= product.image
        if(imagePath){
          await fs.promises.unlink(path.join('uploads',imagePath))
        }
        await Product.findByIdAndDelete(id)
        res.status(200).json({success:true,message:'product deleted successfully!'})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"Server error"})
    }
}

const getAllProducts=async(req,res)=>{
    try {
        const products= await Product.find({})
        res.status(200).json({success:true,message:"products fetched successfully!", data:products})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"something went wrong!"})
    }
}

const getSingleProduct=async(req,res)=>{
  const {id} = req.params
  try {
    const product = await Product.findById(id)
    res.status(200).json({success:true,message:"product fetched successfully!", data:product})
  } catch (error) {
    console.log(error)
    res.status(500).json({success:false,message:'Server error'})
  }
}

export {createProduct,deleteProduct,getAllProducts,getSingleProduct}