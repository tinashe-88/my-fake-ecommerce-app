import React from 'react'
import { shallow } from 'enzyme'

import { CheckoutPage } from './checkout'

describe('CheckoutPage Component', () => {
  let wrapper

  beforeEach(() => {
    const mockProps = {
      cartItems: [],
      total: 390
    }

    wrapper = shallow(<CheckoutPage {...mockProps}/>)
  })

  it('Should render CheckoutPage component', () => {
    expect(wrapper).toMatchSnapshot()
  })
});
