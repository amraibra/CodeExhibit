// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA_h_vOi3atjhm-OOpj58PaZzLeIQDONLo",
    authDomain: "code-exhibit.firebaseapp.com",
    projectId: "code-exhibit",
    storageBucket: "code-exhibit.appspot.com",
    messagingSenderId: "243621454109",
    appId: "1:243621454109:web:1594ece5ca14707e1b81f4",
    measurementId: "G-5VSSDQJB5K"
    databaseURL: "https://code-exhibit-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
