import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySection } from '../../redux/directory/directory.selector'

import MenuItem from '../menu-item/menu-item'


import { DirectoryMenuContainer } from './directory-menu.styles'

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem 
        key={id} 
        {...otherProps}
      />
    ))}
  </DirectoryMenuContainer>
)
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})
export default connect(mapStateToProps)(Directory)