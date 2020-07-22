import React, { useState } from 'react'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import {
  SignInContainer,
  SignInTitle,
  SignInText,
  ButtonsBarContainer
} from './sign-in.styles'

const SignIn = () => {
  const [userCredentials, setUserCredntials] = useState({
    email: '',
    password: ''
  })

  const { email, password } = userCredentials

  const handleSubmit = e => {
    e.preventDefault()

    this.setState({
      email: '',
      password: ''
    })
  }

  const handleChange = e => {
    const { value, name } = e.target

    setUserCredntials({...userCredentials, [name]: value})
  }

  return (
    <SignInContainer>
      <SignInTitle>Already have an account?</SignInTitle>
      <SignInText>Sign in with your credentials</SignInText>

      <form onSubmit={handleSubmit}>
        <FormInput 
          name='email'
          type='email'
          value={email}
          onChange={handleChange}
          label='email'
          required 
        />
        <FormInput 
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          label='password'
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit' value='Submit form'>
            Sign In
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
}

export default SignIn