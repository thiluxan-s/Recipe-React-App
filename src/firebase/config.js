import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBU6IFRQEhsTjbI_9mC-MTk2dIs2Y8dss4",
    authDomain: "recipe-book-316d8.firebaseapp.com",
    projectId: "recipe-book-316d8",
    storageBucket: "recipe-book-316d8.appspot.com",
    messagingSenderId: "295523501150",
    appId: "1:295523501150:web:f70afb7f10f334a17f60cf"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()

export { projectFirestore }