import React from 'react'
import { shallow } from 'enzyme'

import { CollectionsOverview } from './collections-overview'

it('Should render the CollectionsOverview component', () => {
  expect(shallow(<CollectionsOverview collections={[]}/>)).toMatchSnapshot()
})