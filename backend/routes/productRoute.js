import express from 'express'
import upload from '../middlewares/uploadMidddleware.js'
import { getAllProducts,getSingleProduct,deleteProduct,createProduct } from '../controllers/productController.js'

const router=express.Router()
router.post('/add',upload.single('image'),createProduct)
router.get('/list',getAllProducts)
router.get('/list/:id',getSingleProduct)
router.delete('/delete/:id',deleteProduct)

export default router