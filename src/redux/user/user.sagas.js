import { takeLatest, put, call, all } from 'redux-saga/effects'

import UserActionTypes from './user.types'

import { 
  auth, 
  googleProvider, 
  createUserProfileDocument 
} from '../../firebase/firebase.utils'

export function* signInWithGoogle(){
  try {
    const userRef = yield auth.signInWithPopup(googleProvider)
    console.log(userRef)
  } catch(error){
    console.log(error)
  }
}

export function* onGoogleSignInStart(){
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START)
}

export function* userSagas(){
  yield all([call(onGoogleSignInStart)])
}