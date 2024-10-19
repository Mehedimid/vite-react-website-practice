import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdGTa8jKChe0KJ5VApJgw50kjaVjsFemk",
  authDomain: "m-58-car-doctor.firebaseapp.com",
  projectId: "m-58-car-doctor",
  storageBucket: "m-58-car-doctor.appspot.com",
  messagingSenderId: "210412956360",
  appId: "1:210412956360:web:6df154524edcf54f1693fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export  {auth, app} ;