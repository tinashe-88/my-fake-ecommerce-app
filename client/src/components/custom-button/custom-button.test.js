import React from 'react'
import { shallow } from 'enzyme'

import { CustomButton } from './custom-button'

it('Should render CustomButtom component', () => {
  expect(shallow(<CustomButton />)).toMatchSnapshot()
})