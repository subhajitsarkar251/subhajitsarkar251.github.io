var firebase = require("firebase/app");
// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
require("firebase/database")

const firebaseConfig = {
    apiKey: "AIzaSyAO4OSt94DBxuc3amJ4Oznq3p1xOIVq8y4",
    authDomain: "final-2be0a.firebaseapp.com",
    databaseURL: "https://final-2be0a.firebaseio.com",
    projectId: "final-2be0a",
    storageBucket: "final-2be0a.appspot.com",
    messagingSenderId: "517233882558",
    appId: "1:517233882558:web:23f43a0f6addfac19b75ef"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.database();

 
 
