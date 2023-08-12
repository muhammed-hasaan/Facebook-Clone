import { app,  auth , db  ,storage} from "./firebase.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import {  ref, uploadBytes  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

// ...

// ...

signupbtn.addEventListener("click", async () => {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var fileInput = document.getElementById("file"); // Use the file input element

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);

    const docRef = await addDoc(collection(db, "SignupUser"), {
      name: name,
      email: email,
      file: fileInput.value, // Store the file name (not the path)
    });

    console.log("Document written with ID: ", docRef.id);

    const file = fileInput.files[0]; // Get the selected file
    const storageRef = ref(storage, email); // Create a reference with the correct file path
    await uploadBytes(storageRef, file);

    console.log('Uploaded a blob or file!');
    window.location.href ="./Login.html"
  } catch (error) {
    console.error("Error:", error);
  }
});
