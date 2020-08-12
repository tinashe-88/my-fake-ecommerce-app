import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { signOutStart } from '../../redux/user/user.actions'

import {
  HeaderContainer,
  OptionsContainer,
  SignOutContainer,
  OptionLink,
  LogoContainer,
} from './header.styles'

import {
  ReactComponent as Logo
} from '../../assets/fake-logo.svg'

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer
      to='/'
      className='logo-container'
    >
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink 
        to='/shop'
        className='option'
      >
        Shop
      </OptionLink>
      <OptionLink 
        to='/contact'
        className='option'
      >
        Contact
      </OptionLink>
      {
        currentUser ? (
          <SignOutContainer
            className='option'
            onClick={signOutStart}
          >
            Sign Out
          </SignOutContainer>
        ) : (
          <OptionLink 
            to='/signin'
            className='option'
          >
            Sign In
          </OptionLink>
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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Header)