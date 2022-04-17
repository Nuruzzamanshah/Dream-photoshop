// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlpcrfUuuTvA8c9DnUduq38Y26bKLXImg",
  authDomain: "wedding-photographer-52070.firebaseapp.com",
  projectId: "wedding-photographer-52070",
  storageBucket: "wedding-photographer-52070.appspot.com",
  messagingSenderId: "423519971097",
  appId: "1:423519971097:web:33fa6d3bcdbe082b540788"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;