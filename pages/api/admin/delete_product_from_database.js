import dbConnect from "../../../utils/dbConnect"
import Product from '../../../models/Product'
import { object, string ,assert } from 'superstruct'
import {adminAuth} from '../../../utils/auth.js'
import {isValidObjectId} from "mongoose"

// Superstructure to validate request
const requestObj = object({
    product_id : string()
})

export default async (req,res) => {

    if(req.method === "delete"){

        const {product_id, token} = req.body

        try {
            await dbConnect()
            await adminAuth(req, res, token)

            try {
                assert({product_id}, requestObj)  
            }catch (err){
                console.error(err.message)
                return res.status(400).json({msg : "You need to pass a product ID"})
            }

            if(!isValidObjectId(product_id)){
                return res.status(400).json({msg : "Not a valid ID"})
            }

            const product = await Product.findById(product_id)
            await Product.deleteOne({_id : product_id})

            res.status(200).json({msg : `Product <${product.name}> has been deleted`})

            
        } catch (err) {
            console.error(err.message)
            res.status(500).json('Server Internal Error')
        }
    }else{
        res.status(400).json({msg : "Invalid request"})
    }

}