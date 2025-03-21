import {firebaseApp, port} from "./firebase.js";
import {getFirestore, collection, doc, setDoc, addDoc, getDocs} from "firebase/firestore";
import express from "express";

const DB = getFirestore(firebaseApp);
const app = express();

// Middleware to parse JSON body
app.use(express.json()); 

// Add User
app.post('/addUser', async (req, res) => {
    try{
        console.log("Request body:", req.body);

        const {name, status, age, profession} = req.body
        if (!name || !status || !age || !profession) {
            return res.status(400).json({ message: "All fields (name, status, age, profession) are required." });
        }
        // Add a new document to Firestore with an auto-generated ID
        const userRef = collection(DB, "users"); 
        const docRef = await addDoc(userRef, { name, status, age, profession });

        res.status(201).json({ message: "User added successfully!", userId: docRef.id });

    }catch(err){
        res.status(500).json({error: err.message})
    }
});

// Get All Users
app.get('/getUsers', async (req, res) => {
    try {
        const usersRef = collection(DB, "users");
        const snapshot = await getDocs(usersRef);
        console.log(snapshot);
        const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        return res.status(200).json(users);
    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({ error: err.message });
    }
});


app.listen(port, () => console.log(`Server has started on port: ${port}`))