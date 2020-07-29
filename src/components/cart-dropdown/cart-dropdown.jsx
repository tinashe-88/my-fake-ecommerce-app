import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import  { selectCartItems } from '../../redux/cart/cart.selectors'

import CartItem from '../cart-item/cart-item'

import { 
  CartDropdownContainer,
  CartDropdownButton,
  CartItemsContainer,
  EmptyMessageContainer
} from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ?
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        )) 
        :
        (<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)
      }
    </CartItemsContainer>
    <CartDropdownButton onClick={() => {
      history.push('/checkout')     
    }}>
      Go To Checkout
    </CartDropdownButton>
  </CartDropdownContainer>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))