
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn42gOccrQ3g8bzd6mpIzqMG9YrYA1XQ8",
  authDomain: "gym-training-97134.firebaseapp.com",
  projectId: "gym-training-97134",
  storageBucket: "gym-training-97134.appspot.com",
  messagingSenderId: "747914427529",
  appId: "1:747914427529:web:e81d551060ce6119cdda58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }