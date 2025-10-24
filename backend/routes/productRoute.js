import express from 'express'
import upload from '../middlewares/uploadMidddleware.js'
import { getAllProducts,getSingleProduct,deleteProduct,createProduct,updateProduct } from '../controllers/productController.js'

const router=express.Router()
router.post('/add',upload.single('image'),createProduct)
router.get('/list',getAllProducts)
router.get('/list/:id',getSingleProduct)
router.post('/delete/:id',deleteProduct)
router.put('/update/:id',upload.single('image'),updateProduct)

export default router