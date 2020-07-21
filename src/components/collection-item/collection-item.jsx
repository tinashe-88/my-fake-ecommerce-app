import React from 'react'

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './collection-item.styles'

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <CollectionItemContainer>
    <BackgroundImage
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <CollectionFooterContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>{price}</PriceContainer>
    </CollectionFooterContainer>
  </CollectionItemContainer>
)

export default CollectionItem