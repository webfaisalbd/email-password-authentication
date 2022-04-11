// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS5A9afzoZ3NNlAX6tlG76DBnQlxiThWw",
  authDomain: "email-password-auth01.firebaseapp.com",
  projectId: "email-password-auth01",
  storageBucket: "email-password-auth01.appspot.com",
  messagingSenderId: "546178622108",
  appId: "1:546178622108:web:852df6eed1c8b7bea98359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;