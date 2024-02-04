 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
 import { getAuth  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
 import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBpD_Bd0HlOP0BIpa8c8Z7aH4TUVzEMGhQ",
    authDomain: "facebookclonee-d2980.firebaseapp.com",
    projectId: "facebookclonee-d2980",
    storageBucket: "facebookclonee-d2980.appspot.com",
    messagingSenderId: "813062469537",
    appId: "1:813062469537:web:83599fb1a0337d0f60bde0",
    measurementId: "G-WGC4JWP01C"
  };

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


