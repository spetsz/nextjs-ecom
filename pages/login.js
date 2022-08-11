import {useState} from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import styles from '../styles/signup.module.css'



const Login = () =>{
    
    const router = useRouter()
    const [loginForm, setLoginForm] = useState({
        email : "",
        password : ""
    })

    const {email, password} = loginForm
    
    // Controlled inputs handler
    const updateField = (e)=>{
        setLoginForm({...loginForm, [e.target.name] : e.target.value})
    }



    const logIn = async (e)=>{
        e.preventDefault()

        if(!email || !password){
            console.log('Fields cant be empty!')
        }else{
            
            // Getting rid of any additional spaces before/after user input
            email = email.trim()
            try {

                    // Building the request's body
                    const requestBody = JSON.stringify({
                        "email": email,
                        "password": password
                    })

                    // Request's config
                    const config = {
                        method: 'post',
                        url: '/api/users/login',
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
                        console.log(res)
                    }

                }catch (err) {
                    console.log(err.message)
                }





            
        }
    }

    
    const {form, form_group, label, form_input, form_button} = styles
    return (
         <form className={form}>

        
        
      
        <div className={form_group}>
            <label className={label}>Email :</label>
            <input className={form_input} type="email" name="email" placeholder="email@mail.com" value={email} onChange={(e)=>updateField(e)} />
        </div>

        <div className={form_group}>
            <label className={label}>Password :</label>
            <input className={form_input} type="password" name="password" placeholder="Enter Password..." value={password} onChange={(e)=>updateField(e)} />
        </div>
        
      
       
       <button type="submit" className={form_button} onClick={(e)=>logIn(e)}>Login</button>
    
    </form>
    )
}

export default Login