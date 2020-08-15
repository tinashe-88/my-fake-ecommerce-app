import React from 'react'
import { shallow } from 'enzyme'

import { Header } from './header'
import { CartDropdown } from '../cart-dropdown/cart-dropdown.jsx'

describe('Header component', () => {
  let wrapper
  let mockSignOutStart

  beforeEach(() => {
    mockSignOutStart = jest.fn()

    const mockProps = {
      hidden: true,
      currentUser: {
        uid: '332'
      },
      signOutStart: mockSignOutStart
    }

    wrapper = shallow(<Header {...mockProps}/>)
  })

  it('Should render Header component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('If currentUser is present', () => {
    it('Should render signout link', () => {
      expect(
        wrapper.find('OptionLink').at(2).text()
      ).toBe('Sign Out')
    })

    it('Should call signOutStart method when link is clicked', () => {
      wrapper.find('OptionLink').at(2).simulate('click')
      expect(mockSignOutStart).toHaveBeenCalled()
    })
  })
})