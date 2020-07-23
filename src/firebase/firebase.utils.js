import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA-ww_eCQPsWMWM1MivimyiVrfe0anoQw",
  authDomain: "my-shop-app-b8b9b.firebaseapp.com",
  databaseURL: "https://my-shop-app-b8b9b.firebaseio.com",
  projectId: "my-shop-app-b8b9b",
  storageBucket: "my-shop-app-b8b9b.appspot.com",
  messagingSenderId: "779952513906",
  appId: "1:779952513906:web:97678c0e8411e1cd"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Take userAuth obj and store inside firebase database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }
  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Access to goggle auth from authentication library
const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase