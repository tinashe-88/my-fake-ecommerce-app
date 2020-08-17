import CartActionTypes from './cart.types'
import {
  toggleCartHidden,
  addItem,
  clearItemFromCart,
  removeItem,
  clearCart
} from './cart.actions'

describe('toggleCartHidden action', () => {
  it('Should create the toggleCartHidden action', () => {
    expect(toggleCartHidden().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN)
  })
})

describe('addItem action', () => {
  it('Should create the addItem action', () => {
    const mockItem = {
      id: 1
    }
    const action = addItem(mockItem)

    expect(action.type).toEqual(CartActionTypes.ADD_ITEM)
    expect(action.payload).toEqual(mockItem)
  })
})

describe('clearItemFromCart', () => {
  it('Should create the clearItemFromCart action', () => {
    const mockItem = {
      id: 1
    }
    const action = clearItemFromCart(mockItem)

    expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART)
    expect(action.payload).toEqual(mockItem)
  })
})

describe('removeItem action', () => {
  it('Should create the removeItem action', () => {
    const mockItem = {
      id: 1
    }
    const action = removeItem(mockItem)

    expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM)
    expect(action.payload).toEqual(mockItem)
  })
})

describe('clearItem action', () => {
  it('Should create clearItem action', () => {
    expect(clearCart().type).toEqual(CartActionTypes.CLEAR_CART)
  })
})
