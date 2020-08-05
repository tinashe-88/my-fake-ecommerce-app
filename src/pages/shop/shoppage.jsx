import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { 
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'

import { updateCollections } from '../../redux/shop/shop.actions'

import CollectionPage from '../collection/collection'

import CollectionsOverview from '../../components/collections-overview/collections-overview'

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null

  componentDidMount(){
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)

    })
  }

  render(){
    const { match } = this.props
    return (
      <>
        <Route 
          exact 
          path={`${match.path}`} 
          component={CollectionsOverview}
        />
        <Route 
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(
    updateCollections(collectionsMap)
  )
})

export default connect(null, mapDispatchToProps)(ShopPage)