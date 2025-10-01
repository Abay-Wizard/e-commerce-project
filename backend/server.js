import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import connectDB from './config/db.js'
import userRoute from './routes/userRoute.js'
import productRoute from './routes/productRoute.js'
import cartRoute from './routes/cartRoute.js'
import orderRoute from './routes/orderRoute.js'
import contactRoute from './routes/contactRoute.js'

const app=express()
app.use(cors())
app.use(express.json())
app.use('/images',express.static('uploads'))
app.use('/api/user',userRoute)
app.use('/api/product',productRoute)
app.use('/api/cart',cartRoute)
app.use('/api/order',orderRoute)
app.use('/api/contact',contactRoute)
//console.log(process.env.stripe_key)

connectDB().then(()=>{
    app.listen(5000,()=>{
        console.log('Server is running on port 5000 ...!')
    })
})
