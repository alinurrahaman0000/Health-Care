import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initialazeAuthentication =() =>{
    initializeApp(firebaseConfig);
}


export default initialazeAuthentication;