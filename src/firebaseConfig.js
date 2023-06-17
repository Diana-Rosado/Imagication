// import firebase from "firebase";/
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBV4tKqTwWobCEqfHtyRjrP3IncoR6oiW4",
  authDomain: "imagication-ca3d7.firebaseapp.com",
  projectId: "imagication-ca3d7",
  storageBucket: "imagication-ca3d7.appspot.com",
  messagingSenderId: "954970607956",
  appId: "1:954970607956:web:0c6dcf599336004117f8c1",
  measurementId: "G-G425X852DH",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// export default firebase;
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

// const colRef = collection(db, "salesQuote");

// const addSalesQuote = document.querySelector(".add");
// addSalesQuote.addEventListener("submit", (e) => {
//   e.preventDefault();

//   addDoc(colRef, {
//     fullName: "Bry",
//     email: "pin",
//     phoneNumber: "9999",
//     schoolName: "njit",
//     estimatedCosts: [15000, 0, 0, 4, 1],
//   });
// });

export default app;
