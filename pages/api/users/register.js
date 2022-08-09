import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
import { object, string, assert } from 'superstruct'



// Define a struct to validate with.
const reqBody = object({
    first_name: string(),
    last_name: string(),
    email: string(),
    password : string()
  })
  


// Reminder : update HTTP status codes and request's body validations 

export default async (req, res) =>{

                try {
                   
                    const {first_name, last_name, email, password, isAdmin, orders} = req.body

                    try {
                       
                        assert({first_name, last_name, password, email }, reqBody)
                  
                    } catch (e) {
                        
                        const {path, type } = e
                    
                        return res.json({msg : `${path[0]} provided is not valid`})
                    }
                   

                    // Establishing connection to database
                    await dbConnect()

                 
                    //Checking for duplicate emails
                    const reservedEmail = await User.findOne({email})
                    
                    if(reservedEmail){
                        return res.json({msg : "This email is reserved !"})
                    }

                   

                        let userFields = {first_name, last_name, password, email, isAdmin, orders}

                      
                        userFields.password = await bcrypt.hash(password, 10)

                       
                        // Saving new user to database
                        const user = new User(userFields)
                        await user.save()


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
                        
                        






                        

                        
                    } catch (error) {
                        
                        console.log(error)
                        res.status(500).json({msg : "Server Internal Error!"})
                    }

}

        

                       


                       

                        
                            

                           




                          


                           
                            
                      
                
            
            
