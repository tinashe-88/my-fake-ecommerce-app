import React from 'react'

import { 
  CartDropdownContainer,
  CartDropdownButton,
  CartItemsContainer,
  EmptyMessageContainer
} from './cart-dropdown.styles'

const CartDropdown = () => (
  <CartDropdownContainer>
    <CartItemsContainer/>
    <CartDropdownButton>Go to checkout</CartDropdownButton>
  </CartDropdownContainer>
)

export default CartDropdown