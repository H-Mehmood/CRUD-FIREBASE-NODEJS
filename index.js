import firebaseApp from "./firebase.js";
import {getFirestore} from "firebase/firestore";
import express from "express";

const DB = getFirestore(firebaseApp);
const app = express();
