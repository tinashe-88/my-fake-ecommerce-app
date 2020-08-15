import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import CartItem from '../cart-item/cart-item'

import  { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { 
  CartDropdownContainer,
  CartDropdownButton,
  CartItemsContainer,
  EmptyMessageContainer
} from './cart-dropdown.styles'

export const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ?
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        )) 
        : (
          <EmptyMessageContainer>
            Your cart is empty
          </EmptyMessageContainer>
        )
      }
    </CartItemsContainer>
    <CartDropdownButton 
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())     
      }}
    >
      Go To Checkout
    </CartDropdownButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))