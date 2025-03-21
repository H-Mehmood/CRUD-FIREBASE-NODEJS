import firebaseApp from "./firebase.js";
import {getFirestore} from "firebase/firestore";

const DB = getFirestore(firebaseApp);

console.log('Firebase Connection');
console.log(firebaseApp);