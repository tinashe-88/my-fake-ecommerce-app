import React from 'react'
import { shallow } from 'enzyme'

import WithSpinner from './with-spinner'
import LoadingSpinner from '../loading-spinner/loading-spinner'

describe('WithSpinner Higher Order Component', () => {
  const TestComponent = () => <div className='test' />
  const WrappedComponent = WithSpinner(TestComponent)

  describe('If loading is true', () => {
    it('Should render Spinner component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={true}/>)
      expect(wrapper.exists(LoadingSpinner)).toBe(true)
    })

    it('Should NOT render component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={true}/>)
      expect(wrapper.exists(TestComponent)).toBe(false)
    })
  })

  describe('If loading is false', () => {
    it('Should render component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false}/>)
      expect(wrapper.exists(TestComponent)).toBe(true)
    })

    it('Should NOT render Spinner', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false}/>)
      expect(wrapper.exists(LoadingSpinner)).toBe(false)
    })
  })
})