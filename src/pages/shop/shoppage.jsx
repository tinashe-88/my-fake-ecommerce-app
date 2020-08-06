import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'

import CollectionPage from '../collection/collection'

import CollectionsOverview from '../../components/collections-overview/collections-overview'
import WithSpinner from '../../components/with-spinner/with-spinner'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  componentDidMount(){
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render(){
    const { match, isCollectionFetching } = this.props

    return (
      <>
        <Route 
          exact 
          path={`${match.path}`} 
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>
          )}
        />
        <Route 
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionsPageWithSpinner isLoading={isCollectionFetching} {...props}/>
          )}
        />
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)