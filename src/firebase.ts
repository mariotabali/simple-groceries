import { initializeApp } from 'firebase/app' // no compat for new SDK
import { getDatabase, ref } from 'firebase/database'

const config = {
    apiKey: process.env.APIKEY, 
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
};

const app = initializeApp(config)

const database = getDatabase(app)

export const groceriesRef = ref(database, "groceries-dc6a6-default-rtdb");
