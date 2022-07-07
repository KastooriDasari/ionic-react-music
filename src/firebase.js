import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCe3iegaScUPEeBMHfQhQqJOlCjFCdYE7Y",
  authDomain: "login-authentication-4c945.firebaseapp.com",
  projectId: "login-authentication-4c945",
  storageBucket: "login-authentication-4c945.appspot.com",
  messagingSenderId: "969316985179",
  appId: "1:969316985179:web:d424179d25d20c6f05d27e",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

export  const auth = getAuth(app);

export default app