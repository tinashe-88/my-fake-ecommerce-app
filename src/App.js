import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.actions'

import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shoppage'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import ContactPage from './pages/contact/contact'
import CheckOutPage from './pages/checkout/checkout'

import Header from './components/header/header'

import './App.css'

class App extends React.Component {
  
  unsubscribeFromAuth = null

  componentDidMount(){
    
    const { checkUserSession } = this.props
    checkUserSession()
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    const { currentUser } = this.props
    return (
      <>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route path='/checkout' component={CheckOutPage}/>
          <Route exact path='/signin' render={() => currentUser ? (
            <Redirect to='/'/>
          ) : (
            <SignInAndSignUpPage />
          )}/>
        </Switch>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)