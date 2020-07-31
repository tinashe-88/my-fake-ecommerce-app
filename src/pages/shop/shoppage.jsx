import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview'

const ShopPage = ({ match }) => (
  <>
    <Route exact path={`${match.path}`} component={CollectionsOverview}/>
  </>
)

export default ShopPage