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
  OptionLink,
  LogoContainer,
} from './header.styles'

import {
  ReactComponent as Logo
} from '../../assets/fake-logo.svg'

export const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer
      to='/'
    >
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink 
        to='/shop'
      >
        Shop
      </OptionLink>
      <OptionLink 
        to='/contact'
      >
        Contact
      </OptionLink>
      {
        currentUser ? (
          <OptionLink
            as='div'
            onClick={signOutStart}
          >
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink 
            to='/signin'
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