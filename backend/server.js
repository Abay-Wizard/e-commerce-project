import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import connectDB from './config/db.js'
import userRoute from './routes/userRoute.js'

const app=express()
app.use(cors())
app.use(express.json())
app.use('/images',express.static('uploads'))
app.use('/api/user',userRoute)

connectDB().then(()=>{
    app.listen(5000,()=>{
        console.log('Server is running on port 5000 ...!')
    })
})
