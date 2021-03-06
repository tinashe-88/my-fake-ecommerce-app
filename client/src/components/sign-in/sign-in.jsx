import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import { 
  googleSignInStart, 
  emailSignInStart 
} from '../../redux/user/user.actions'


import {
  SignInContainer,
  SignInTitle,
  SignInText,
  ButtonsBarContainer
} from './sign-in.styles'

export const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: ''})
  const { email, password } = userCredentials  
  
  const handleSubmit = async event => {
    event.preventDefault()
    
    emailSignInStart(email, password)
  }

  const handleChange = event => {
    const { value, name } = event.target

    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <SignInText>Sign in with your email and password</SignInText>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton 
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Google Sign In
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(
    emailSignInStart({
      email, password
    })
  )
})

export default connect(null, mapDispatchToProps)(SignIn)