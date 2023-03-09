
import React ,{useState, useContext} from 'react';
import Logo from '../../olx-logo.png';

import './Signup.css';
import { firebaseContext } from '../../store/FirebaseContext';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import {db,auth} from '../../firebase/config';





import firebase from 'firebase/compat/app'




import { useNavigate } from 'react-router-dom';





export default function Signup() {
  const [username,setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  

  

  const {firebase} = useContext(firebaseContext)
   
 const handleSubmit= async(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  
  try {
    const docRef = await addDoc(collection(db,"users"),  {
      username,
      phone,
      userId:`$ {userCredential.user.uid}`
  
    
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
  });
    
 
  }   
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="1name"
            name="name" 
            value={username}
      
            onChange={(e)=>{
              {setUsername(e.target.value)
                
              }}
            }
          />
          <br />
          <label htmlFor="email">Email</label>
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
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="text"
            id="phone"
            name="phone"
              
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
    }
