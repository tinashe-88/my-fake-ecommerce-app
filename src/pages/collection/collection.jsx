import React from 'react'
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selector'

import CollectionItem from '../../components/collection-item/collection-item'

import {
  CollectionPageContainer,
  TitleText,
  ItemsContainer
} from './collection.styles'

const CollectionPage = ({ collection }) => {
  const { items, title } = collection
  return (
    <CollectionPageContainer>
    <TitleText>{title}</TitleText>
      <ItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  )
}

// Special selector that needs a part of state depending on URL param
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
