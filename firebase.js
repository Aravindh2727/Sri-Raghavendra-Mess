// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAE-G1B792bo1GOyuJjH8QCqdciEKT9uvc",
    authDomain: "sri-raghavendra-mess.firebaseapp.com",
    projectId: "sri-raghavendra-mess",
    storageBucket: "sri-raghavendra-mess.firebasestorage.app",
    messagingSenderId: "61605692840",
    appId: "1:61605692840:web:c28f4fbd8179fde68f499d",
    measurementId: "G-VP8F466HZK"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Export db for use in other files
window.db = db;





