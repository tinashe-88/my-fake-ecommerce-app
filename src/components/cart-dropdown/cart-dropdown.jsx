import React from 'react'
import { connect } from 'react-redux'

import  { selectCartItems } from '../../redux/cart/cart.selectors'

import CartItem from '../cart-item/cart-item'

import { 
  CartDropdownContainer,
  CartDropdownButton,
  CartItemsContainer,
  EmptyMessageContainer
} from './cart-dropdown.styles'

const CartDropdown = ({ cartItems }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
    {cartItems.map(cartItem => (
      <CartItem key={cartItem.id} item={cartItem} />
    ))}
    </CartItemsContainer>
    <CartDropdownButton>Go to checkout</CartDropdownButton>
  </CartDropdownContainer>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)