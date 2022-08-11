import dbConnect from "../../../utils/dbConnect"
import Product from '../../../models/Product'
import { object, string, optional, array, number ,assert } from 'superstruct'
import {adminAuth} from '../../../utils/auth.js'


// Superstructure to validate request
const productObj = object({
    name : string(),
    images : array(string()),
    category : string(),
    description : string(),
    avg_rating : optional(number()),
    number_of_reviews : optional(number()),
    price : number(),
    in_stock : number(),
    reviews : optional(array(string()))
})


export default async (req,res)=>{

    const {name, images, category, description, avg_rating, number_of_reviews, price, in_stock, reviews, token} = req.body

    try {

        await dbConnect()
        await adminAuth(req,res,token)

        try {
            assert({name, images, category, description, avg_rating, number_of_reviews, price, in_stock, reviews}, productObj)
        } catch (e) {
            console.log(e)
            return res.json({msg : "Malformed request!"})
        }

        const product = new Product({name, images, category, description, avg_rating, number_of_reviews, price, in_stock, reviews})

        await product.save()

        res.status(200).json(product)

    } catch (err) {
        console.error(err.message)
        res.status(500).json('Server Internal Error')
    }


}