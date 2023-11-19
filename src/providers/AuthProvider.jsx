import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Current user value : ', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    },[])


    const contextValue = { user, setUser, createUser, signInUser, logOutUser, loading };
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;