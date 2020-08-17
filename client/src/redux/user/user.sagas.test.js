import { takeLatest, put, call } from 'redux-saga/effects'

import UserActionTypes from './user.types'

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure
} from './user.actions'

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/firebase.utils'

import {
  getSnapshotFromUserAuth,
  signInWithGoogle,
  signInWithEmail,
  isUserAuthenticated,
  signOut,
  signUp,
  signInAfterSignUp,
  onGoogleSignInStart,
  onEmailSignInStart,
  onCheckUserSession,
  onSignOutStart,
  onSignUpStart,
  onSignUpSuccess
} from './user.sagas'

describe('onSignUpSuccess saga', () => {
  it('Should trigger on SIGN_UP_SUCCESS', () => {
    const generator = onSignUpSuccess()

    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
    )
  })
})

describe('onSignUpStart saga', () => {
  it('Should trigger on SIGN_UP_START', () => {
    const generator = onSignUpStart()

    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.SIGN_UP_START, signUp)
    )
  })
}
)
describe('onSignOutStart saga', () => {
  it('Should trigger on SIGN_OUT_START', () => {
    const generator = onSignOutStart()

    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
    )
  })
})

describe('onCheckUserSession saga', () => {
  it('Should trigger CHECK_USER_SESSION', () => {
    const generator = onCheckUserSession()

    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
    )
  })  
})

describe('onEmailSignInStart saga', () => {
  it('Should trigger onEmailSignInStart', () => {
    const generator = onEmailSignInStart()

    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
    )
  })
})

describe('onGoogleSignInStart saga', () => {
  it('Should trigger onGoogleSignInStart', () => {
    const generator = onGoogleSignInStart()

    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
    )
  })
})

describe('signInAfterSignUp saga', () => {
  it('Should fire getSnapshotFromUserAuth', () => {
    const mockUser = {}
    const mockAdditionalData = {}
    const mockAction = {
      payload: {
        user: mockUser,
        additionalData: mockAdditionalData
      }
    }
    const generator = signInAfterSignUp(mockAction)

    expect(generator.next().value).toEqual(
      getSnapshotFromUserAuth(mockUser, mockAdditionalData)
    )
  })
  
})

describe('onSignUp saga', () => {
  const mockEmail = 'myself@g.com'
  const mockPassword = '123'
  const mockDisplayName = 'toby'

  const mockAction = {
    payload: {
      email: mockEmail,
      password: mockPassword,
      displayName: mockDisplayName
    }
  }

  const generator = signUp(mockAction)

  it('Should call auth.createUserWithEmailAndPassword', () => {
    const createUserWithEmailAndPassword = jest.spyOn(
      auth,
      'createUserWithEmailAndPassword'
    )
    generator.next()
    expect(createUserWithEmailAndPassword).toHaveBeenCalled()
  })
})

describe('onSignOut saga', () => {
  const generator = signOut()

  it('Should call auth.signOut', () => {
    const expectSignOut = jest.spyOn(auth, 'signOut')
    generator.next()

    expect(expectSignOut).toHaveBeenCalled()
  })

  it('Should call signOutSuccess', () => {
    expect(generator.next().value).toEqual(put(signOutSuccess()))
  })

  it('Should call signOutFailure on error', () => {
    const newGenerator = signOut()
    newGenerator.next()

    expect(newGenerator.throw('error').value).toEqual(
      put(signOutFailure('error'))
    )
  })
})

describe('Is user authenticated saga', () => {
  const generator = isUserAuthenticated()

  it('Should call getCurrentUser', () => {
    expect(generator.next().value).toEqual(getCurrentUser())
  })

  it('Should call getSnapshotFromUserAuth if userAuth exists', () => {
    const mockUserAuth = {
      uid: '12md32'
    }

    expect(generator.next(mockUserAuth).value).toEqual(
      getSnapshotFromUserAuth(mockUserAuth)
    )
  })

  it('Should call signInFailure on error', () => {
    const newGenerator = isUserAuthenticated()
    newGenerator.next()

    expect(newGenerator.throw('error').value).toEqual(
      put(signInFailure('error'))
    )
  })
})

describe('get snapshot from userAuth', () => {
  const mockUserAuth = {}
  const mockAdditionalData = {}
  const generator = getSnapshotFromUserAuth(mockUserAuth, mockAdditionalData)

  expect(generator.next().value).toEqual(
    call(
      createUserProfileDocument, 
      mockUserAuth, 
      mockAdditionalData
    )
  )
})

