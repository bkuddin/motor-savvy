import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext } from "react";
// Context
export const AuthContext = createContext(null)

import { useEffect, useState } from "react";
import app from "../../Config/firebaseConfig";

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]= useState(true)

    // create user

    const registerUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    // Send Email Verification 

    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser)
    }

    // Login User 
     // SignInUser 
     const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // Sign in with Google
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Log Out

    const logOut = () =>{ 
        setLoading(true)      
        signOut(auth)       
    }  

    // Update Profile for showing User Name and photo after login

    const userUpdate = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            
            displayName: name, photoURL: photo
        })

    }


     // for observing auth state change
     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
             if(currentUser.emailVerified){
                setUser(currentUser)
             }else{
                alert('Please verify your email address')
             }
            
             
             setLoading(false)
         })
         return ()=>{
             unSubscribe()
         }
     }, [])


    const userInfo = {user, loading, registerUser, verifyEmail, signInUser, signInWithGoogle, userUpdate, logOut}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;