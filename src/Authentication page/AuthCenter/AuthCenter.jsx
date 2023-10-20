import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../../../firebase/firebase.config';

export let Authcontext=createContext(null);
const auth = getAuth(app);
const Gprovider = new GoogleAuthProvider();

const Gitprovider = new GithubAuthProvider();
const AuthCenter = ({children}) => {

    let [user,setUser]=useState(null);
    let [loader,setLoader]=useState(true);

let createUser=(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password);
}

let signin=(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
}

let google=()=>{
  setLoader(true)
    return signInWithPopup(auth, Gprovider)
}
let github=()=>{
  setLoader(true)
    return signInWithPopup(auth, Gitprovider)
}

useEffect(()=>{
    let unsubscribe=onAuthStateChanged(auth,cuser=>{
        setUser(cuser);
       setLoader(false)
        
    })
    return()=>{
        unsubscribe();
    }
    },[])

    let logout=()=>{
        return signOut(auth);
    }
    


    let info={
        user, loader,github,
createUser,signin,logout,google,
    
    }

    return (
        <Authcontext.Provider value={info}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthCenter;