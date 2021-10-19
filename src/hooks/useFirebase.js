import { useEffect, useState } from "react"
import initialazeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";


initialazeAuthentication();
const useFirebase =() => {
    // const [email,setEmail] =useState ('')
    // const [password,setPassword] =useState ('')
    const [user, setUser] = useState ({});
    const [error, setError] = useState ('');
    const auth = getAuth();


   

    const googleProvider = new GoogleAuthProvider();

    const singInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then (result => {
            // console.log(result.user)
            setUser (result.user);
        })
        .catch (error =>{
            setError(error.message)
        })
    }
        const logout =() =>{
            signOut(auth)
            .then(() =>{
                setUser({});
            })
        }
 

    useEffect ( () =>{
           onAuthStateChanged(auth,user =>{
            if (user){
                // console.log('inside state change',user);
                setUser (user);
            }   
           })     
        },[])
    return {
        user,
        error,
        singInUsingGoogle,
        logout
    }
}
export default useFirebase;
