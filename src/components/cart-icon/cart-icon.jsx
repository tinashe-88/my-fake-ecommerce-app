import React from 'react'
import { connect } from 'react-redux'

import {toggleCartHidden} from '../../redux/cart/cart.actions'

import { 
  CartIconContainer, 
  ShoppingIconContainer, 
  ItemCountContainer
} from './cart-icon.styles'

const CartIcon = ({ toggleCartHidden }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer/>
    <ItemCountContainer>0</ItemCountContainer>
  </CartIconContainer>
)
const mapStateToDispatch = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
}) 
export default connect(null, mapStateToDispatch)(CartIcon)