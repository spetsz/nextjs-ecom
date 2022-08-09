
import dbConnect from '../../../utils/dbConnect'
import {assert, string, object, number} from 'superstruct'
import mongoose from 'mongoose'
import User from '../../../models/User'
import Product from '../../../models/Product'
import jwt from 'jsonwebtoken'

// Authenticate token

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


// Superstructure to validate request
const productObj = object({
    product_id : string(),
    token : string(),
    quantity : number()
})


export default async (req, res)=>{

    

    const {product_id, token, quantity} = req.body

    try {
        await dbConnect()

        auth(req,res, token)
        
        try {
            assert({product_id, token, quantity}, productObj)
        } catch (e) {
            console.log(e)
            return res.json({msg : "Malformed request!"})
        }


        /* 62f257e1874d40c221388ab2
        if(!mongoose.isValidObjectId(product_id)){
            return res.json({msg : "Not a valid product ID"})
        }
        
        */

        const product = await Product.findById(product_id)
    
        if(!product){
            return res.status(404).json({msg : "Product you're trying to add no longer availabale!"})
        }


        
        
        
        const user = await User.findById(req.user)

        if(!user){
            return res.status(404).json({msg : "User does not exist"})
        }

        user.cart.products.push(product)

        await user.save()

        return res.status(200).json({msg : "Product added to cart successfully"})



    } catch (error) {
        
        res.status(500).json({msg : "Server Internal Error"})
    }


}