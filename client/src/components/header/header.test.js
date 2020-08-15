import React from 'react'
import { shallow } from 'enzyme'

import { Header } from './header'
import CartDropdown from '../cart-dropdown/cart-dropdown.jsx'

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

  describe('If currentUser is null', () => {
    it('Should render sign-in link', () => {
      const mockProps = {
        hidden: true,
        currentUser: null,
        signOutStart: mockSignOutStart
      }

      const newWrapper = shallow(<Header {...mockProps}/>)

      expect(newWrapper.find('OptionLink').at(2).text()).toBe('Sign In')
    })
  })

  describe('If hidden is true', () => {
    it('Should NOT render CartDropdown component', () => {
      expect(wrapper.exists(CartDropdown)).toBe(false)
    })
  })

  describe('If currentUser is null', () => {
    it('Should render CartDropdown', () => {
      const mockProps = {
        hidden: false,
        currentUser: null,
        signOutStart: mockSignOutStart
      }

      const newWrapper = shallow(<Header {...mockProps}/>)

      expect(newWrapper.exists(CartDropdown)).toBe(true)
    })
  })
})