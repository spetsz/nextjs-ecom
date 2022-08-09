import { useState } from 'react'
import styles from '../styles/signup.module.css'
import axios from 'axios'

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

    const updateField = (e)=>{
        setSignupForm({...signupForm, [e.target.name] : e.target.value})
    }

    const signUp = (e)=>{
        
        e.preventDefault()
        
        if(password1 !== password2){
            window.alert('Passwords do not match!')
        }else{
            
            first_name = first_name.trim()
            last_name = last_name.trim()
            email = email.trim()


                
            const data = JSON.stringify({
                "first_name": first_name,
                "last_name": last_name,
                "email": email,
                "password": password1,
                "isAdmin": true,
                "phone_number": phone_number
            })

            var config = {
                method: 'post',
                url: '/api/users/register',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : data
            };

            axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });


        }

    }


  return (
    <div className={styles.form}>

        <div className={styles.form_group}>
            <label className={styles.label}>First Name</label>
            <input className={styles.form_input} type="text" name="first_name" placeholder="Enter First Name..." value={first_name} onChange={(e)=>updateField(e)} />
        </div>
        
        <div className={styles.form_group}>
            <label className={styles.label}>Last Name</label>
            <input className={styles.form_input} type="test"  name="last_name" placeholder="Enter Last Name..." value={last_name} onChange={(e)=>updateField(e)} />
        </div>
        
         
        <div className={styles.form_group}>
            <label className={styles.label}>Phone Number</label>
            <input className={styles.form_input} type="tel" name="phone_number" placeholder="Enter phone number..." value={phone_number} onChange={(e)=>updateField(e)} />
        </div>

        <div className={styles.form_group}>
            <label className={styles.label}>Email</label>
            <input className={styles.form_input} type="email" name="email" placeholder="email@mail.com" value={email} onChange={(e)=>updateField(e)} />
        </div>

        <div className={styles.form_group}>
            <label className={styles.label}>Password</label>
            <input className={styles.form_input} type="password" name="password1" placeholder="Enter Password..." value={password1} onChange={(e)=>updateField(e)} />
        </div>
        
        <div className={styles.form_group}>
            <label className={styles.label}>Re-enter Password</label>
            <input className={styles.form_input} type="password" name="password2" placeholder="Confirm Password..." value={password2} onChange={(e)=>updateField(e)} />
        </div>
       
       <button type="button" className={styles.form_button} onClick={(e)=>signUp(e)}>Sign Up</button>
    
    </div>
  )
}

export default signup