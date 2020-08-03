import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgq5-3ahQB5XTgHKXdkQq5wSSqby2_16c",
  authDomain: "my-fake-ecommerce.firebaseapp.com",
  databaseURL: "https://my-fake-ecommerce.firebaseio.com",
  projectId: "my-fake-ecommerce",
  storageBucket: "my-fake-ecommerce.appspot.com",
  messagingSenderId: "1038620962488",
  appId: "1:1038620962488:web:d627fbb679c78853d84e4d",
  measurementId: "G-P0TW8K9C4D"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Take userAuth obj and store inside firebase database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const collectionRef = firestore.collection('users')

  const snapShot = await userRef.get()
  const collectionSnapshot = await collectionRef.get()

  console.log({collectionSnapshot})

  if (!snapShot.exists) {
    // Create new doc object if user doesn't exist
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