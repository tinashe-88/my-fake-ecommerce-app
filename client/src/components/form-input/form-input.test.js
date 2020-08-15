import React from 'react'
import { shallow } from 'enzyme'

import { FormInput } from './form-input'

describe('FormInput component', () => {
  let wrapper
  let mockHandleChange

  beforeEach(() => {
    mockHandleChange = jest.fn()

    const mockProps = {
      label: 'email',
      value: '123@email.com',
      handleChange: mockHandleChange
    }
    
    wrapper = shallow(<FormInput {...mockProps}/>)
  })

  it('Should render FormInput component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should call handleChange method when the input changes', () => {
    wrapper.find('FormInputContainer').simulate('change')
    expect(mockHandleChange).toHaveBeenCalled()
  })

  it('Should render FormInputLabel if a label exists', () => {
    expect(wrapper.exists('FormInputLabel')).toBe(true)
  })

  it('Should NOT render FormInputLabel if no label exists', () => {
    const mockNewProps = {
      label: '',
      value: '123@email.com',
      handleChange: mockHandleChange
    }

    const newWrapper = shallow(<FormInput {...mockNewProps}/>)

    expect(newWrapper.exists('FormInputLabel')).toBe(false)
  })
})