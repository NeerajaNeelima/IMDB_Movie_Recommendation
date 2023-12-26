
import React, { useState } from "react"
//import axios from "axios"
import {useNavigate, Link } from "react-router-dom"
import './login.css'
function Signup() {

    const history=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
        //alert("Hello");
        //console.log("Submit button clicked");
        try{
            const response = await fetch("http://localhost:5000/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data=await response.json();
          
                if(data.message ==="exist"){
                    alert("user already have an account")
                    
                }
                else if(data.message ==="notexist"){
                    history("/home",{state:{id:email}}) 
                    
                }
            }
            catch (e) {
                alert("An error occurred. Please check the console for details.");
                console.error(e);
            }
        
        
    }
    
    return(
        <div className="background-image">
        <div className="login-card">
            <div className="login-container">
                <div className="login-form">
                    <h1>Register</h1>
                    <form form action="POST" onSubmit={submit}>
                <input type="email" onChange={(e) => {setEmail(e.target.value)}} name="" id="" placeholder="Enter your Email" />
                <input type="email" onChange={(e) => {setPassword(e.target.value)}} name="" id="" placeholder="Enter your password" />
                <input type="submit" id="button" onClick={submit}/>
                </form>
            <br/>
            <p> OR </p>
            <br/>
            <Link to="/signup">Create an account</Link>
            </div>
            </div>
        </div>
        </div>
    )
}


export default Signup