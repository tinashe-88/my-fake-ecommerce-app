import React from 'react'
import { shallow } from 'enzyme'
import { CartIcon } from './cart-icon'

describe('CartIcon Component', () => {
  let wrapper
  let mockToggleCartHidden

  beforeEach(() => {
    mockToggleCartHidden = jest.fn()

    const mockProps = {
      itemQuantity: 0,
      toggleCartHidden: mockToggleCartHidden
    }

    wrapper = shallow(<CartIcon {...mockProps}/>)
  })

  it('Should render CartIcon component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call toggleCartHidden when icon is clicked', () => {
    wrapper.find('CartIconContainer').simulate('click')
    expect(mockToggleCartHidden).toHaveBeenCalled()
  })

  it('should render the itemQuantity as the text', () => {
    const itemQuantity = parseInt(wrapper.find('ItemCountContainer').text())
    expect(itemQuantity).toBe(0)
  })
})