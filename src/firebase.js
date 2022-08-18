import { initializeApp } from "firebase/app"
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import toast from "react-hot-toast";
import { userHandle } from "./utils";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6xMFrLwVBJWgK9pwyKVXk5epN3fndRPk",
    authDomain: "instagram-clone-a31de.firebaseapp.com",
    projectId: "instagram-clone-a31de",
    storageBucket: "instagram-clone-a31de.appspot.com",
    messagingSenderId: "42686216168",
    appId: "1:42686216168:web:7e8f19b7d58bcf35bed65d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

onAuthStateChanged(auth, user => {
    userHandle(user || false)
})

export const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log(response.user)
    } catch (error) {
        toast.error(error.code)
    }

}
export const logout = async() =>{
    try {
        await signOut(auth)
    } catch (err) {
        toast.error(err.code)
    }
}
