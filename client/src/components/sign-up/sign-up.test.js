import React from 'react'
import { shallow } from 'enzyme'

import { SignUp } from './sign-up'

it('Should render SignUp component', () => {
  expect(shallow(<SignUp />)).toMatchSnapshot()
})