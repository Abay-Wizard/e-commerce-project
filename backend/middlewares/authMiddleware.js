import jwt from 'jsonwebtoken'
const authMiddleware = async(req,res,next)=>{
    const {token} = req.headers
   try {
    if(!token){
        return res.status(401).json({message:'Unauthorized user'})
    }
    const decoded=await jwt.verify(token, process.env.jwt_secret)
    req.userId=decoded.id
    next()
   } catch (error) {
    console.log(error)
    res.status(500).json({success:false, message:'Internal server error'})
   }
}

export default authMiddleware