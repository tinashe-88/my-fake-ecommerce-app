import React, { useEffect, lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.actions'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import LoadingSpinner from './components/loading-spinner/loading-spinner'

import { GlobalStyle } from './globalStyles'

const HomePage = lazy(() => import('./pages/homepage/homepage'))
const ShopPage = lazy(() => import('./pages/shop/shoppage')) 
const SignInAndSignUpPage = lazy(() => 
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up')
)
const ContactPage = lazy(() => import('./pages/contact/contact'))
const CheckOutPage = lazy(() => import('./pages/checkout/checkout'))

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])
  
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Switch>
        <Suspense fallback={<LoadingSpinner/>}>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route path='/checkout' component={CheckOutPage}/>
          <Route exact path='/signin' render={() => currentUser ? (
            <Redirect to='/'/>
          ) : (
            <SignInAndSignUpPage />
          )}/>
        </Suspense>
      </Switch>
      <Footer/>
    </>
  )
  
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