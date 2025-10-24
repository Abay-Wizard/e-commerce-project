import express from 'express'
import { addToCart,removeFromCart,getFromCart,deleteFromCart } from '../controllers/cartController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router =express.Router()
router.post('/add',authMiddleware,addToCart)
router.post('/remove',authMiddleware,removeFromCart)
router.post('/delete',authMiddleware,deleteFromCart)
router.get('/get',authMiddleware,getFromCart)

export default router