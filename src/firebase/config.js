import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAB8CTDWdPvHQh9T5RlfZ-7h_6ul81LoNE",
    authDomain: "mymoney-87fb3.firebaseapp.com",
    projectId: "mymoney-87fb3",
    storageBucket: "mymoney-87fb3.appspot.com",
    messagingSenderId: "15306307587",
    appId: "1:15306307587:web:1bfc6c2cc92696bc95b636"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
