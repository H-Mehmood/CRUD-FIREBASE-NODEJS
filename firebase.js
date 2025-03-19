import { initializeApp } from "firebase/app";
import 'dotenv/config';

console.log("Database Host:", process.env.PROJECT_ID); // Testing

const firebaseConfig = {
    apiKey:  process.env.API_KEY,
    authDomain:  process.env.AUTH_DOMAIN,
    projectId:  process.env.PROJECT_ID,
    storageBucket:  process.env.STORAGE_BUDGET,
    messagingSenderId:  process.env.MESSAGE_SENDER_ID,
    appId:  process.env.APP_ID
  };
const app = initializeApp(firebaseConfig);

export default app;
