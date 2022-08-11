import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import {string, assert, object} from 'superstruct'
import styles from '../styles/signup.module.css'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';


// Defining a structure to validate user input
const RequestBody = object({
    first_name : string(),
    last_name : string(),
    email : string(),
    password1 : string()
})

const signup = () => {

    const [signupForm, setSignupForm] = useState({
        first_name : "",
        last_name : "",
        email : "",
        password1 : "",
        password2 : "",
        phone_number : ""
    })

    const {first_name, last_name, email, password1, password2, phone_number} = signupForm

    // Controlled inputs handler
    const updateField = (e)=>{
        setSignupForm({...signupForm, [e.target.name] : e.target.value})
    }

    const router = useRouter()

    // POST request to backend
    const signUp = async (e) =>{
        
        e.preventDefault()

        if(!email || !password1 || !first_name || !last_name){

            window.alert("Fields can't be Empty")

        }else{
           
            if(password1 !== password2){

                window.alert('Passwords do not match!')

            }else{
                
                // Getting rid of any additional spaces between/before user input
                first_name = first_name.trim()
                last_name = last_name.trim()
                email = email.trim()

                try {
                        
                    // Validating user input 
                    assert({first_name, last_name, email, password1}, RequestBody)

                        
                    // Building the request's body
                    const requestBody = JSON.stringify({
                        "first_name": first_name,
                        "last_name": last_name,
                        "email": email,
                        "password": password1,
                        "phone_number": phone_number
                    })

                    // Request's config
                    const config = {
                        method: 'post',
                        url: '/api/users/register',
                        headers: { 
                            'Content-Type': 'application/json'
                        },
                        data : requestBody
                    };

                    const res = await axios(config)

                    const {data} = res

                    
                    // Saving token to localStorage
                    if(data.token){

                        localStorage.setItem("token" , res.data.token)
                        router.push('/')

                    }else{
                        console.log(data)
                    }

                }catch (err) {
                    console.log(err.message)
                }

            }
        }

    }

    

    const {form, form_group, label, form_input, form_button} = styles

  return (
    <form className={form}>

        <div className={form_group}>
            <label className={label}>First Name :</label>
            <input className={form_input} type="text" name="first_name" placeholder="Enter First Name..." value={first_name} onChange={(e)=>updateField(e)} />
        </div>
        
        <div className={form_group}>
            <label className={label}>Last Name :</label>
            <input className={form_input} type="test"  name="last_name" placeholder="Enter Last Name..." value={last_name} onChange={(e)=>updateField(e)} />
        </div>
        
         
        <div className={form_group}>
            <label className={label}>Phone Number :</label>
            <input className={form_input} type="tel" name="phone_number" placeholder="Enter phone number..." value={phone_number} onChange={(e)=>updateField(e)} />
        </div>

        <div className={form_group}>
            <label className={label}>Email :</label>
            <input className={form_input} type="email" name="email" placeholder="email@mail.com" value={email} onChange={(e)=>updateField(e)} />
        </div>

        <div className={form_group}>
            <label className={label}>Password :</label>
            <input className={form_input} type="password" name="password1" placeholder="Enter Password..." value={password1} onChange={(e)=>updateField(e)} />
        </div>
        
        <div className={form_group}>
            <label className={label}>Re-enter Password :</label>
            <input className={form_input} type="password" name="password2" placeholder="Confirm Password..." value={password2} onChange={(e)=>updateField(e)} />
        </div>
       
       <button type="submit" className={form_button} onClick={(e)=>signUp(e)}>Sign Up</button>
    
    </form>
  )
}

export default signup