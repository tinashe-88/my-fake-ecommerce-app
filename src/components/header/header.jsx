import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/firebase.utils'

import {
  ReactComponent as Logo
} from '../../assets/fake-logo.svg'

import {
  HeaderContainer,
  OptionsContainer
} from './header.styles'

const Header = ({ currentUser }) => (
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
    
    </OptionsContainer>
  </HeaderContainer>
)

export default Header