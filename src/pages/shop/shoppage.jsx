import React from 'react'
import { Route } from 'react-router-dom'

import { 
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'

import CollectionPage from '../collection/collection'

import CollectionsOverview from '../../components/collections-overview/collections-overview'

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null

  componentDidMount(){
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      convertCollectionsSnapshotToMap(snapshot)
    })
  }

  render(){
    const { match } = this.props
    return (
      <>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route 
          path={`${match.path}/:collectionId`} 
          component={CollectionPage}
        />
      </>
    )
  }
}

export default ShopPage