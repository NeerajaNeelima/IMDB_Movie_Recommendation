
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
        try {
            const response = await fetch("http://localhost:5000/api/getUser", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email, password }),
});
        
            const data = await response.json();
            console.log(data)
            if (data.message === "sucess") {
              //alert("Hello");
              history("/home", { state: { id: email } });
            } 
            else if(data.message ==="invalid password"){
                //console.log(data.enteredPassword);
                //console.log(data.storedPassword)
              alert("Wrong password")
            }
            else if (data.message === "user not found") {
              alert("User doesn't have an account");
            } else {
              alert("nothing");
            }
          } catch (error) {
            //console.error(error);
            alert("An error occurred. Please check the console for details.");
          }
    }
    
    return(
        <div className="background-image">
        <div className="login-card">
            <div className="login-container">
                <div className="login-form">
                    <h1>Login</h1>
                    <form action="POST" onSubmit={submit}>
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