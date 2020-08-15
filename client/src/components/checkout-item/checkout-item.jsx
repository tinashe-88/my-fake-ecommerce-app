/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { connect } from 'react-redux'

import { 
  addItem, 
  removeItem,
  clearItemFromCart
} from '../../redux/cart/cart.actions'

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
  MinusSignContainer,
  PlusSignContainer
} from './checkout-item.styles'

export const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item"/>
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <MinusSignContainer onClick={() => removeItem(cartItem)}>
          &#10134;
        </MinusSignContainer>
        <span>{quantity}</span>
        <PlusSignContainer onClick={() => addItem(cartItem)}>
          &#10133;
        </PlusSignContainer>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10060;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  clearItem: item => dispatch(clearItemFromCart(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)