import React from 'react'
import { shallow } from 'enzyme'
import CartItem from './cart-item'

it('Should render CartItem component', () => {
  const mockItem = {
    imageUrl: 'www.images.com',
    price: 1873,
    name: 'sneakers',
    quantity: 3
  }

  expect(shallow(<CartItem item={mockItem}/>)).toMatchSnapshot()
})