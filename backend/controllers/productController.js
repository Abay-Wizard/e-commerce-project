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

const updateProduct = async (req, res) => {
  const { name, description, price, ratings, category } = req.body;
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ success: false, message: "Product ID is required!" });
  }

  try {
    // Find the product first
    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      return res.status(404).json({ success: false, message: "Product not found!" });
    }

    // Prepare update data
    const fileName = req.file ? `${req.file.filename}` : existingProduct.image;
    const data = {
      name,
      description,
      price,
      ratings,
      category,
      image:fileName
    };

    // Update the product
    const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true });

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

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

const getAllProducts=async(_,res)=>{
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

export {createProduct,deleteProduct,getAllProducts,getSingleProduct,updateProduct}