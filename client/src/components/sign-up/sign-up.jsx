import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import { signUpStart } from '../../redux/user/user.actions'

import {
  SignUpContainer,
  SignUpTitle
} from './sign-up.styles'

export const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const { 
    displayName, 
    email, 
    password, 
    confirmPassword
  } = userCredentials

  const handleChange = (e) => {
    const { name, value } = e.target
    
    setUserCredentials({
      ...userCredentials,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(password !== confirmPassword){
      alert('Passwords do not match. Please try again')
      return
    }

    signUpStart({ displayName, email, password })
  }

  return (
    <SignUpContainer>
      <SignUpTitle>Don't have a account?</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(
  null, 
  mapDispatchToProps
)(SignUp)