import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext=createContext()
const AuthContextProvider = ({children}) => {

    const[user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


// Register a user
    const registerUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


// login a new user
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

// google login
    const googleLogin=()=>{
        const provider=new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

// update user name and photo
    const updateUser=(name,photo)=>{
        
        return updateProfile(auth.currentUser, {
            displayName:name,
            photoURL:photo
        })
    }
// reset user password

 const resetPassword=(email)=>{
    return sendPasswordResetEmail(auth,email)

 }


// sign out the user
    const signOutUser=()=>{
        return signOut(auth)
    }


// store the current user

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
                
            }
            else{
                setUser(null)
                setLoading(false)
            }
           
        })
        return ()=>{
            unsubscribe()
        }
    },[])



    const authInfo={
        user,
        setUser,
        loginUser,
        registerUser,
        signOutUser ,
        googleLogin,
        updateUser,
        loading,
        setLoading,
        resetPassword

    }
    return (
        <AuthContext.Provider value={authInfo}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;