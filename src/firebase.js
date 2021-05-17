import firebase from 'firebase/app'


require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");
require("firebase/analytics");

var firebaseConfig = {
   apiKey: "AIzaSyCZzGXA01rZ_tXqIWgIb2XOepyawv9ed6c",
   authDomain: "ecommerce-e389b.firebaseapp.com",
   projectId: "ecommerce-e389b",
   storageBucket: "ecommerce-e389b.appspot.com",
   messagingSenderId: "1096801799899",
   appId: "1:1096801799899:web:15cfaa75494b41c0c986fe",
   measurementId: "G-R8KT5GWN6M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

 
 const auth= firebase.auth()
 const db = firebase.firestore()
 const storage= firebase.storage()
 const functions = firebase.functions()
 const defaultAnalytics = firebase.analytics();


 export {
   firebase,
   auth,
   db,
   storage,
   functions,
   defaultAnalytics
 }