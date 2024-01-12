import React, {useState} from 'react'
import axios from 'axios';
import "../styles/Login.css";

function Login({ setAuthToken }) {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async(e) => {
    e.preventDefault();
    try{
        const response = await axios.post("https://dummyjson.com/auth/login", {
            username,
            password,
        });
        if(response.status === 200){
            const token = response.data.token;
            setAuthToken(token);
            localStorage.setItem("token", token);
        }else{
            console.log("Login failed")
        }

    }catch(error){
        console.log('Error during login', error);
    }
  };

  return (
    <div className='login-container'> 
        <h1>Login Form</h1>      
        <form className='form'>            
            <div className='inputBox'>
                <label htmlFor="username">Username:</label>
                <input type = "text" placeholder = "Enter username" onChange = {(e) => setUsername(e.target.value)}></input>
            </div>
            <div className='inputBox'>
                <label htmlFor="password">Password:</label>
                <input type = "password" placeholder = "Enter password" onChange = {(e) => setPassword(e.target.value)}></input>
            </div>
            <div className='inputBox'>
                <button className= "buttonBox" onClick = {handleLogin}>Login</button>
            </div>
            
        </form>
    </div>
  )
}

export default Login