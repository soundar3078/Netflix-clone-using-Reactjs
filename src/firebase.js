
import { initializeApp } from "firebase/app";
import { addDoc, 
    collection,  
    getFirestore} from "firebase/firestore";
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    getAuth,
    signOut} from "firebase/auth";
import { toast } from "react-toastify";
  



const firebaseConfig = {
  apiKey: "AIzaSyDD8SXXOXRGCivo8XG_UXbmfZTOhyqYGcw",
  authDomain: "netflix-clone-89c20.firebaseapp.com",
  projectId: "netflix-clone-89c20",
  storageBucket: "netflix-clone-89c20.appspot.com",
  messagingSenderId: "763571122084",
  appId: "1:763571122084:web:fbc00d74614ec3128fdb31",
  measurementId: "G-GRN6Q11R6X"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db), "user", {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () => {
    signOut(auth);
}

export {auth , db , login , signup, logout };