import CartActionTypes from './cart.types'
import cartReducer from './cart.reducer'

const initState = {
  hidden: true,
  cartItems: []
}

describe('cartReducer', () => {
  it('Should returnn inital state', () => {
    expect(cartReducer(undefined, {})).toEqual(initState)
  })

  it('Should toggle hidden with toggleHidden action', () => {
    expect(cartReducer(initState, {
      type: CartActionTypes.TOGGLE_CART_HIDDEN
      }).hidden
    ).toBe(false)
  })
  
  it('Should increase quantity of matching item by 1 if addItem action called withsame item as payload', () => {
    const mockItem = {
      id: 1,
      quantity: 3
    }

    const mockPrevState = {
      hidden: true,
      cartItems: [
        mockItem, {
          id: 2,
          quantity: 1
        }
      ]
    }

    expect(cartReducer(
      mockPrevState, {
        type: CartActionTypes.ADD_ITEM,
        payload: mockItem
      }).cartItems[0].quantity
    ).toBe(4)
  })
  
  it('Should decrease quantity of matching item by 1 if removeItem action called with same item as payload', () => {
    const mockItem = {
      id: 1,
      quantity: 3
    }

    const mockPrevState = {
      hidden: true,
      cartItems: [
        mockItem, {
          id: 2,
          quantity: 1
        }
      ]
    }

    expect(cartReducer(
      mockPrevState, {
        type: CartActionTypes.REMOVE_ITEM,
        payload: mockItem
      }).cartItems[0].quantity
    ).toBe(2)
  })

  it('Should remove item from cart if clearItemFromCart action is fired with payload of an existing item', () => {
    const mockItem = {
      id: 1,
      quantity: 3
    }

    const mockPrevState = {
      hidden: true,
      cartItems: [
        mockItem, {
          id: 2,
          quantity: 1
        }
      ]
    }

    expect(cartReducer(
      mockPrevState, {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: mockItem
      }).cartItems.includes(item => item.id === 1)
    ).toBe(false)
  })

  it('Should clear cart if clearCart action is fired', () => {
    const mockPrevState = {
      hidden: true,
      cartItems: [
        {
          id: 1,
          quantity: 1
        },
        {
          id: 2,
          quantity: 3
        }
      ]
    }

    expect(cartReducer(
      mockPrevState, {
        type: CartActionTypes.CLEAR_CART
      }
    ).cartItems.length).toBe(0)
  })
})
