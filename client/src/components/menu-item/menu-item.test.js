import React from 'react'
import { shallow } from 'enzyme'

import { MenuItem } from './menu-item'

describe('MenuItem component', () => {
  let wrapper
  let mockMatch
  let mockHistory

  const linkUrl = '/jackets'
  const size = 'large'
  const imageUrl = 'image'

  beforeEach(() => {
    mockMatch = {
      url: '/shop'
    }

    mockHistory = {
      push: jest.fn()
    }

    const mockProps = {
      title: 'jackets',
      imageUrl: imageUrl, 
      size, 
      history: mockHistory, 
      linkUrl, 
      match: mockMatch
    }

    wrapper = shallow(<MenuItem {...mockProps}/>)
  })

  it('Should render MenuItem component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should call history.push with the correct string when MenuItemContainer is clicked', () => {
    wrapper.find('MenuItemContainer').simulate('click')
    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`)
  })

  it('Should pass size to MenuItemContainer as the prop size', () => {
    expect(wrapper.find('MenuItemContainer').prop('size')).toBe(size)
  })

  it('Should pass imageUrl to BackgroundImage as the prop imageUrl', () => {
    expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe(imageUrl)
  })
})