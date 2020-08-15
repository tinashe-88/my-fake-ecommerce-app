import React from 'react'
import { shallow } from 'enzyme'

import { Directory } from './directory-menu'

it('Should render the Directory component', () => {
  expect(shallow(<Directory sections={[]}/>)).toMatchSnapshot()
})