import React from 'react'
import { shallow } from 'enzyme'

import { CollectionPage } from './collection'
import CollectionItem from '../../components/collection-item/collection-item'

describe('', () => {
  let wrapper
  let mockItems = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ]

  beforeEach(() => {
    const mockCollection = {
      items: mockItems,
      title: 'Collection Test'
    }

    wrapper = shallow(<CollectionPage collection={mockCollection}/>)
  })

  it('Should render the CollectionPage component', () => {
    expect(wrapper.find('CollectionPage')).toMatchSnapshot()
  })

  it('Should render the same amount of CollectionItem as the collection array', () => {
    expect(wrapper.find(CollectionItem).length).toBe(mockItems.length)
  })
})