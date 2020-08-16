import React, { useEffect, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import LoadingSpinner from '../../components/loading-spinner/loading-spinner'

import { ShopPageContainer } from './shoppage.styles'

const CollectionPageContainer = lazy(() => 
  import('../../pages/collection/collection.container')
)
const CollectionsOverviewContainer = lazy(() => 
  import('../../components/collections-overview/collections-overview')
)

export const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => { 
    fetchCollectionsStart()
  }, [fetchCollectionsStart])
   
  return (
    <ShopPageContainer>
      <Suspense fallback={<LoadingSpinner />}>
        <Route 
          exact 
          path={`${match.path}`} 
          component={CollectionsOverviewContainer}
        />
        <Route 
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </ShopPageContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)