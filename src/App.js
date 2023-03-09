import React , {useEffect,useContext}from 'react';

import{BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Signup from './Pages/Signup';
import './App.css';
import { AuthContext, firebaseContext } from './store/FirebaseContext'; 



import Home from './Pages/Home';
import Login from './Components/Login/Login';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();


function App() {
  const {setUser} = useContext(AuthContext)
  const{firebase}=useContext(firebaseContext)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
     setUser(user)  
        
      });
     
  
  })
  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      
      
      <Route path='/Signup' element={<Signup />} />
      
    <Route path='/Login' element={<Login/>} />
    <Route path='/Login' element={<Login/>} />
    
    
    
      
      </Routes>
      </Router> 
    </div>
  );
}

export default App;  
