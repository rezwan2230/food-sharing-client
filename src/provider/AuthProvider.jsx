import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photoUrl)=>{
        setLoader(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
          })
    }

    const signInWithGoogle = ()=>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithGitHub = ()=>{
        setLoader(true)
        return signInWithPopup(auth, gitHubProvider)
    }

    const logOut = ()=>{
        setLoader(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser)
            setLoader(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])


    const authInfo = {user, loader, createUser, signIn, updateUser, signInWithGoogle, signInWithGitHub, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;