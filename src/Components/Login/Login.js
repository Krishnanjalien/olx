import React, { useState,useContext } from 'react';
import {firebaseContext} from '../../store/FirebaseContext'

import Logo from '../../olx-logo.png';
import './Login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'


 function Login() {
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const{firebase}=useContext(firebaseContext)
  const auth = getAuth();
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    // Signed in 
    
    navigate('/')
    // ...
  })   
  .catch((error) => {
    alert (error.message);
  });
    
  }
  
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
