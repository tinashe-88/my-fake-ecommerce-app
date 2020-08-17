import UserActionTypes from './user.types'
import userReducer from './user.reducer'

const initialState = {
  currentUser: null,
  displayName: '',
  email: '',
  password: '',
  error: null
}

describe('userREducer', () => {
  it('should return initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  })
  
  it('Should set currentUser to payload on signInSuccess action', () => {
    const mockUser = {
      id: 1,
      displaName: 'Hiei',
      email: '123@g.com',
      password: '123'
    }

    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: mockUser
      }).currentUser
    ).toEqual(mockUser)
  })

  it('Should set currentUser to null on signOutSuccess action', () => {
    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_OUT_SUCCESS
      }).currentUser
    ).toBe(null)
  })

  it('Should set errorMessage to payload on signInFailure, signUpFailure, signOutFailure action', () => {
    const mockError = {
      message: 'errored',
      code: 404
    }

    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: mockError
      }).error
    ).toBe(mockError)

    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_UP_FAILURE,
        payload: mockError
      }).error
    ).toBe(mockError)

    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_OUT_FAILURE,
        payload: mockError
      }).error
    ).toBe(mockError)
  })
})
