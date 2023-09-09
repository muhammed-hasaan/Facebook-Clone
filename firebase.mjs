 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
 import { getAuth  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
 import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyC5YcPD-G_Gmhjobcj09Kmr1kUNx3sDkd0",
    authDomain: "facebook-progress.firebaseapp.com",
    projectId: "facebook-progress",
    storageBucket: "facebook-progress.appspot.com",
    messagingSenderId: "23153948433",
    appId: "1:23153948433:web:d860e7c98efd1cc0e83eb0",
    measurementId: "G-R4QQCTQRQZ"
  };

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


