import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'

import CollectionPageContainer from '../../pages/collection/collection.container'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview'

class ShopPage extends React.Component {
  componentDidMount(){
    const { fetchCollectionsStartAsync } = this.props

    fetchCollectionsStartAsync()
  }

  render(){
    const { match } = this.props

    return (
      <>
        <Route 
          exact 
          path={`${match.path}`} 
          component={CollectionsOverviewContainer}
        />
        <Route 
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage)