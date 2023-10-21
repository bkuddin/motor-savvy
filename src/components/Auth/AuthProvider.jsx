import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext } from "react";
// Context
export const AuthContext = createContext(null)

import { useState } from "react";
import app from "../../Config/firebaseConfig";

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]= useState(true)

    // create user

    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
        setLoading(true);
    }


    const userInfo = {user, loading, registerUser}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;