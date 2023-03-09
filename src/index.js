import React,{useState} from 'react';
import{firebaseContext} from './store/FirebaseContext'
import Context from './store/FirebaseContext';

import firebase from './firebase/config';

import { createRoot } from "react-dom/client"
import App from './App';







const container = document.getElementById("root")
const root = createRoot(container)


root.render(
    <React.StrictMode>

      
    <firebaseContext.Provider value={{firebase}}>
      <Context>
      <App/>

      </Context>
      
       
      </firebaseContext.Provider>
    
    </React.StrictMode>
    
  )
 