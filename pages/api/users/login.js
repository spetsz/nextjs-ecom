import dbConnect from "../../../utils/dbConnect";
import User from '../../../models/User'
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
import { object, string, assert } from 'superstruct'


// Define a struct to validate with.
const reqBody = object({
    email: string(),
    password : string()
})
  

export default async (req,res) =>{

    try {

        const {email, password} = req.body

        try {
                       
            assert({email, password }, reqBody)
      
        } catch (e) {
            
            const { path } = e
            return res.json({msg : `${path[0]} provided is not valid`})
        
        }

        // Establishing connection to database
        await dbConnect()

        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({msg : "Bad Credentials"})
        }

        //Checking if credentials are correct
        const isMatch = await bcrypt.compare(password, user.password)

        !isMatch ? res.status(400).json({msg : 'Bad Credentials'}) : null

        // Signing the token 
        const payload = {
            user :{
                id : user.id
            }
        }

                        
        jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '3600s'}, 
            (err, token)=>{
                if(err) throw err
                return res.status(200).json({token})
            }
        )

        
    } catch (err) {
        console.error(err.message)
        res.status(500).json('Server Internal Error!')
    }
}