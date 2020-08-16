import React from 'react'
import { shallow } from 'enzyme'

import ContactPage from './contact'

it('should render Homepage component', () => {
  expect(shallow(<ContactPage />)).toMatchSnapshot()
})