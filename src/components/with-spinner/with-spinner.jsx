import React from 'react'

import LoadingSpinner from '../loading-spinner/loading-spinner'

// Higher Order Component
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <LoadingSpinner/>
  ) : (
    <WrappedComponent { ...otherProps } />
  )
}

export default WithSpinner