import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'

import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'

import {
  HeaderContainer,
  OptionsContainer
} from './header.styles'

import {
  ReactComponent as Logo
} from '../../assets/fake-logo.svg'

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <Link 
      to='/'
      className='logo-container'
    >
      <Logo />
    </Link>
    <OptionsContainer>
      <Link 
        to='/shop'
        className='option'
      >
        Shop
      </Link>
      <Link 
        to='/contact'
        className='option'
      >
        Contact
      </Link>
      {
        currentUser ? (
          <div 
            className='option'
            onClick={() => auth.signOut()}
          >
            Sign Out
          </div>
        ) : (
          <Link 
            to='/signin'
            className='option'
          >
            Sign In
          </Link>
        )  
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown/>
    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)