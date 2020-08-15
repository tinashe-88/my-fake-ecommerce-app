import React from 'react'
import { shallow } from 'enzyme'

import { CollectionPreview } from './collection-preview'

describe('CollectionPreview component', () => {
  let wrapper
  let mockMatch
  let mockHistory
  const mockRouteName = 'jackets'

  beforeEach(() => {
    mockMatch = {
      path: '/shop'
    }

    mockHistory = {
      push: jest.fn()
    }

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      routeName: mockRouteName,
      title: 'jackets',
      items: []
    }

    wrapper = shallow(<CollectionPreview {...mockProps}/>)
  })

  it('Should render CollectionPreview component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should call history,push when the correct string in TitleContainer is clicked', () => {
    wrapper.find('TitleContainer').simulate('click')
    expect(mockHistory.push).toHaveBeenCalledWith(
      `${mockMatch.path}/${mockRouteName}`
    )
  })
})