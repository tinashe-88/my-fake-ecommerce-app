import React from 'react'
import { shallow } from 'enzyme'

import { CollectionItem } from './collection-item'

describe('', () => {
  let wrapper
  let mockAddItem

  const imageUrl = 'www.imageUrl.com'
  const mockName = 'blue briefs'
  const mockPrice = 240

  beforeEach(() => {
    mockAddItem = jest.fn()

    const mockProps = {
      item: {
        imageUrl: imageUrl,
        name: mockName,
        price: mockPrice
      },
      addItem: mockAddItem
    }

    wrapper = shallow(<CollectionItem {...mockProps}/>)
  })

  it('Should render CollectionItem component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should render imageUrl as a prop in ImageContainer', () => {
    expect(wrapper.find('ImageContainer').prop('imageUrl')).toBe(imageUrl)
  })

  it('Should call addItem when AddButtonContainer is clicked', () => {
    wrapper.find('AddButtonContainer').simulate('click')
    expect(mockAddItem).toHaveBeenCalled()
  })

  it('Should render name prop in NameContainer', () => {
    expect(wrapper.find('NameContainer').text()).toBe(mockName)
  })

  it('Should render price prop in PriceContainer', () => {
    const price = parseInt(wrapper.find('PriceContainer').text())
    expect(price).toBe(mockPrice)
  })
})