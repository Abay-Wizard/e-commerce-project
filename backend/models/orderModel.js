import mongoose from 'mongoose'
const orderSchema = new mongoose.Schema({
  address:{
    type:Object,
    required:true
  },
  payment:{
    type:Boolean,
    default:false
  },
  status:{
    type:String,
    default:'Order Processing'
  },
  items:{
    type:Array,
    required:true
  },
  userId:{
    type:String,
    required:true
  }
})

const Order = mongoose.model('Order', orderSchema)
export default Order