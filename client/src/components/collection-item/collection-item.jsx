import React from 'react'
import { connect } from 'react-redux'

import {addItem} from  '../../redux/cart/cart.actions'

import {
  CollectionItemContainer,
  AddButtonContainer,
  ImageContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './collection-item.styles'

export const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item

  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl}/>
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButtonContainer onClick={() => addItem(item)} inverted>
        Add To Cart
      </AddButtonContainer>
    </CollectionItemContainer>
  )
}


const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)