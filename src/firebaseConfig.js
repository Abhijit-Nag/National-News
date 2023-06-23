// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import axios from "axios";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "national-news-c13b5.firebaseapp.com",
    projectId: "national-news-c13b5",
    storageBucket: "national-news-c13b5.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_KEY,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();


export const signInWithGoogle = async () => {
    signInWithPopup(auth, provider).then(async (result) => {
        console.log(result);
        const email = result.user.email;
        const profileImage = result.user.photoURL;
        const name = result.user.displayName;
        window.localStorage.setItem('name', name);
        window.localStorage.setItem('email', email);
        window.localStorage.setItem('profileImage', profileImage);

        const response = await axios.post(`${process.env.REACT_APP_SERVER_API_KEY}/auth/signupgoogle`, {
            "name": name,
            "email": email
        });
        console.log(response);
        window.localStorage.setItem('name', name);
        // window.location.reload("/");

    }).catch(error => { console.log(`Firebase_Google_SignIn_Frontend_Error : ${error}`) });
};