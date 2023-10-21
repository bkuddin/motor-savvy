import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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

    // Login User 
     // SignInUser 
     const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // Sign in with Google
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        
        return signInWithPopup(auth, googleProvider)
    }

    // Log Out

    const logOut = () =>{       
        signOut(auth)       
    }  

    // Update Profile for showing User Name and photo after login

    const userUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }


    // Observer 
    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser)=>{
             setUser(currentUser);
        })
    }, [])


    const userInfo = {user, loading, registerUser, signInUser, signInWithGoogle, userUpdate, logOut}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;