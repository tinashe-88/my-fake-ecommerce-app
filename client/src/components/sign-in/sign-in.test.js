import React from 'react'
import { shallow } from 'enzyme'

import { SignIn } from './sign-in'

it('Should render SignIn component', () => {
  expect(shallow(<SignIn />)).toMatchSnapshot()
})