import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shoppage'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

import Header from './components/header/header'

import './App.css'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </>
  )
}

export default App