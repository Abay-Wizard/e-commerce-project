import express from 'express'
import { addToCart,removeFromCart,getFromCart } from '../controllers/cartController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router =express.Router()
router.post('/add',authMiddleware,addToCart)
router.post('/remove',authMiddleware,removeFromCart)
router.get('/get',authMiddleware,getFromCart)

export default router