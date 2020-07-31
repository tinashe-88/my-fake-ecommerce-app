import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../../components/collection-preview/collection-preview'

import { selectCollections } from '../../redux/shop/shop.selector'

const ShopPage = ({ collections }) => (
  <>
    {
      collections.map(({ id, ...otherProps}) => (
        <CollectionPreview 
          key={id}
          {...otherProps}
        />
      ))
    }
  </>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)