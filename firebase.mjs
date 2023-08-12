 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
 import { getAuth  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
 import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

 const firebaseConfig = {
   apiKey: "AIzaSyD4wkbEXtoPiBdlMKstXa52W2o9I5B7DwE",
   authDomain: "facebook-47b50.firebaseapp.com",
   projectId: "facebook-47b50",
   storageBucket: "facebook-47b50.appspot.com",
   messagingSenderId: "709557865168",
   appId: "1:709557865168:web:be37b2730785f0d3b16cd5",
   measurementId: "G-0Y4ELZ5T5Y"
 };

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


