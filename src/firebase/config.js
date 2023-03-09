import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBAt63HrsDe2zBH3zlSw9zKbivA2TtnPxY",
  authDomain: "fir-2013b.firebaseapp.com",
  projectId: "fir-2013b",
  storageBucket: "fir-2013b.appspot.com",
  messagingSenderId: "545905179965",
  appId: "1:545905179965:web:3ded47d88eb00395d5d954",
  measurementId: "G-DTQSCDYZKL"
  };
    const app = initializeApp(firebaseConfig);
export default app;
const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export{db,auth,storage}


