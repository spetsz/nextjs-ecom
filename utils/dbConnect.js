import mongoose from 'mongoose'
import dotenv from 'dotenv'

// Loading global vars
dotenv.config()

const dbConnect = async () => {
  
    mongoose.connect(
        process.env.DB_URI, 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, 
        
        () => console.log('connected to database'))

}




export default dbConnect