import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/User'
dotenv.config()


// User auth
const auth = async (req,res, token)=>{
    // Check if no token
    if(!token){
        return res.status(401).json({msg : 'No token, authorisation denied!'})
    }
    // Verify Token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded.user.id
    } catch (error) {
        console.log(error.message)
        res.status(401).json({msg : 'Token not valid!'})
    }
}


// Admin auth
const adminAuth = async (req,res, token)=>{
     // Check if no token
    if(!token){
        return res.status(401).json({msg : 'No token, authorisation denied!'})
    }
    // Verify Token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const admin = await User.findById(decoded.user.id)
        if(!admin.isAdmin){
            req.user = decoded.user.id
            return res.status(401).json({msg : "You do not have Admin privilege"})
            
        }

        
    } catch (error) {
        console.log(error.message)
        res.status(401).json({msg : 'Token not valid!'})
    }
}

export {auth, adminAuth}