import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDHNSH1mf-C8-h1To84OtyGvSiqIFObA5w",
    authDomain: "movie-project-66bc3.firebaseapp.com",
    projectId: "movie-project-66bc3",
    storageBucket: "movie-project-66bc3.appspot.com",
    messagingSenderId: "656708307831",
    appId: "1:656708307831:web:50a032220fb45c203faf72"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);