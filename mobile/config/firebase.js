import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAMTbL3sJGUBfZRMv7X-rFv21eWFhnqawo",
    authDomain: "esp-database-1248a.firebaseapp.com",
    databaseURL: "https://esp-database-1248a-default-rtdb.firebaseio.com",
    projectId: "esp-database-1248a",
    storageBucket: "esp-database-1248a.appspot.com",
    messagingSenderId: "935198394692",
    appId: "1:935198394692:web:d018156d9230d452a8af11"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;