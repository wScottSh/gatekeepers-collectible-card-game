import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDwhgUbIueZ_ejPan5VrROV3y3qomzdmRU",
  authDomain: "gatekeepers-ccg.firebaseapp.com",
  databaseURL: "https://gatekeepers-ccg.firebaseio.com",
  projectId: "gatekeepers-ccg",
  storageBucket: "",
  messagingSenderId: "817348093630"
};

var fire = firebase.initializeApp(config);

export default fire;
