import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    // Register User ------------------------------------ 
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }


    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const googleProvider = new GoogleAuthProvider();
    
    const githubProvider = new GithubAuthProvider();

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)

    }
    

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unmount = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // console.log(currentUser);
                setUser(currentUser)
                setLoading(false)
            }
            else {
                //  console.log('logged out');
                setLoading(false)
                setUser(null)
            }
        });

        return () => {
            unmount()
        }
    }, [])




    const authInfo = { user, setUser, registerUser, loginUser, googleLogin, githubLogin, updateUserProfile, logOut, loading}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;