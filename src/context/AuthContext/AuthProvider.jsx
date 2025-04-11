import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase/firebase.init';

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
        signInUser
    }


    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;