import React from 'react'
import { shallow } from 'enzyme'

import { Footer } from './footer'

it('Should render Footer component', () => {
  expect(shallow(<Footer />)).toMatchSnapshot()
})