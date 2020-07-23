import React from 'react'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import {
  auth, createUserProfileDocument
} from '../../firebase/firebase.utils'

import {
  SignUpContainer,
  SignUpTitle
} from './sign-up.styles'

class SignUp extends React.Component {
  constructor(){
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
      this.setState({
        [name]: value
      })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const {
      displayName,
      email,
      password,
      confirmPassword
    } = this.state

    if(password !== confirmPassword){
      alert('Passwords do not match. Please try again')
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email, password
      )

      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch(err){
      console.error(err)
    }
  }

  render(){
    const { displayName, email, password, confirmPassword} = this.state
    return (
      <SignUpContainer>
        <SignUpTitle>Don't have a account?</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    )
  }
}

export default SignUp