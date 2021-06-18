import firebase from 'firebase'
require('@firebase/firestore')
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDAI_ie9f6ItYyrAEXd0s2lBk9UKOrsNwE",
    authDomain: "library-31ab2.firebaseapp.com",
    projectId: "library-31ab2",
    storageBucket: "library-31ab2.appspot.com",
    messagingSenderId: "884268424062",
    appId: "1:884268424062:web:557fe28c2b3abaf0bf312f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();