import express from 'express'
import { getContact,createContact } from '../controllers/contactController.js'

const router =express.Router()
router.post('/send',createContact)
router.get('/get',getContact)

export default router