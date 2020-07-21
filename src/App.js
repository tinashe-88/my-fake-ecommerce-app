import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shoppage'

import './App.css'

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </>
  )
}

export default App