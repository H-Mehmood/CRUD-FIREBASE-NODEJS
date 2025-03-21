import {firebaseApp, port} from "./firebase.js";
import {getFirestore, collection, doc, setDoc, addDoc} from "firebase/firestore";
import express from "express";

const DB = getFirestore(firebaseApp);
const app = express();

// Middleware to parse JSON body
app.use(express.json()); 

// add user 
app.post('/addUser', async (req, res) => {
    try{
        console.log("Request body:", req.body);

        const {name, status, age, profession} = req.body
        if (!name || !status || !age || !profession) {
            return res.status(400).json({ message: "All fields (name, status, age, profession) are required." });
        }
        // Add a new document to Firestore with an auto-generated ID
        const userRef = collection(DB, "users"); // Collection reference
        const docRef = await addDoc(userRef, { name, status, age, profession });

        res.status(201).json({ message: "User added successfully!", userId: docRef.id });

    }catch(err){
        res.status(500).json({error: err.message})
    }
})
app.listen(port, () => console.log(`Server has started on port: ${port}`))