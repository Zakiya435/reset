import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBA7YAnSLOOKSJRUcENvJi7kscowdv8tHE",
    authDomain: "buzzer-a5211.firebaseapp.com",
    databaseURL: "https://buzzer-a5211.firebaseio.com",
    projectId: "buzzer-a5211",
    storageBucket: "buzzer-a5211.appspot.com",
    messagingSenderId: "386196597723",
    appId: "1:386196597723:web:087a17a7a259728cb295fe",
    measurementId: "G-TLD2GYHCKM"
  };
  // Initialize Firebase
  if(!firebase.apps.length)
  {
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase.database();