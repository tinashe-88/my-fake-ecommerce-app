import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { selectCartItemsQuantity } from '../../redux/cart/cart.selectors'

import {
  CartIconContainer, 
  ShoppingIconContainer, 
  ItemCountContainer
} from './cart-icon.styles'

const CartIcon = ({ toggleCartHidden, itemQuantity }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer/>
    <ItemCountContainer>{itemQuantity}</ItemCountContainer>
  </CartIconContainer>
)

// Selector
const mapStateToDispatch = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
  itemQuantity: selectCartItemsQuantity(state)
})

export default connect(mapStateToProps, mapStateToDispatch)(CartIcon)