import { takeLatest, put } from 'redux-saga/effects'

import UserActionTypes from '../user/user.types'
import { clearCart } from './cart.actions'
import { 
  clearCartOnSignOut,
  onSignOutSuccess
} from './cart.sagas'

describe('onSignOutSuccess saga', () => {
  it('Should trigger SIGN_OUT_SUCCESS', async () => {
    const generator = onSignOutSuccess()

    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
    )
  })
})

describe('Should clear cart on signout saga', () => {
  it('Should fire clearCart', () => {
    const generator = clearCartOnSignOut()
    expect(generator.next().value).toEqual(put(clearCart()))
  })
})



