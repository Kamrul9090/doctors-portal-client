import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loader, setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    // createUser with email and password
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn with email and password 

    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // signIn with google

    const signWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // logOut
    const logout = () => {
        return signOut(auth)
    }

    // UpdateUserInfo
    const updateUser = (useInfo) => {
        return updateProfile(auth.currentUser, useInfo)
    }

    // Verified Email
    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // Reset password 

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    // user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser => {
            setUser(currentUser)
            setLoader(false)
        }))
        return () => unsubscribe;

    }, [])
    const authInfo = {
        user,
        loader,
        signIn,
        logout,
        createUser,
        updateUser,
        emailVerify,
        forgotPassword,
        signWithGoogle,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;