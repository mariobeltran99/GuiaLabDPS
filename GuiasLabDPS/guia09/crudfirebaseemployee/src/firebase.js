import firebase from "firebase/app";
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAQhgcMtqcBy17m29J97Fenv-FGEsAhrTc",
    authDomain: "crudreact-5325f.firebaseapp.com",
    databaseURL: "https://crudreact-5325f.firebaseio.com",
    projectId: "crudreact-5325f",
    storageBucket: "crudreact-5325f.appspot.com",
    messagingSenderId: "317506901709",
    appId: "1:317506901709:web:480fdeb333499f0adbbb84",
    measurementId: "G-68E0CMTCSW"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();
export default db;
