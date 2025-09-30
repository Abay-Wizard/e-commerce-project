import express from 'express'
import { placeOrder,Verify,allOrders,updateStatus,userOrder } from '../controllers/orderController.js'
import authMiddleware from './../middlewares/authMiddleware.js';

const router=express.Router()
router.post('/place',authMiddleware,placeOrder)
router.get('/userorder',authMiddleware,userOrder)
router.get('/orders',allOrders)
router.post('/verify',Verify)
router.post('/status',updateStatus)

export default router