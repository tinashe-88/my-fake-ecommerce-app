import React from 'react'
import { shallow } from 'enzyme'

import { CheckoutItem } from './checkout-item'

describe('CheckoutItem component', () => {
  let wrapper
  let mockClearItem
  let mockAddItem
  let mockRemoveItem

  beforeEach(() => {
    mockClearItem = jest.fn()
    mockAddItem = jest.fn()
    mockRemoveItem = jest.fn()

    const mockProps = {
      cartItem: {
        imageUrl: 'www.images.com',
        price: 344,
        name: 'jackets',
        quantity: 4
      },
      clearItem: mockClearItem,
      addItem: mockAddItem,
      removeItem: mockRemoveItem,
    }

    wrapper = shallow(<CheckoutItem {...mockProps}/>)
  })

  it('Should render CheckoutItem component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should call clearItem when RemoveButtonContainer button is clicked', () => {
    wrapper.find('RemoveButtonContainer').simulate('click')
    expect(mockClearItem).toHaveBeenCalled()
  })

  it('Should call removeItem when MinusSignContainer button is clicked', () => {
    wrapper.find('MinusSignContainer').simulate('click')
    expect(mockRemoveItem).toHaveBeenCalled()
  })

  it('Should call addItem when PlusSignContainer button is clicked', () => {
    wrapper.find('PlusSignContainer').simulate('click')
    expect(mockAddItem).toHaveBeenCalled()
  })
})
