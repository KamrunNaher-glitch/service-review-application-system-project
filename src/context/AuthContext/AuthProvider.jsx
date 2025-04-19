import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLaoding] = useState(true);
    const createUser = (email,password) =>{
        setLaoding(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) =>{
        setLaoding(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle = () =>{
        setLaoding(true);
        return signInWithPopup(auth,googleProvider)
    }



    const signOutUser = () =>{
        setLaoding(true);
        return signOut(auth);
    }





    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('state captured',currentUser);
            setLaoding(false);
        })
        return () => {
            unsubscribe();
        }
    },[])




    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        
    }


    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;